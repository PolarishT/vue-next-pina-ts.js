<template>
  <t-header>
    <t-head-menu
      v-model:theme="themeColor"
      expand-type="popup"
      height="120px"
      theme="light"
      value="item1"
    >
      <template #logo>
        <img
          alt="logo"
          class="logo"
          src="https://www.tencent.com/img/index/menu_logo_hover.png"
          width="136"
        />
      </template>

      <template v-for="item in MenuList" :key="item.id">
        <t-submenu value="2">
          <template #title>
            <span>{{ item.name }}</span>
          </template>
          <t-menu-item v-if="item.menu.id" :value="item.menu.id"
            ><span>{{ item.menu.name }}</span></t-menu-item
          >
        </t-submenu>
      </template>

      <template #operations>
        <t-space size="large">
          <t-switch
            v-model="renderChecked2"
            :custom-value="customValue"
            :label="renderContent"
            size="large"
          ></t-switch>

          <template v-for="item of MenuIcon" :key="item.id">
            <t-button
              v-model:theme="changeIconTheme"
              :href="item.url"
              :value="item.id"
              ghost
              shape="square"
              variant="text"
            >
              <template #icon
                ><span> <icon :name="item.value" size="25px"></icon></span
              ></template>
            </t-button>
          </template>
          <t-popup content="点击休眠" theme="warning">
            <t-avatar
              :hide-on-load-failed="true"
              :image="USerIcon[0].icon"
              :style="{ marginRight: '10px', marginLeft: '18px' }"
              shape="round"
              size="large"
              @Click="TurnToLogin"
              @click.right="TurnTodormant"
            />
          </t-popup>
        </t-space>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script lang="jsx" setup>
import { computed, ref } from "vue";
import { CheckIcon, Icon, TipsIcon } from "tdesign-icons-vue-next";
import {
  Img,
  MenuIcon,
  MenuList,
  USerIcon,
} from "@/views/PullTemp/PullTemplate-ItemList";
import { UseAuthenticated } from "@/stores/counter";
import { NOTIFY_SUCCESS } from "@/views/notifyTemp/nitify";

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
  UseAuthenticated().isAuthenticated === true;
  const Noti = {
    name: "dormatTemp",
    title: "Boading Success",
    duration: 1000,
    content: "",
  };
  NOTIFY_SUCCESS(Noti);
};
const TurnToLogin = () => {
  UseAuthenticated().isAuthenticated === false;
  const Noti = {
    name: "LoginTemp",
    title: "Login",
    duration: 2000,
    content: "",
  };
  NOTIFY_SUCCESS(Noti);
};
</script>

<style lang="less" scoped>
#body {
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

.tdesign-demo-block--swiper {
  width: 900px;
  height: 250px;
  background-color: #181818;
}

.t-input {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  height: var(--td-comp-size-m);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--td-radius-default);
  border-color: var(--td-border-level-2-color);
  padding: 0 var(--td-comp-paddingLR-s);
  background-color: var(--td-bg-color-specialcomponent);
  outline: none;
  color: var(--td-text-color-primary);
  font: var(--td-font-body-medium);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
}
</style>
