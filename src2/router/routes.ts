import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@pc/views/home/index.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@pc/views/admin/index.vue")
  }
];
