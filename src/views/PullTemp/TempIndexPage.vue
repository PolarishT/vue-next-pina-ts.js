<template>
  <t-layout style="padding: 0; margin: 0" theme-mode>
    <headerCom />
    <t-content id="footerDocument1">
      <t-space :style="{ marginTop: '50px', marginLeft: '30px' }">
        <template v-for="card in CardList" :key="card.id">
          <t-card
            :cover="cover"
            :style="{ width: '350px', height: '170px' }"
            size="medium"
            theme="poster2"
          >
            <template #footer>
              <t-comment
                :author="card.author"
                :avatar="card.avatar"
                :content="card.content"
              />
            </template>
          </t-card>
        </template>
      </t-space>
      <t-space :style="{ marginTop: '30px', marginLeft: '30px' }" size="large">
        <t-calendar
          ref="myCalendar"
          :is-show-weekend-default="true"
          :style="{ width: '400px' }"
          :theme="theme"
          fill-with-zero
        />
        <t-swiper
          :duration="300"
          :interval="2000"
          class="tdesign-demo-block--swiper"
          direction="vertical"
          navigationType="dots-bar"
        >
          <t-swiper-item v-for="item in 6" :key="item">
            <div class="demo-item">{{ item }}</div>
          </t-swiper-item>
        </t-swiper>
      </t-space>

      <t-steps :current="2" readonly style="margin-top: 20px">
        <t-step-item content="这里是提示文字" title="已完成的步骤" />
        <t-step-item content="这里是提示文字" title="已完成的步骤" />
        <t-step-item
          content="优先展示`t-step`中设置的 status"
          status="error"
          title="错误的步骤"
        />
        <t-step-item content="这里是提示文字" title="未进行的步骤" />
      </t-steps>
    </t-content>
    <footerCom :style="{ textAlign: 'center' }" />
  </t-layout>
</template>

<script lang="jsx" setup>
import { ref } from "vue";
import { CardList } from "@/views/PullTemp/PullTemplate-ItemList";

const theme = ref("card");
const myCalendar = ref("");
</script>
<style lang="less" scoped>
.t-layout {
  font: var(--td-font-body-medium);
  color: var(--td-text-color-primary);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}

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
