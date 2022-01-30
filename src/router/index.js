import Vue from "vue";
import VueRouter from "vue-router";
import adminRoutes from "@/router/admin.router.js";

Vue.use(VueRouter);
const routes = [
  {
    path: "*",
    hidden: true,
    component: () => import("../views/NotFoundView"),
  },

  {
    path: "/",
    name: "MainPage",
    component: () => import("../views/MainPageView"),
    hidden: true,
  },

  ...adminRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
