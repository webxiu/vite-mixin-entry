import { ConfigEnv, defineConfig, loadEnv } from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

interface ImportMetaEnv {
  readonly VITE_PORT: number;
  readonly VITE_BASE_API: string;
  readonly VITE_ROUTER_HISTORY: "hash" | "html5";
  readonly VITE_PUBLIC_PATH: string;
  readonly [key: string]: any;
}

export default (configEnv: ConfigEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv;
  const { VITE_PORT, VITE_BASE_URL, VITE_BASE_API, VITE_PUBLIC_PATH } = viteEnv;

  return defineConfig({
    base: VITE_PUBLIC_PATH,
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": resolve("src"),
        "@pc": resolve("src2"),
        "~": resolve("")
      },
      extensions: [".js", ".ts", ".tsx", ".jsx", ".vue"]
    },
    build: {
      emptyOutDir: true,
      outDir: "./dist",
      rollupOptions: {
        input: {
          index: resolve("index.html")
        },
        output: {
          // 按应用拆包（可选优化）
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("element-plus")) return "element-plus";
              if (id.includes("vant")) return "vant";
              if (id.includes("vue") || id.includes("@vue/")) return "vue";
              if (id.includes("axios")) return "axios";
              return "vendor";
            }
 
            // 业务代码分块
            if (id.includes('/src/')) return 'mobile';
            if (id.includes('/src2/')) return 'pc';
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    server: {
      port: VITE_PORT,
      // SPA 回退，保证 /mobile/** 和 /pc/** 都回到 index.html
      host: true,
      proxy: {
        // string shorthand
        "/foo": "http://localhost:4567/foo",
        // with options
        "/test": {
          target: "http://api.github.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        },
        [VITE_BASE_API]: {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(VITE_BASE_API, "")
        }
      }
    }
  });
};
