import LoginTemp from "@/views/LoginTemp/LoginTemp.vue";
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
      path: "/table",
      name: "TableTemp",
      component: () => import("../views/TableTemp/TableTemp.vue"),
    },
    {
      path: "/t",
      name: "TaTp",
      component: () => import("../views/dbTemp/footerTemp.vue"),
    },
    {
      path: "/user",
      name: "UserTemp",
      component: () => import("../views/UserCenter/userCenter.vue"),
    },
    {
      path: "/form",
      name: "formTemp",
      component: () => import("../views/formTemp/formTemp.vue"),
    },
    {
      path: "/ft",
      name: "wTmp",
      component: () => import("../views/LoginTemp/indexTemp.vue"),
    },
  ],
});

// router.beforeEach((to, from) => {
//   //获取当前的路径
//   if (to.name !== "/" && UseAuthenticated().isAuthenticated === false)
//     return { name: LoginTemp };
// });

export default router;
