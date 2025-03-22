/**
 * Vike Server Standalone Externals Plugin
 *
 * This plugin efficiently handles dependencies for standalone server builds using these rules:
 *
 * 1. VERSION-BASED HOISTING:
 *    - If a package has ONLY ONE version across the entire dependency tree, hoist it to node_modules/[packageName]
 *    - If a package has MULTIPLE versions, preserve each version's original path structure
 *    - This rule applies universally, even to packages inside workspace packages or nested dependencies
 *
 * 2. WORKSPACE PACKAGE MAPPING:
 *    - Move workspace packages (those not in node_modules) to node_modules/[packageName]
 *    - Preserve their internal file structure
 *
 * The result is a minimal, correctly resolved dependency tree that maintains Node.js module resolution
 * compatibility while avoiding unnecessary duplication.
 */
import { searchForWorkspaceRoot, type Plugin } from "vite";
import { getVikeConfig } from "vike/plugin";
import path from "node:path";
import fs from "node:fs/promises";
import { nodeFileTrace } from "@vercel/nft";
import pLimit from "p-limit";

// Default external packages that should not be bundled
const DEFAULT_EXTERNALS = ["@node-rs/argon2", "@prisma/client", "sharp"];

/**
 * Package information collected during analysis phase
 */
interface PackageInfo {
  /** Map of package name to number of versions found */
  versionCounts: Map<string, number>;
  /** Map of directory path to package name (for workspace packages) */
  workspacePackages: Map<string, string>;
}

/**
 * Assert helper for internal errors
 * @param condition - Condition to check
 * @throws Error if condition is falsy
 */
function assert(condition: unknown): asserts condition {
  if (condition) return;
  throw new Error(
    "You stumbled upon a bug in vike-server-externals's source code. Please report this issue on GitHub."
  );
}

/**
 * Assert helper for usage errors
 * @param condition - Condition to check
 * @param message - Error message to display
 * @throws Error if condition is falsy
 */
function assertUsage(condition: unknown, message: string): asserts condition {
  if (condition) return;
  throw new Error(`[vike-server-externals][Wrong Usage] ${message}`);
}

/**
 * Converts a path to POSIX format for cross-platform compatibility
 * @param filePath - Path to convert
 * @returns Path with forward slashes
 */
function toPosixPath(path: string): string {
  const pathPosix = path.split("\\").join("/");
  assertPosixPath(pathPosix);
  return pathPosix;
}
function assertPosixPath(path: string): void {
  assert(path !== null);
  assert(typeof path === "string");
  assert(path !== "");
  assert(path);
  assert(!path.includes("\\"));
}

/**
 * Creates the standalone externals plugin
 * @returns Vite plugin instance
 */
export function standaloneExternals(): Plugin {
  return {
    name: "vike-server-standalone-externals",
    apply: "build",
    applyToEnvironment: (env) => env.name === "ssr",

    /**
     * Configure external packages during build
     */
    config(config) {
      assert(config);

      const vikeConfig = getVikeConfig(config);
      assert(vikeConfig?.config);

      const serverConfig = vikeConfig.config.server?.[0];
      const standaloneConfig =
        typeof serverConfig === "object" && serverConfig !== null
          ? serverConfig.standalone
          : undefined;

      if (!standaloneConfig) return;

      // Get externals from config
      const configExternals =
        typeof standaloneConfig === "object" &&
        standaloneConfig.esbuild?.external instanceof Array
          ? standaloneConfig.esbuild.external
          : [];

      assert(Array.isArray(configExternals));

      return {
        ssr: {
          external: [...DEFAULT_EXTERNALS, ...configExternals],
          optimizeDeps: { exclude: [...DEFAULT_EXTERNALS, ...configExternals] },
        },
      };
    },

    enforce: "post",
    closeBundle: {
      sequential: true,
      order: "post",
      async handler() {
        const config = this.environment.config;
        assert(config?.root && config?.build?.outDir);

        const root = toPosixPath(config.root);
        const outDir = toPosixPath(config.build.outDir);
        const outDirAbs = path.isAbsolute(outDir)
          ? outDir
          : path.join(root, outDir);

        // Find standalone output files
        const files = await fs.readdir(outDirAbs);
        const standaloneFiles = files
          .filter((file) => file.includes(".standalone."))
          .map((file) => path.join(outDirAbs, file));

        if (standaloneFiles.length === 0) return;

        await processStandalone(standaloneFiles, root, outDirAbs);
      },
    },
  };
}

/**
 * Main function to process standalone build files
 * @param standaloneFiles - List of entry files
 * @param root - Project root directory
 * @param outDirAbs - Absolute path to output directory
 */
