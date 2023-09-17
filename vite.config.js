import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { ViteAliases } from "vite-aliases";
import checker from "vite-plugin-checker";

export default defineConfig((configEnv) => ({
  css: {
    postcss: [],
  },
  esbuild: {
    jsxInject: `import jsx from "dom-chef";`,
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
