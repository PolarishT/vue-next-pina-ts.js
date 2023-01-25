import { computed, ref } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
        count.value++;
    }
    return { count, doubleCount, increment };
});
const UserPermission = {
    roles: [],
};
export const UseAuthenticated = defineStore("UserAuthentication", () => {
    const isAuthenticated = ref();
    function doCheck() {
        isAuthenticated.value = false;
    }
    return { isAuthenticated };
});