async function processStandalone(
  standaloneFiles: string[],
  root: string,
  outDirAbs: string
): Promise<void> {
  assert(Array.isArray(standaloneFiles));
  assert(standaloneFiles.every((file) => typeof file === "string"));
  assert(typeof root === "string");
  assert(typeof outDirAbs === "string");

  console.log("Processing standalone build dependencies...");

  // Skip yarn PnP
  if (isYarnPnP()) {
    console.warn("Yarn PnP is not supported for standalone builds.");
    return;
  }

  const workspaceRoot = toPosixPath(searchForWorkspaceRoot(root));

  // Step 1: Trace dependencies
  const dependencies = await traceDependencies(
    standaloneFiles,
    workspaceRoot,
    outDirAbs
  );
  if (dependencies.length === 0) return;

  // Step 2: Analyze packages and count versions
  const packageInfo = await analyzePackages(dependencies, workspaceRoot);
  assert(packageInfo?.versionCounts instanceof Map);
  assert(packageInfo?.workspacePackages instanceof Map);

  // Step 3: Copy dependencies with proper path mapping
  await copyDependencies(dependencies, workspaceRoot, outDirAbs, packageInfo);

  console.log("Standalone build dependencies processed successfully!");
}

/**
 * Trace all required dependencies using Vercel's NFT
 * @param entryFiles - List of entry files to trace from
 * @param workspaceRoot - Root of the workspace
 * @param outDirAbs - Output directory to exclude
 * @returns List of file paths that need to be copied
 */
async function traceDependencies(
  entryFiles: string[],
  workspaceRoot: string,
  outDirAbs: string
): Promise<string[]> {
  assert(Array.isArray(entryFiles));
  assert(entryFiles.every((file) => typeof file === "string"));
  assert(typeof workspaceRoot === "string");
  assert(typeof outDirAbs === "string");

  const result = await nodeFileTrace(entryFiles, { base: workspaceRoot });
  assert(result?.fileList && result?.reasons);

  // Calculate relative output directory path
  const relOutDir = path.relative(workspaceRoot, outDirAbs);

  // Filter relevant files and normalize paths
  const dependencies = [...result.fileList]
    .filter(
      (file) =>
        // Skip initial files, system files, and files already in output directory
        !result.reasons.get(file)?.type.includes("initial") &&
        !file.startsWith("usr/") &&
        !file.startsWith(relOutDir)
    )
    .map(toPosixPath);

  assert(Array.isArray(dependencies));
  assert(dependencies.every((dep) => typeof dep === "string"));

  console.log(`Found ${dependencies.length} dependencies to copy`);
  return dependencies;
}

/**
 * Analyze package.json files to identify versions and workspace packages
 * @param files - List of files to analyze
 * @param workspaceRoot - Root of the workspace
 * @returns Package information
 */
async function analyzePackages(
  files: string[],
  workspaceRoot: string
): Promise<PackageInfo> {
  assert(Array.isArray(files));
  assert(files.every((file) => typeof file === "string"));
  assert(typeof workspaceRoot === "string");

  const packageLocations = new Map<string, Set<string>>();
  const workspacePackages = new Map<string, string>();

  // Process all package.json files
  for (const file of files) {
    if (!file.endsWith("package.json")) continue;

    try {
      const fullPath = path.join(workspaceRoot, file);
      const content = await fs.readFile(fullPath, "utf-8");
      const pkg = JSON.parse(content);

      if (!pkg.name) continue;
      assert(typeof pkg.name === "string");

      const dir = path.dirname(file);

      // Track ALL package locations for version counting
      if (!packageLocations.has(pkg.name)) {
        packageLocations.set(pkg.name, new Set());
      }

      packageLocations.get(pkg.name)!.add(dir);

      // Track workspace packages (those outside node_modules)
      if (!file.includes("node_modules/")) {
        workspacePackages.set(dir, pkg.name);
      }
    } catch (err) {
      // Ignore invalid package.json
      console.warn(`Error processing package.json at ${file}:`, err);
    }
  }

  // Convert locations to version counts
  const versionCounts = new Map<string, number>();
  for (const [name, locations] of packageLocations.entries()) {
    versionCounts.set(name, locations.size);
  }

  return { versionCounts, workspacePackages };
}

/**
 * Copy dependencies to output directory with proper structure
 * @param files - List of files to copy
 * @param workspaceRoot - Root of the workspace
 * @param outDirAbs - Output directory
 * @param packageInfo - Package information
 */
async function copyDependencies(
  files: string[],
  workspaceRoot: string,
  outDirAbs: string,
  packageInfo: PackageInfo
): Promise<void> {
  assert(Array.isArray(files));
  assert(files.every((file) => typeof file === "string"));
  assert(typeof workspaceRoot === "string");
  assert(typeof outDirAbs === "string");
  assert(packageInfo?.versionCounts instanceof Map);
  assert(packageInfo?.workspacePackages instanceof Map);

  const limit = pLimit(10); // Limit concurrent file operations
  const processed = new Set<string>();

  await Promise.all(
    files.map((file) =>
      limit(async () => {
        try {
          const sourcePath = path.join(workspaceRoot, file);

          // Skip directories
          const stats = await fs.stat(sourcePath);
          if (stats.isDirectory()) return;

          // Map source path to destination
          const destPath = mapFilePath(file, outDirAbs, packageInfo);

          // Skip if already processed
          if (processed.has(destPath)) return;
          processed.add(destPath);

          // Copy file
          await fs.mkdir(path.dirname(destPath), { recursive: true });
          await fs.cp(sourcePath, destPath, { dereference: true });
        } catch (err) {
          console.warn(`Error copying ${file}:`, err);
        }
      })
    )
  );
}

