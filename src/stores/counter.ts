import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

const UserPermission = {
  roles: ["Super", "User"],
};

export const UseAuthenticated = defineStore("UserAuthentication", () => {
  const isAuthenticated = ref(false);

  function doCheck() {
    isAuthenticated.value = false;
  }

  return { isAuthenticated };
});
