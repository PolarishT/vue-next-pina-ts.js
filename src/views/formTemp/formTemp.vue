<template>
  <t-layout>
    <headerCom />
    <t-layout>
      <colCom />
      <t-layout :style="{ padding: '30px' }">
        <t-content :style="{ backgroundColor: '#ffffff' }">
          <t-card :bordered="false">
            <t-steps
              class="step-container"
              :style="{}"
              :current="activeForm"
              status="process"
            >
              <t-step-item title="提交开票申请" />
              <t-step-item title="填写发票信息" />
              <t-step-item title="确认邮寄地址" />
              <t-step-item title="完成" />
            </t-steps>
          </t-card>

          <div v-show="activeForm === 0" class="rule-tips">
            <t-alert theme="info" title="发票开具规则：" :close="true">
              <template #message>
                <p>
                  1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；
                </p>
                <p>2、开票金额为您实际支付金额；</p>
                <p>3、如有疑问请直接联系：13300001111。</p>
              </template>
            </t-alert>
          </div>
          <t-form
            v-show="activeForm === 0"
            class="step-form"
            :data="formData1"
            :rules="FORM_RULES"
            label-align="right"
            @submit="(result) => onSubmit(result, 1)"
          >
            <t-form-item label="合同名称" name="name">
              <t-select
                v-model="formData1.name"
                :style="{ width: '480px' }"
                class="demo-select-base"
                clearable
              >
                <t-option
                  v-for="(item, index) in NAME_OPTIONS"
                  :key="index"
                  :value="item.value"
                  :label="item.label"
                >
                  {{ item.label }}
                </t-option>
              </t-select>
            </t-form-item>
            <t-form-item label="发票类型" name="type">
              <t-select
                v-model="formData1.type"
                :style="{ width: '480px' }"
                class="demo-select-base"
                clearable
              >
                <t-option
                  v-for="(item, index) in TYPE_OPTIONS"
                  :key="index"
                  :value="item.value"
                  :label="item.label"
                >
                  {{ item.label }}
                </t-option>
              </t-select>
            </t-form-item>
            <t-form-item label="开票金额"> {{ amount }} 元</t-form-item>
            <t-form-item>
              <t-button theme="primary" type="submit"> 提交申请</t-button>
            </t-form-item>
          </t-form>
        </t-content>
        <FooterTemp />
      </t-layout>
    </t-layout>
  </t-layout>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { INITIAL_DATA1 } from "../formTemp/constants";

const formData1 = ref({ ...INITIAL_DATA1 });
const activeForm = ref(0);

const amount = computed(() => {
  if (formData1.value.name === "1") {
    return "565421";
  }
  if (formData1.value.name === "2") {
    return "278821";
  }
  if (formData1.value.name === "3") {
    return "109824";
  }
  return "--";
});

const onReset = (val: number) => {
  activeForm.value = val;
};
const complete = () => {
  const router = useRouter();
  router.replace({ path: "/user/user" });
};
</script>

<style scoped>
.step-container {
  padding: 8px 24px 0;
}

.step-form {
  padding: 24px;
}

.rule-tips {
  margin: 8px 24px 0;
}
</style>
