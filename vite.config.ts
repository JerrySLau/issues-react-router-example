import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    reactRouter(),
    tsconfigPaths()
  ],
});
