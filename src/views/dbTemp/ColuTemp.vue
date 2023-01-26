<template>
  <t-aside style="border-top: 1px solid whitesmoke">
    <t-menu
      theme="light"
      value="dashboard"
      style="margin-right: 50px"
      height="550px"
    >
      <template v-for="item in CloList" :key="item.value">
        <t-menu-item :value="item.title">
          <template #icon v-if="item.icon != ''">
            <t-icon :name="item.icon" />
          </template>
          {{ item.title }}
        </t-menu-item>
      </template>
    </t-menu>
  </t-aside>
</template>

<script lang="jsx" setup>
const CloList = [
  {
    id: 3,
    value: "dashboard",
    icon: "dashboard",
    title: "主板",
  },
  {
    id: 2,
    value: "mail",
    icon: "mail",
    title: "邮箱",
  },
  {
    id: 4,
    value: "user-circle",
    icon: "user-circle",
    title: "权限检验",
  },
  {
    id: 5,
    value: "precise-monitor",
    icon: "precise-monitor",
    title: "EPM",
  },
];
</script>

<style scoped></style>
