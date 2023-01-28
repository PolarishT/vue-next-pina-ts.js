import router from "@/router";
import { NotifyPlugin } from "tdesign-vue-next";
const Noti = {
    name: "",
    title: "",
    duration: 2000,
    content: "Welcome TO TDesign-VNEXT WEBSITE",
};
export const NOTIFY_SUCCESS = (Noti) => {
    NotifyPlugin.success({
        title: Noti.title === null ? "Success" : Noti.title,
        content: Noti.content === null ? "Welcome TO TDesign-VNEXT WEBSITE" : Noti.content,
        duration: Noti.duration === 2000 ? "2000" : Noti.duration,
    }).then(() => {
        router.push({ name: Noti.name });
    });
};
export const NOTIFY_ERROR = (Noti) => {
    NotifyPlugin.success({
        title: Noti.title === null ? "Success" : Noti.title,
        content: Noti.content === null ? "Welcome TO TDesign-VNEXT WEBSITE" : Noti.content,
        duration: Noti.duration === 2000 ? "2000" : Noti.duration,
    }).then(() => {
        router.push({ name: Noti.name });
    });
};
