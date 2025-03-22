import type { Config } from "vike/types";
import vikeServer from "vike-server/config";
import vikeServerStandaloneExternals from "vike-server-standalone-externals/config";

export default {
  extends: [vikeServer, vikeServerStandaloneExternals],
  server: {
    entry: "src/server/index.ts",
    standalone: {
      esbuild: {
        external: [
          "@node-rs/argon2",
          "lodash",
          "package1",
          "package2",
          "package3",
          "package999",
        ],
        // external: ["*"]
      },
    },
  },
} satisfies Config;
