import "vant/lib/index.css";
import "@/styles/index.scss";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import { createApp } from "vue";
import { routes } from "./router/routes";
import Vant from "vant";

// mobile
export function mount(el: HTMLElement, baseUrl: string) {
  const app = createApp(App);
  const router = createRouter({
    history: createWebHistory(baseUrl),
    routes
  });
  app.use(router);
  app.use(Vant);
  app.mount(el);

  return () => {
    app.unmount();
    el.innerHTML = "";
  };
}