/**
 * Map a source file path to its destination path based on hoisting rules
 * @param file - Source file path
 * @param outDirAbs - Output directory
 * @param packageInfo - Package information
 * @returns Destination path
 */
function mapFilePath(
  file: string,
  outDirAbs: string,
  packageInfo: PackageInfo
): string {
  assert(typeof file === "string");
  assert(typeof outDirAbs === "string");
  assert(packageInfo?.versionCounts instanceof Map);
  assert(packageInfo?.workspacePackages instanceof Map);

  // RULE 1: Single-version packages are hoisted (regardless of location)
  if (file.includes("node_modules/")) {
    // Extract package name from last node_modules segment
    const parts = file.split("node_modules/").filter(Boolean);
    assert(Array.isArray(parts));

    // Skip if we don't have any parts after node_modules
    if (parts.length === 0) {
      return path.join(outDirAbs, file);
    }

    const lastPart = parts[parts.length - 1];
    assert(typeof lastPart === "string");

    const packageName = extractPackageName(lastPart);

    // Only proceed if we have a valid package name and it has exactly one version
    if (packageName) {
      const versionCount = packageInfo.versionCounts.get(packageName);
      if (versionCount === 1) {
        // Single version - hoist to top-level node_modules
        const pathAfterPackage = lastPart.substring(
          lastPart.indexOf(packageName) + packageName.length
        );

        return path.join(
          outDirAbs,
          "node_modules",
          packageName,
          pathAfterPackage
        );
      }
    }
  }

  // RULE 2: Workspace packages go to node_modules/[packageName]
  const workspaceMatch = findWorkspaceMatch(
    file,
    packageInfo.workspacePackages
  );
  if (workspaceMatch) {
    assert(workspaceMatch.packageName);
    assert(typeof workspaceMatch.packageName === "string");
    assert(typeof workspaceMatch.relativePath === "string");

    return path.join(
      outDirAbs,
      "node_modules",
      workspaceMatch.packageName,
      workspaceMatch.relativePath
    );
  }

  // RULE 3: Multi-version packages preserve their structure in node_modules
  if (file.includes("node_modules/")) {
    const parts = file.split("node_modules/").filter(Boolean);
    assert(Array.isArray(parts));

    if (parts.length === 0) {
      return path.join(outDirAbs, file);
    }

    const lastPart = parts[parts.length - 1];
    assert(typeof lastPart === "string");

    return path.join(outDirAbs, "node_modules", lastPart);
  }

  // Other files - keep original path
  return path.join(outDirAbs, file);
}

/**
 * Find if a file is inside a workspace package
 * @param file - File path to check
 * @param workspacePackages - Map of workspace package paths to names
 * @returns Match information if found, null otherwise
 */
function findWorkspaceMatch(
  file: string,
  workspacePackages: Map<string, string>
): { packageName: string; relativePath: string } | null {
  assert(typeof file === "string");
  assert(workspacePackages instanceof Map);

  // Sort by length descending to match the most specific path first
  const dirs = [...workspacePackages.keys()].sort(
    (a, b) => b.length - a.length
  );
  assert(Array.isArray(dirs));

  for (const dir of dirs) {
    assert(typeof dir === "string");

    if (file === dir || file.startsWith(dir + "/")) {
      const packageName = workspacePackages.get(dir);
      if (!packageName) continue; // Skip if package name not found

      assert(typeof packageName === "string");
      const relativePath = file === dir ? "" : file.slice(dir.length + 1);

      return { packageName, relativePath };
    }
  }

  return null;
}

/**
 * Extract package name from a path
 * @param pathStr - Path to extract from
 * @returns Package name or null if not found
 */
function extractPackageName(pathStr: string): string | null {
  assert(typeof pathStr === "string");

  if (!pathStr) return null;

  const firstSlash = pathStr.indexOf("/");

  // No slash means the whole path is the package name
  if (firstSlash === -1) return pathStr;

  const firstPart = pathStr.substring(0, firstSlash);
  assert(typeof firstPart === "string");

  // Handle scoped packages (@org/name)
  if (firstPart.startsWith("@")) {
    const secondSlash = pathStr.indexOf("/", firstSlash + 1);
    if (secondSlash !== -1) {
      return pathStr.substring(0, secondSlash);
    }
  }

  return firstPart;
}

/**
 * Check if Yarn PnP is being used
 * @returns True if Yarn PnP is detected
 */
function isYarnPnP(): boolean {
  try {
    require("pnpapi");
    return true;
  } catch {
    return false;
  }
}
