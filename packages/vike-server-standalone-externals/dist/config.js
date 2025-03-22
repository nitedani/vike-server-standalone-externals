var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/plugin.ts
import { searchForWorkspaceRoot } from "vite";
import { getVikeConfig } from "vike/plugin";
import path from "node:path";
import fs from "node:fs/promises";
import { nodeFileTrace } from "@vercel/nft";

// ../../node_modules/yocto-queue/index.js
var Node = class {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
};
var Queue = class {
  #head;
  #tail;
  #size;
  constructor() {
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.#head) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }
    this.#size++;
  }
  dequeue() {
    const current = this.#head;
    if (!current) {
      return;
    }
    this.#head = this.#head.next;
    this.#size--;
    return current.value;
  }
  peek() {
    if (!this.#head) {
      return;
    }
    return this.#head.value;
  }
  clear() {
    this.#head = void 0;
    this.#tail = void 0;
    this.#size = 0;
  }
  get size() {
    return this.#size;
  }
  *[Symbol.iterator]() {
    let current = this.#head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
  *drain() {
    while (this.#head) {
      yield this.dequeue();
    }
  }
};

// ../../node_modules/p-limit/index.js
function pLimit(concurrency) {
  validateConcurrency(concurrency);
  const queue = new Queue();
  let activeCount = 0;
  const resumeNext = () => {
    if (activeCount < concurrency && queue.size > 0) {
      queue.dequeue()();
      activeCount++;
    }
  };
  const next = () => {
    activeCount--;
    resumeNext();
  };
  const run = async (function_, resolve, arguments_) => {
    const result = (async () => function_(...arguments_))();
    resolve(result);
    try {
      await result;
    } catch {
    }
    next();
  };
  const enqueue = (function_, resolve, arguments_) => {
    new Promise((internalResolve) => {
      queue.enqueue(internalResolve);
    }).then(
      run.bind(void 0, function_, resolve, arguments_)
    );
    (async () => {
      await Promise.resolve();
      if (activeCount < concurrency) {
        resumeNext();
      }
    })();
  };
  const generator = (function_, ...arguments_) => new Promise((resolve) => {
    enqueue(function_, resolve, arguments_);
  });
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value() {
        queue.clear();
      }
    },
    concurrency: {
      get: () => concurrency,
      set(newConcurrency) {
        validateConcurrency(newConcurrency);
        concurrency = newConcurrency;
        queueMicrotask(() => {
          while (activeCount < concurrency && queue.size > 0) {
            resumeNext();
          }
        });
      }
    }
  });
  return generator;
}
function validateConcurrency(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
}

