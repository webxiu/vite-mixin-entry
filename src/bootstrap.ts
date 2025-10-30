import "@/style.css";

import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import { createApp } from "vue";
import { routes } from "./router/routes";

export function mount(el: HTMLElement) {
  const app = createApp(App);
  const router = createRouter({
    history: createWebHistory("/mobile"),
    routes
  });
  app.use(router);
  app.mount(el);

  // 可选：提供卸载函数
  return () => {
    app.unmount();
    el.innerHTML = "";
  };
}
