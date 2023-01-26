<template>
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
              @Click="TurnToLogin"
              :image="USerIcon[0].icon"
              size="large"
              shape="round"
              :hide-on-load-failed="true"
              :style="{ marginRight: '10px', marginLeft: '18px' }"
            />
          </t-popup>
        </t-space>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script setup lang="jsx">
import { computed, ref } from "vue";
import { CheckIcon, Icon, TipsIcon } from "tdesign-icons-vue-next";
import {
  Img,
  MenuIcon,
  MenuList,
  USerIcon,
} from "@/views/PullTemp/PullTemplate-ItemList";
import router from "@/router/index";

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
const time = ref(null);
const TurnTodormant = () => {
  clearTimeout(time);
  console.log("entern dormart");
  router.push("/dormat");
};
const TurnToLogin = () => {
  console.log("enter Login");
  clearTimeout(time);
  time.value = setTimeout(() => {
    router.push("/login");
  }, 400);
};

const theme = ref("card");
const myCalendar = ref("");
</script>

<style scoped lang="less">
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
