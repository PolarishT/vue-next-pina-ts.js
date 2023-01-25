import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue-next";

const Pinia = createPinia();
const app = createApp(App);
app.use(Pinia);
app.use(TDesign);
app.use(router);
app.mount("#app");
