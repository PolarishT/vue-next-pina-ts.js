import { createRouter, createWebHistory } from "vue-router";
import { UseAuthenticated } from "@/stores/counter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Temp",
      component: () => import("../views/TempIndexPage.vue"),
    },
    {
      path: "/login2",
      name: "dormat",
      component: () => import("../views/dormatTemp.vue"),
    },
    {
      path: "/login",
      name: "LoginTemp",
      component: () => import("../views/LoginTemp.vue"),
    },
    {
      path: "/ll",
      name: "test",
      component: () => import("../views/ConfirmTemp.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "dormat" && UseAuthenticated().isAuthenticated === false)
    next({ name: "LoginTemp" });
  else next();
});

export default router;
