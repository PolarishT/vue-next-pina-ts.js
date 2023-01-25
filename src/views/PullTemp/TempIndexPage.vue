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
                @Click="TurnToLogin"
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
      <t-space :style="{ marginTop: '50px', marginLeft: '30px' }">
        <template v-for="card in CardList" :key="card.id">
          <t-card
            :cover="cover"
            theme="poster2"
            size="medium"
            :style="{ width: '350px', height: '170px' }"
          >
            <template #footer>
              <t-comment
                :avatar="card.avatar"
                :author="card.author"
                :content="card.content"
              />
            </template>
          </t-card>
        </template>
      </t-space>

      <t-space size="large" :style="{ marginTop: '30px', marginLeft: '30px' }">
        <t-calendar
          :style="{ width: '400px' }"
          ref="myCalendar"
          :theme="theme"
          :is-show-weekend-default="true"
          fill-with-zero
        />

        <t-swiper
          navigationType="dots-bar"
          direction="vertical"
          class="tdesign-demo-block--swiper"
          :duration="300"
          :interval="2000"
        >
          <t-swiper-item v-for="item in 6" :key="item">
            <div class="demo-item">{{ item }}</div>
          </t-swiper-item>
        </t-swiper>
      </t-space>

      <t-steps :current="2" readonly style="margin-top: 20px">
        <t-step-item title="已完成的步骤" content="这里是提示文字" />
        <t-step-item title="已完成的步骤" content="这里是提示文字" />
        <t-step-item
          title="错误的步骤"
          status="error"
          content="优先展示`t-step`中设置的 status"
        />
        <t-step-item title="未进行的步骤" content="这里是提示文字" />
      </t-steps>
    </t-content>
    <t-footer
      style="text-align: center; height: 30px; padding: 0"
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
  CardList,
  Img,
  MenuIcon,
  MenuList,
  USerIcon,
} from "@/views/PullTemp/PullTemplate-ItemList";
import router from "@/router/index";
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
  router.push({ name: "dormatTemp" });
};
const TurnToLogin = () => {
  UseAuthenticated().isAuthenticated = false;
  router.push({ name: "LoginTemp" });
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
</style>
