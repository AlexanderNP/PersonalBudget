/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  test : { 
    environment: 'jsdom',
    globals : true,
    include: ['./src/__tests__/**/*.{test,spec}.{ts,tsx}'],
    setupFiles : './src/__tests__/setup.ts'
  }
});
