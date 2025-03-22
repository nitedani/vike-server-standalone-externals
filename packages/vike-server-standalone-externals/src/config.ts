import type { Config } from "vike/types";
import { standaloneExternals } from "./plugin";
import "vike-server/config";

const config = {
  name: "vike-server-standalone-externals",
  vite: {
    plugins: [standaloneExternals()],
  },
  require: {
    "vike-server": "*",
  },
} satisfies Config;

export { config as default };
