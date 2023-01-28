<template>
  <t-button variant="outline" @click="$notify.info(infoList[0])"
    >左上角</t-button
  >
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const offsetX = ref("");
const offsetY = ref("");

const infoList = computed(() =>
  [
    { placement: "top-left" },
    { placement: "top-right" },
    { placement: "bottom-left" },
    { placement: "bottom-right" },
  ].map((item) => ({
    title: "标题名称",
    content: "这是一条可以自动关闭的消息通知",
    duration: 3000,
    offset: [offsetX.value, offsetY.value],
    ...item,
  }))
);
</script>

<style scoped></style>
