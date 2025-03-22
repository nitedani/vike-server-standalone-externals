import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/config.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  outDir: "dist",
  platform: "node",
  target: "es2022",
  external: ["vike", "vike-server"],
});
