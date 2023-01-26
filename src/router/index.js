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
    ],
});
export default router;
