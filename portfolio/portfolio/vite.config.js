import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // to deploy on github pages, add the base property with the name of the repository
  base: "/portfolio",
});
