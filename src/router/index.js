"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var counter_1 = require("@/stores/counter");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Temp",
            component: function () { return Promise.resolve().then(function () { return require("../views/TempIndexPage.vue"); }); },
        },
        {
            path: "/login2",
            name: "dormat",
            component: function () { return Promise.resolve().then(function () { return require("../views/dormatTemp.vue"); }); },
        },
        {
            path: "/login",
            name: "LoginTemp",
            component: function () { return Promise.resolve().then(function () { return require("../views/LoginTemp.vue"); }); },
        },
        {
            path: "/ll",
            name: "test",
            component: function () { return Promise.resolve().then(function () { return require("../views/ConfirmTemp.vue"); }); },
        },
    ],
});
router.beforeEach(function (to, from, next) {
    if (to.name !== "dormat" && (0, counter_1.UseAuthenticated)().isAuthenticated === false)
        next({ name: "LoginTemp" });
    else
        next();
});
exports.default = router;
//# sourceMappingURL=index.js.map