import "element-plus/dist/index.css";
import "@pc/styles/index.scss";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import { createApp } from "vue";
import { routes } from "./router/routes";
import ElementPlus from "element-plus";

// pc
export function mount(el: HTMLElement, baseUrl: string) {
  const app = createApp(App);
  const router = createRouter({
    history: createWebHistory(baseUrl),
    routes
  });
  app.use(ElementPlus);
  app.use(router);
  app.mount(el);

  return () => {
    app.unmount();
    el.innerHTML = "";
  };
}
