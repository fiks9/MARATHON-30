import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo name on GitHub — must match the URL path served by GitHub Pages.
// Site will be available at https://<user>.github.io/<REPO_NAME>/
const REPO_NAME = "MARATHON-30";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Production builds are served from a sub-path on GitHub Pages.
  // Local dev (`vite`) keeps base at "/" so it works at http://localhost:5173/.
  base: command === "build" ? `/${REPO_NAME}/` : "/",
  server: {
    port: 5173,
    open: true,
  },
}));
