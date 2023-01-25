<template>
  <t-layout style="padding: 0; margin: 0" theme-mode>
    <t-header>
      <t-head-menu
        expand-type="popup"
        value="item1"
        height="120px"
        v-model:theme="themeColor"
        theme="light"
      >
        <template #logo>
          <img
            width="136"
            class="logo"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
        </template>

        <template v-for="item in MenuList" :key="item.id">
          <t-submenu value="2">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <t-menu-item :value="item.menu.id" v-if="item.menu.id"
              ><span>{{ item.menu.name }}</span></t-menu-item
            >
          </t-submenu>
        </template>

        <template #operations>
          <t-space size="large">
            <t-switch
              v-model="renderChecked2"
              size="large"
              :label="renderContent"
              :custom-value="customValue"
            ></t-switch>

            <template v-for="item of MenuIcon" :key="item.id">
              <t-button
                :value="item.id"
                ghost
                variant="text"
                v-model:theme="changeIconTheme"
                shape="square"
                :href="item.url"
              >
                <template #icon
                  ><span> <icon :name="item.value" size="25px"></icon></span
                ></template>
              </t-button>
            </template>
            <t-popup theme="warning" content="点击休眠">
              <t-avatar
                @dblclick="TurnTodormant"
                :image="USerIcon[0].icon"
                size="large"
                shape="round"
                :hide-on-load-failed="false"
                :style="{ marginRight: '10px', marginLeft: '18px' }"
              />
            </t-popup>
          </t-space>
        </template>
      </t-head-menu>
    </t-header>
    <t-content id="footerDocument1">
      <t-image
        :src="Img"
        fit="cover"
        :style="{ width: '400px', height: '400px', margin: '0 auto' }"
      />
    </t-content>
    <t-footer
      style="text-align: center"
      v-model:style="footerTheme"
      id="footerDocument"
    >
      Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights
      Reserved
    </t-footer>
  </t-layout>
</template>

<script setup lang="jsx">
import { computed, ref } from "vue";
import { CheckIcon, Icon, TipsIcon } from "tdesign-icons-vue-next";
import {
  Img,
  MenuIcon,
  MenuList,
  USerIcon,
} from "@/views/PullTemplate-ItemList";
import router from "@/router";
import { UseAuthenticated } from "@/stores/counter";

const customValue = [1, 0];
const renderChecked2 = ref(0);

let themeColor = computed(() => {
  if (renderChecked2.value === 1) {
    return document.documentElement.setAttribute("theme-mode", "dark");
  } else return document.documentElement.removeAttribute("theme-mode");
});

let changeIconTheme = computed(() => {
  if (renderChecked2.value === 1) {
    return "default";
  } else return "primary";
});
const renderContent = (h, data) => {
  return data.value ? <CheckIcon /> : <TipsIcon />;
};

const TurnTodormant = () => {
  router.push("/login");
  UseAuthenticated().isAuthenticated = false;
};
</script>
<style scoped lang="less">
body {
  margin: 0;
  padding: 0;
}

.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
