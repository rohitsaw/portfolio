import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [svgr(), react()],
  build: {
    outDir: "build",
  },
});
