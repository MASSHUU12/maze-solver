import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import preact from "@preact/preset-vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/maze-solver",
  plugins: [preact(), tsconfigPaths(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
