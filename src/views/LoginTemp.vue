<template>
  <t-layout theme-mode>
    <header class="login-header">
      <LogoAppleFilledIcon class="logo" />
      <div class="operations-container">
        <t-button
          theme="default"
          shape="square"
          variant="text"
          @click="navToGitHub"
        >
          <t-icon name="logo-github" class="icon" />
        </t-button>
        <t-button
          theme="default"
          shape="square"
          variant="text"
          @click="navToHelper"
        >
          <t-icon name="tips" class="icon" />
        </t-button>
        <t-button
          theme="default"
          shape="square"
          variant="text"
          @click="toggleSettingPanel"
        >
          <t-icon name="setting" class="icon" :url="newUrl" />
        </t-button>
      </div>
    </header>
  </t-layout>
  <t-layout>
    <t-aside
      width="600px"
      theme-mode
      class="t-layout__sider"
      id="t-layout__sider"
    >
      <h1 style="font-size: 45px; margin-left: 68px; margin-top: 30%">
        登录到
      </h1>
      <h1 style="font-size: 45px; margin-left: 68px; margin-top: 0">
        Apple Store
      </h1>
      <t-form
        @reset="OnReset"
        :rules="rules"
        @submit="Onsubmit"
        ref="form"
        :data="formData"
        :colon="true"
        :label-width="0"
        scrollToFirstError="smooth"
        :style="{ width: '65%', marginLeft: '68px', marginTop: '75px' }"
      >
        <t-form-item name="account" :rules="rules.account">
          <t-input
            size="large"
            v-model="formData.account"
            clearable
            placeholder="请输入账户名"
          >
            <template #prefix-icon>
              <desktop-icon />
            </template>
          </t-input>
        </t-form-item>

        <t-form-item name="password" :rules="rules.password">
          <t-input
            v-model="formData.password"
            type="password"
            clearable
            size="large"
            placeholder="请输入密码"
          >
            <template #prefix-icon>
              <lock-on-icon />
            </template>
            <template #suffix-icon>
              <t-icon
                :name="showPsw ? 'browse' : 'browse-off'"
                @click="showPsw = !showPsw"
              />
            </template>
          </t-input>
        </t-form-item>
        <t-form-item>
          <t-button
            size="large"
            theme="primary"
            type="submit"
            style="margin-top: 30px"
            @click="submitForm"
            block
            @keydown.enter="submitForm"
            >登录
          </t-button>
        </t-form-item>
      </t-form>
    </t-aside>
    <t-content class="login-content">
      <h1
        style="
          margin-left: 40%;
          font-size: 60px;
          margin-top: 20%;
          font-family: 'Times New Roman';
        "
      >
        Say Hi
      </h1>
      <h1 style="margin-left: 32%; font-size: 60px">Hello World</h1>
    </t-content>
  </t-layout>
  <t-layout>
    <t-footer class="copyright" height="30px">
      Copyright @ 2021-2022 Tencent. All Rights Reserved
    </t-footer>
  </t-layout>
</template>

<script setup lang="ts">
import {
  DesktopIcon,
  LockOnIcon,
  LogoAppleFilledIcon,
} from "tdesign-icons-vue-next";
import { reactive, ref } from "vue";
import { MessagePlugin } from "tdesign-vue-next";
import router from "../router";
import { UseAuthenticated } from "../stores/counter";

const headUrl = reactive({
  githubUrl: "https://github.com/AllianceTing",
  JuejinUrl: "https://juejin.cn/user/1596931233822798",
});
const value = ref(0);
const form = ref();
const showPsw = ref(false);
const INITIAL_DATA = {
  account: "username",
  password: "password",
};
const formData = ref({ ...INITIAL_DATA });
const rules = {
  account: [
    { required: true, message: "姓名必填", type: "error", trigger: "blur" },
    { required: true, message: "姓名必填", type: "error", trigger: "change" },
    { whitespace: true, message: "姓名不能为空" },
    { min: 3, message: "输入字数太少", type: "error", trigger: "blur" },
    {
      max: 18,
      message: "输入字数应在3到18之间",
      type: "error",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "密码必填", type: "error" },
    { min: 6, message: "输入字数太少", type: "error", trigger: "blur" },
    {
      max: 18,
      message: "输入字数应在6到18之间",
      type: "error",
      trigger: "blur",
    },
  ],
};
const navToGitHub = () => {
  window.open(headUrl.githubUrl);
};
const navToHelper = () => {
  window.open(headUrl.JuejinUrl);
};
const login = () => {
  return (
    formData.value.account === "username" &&
    formData.value.password === "password"
  );
};
// const onsubmit = (result: ValidateResultContext<FormData>) => {
//   if (result.validateResult == true) {
//     try {
//       console.log("yes", result.validateResult);
//     } catch (e) {
//       MessagePlugin.error("error");
//     }
//   }
// };
const submitForm = () => {
  // form 表单校验规则
  console.log("============");
  console.log("==========enter");
  if (login().valueOf() === true) {
    MessagePlugin.success("Login Success");
    UseAuthenticated().isAuthenticated = true;
    router.push("/");
  } else {
    console.log("error=========");
    OnReset();
    MessagePlugin.error(Error.toString()).then((r) => {});
    console.log("=======login");
    router.push("/login");
  }
};

const OnReset = () => {
  form.value.reset({ type: "initial" });
};

const toggleSettingPanel = () => {
  console.log("enter");
  if (value.value === 0) {
    value.value = 1;
    document.getElementById("t-layout__sider").style.backgroundColor =
      "#181818";
    return document.documentElement.setAttribute("theme-mode", "dark");
  }
  if (value.value === 1) {
    value.value = 0;
    document.getElementById("t-layout__sider").style.backgroundColor =
      "#eeeeee";
    return document.documentElement.removeAttribute("theme-mode");
  }
};
</script>

<style lang="less" scoped>
.login-content {
}

.t-layout__sider {
  position: relative;
  transition: all 0.2s;
  background-color: #eeeeee;
}

.login-header {
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .login-aside {
    width: 400px;
  }

  .logo {
    width: 68px;
    height: 20px;
  }

  .operations-container {
    display: flex;
    align-items: center;

    .icon {
      height: 20px;
      width: 20px;
      padding: 6px;
      box-sizing: content-box;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

.copyright {
  font-size: 14px;
  margin-left: 48px;
  margin-top: 20px;
}
</style>
