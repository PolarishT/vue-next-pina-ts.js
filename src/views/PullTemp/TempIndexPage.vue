<template>
  <t-layout style="padding: 0; margin: 0" theme-mode>
    <headerCom />
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
    <footerCom :style="{ textAlign: 'center' }" />
  </t-layout>
</template>

<script setup lang="jsx">
import { computed, ref } from "vue";
import { CheckIcon, TipsIcon } from "tdesign-icons-vue-next";
import { CardList } from "@/views/PullTemp/PullTemplate-ItemList";
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
