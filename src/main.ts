import ColuTemp from "@/views/dbTemp/ColuTemp.vue";
import FooterTemp from "@/views/dbTemp/footerTemp.vue";
import headTemp from "@/views/dbTemp/headTemp.vue";
import TopPanel from "@/views/dbTemp/TopPanel.vue";
import NotifyTemp from "@/views/notifyTemp/notifyTemp.vue";
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
app.component("TopChannel", TopPanel);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Notify", NotifyTemp);
app.use(router);
app.mount("#app");
