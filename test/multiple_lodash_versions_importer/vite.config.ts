import vike from "vike/plugin";
import type { UserConfig } from "vite";

export default {
  plugins: [vike()],
  ssr: {
    noExternal: ["vike-server"]
  }
} satisfies UserConfig;
