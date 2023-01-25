import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Temp",
      component: () => import("../views/PullTemp/TempIndexPage.vue"),
    },
    {
      path: "/dormat",
      name: "dormatTemp",
      component: () => import("../views/DormatTemp/dormatTemp.vue"),
    },
    {
      path: "/login",
      name: "LoginTemp",
      component: () => import("../views/LoginTemp/LoginTemp.vue"),
    },
    {
      path: "/ll",
      name: "test",
      component: () => import("../views/ConfirmTemp.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") {
//     next({ name: "LoginTemp" });
//   }
//   if (to.name !== "LoginTemp" && UseAuthenticated().isAuthenticated === false) {
//     next({ name: "LoginTemp" });
//   }
//   if (from.name === "Temp" && UseAuthenticated().isAuthenticated === true) {
//     next();
//   }
// });

export default router;
