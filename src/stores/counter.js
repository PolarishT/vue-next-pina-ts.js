"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseAuthenticated = exports.useCounterStore = void 0;
var vue_1 = require("vue");
var pinia_1 = require("pinia");
exports.useCounterStore = (0, pinia_1.defineStore)("counter", function () {
    var count = (0, vue_1.ref)(0);
    var doubleCount = (0, vue_1.computed)(function () { return count.value * 2; });
    function increment() {
        count.value++;
    }
    return { count: count, doubleCount: doubleCount, increment: increment };
});
var UserPermission = {
    roles: [],
};
exports.UseAuthenticated = (0, pinia_1.defineStore)("UserAuthentication", function () {
    var isAuthenticated = (0, vue_1.ref)();
    function doCheck() {
        isAuthenticated.value = false;
    }
    return { isAuthenticated: isAuthenticated };
});
//# sourceMappingURL=counter.js.map