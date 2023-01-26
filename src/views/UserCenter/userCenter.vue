<template>
  <t-layout>
    <headerCom />
    <t-layout>
      <colCom />
      <t-layout :style="{ padding: '30px' }">
        <t-content>
          <t-list :split="true">
            <t-list-item>
              <t-list-item-meta
                :image="imageUrl"
                title="列表标题"
                description="列表内容的描述性文字"
              />
            </t-list-item>
          </t-list>

          <t-card
            class="user-info-list"
            title="个人信息"
            :bordered="false"
            style="margin-top: 30px"
          >
            <template #actions>
              <t-button theme="default" shape="square" variant="text">
                <t-icon name="edit" size="18" />
              </t-button>
            </template>
            <t-row class="content" justify="space-between">
              <t-col
                v-for="(item, index) in USER_INFO_LIST"
                :key="index"
                class="contract"
                :span="item.span || 3"
              >
                <div class="contract-title">
                  {{ item.title }}
                </div>
                <div class="contract-detail">
                  {{ item.content }}
                </div>
              </t-col>
            </t-row>
          </t-card>
        </t-content>
        <FooterTemp />
      </t-layout>
    </t-layout>
  </t-layout>
</template>

<script lang="ts" setup>
const imageUrl = "https://tdesign.gtimg.com/site/avatar.jpg";

const USER_INFO_LIST = [
  {
    title: "手机",
    content: "+86 13923734567",
  },
  {
    title: "座机",
    content: "734567",
  },
  {
    title: "办公室邮箱",
    content: "Account@qq.com",
  },
  {
    title: "座位",
    content: "T32F 012",
  },
  {
    title: "管理主体",
    content: "腾讯集团",
  },
  {
    title: "直属上级",
    content: "Michael Wang",
  },
  {
    title: "职位",
    content: "高级 UI 设计师",
  },
  {
    title: "入职时间",
    content: "2023-02-01",
  },
  {
    title: "所属团队",
    content: "腾讯/腾讯公司/CDG事业群",
    span: 6,
  },
];
</script>

<style scoped lang="less">
.user-info-list {
  margin-top: 16px;

  .content {
    width: 90%;
  }

  .contract {
    width: 340px;
    height: 88px;
    border-radius: var(--td-radius-default);
    margin: 8px 0;

    &-title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 24px;
      margin: 20px 0 6px;
      font-size: 14px;
      color: var(--td-text-color-placeholder);
    }

    &-detail {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 40px;
      font-size: 14px;
      color: var(--td-text-color-secondary);
    }
  }

  .contract:last-child {
    margin-bottom: 0;
  }
}
</style>
