import "@pc/styles/index.scss";
import "element-plus/dist/index.css";

import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import { createApp } from "vue";
import { routes } from "./router/routes";
import ElementPlus from "element-plus";


export function mount(root: string) {
  const app = createApp(App);
  const router = createRouter({
    history: createWebHistory("/pc"),
    routes
  });
  app.use(router);
  app.use(ElementPlus);
  app.mount(root);

  // 可选：提供卸载函数
  return () => {
    app.unmount();
    document.getElementById(root)!.innerHTML = "";
  };
}
