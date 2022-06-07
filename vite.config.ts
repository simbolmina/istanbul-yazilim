import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "https://github.com/simbolmina/istanbul-yazilim/blob/produc/vite.config.ts",
  // server: {
  //   host: true,
  // },
});
