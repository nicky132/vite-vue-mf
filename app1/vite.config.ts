import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app1",
      filename: "app1.js",
      exposes: {
        "./index": "./src/views/index.vue",
        "./method": "./src/utils/method.ts",
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
