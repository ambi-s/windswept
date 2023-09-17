import { resolve } from "node:path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { ViteAliases } from "vite-aliases";
import checker from "vite-plugin-checker";

export default defineConfig((configEnv) => ({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: [],
  },
  esbuild: {
    jsxInject: `import jsx from "dom-chef";`,
    banner: {
      ts: "// windswept MIT License © 2023 @ambigious",
      tsx: "// windswept MIT License © 2023 @ambigious",
      css: "/* windswept MIT License © 2023 @ambigious */",
    },
    treeShaking: true,
  },
  plugins: [
    VitePWA({ registerType: "autoUpdate" }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    ViteAliases({ prefix: "@", dts: true, useConfig: true }),
  ],
}));
