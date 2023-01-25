<template>
  <div class="conti">
    <t-avatar
      :image="icon"
      size="large"
      shape="round"
      :style="{
        position: 'absolute',
        align: 'center',
        width: '80px',
        height: '80px',
        top: '-100px',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
      }"
    />
    <t-input
      v-model="value"
      clearable
      placeholder="请输入"
      @enter="onEnter"
      style="
        position: absolute;
        width: 200px;
        top: 400px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      "
    />
  </div>
</template>

<script lang="ts" setup>
import { MessagePlugin } from "tdesign-vue-next";
import { ref } from "vue";
import router from "../../router";

const icon = ref(
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F07%2F20210607140720_6dd18.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1676994714&t=f2b9c3b7aa348862c963cb531c4a697a"
);
const value = ref("");

const onEnter = () => {
  if (value.value === "password") {
    MessagePlugin.success("退出休眠");
    router.push("/");
  } else {
    MessagePlugin.error("PD error").then(() => {
      value.value = null;
      router.push({ name: "dormatTemp" });
    });
  }
};
</script>

<style scoped>
.conti {
  background-image: url(/src/assets/ml.jpg);
  width: 100%;
  height: 100%;
  overflow: hidden;
  backgroundrepeat: "no-repeat";
  position: fixed;
  background-size: 100% 100%;
}
</style>
