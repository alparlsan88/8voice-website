import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages için base path: alparlsan88.github.io/8voice-website
// (custom domain kullanırsan bunu "/" yap)
export default defineConfig({
  base: "/8voice-website/",
  plugins: [react(), tailwindcss()],
});
