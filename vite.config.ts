import { defineConfig } from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": resolve("src"),
      "@pc": resolve("src2"),
      "~": resolve("")
    },
    extensions: [".js", ".ts", ".tsx", ".jsx", ".vue"]
  },
  server: {
    // SPA 回退，保证 /mobile/** 和 /pc/** 都回到 index.html
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        // 按应用拆包（可选优化）
        manualChunks(id) {
          if (id.includes("/src/")) return "mobile";
          if (id.includes("/src2/")) return "pc";
          if (id.includes("node_modules")) return "vendor";
        }
      }
    }
  }
});
