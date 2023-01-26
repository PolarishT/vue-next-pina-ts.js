import ColuTemp from "@/views/dbTemp/ColuTemp.vue";
import FooterTemp from "@/views/dbTemp/footerTemp.vue";
import headTemp from "@/views/dbTemp/headTemp.vue";
import { createPinia } from "pinia";
import TDesign from "tdesign-vue-next";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const Pinia = createPinia();
const app = createApp(App);
app.use(Pinia);
app.use(TDesign);
app.component("headerCom", headTemp);
app.component("colCom", ColuTemp);
app.component("footerCom", FooterTemp);
app.use(router);
app.mount("#app");