// src/plugin.ts
var DEFAULT_EXTERNALS = ["@node-rs/argon2", "@prisma/client", "sharp"];
function assert(condition) {
  if (condition) return;
  throw new Error(
    "You stumbled upon a bug in vike-server-externals's source code. Please report this issue on GitHub."
  );
}
function toPosixPath(path2) {
  const pathPosix = path2.split("\\").join("/");
  assertPosixPath(pathPosix);
  return pathPosix;
}
function assertPosixPath(path2) {
  assert(path2 !== null);
  assert(typeof path2 === "string");
  assert(path2 !== "");
  assert(path2);
  assert(!path2.includes("\\"));
}
function standaloneExternals() {
  return {
    name: "vike-server-standalone-externals",
    apply: "build",
    applyToEnvironment: (env) => env.name === "ssr",
    /**
     * Configure external packages during build
     */
    config(config2) {
      assert(config2);
      const vikeConfig = getVikeConfig(config2);
      assert(vikeConfig?.config);
      const serverConfig = vikeConfig.config.server?.[0];
      const standaloneConfig = typeof serverConfig === "object" && serverConfig !== null ? serverConfig.standalone : void 0;
      if (!standaloneConfig) return;
      const configExternals = typeof standaloneConfig === "object" && standaloneConfig.esbuild?.external instanceof Array ? standaloneConfig.esbuild.external : [];
      assert(Array.isArray(configExternals));
      return {
        ssr: {
          external: [...DEFAULT_EXTERNALS, ...configExternals],
          optimizeDeps: { exclude: [...DEFAULT_EXTERNALS, ...configExternals] }
        }
      };
    },
    enforce: "post",
    closeBundle: {
      sequential: true,
      order: "post",
      async handler() {
        const config2 = this.environment.config;
        assert(config2?.root && config2?.build?.outDir);
        const root = toPosixPath(config2.root);
        const outDir = toPosixPath(config2.build.outDir);
        const outDirAbs = path.isAbsolute(outDir) ? outDir : path.join(root, outDir);
        const files = await fs.readdir(outDirAbs);
        const standaloneFiles = files.filter((file) => file.includes(".standalone.")).map((file) => path.join(outDirAbs, file));
        if (standaloneFiles.length === 0) return;
        await processStandalone(standaloneFiles, root, outDirAbs);
      }
    }
  };
}
async function processStandalone(standaloneFiles, root, outDirAbs) {
  assert(Array.isArray(standaloneFiles));
  assert(standaloneFiles.every((file) => typeof file === "string"));
  assert(typeof root === "string");
  assert(typeof outDirAbs === "string");
  console.log("Processing standalone build dependencies...");
  if (isYarnPnP()) {
    console.warn("Yarn PnP is not supported for standalone builds.");
    return;
  }
  const workspaceRoot = toPosixPath(searchForWorkspaceRoot(root));
  const { dependencies, dependencyInfo } = await traceDependencies(
    standaloneFiles,
    workspaceRoot,
    outDirAbs
  );
  if (dependencies.length === 0) return;
  const packageInfo = await analyzePackages(dependencies, workspaceRoot);
  assert(packageInfo?.versionCounts instanceof Map);
  assert(packageInfo?.workspacePackages instanceof Map);
  await copyDependencies(
    dependencies,
    workspaceRoot,
    outDirAbs,
    packageInfo,
    dependencyInfo
  );
  console.log("Standalone build dependencies processed successfully!");
}
async function traceDependencies(entryFiles, workspaceRoot, outDirAbs) {
  assert(Array.isArray(entryFiles));
  assert(entryFiles.every((file) => typeof file === "string"));
  assert(typeof workspaceRoot === "string");
  assert(typeof outDirAbs === "string");
  const result = await nodeFileTrace(entryFiles, { base: workspaceRoot });
  assert(result?.fileList && result?.reasons);
  const relOutDir = path.relative(workspaceRoot, outDirAbs);
  const dependencies = [...result.fileList].filter(
    (file) => (
      // Skip initial files, system files, and files already in output directory
      !result.reasons.get(file)?.type.includes("initial") && !file.startsWith("usr/") && !file.startsWith(relOutDir)
    )
  ).map(toPosixPath);
  assert(Array.isArray(dependencies));
  assert(dependencies.every((dep) => typeof dep === "string"));
  const dependencyInfo = buildDependencyGraph(dependencies, result.reasons);
  console.log(`Found ${dependencies.length} dependencies to copy`);
  return { dependencies, dependencyInfo };
}
function buildDependencyGraph(files, reasons) {
  const importedBy = /* @__PURE__ */ new Map();
  const imports = /* @__PURE__ */ new Map();
  for (const file of files) {
    importedBy.set(file, /* @__PURE__ */ new Set());
    imports.set(file, /* @__PURE__ */ new Set());
  }
  for (const file of files) {
    const reason = reasons.get(file);
    if (!reason?.parents) continue;
    for (const parent of reason.parents) {
      if (!files.includes(parent)) continue;
      importedBy.get(file)?.add(parent);
      imports.get(parent)?.add(file);
    }
  }
  return { importedBy, imports };
}
async function analyzePackages(files, workspaceRoot) {
  assert(Array.isArray(files));
  assert(files.every((file) => typeof file === "string"));
  assert(typeof workspaceRoot === "string");
  const packageLocations = /* @__PURE__ */ new Map();
  const workspacePackages = /* @__PURE__ */ new Map();
  for (const file of files) {
    if (!file.endsWith("package.json")) continue;
    try {
      const fullPath = path.join(workspaceRoot, file);
      const content = await fs.readFile(fullPath, "utf-8");
      const pkg = JSON.parse(content);
      if (!pkg.name) continue;
      assert(typeof pkg.name === "string");
      const dir = path.dirname(file);
      if (!packageLocations.has(pkg.name)) {
        packageLocations.set(pkg.name, /* @__PURE__ */ new Set());
      }
      packageLocations.get(pkg.name).add(dir);
      if (!file.includes("node_modules/")) {
        workspacePackages.set(dir, pkg.name);
      }
    } catch (err) {
      console.warn(`Error processing package.json at ${file}:`, err);
    }
  }
  const versionCounts = /* @__PURE__ */ new Map();
  for (const [name, locations] of packageLocations.entries()) {
    versionCounts.set(name, locations.size);
  }
  return { versionCounts, workspacePackages };
}
async function copyDependencies(files, workspaceRoot, outDirAbs, packageInfo, dependencyInfo) {
  assert(Array.isArray(files));
  assert(files.every((file) => typeof file === "string"));
  assert(typeof workspaceRoot === "string");
  assert(typeof outDirAbs === "string");
  assert(packageInfo?.versionCounts instanceof Map);
  assert(packageInfo?.workspacePackages instanceof Map);
  const destPaths = /* @__PURE__ */ new Map();
  const relocatedFiles = /* @__PURE__ */ new Map();
  for (const file of files) {
    const destPath = mapFilePath(file, outDirAbs, packageInfo);
    destPaths.set(file, destPath);
    if (path.join(outDirAbs, file) !== destPath) {
      relocatedFiles.set(file, destPath);
    }
  }
  for (const [file, destPath] of relocatedFiles) {
    adjustPathsForRelativeImports(
      file,
      destPath,
      dependencyInfo,
      destPaths,
      workspaceRoot,
      outDirAbs
    );
  }
  const limit = pLimit(10);
  const processed = /* @__PURE__ */ new Set();
  await Promise.all(
    files.map(
      (file) => limit(async () => {
        try {
          const sourcePath = path.join(workspaceRoot, file);
          const destPath = destPaths.get(file);
          const stats = await fs.stat(sourcePath);
          if (stats.isDirectory()) return;
          if (processed.has(destPath)) return;
          processed.add(destPath);
          await fs.mkdir(path.dirname(destPath), { recursive: true });
          await fs.cp(sourcePath, destPath, { dereference: true });
        } catch (err) {
          console.warn(`Error copying ${file}:`, err);
        }
      })
    )
  );
}
function adjustPathsForRelativeImports(sourceFile, destPath, dependencyInfo, destPaths, workspaceRoot, outDirAbs) {
  const importedFiles = dependencyInfo.imports.get(sourceFile);
  if (!importedFiles || importedFiles.size === 0) return;
  const sourceDir = path.dirname(sourceFile);
  const destDir = path.dirname(destPath);
  for (const importedFile of importedFiles) {
    const relPathFromSource = path.relative(sourceDir, importedFile);
    if (relPathFromSource.startsWith("..") || relPathFromSource.startsWith(".")) {
      const newImportDest = path.join(destDir, relPathFromSource);
      const currentDest = destPaths.get(importedFile);
      if (currentDest && !currentDest.includes("/node_modules/")) {
        destPaths.set(importedFile, newImportDest);
        adjustPathsForRelativeImports(
          importedFile,
          newImportDest,
          dependencyInfo,
          destPaths,
          workspaceRoot,
          outDirAbs
        );
      }
    }
  }
}
function mapFilePath(file, outDirAbs, packageInfo) {
  assert(typeof file === "string");
  assert(typeof outDirAbs === "string");
  assert(packageInfo?.versionCounts instanceof Map);
  assert(packageInfo?.workspacePackages instanceof Map);
  if (file.includes("node_modules/")) {
    const parts = file.split("node_modules/").filter(Boolean);
    assert(Array.isArray(parts));
    if (parts.length === 0) {
      return path.join(outDirAbs, file);
    }
    const lastPart = parts[parts.length - 1];
    assert(typeof lastPart === "string");
    const packageName = extractPackageName(lastPart);
    if (packageName) {
      const versionCount = packageInfo.versionCounts.get(packageName);
      if (versionCount === 1) {
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
  return path.join(outDirAbs, file);
}
function findWorkspaceMatch(file, workspacePackages) {
  assert(typeof file === "string");
  assert(workspacePackages instanceof Map);
  const dirs = [...workspacePackages.keys()].sort(
    (a, b) => b.length - a.length
  );
  assert(Array.isArray(dirs));
  for (const dir of dirs) {
    assert(typeof dir === "string");
    if (file === dir || file.startsWith(dir + "/")) {
      const packageName = workspacePackages.get(dir);
      if (!packageName) continue;
      assert(typeof packageName === "string");
      const relativePath = file === dir ? "" : file.slice(dir.length + 1);
      return { packageName, relativePath };
    }
  }
  return null;
}
function extractPackageName(pathStr) {
  assert(typeof pathStr === "string");
  if (!pathStr) return null;
  const firstSlash = pathStr.indexOf("/");
  if (firstSlash === -1) return pathStr;
  const firstPart = pathStr.substring(0, firstSlash);
  assert(typeof firstPart === "string");
  if (firstPart.startsWith("@")) {
    const secondSlash = pathStr.indexOf("/", firstSlash + 1);
    if (secondSlash !== -1) {
      return pathStr.substring(0, secondSlash);
    }
  }
  return firstPart;
}
function isYarnPnP() {
  try {
    __require("pnpapi");
    return true;
  } catch {
    return false;
  }
}

// src/config.ts
import "vike-server/config";
var config = {
  name: "vike-server-standalone-externals",
  vite: {
    plugins: [standaloneExternals()]
  },
  require: {
    "vike-server": "*"
  }
};
export {
  config as default
};
