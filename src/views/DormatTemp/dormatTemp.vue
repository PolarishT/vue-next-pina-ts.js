<template>
  <div class="container">
    <div id="slide">
      <template v-for="item in URLlist" :key="item.id">
        <div :style="{ backgroundImage: `url(${item.url})` }" class="item">
          <div class="content">
            <div class="name">{{ item.value }}</div>
            <div class="des">
              {{ item.lang }}
            </div>
            <t-button @click="ToDashBoard">Turn TO Page</t-button>
          </div>
        </div>
      </template>
    </div>
    <div class="buttons">
      <t-button
        id="prev"
        class="prev"
        style="margin-right: 25px"
        theme="default"
        @click="NEXT"
      >
        <template #icon>
          <CaretLeftIcon />
        </template>
      </t-button>
      <t-button id="next" class="next" theme="default" @click="PREV">
        <template #icon>
          <CaretRightIcon />
        </template>
      </t-button>
    </div>
  </div>
</template>

<script lang="jsx" setup>
import { NotifyPlugin } from "tdesign-vue-next";
import { ref } from "vue";
import { CaretLeftIcon, CaretRightIcon } from "tdesign-icons-vue-next";
import router from "../../router";

const URLlist = ref([
  {
    id: 1,
    url: "/src/views/img/1.jpg",
    lang: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    value: "LUNDEV",
  },
  {
    id: 2,
    url: "/src/views/img/2.jpg",
    lang: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    value: "LUNDEV",
  },
  {
    id: 3,
    url: "/src/views/img/3.jpg",
    lang: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    value: "LUNDEV",
  },
  {
    id: 4,
    url: "/src/views/img/4.jpg",
    lang: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    value: "LUNDEV",
  },
  {
    id: 5,
    url: "/src/views/img/1.jpg",
    lang: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    value: "LUNDEV",
  },
  {
    id: 6,
    url: "/src/views/img/2.jpg",
    lang: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    value: "LUNDEV",
  },
]);
const NEXT = () => {
  document.getElementById("prev").onclick = function () {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
};
const PREV = () => {
  document.getElementById("next").onclick = function () {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };
};
const ToDashBoard = () => {
  NotifyPlugin.success({
    title: "R dormat Success",
    content: "Welcome TO TDesign-VNEXT WEBSITE",
  }).then(() => {
    router.push({ name: "Temp" });
  });
};
const icon = ref(
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F07%2F20210607140720_6dd18.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1676994714&t=f2b9c3b7aa348862c963cb531c4a697a"
);
const value = ref();
</script>

<style scoped>
body {
  background-color: #eaeaea;
  overflow: hidden;
}

.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 600px;
  padding: 50px 20px;
  background-color: #f5f5f5;
  box-shadow: 0 30px 50px #dbdbdb;
}

#slide {
  width: max-content;
  margin-top: 50px;
}

.item {
  width: 200px;
  height: 300px;
  background-position: 50% 50%;
  display: inline-block;
  transition: 0.5s;
  background-size: cover;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
  transition: 0.5s cubic-bezier(0.3, 1.5, 0.5, 1.2);
}

.item:nth-child(1),
.item:nth-child(2) {
  left: 0;
  top: 0;
  transform: translate(0, 0);
  border-radius: 0;
  width: 100%;
  height: 100%;
  box-shadow: none;
}

.item:nth-child(3) {
  left: 50%;
}

.item:nth-child(4) {
  left: calc(50% + 220px);
}

.item:nth-child(5) {
  left: calc(50% + 440px);
}

.item:nth-child(n + 6) {
  left: calc(50% + 660px);
  opacity: 0;
}

.item .content {
  position: absolute;
  top: 50%;
  left: 100px;
  width: 300px;
  text-align: left;
  padding: 0;
  color: #eee;
  transform: translate(0, -50%);
  display: none;
  font-family: system-ui;
}

.item:nth-child(2) .content {
  display: block;
  z-index: 11111;
}

.item .name {
  font-size: 40px;
  font-weight: bold;
  opacity: 0;
  animation: showcontent 1s ease-in-out 1 forwards;
}

.item .des {
  margin: 20px 0;
  opacity: 0;
  animation: showcontent 1s ease-in-out 0.3s 1 forwards;
}

.item button {
  padding: 10px 20px;
  border: none;
  opacity: 0;
  animation: showcontent 1s ease-in-out 0.6s 1 forwards;
}

@keyframes showcontent {
  from {
    opacity: 0;
    transform: translate(0, 100px);
    filter: blur(33px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
    filter: blur(0);
  }
}

.buttons {
  position: absolute;
  bottom: 30px;
  z-index: 222222;
  width: 100%;
}

.buttons button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 0.5s;
}

.buttons button:hover {
  background-color: #bac383;
}
</style>
