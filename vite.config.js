// Vite configuration file for a React project
// Imports necessary plugins and functions from Vite

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vite configuration options
export default defineConfig({
  plugins: [react()], 

  base: "/avataar-ai-assignment/",  // Setting the base path for the application 

  build: {
    outDir: "docs",  // Specifying the output directory for the build
  },
});
