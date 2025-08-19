/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // gives you expect, describe, it
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
