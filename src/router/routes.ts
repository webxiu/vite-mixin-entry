import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/admin/index.vue")
  }
];
