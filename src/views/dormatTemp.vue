<template>
  <t-row>
    <t-col :lg="6" style="background-color: #2c3e50; height: 732px">
      <p class="ioc">Say Hi</p>
      <p class="ioc1">Hello World</p>
    </t-col>
    <t-col :lg="6" style="background-color: #4b4b4b; height: 730px">
      <t-form
        :rules="rules"
        ref="form"
        :data="formData"
        :colon="true"
        :label-width="0"
        @submit="onSubmit"
        :style="{ width: '35%', marginLeft: '35%', marginTop: '300px' }"
      >
        <t-form-item
          name="account"
          :rules="[
            { required: true, message: '此项必填' },
            {
              account: { delimiters: ['/', '-', '.'] },
              message: '账户格式有误',
            },
          ]"
        >
          <t-input
            v-model="formData.account"
            clearable
            placeholder="请输入账户名"
          >
            <template #prefix-icon>
              <desktop-icon />
            </template>
          </t-input>
        </t-form-item>

        <t-form-item
          name="password"
          :rules="[
            { required: true, message: '此项必填' },
            { password: { delimiters: ['/', '-', '.'] }, message: '密码有误' },
          ]"
        >
          <t-input
            v-model="formData.password"
            type="password"
            clearable
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
          <t-button theme="primary" type="submit" block>登录</t-button>
        </t-form-item>
      </t-form>

      <t-space style="margin-top: 90px; margin-left: 42%" size="30px">
        <template v-for="item in list" :key="item.id">
          <t-image
            :src="item.url"
            :style="{ width: '32px', height: '32px' }"
            shape="circle"
            fit="cover"
          />
        </template>
      </t-space>
    </t-col>
  </t-row>
</template>

<script lang="jsx" setup>
import { ref } from "vue";
import { DesktopIcon, LockOnIcon } from "tdesign-icons-vue-next";

const form = ref();
const showPsw = ref(false);
const INITIAL_DATA = {
  account: "username",
  password: "password",
};
const formData = ref({ ...INITIAL_DATA });

const list = [
  {
    id: 1,
    url: "https://tdesign.gtimg.com/demo/demo-image-1.png",
  },
  {
    id: 2,
    url: "https://tdesign.gtimg.com/demo/demo-image-1.png",
  },
  {
    id: 3,
    url: "https://tdesign.gtimg.com/demo/demo-image-1.png",
  },
];
// @ts-ignore
const passwordValidator = (val) => {
  if (val.length > 0 && val.length <= 2) {
    return {
      result: false,
      message: "太简单了！再开动一下你的小脑筋吧！",
      type: "error",
    };
  }
  if (val.length > 2 && val.length < 6) {
    return {
      result: false,
      message: "还差一点点，就是一个完美的密码了！",
      type: "error",
    };
  }
  if (val.length > 18) {
    return {
      result: false,
      message: "太多了 装不下啦！",
      type: "error",
    };
  }
  return {
    result: true,
    message: "太强了，你确定自己记得住吗！",
    type: "success",
  };
};

// @ts-ignore
const accountValidator = (val) => {
  if (val.length > 0 && val.length <= 2) {
    return {
      result: false,
      message: "太简单了！再开动一下你的小脑筋吧！",
      type: "error",
    };
  }
  if (val.length > 2 && val.length < 6) {
    return {
      result: false,
      message: "还差一点点，就是一个完美的密码了！",
      type: "error",
    };
  }
  if (val.length > 16) {
    return {
      result: false,
      message: "太多了 装不下啦！",
      type: "error",
    };
  }
  if (val.valueOf().type === "string") {
    return {
      result: false,
      message: "",
      type: "error",
    };
  }
  return {
    result: true,
    message: "太强了，你确定自己记得住吗！",
    type: "success",
  };
};

const rules = {
  account: [
    { required: true, message: "姓名必填", type: "error" },
    {
      min: 4,
      message: "至少需要两个字",
      type: "error",
      trigger: "blur",
    },
    { validator: accountValidator },
  ],
  password: [
    { required: true, message: "密码必填", type: "error" },
    { validator: passwordValidator },
  ],
};

// const onSubmit = async ({ validateResult }) => {
//   if (validateResult === true) {
//     try {
//       await useCounterStore().login(formData.value);
//       MessagePlugin.success("登陆成功").then((r) => router.push("/"));
//     } catch (e) {
//       console.log(e);
//       MessagePlugin.error(e.message).then((r) => {});
//     }
//   }
// };
</script>
<style scoped>
.ioc {
  font-size: 5em;
  text-align: center;
  margin-top: 260px;
  font-family: Time New Roman;
}

.ioc1 {
  font-size: 5em;
  text-align: center;
  font-family: Time New Roman;
}
</style>
