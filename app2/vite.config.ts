import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app2",
      filename: "app2.js",
      exposes: {
        "./index": "./src/views/index.vue",
        "./Button": "./src/components/Button.vue",
      },
      shared: ["vue", "vue-router"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
