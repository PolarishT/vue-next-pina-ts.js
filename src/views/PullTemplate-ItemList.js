"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Img = exports.MenuList = exports.MenuIcon = exports.USerIcon = exports.ItemList = void 0;
var vue_1 = require("vue");
exports.ItemList = [
    {
        id: 1,
        icon: "icon-jurassic_user",
        name: "用户管理",
        url: "/user",
        children: [
            {
                id: 1 - 1,
                icon: "icomn-user1",
                name: "用户属性",
                url: "/user/var",
            },
        ],
    },
    {
        id: 2,
        icon: "icon-jurassic_user",
        name: "角色管理",
        url: "/role",
    },
    {
        id: 3,
        icon: "icon-shebei",
        name: "设备管理",
        url: "/device",
    },
    {
        id: 4,
        icon: "icon-luxie",
        name: "状态管理",
        url: "/state",
    },
];
exports.USerIcon = [
    {
        icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F07%2F20210607140720_6dd18.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1676994714&t=f2b9c3b7aa348862c963cb531c4a697a",
    },
];
exports.MenuIcon = (0, vue_1.ref)([
    {
        name: "add",
        id: "1",
        value: "logo-wechat",
        url: "https://wechat.com",
    },
    {
        name: "search",
        id: "2",
        value: "logo-apple",
        url: "https://apple.com",
    },
    {
        name: "apple",
        id: "3",
        value: "logo-github",
        url: "https://github.com",
    },
]);
exports.MenuList = (0, vue_1.ref)([
    {
        id: 1,
        icon: "icon-jurassic_user",
        name: "用户管理",
        url: "/user",
        menu: {
            id: "1 - 1",
            icon: "icon-jurassic_user",
            name: "标签管理",
            url: "/user/list",
        },
    },
    {
        id: 2,
        icon: "icon-jurassic_user",
        name: "角色管理",
        url: "/role",
        menu: {
            id: "1 - 2",
            icon: "icon-jurassic_user",
            name: "标签管理",
            url: "/user/list",
        },
    },
    {
        id: 3,
        icon: "icon-beijing",
        name: "设备管理",
        url: "/device",
        menu: {
            id: "1 - 3",
            icon: "icon-jurassic_user",
            name: "标签管理",
            url: "/user/list",
        },
    },
    {
        id: 4,
        icon: "icon-toyo",
        name: "状态管理",
        url: "/state",
        menu: {
            id: "1 - 4",
            icon: "icon-jurassic_user",
            name: "标签管理",
            url: "/user/list",
        },
    },
]);
exports.Img = (0, vue_1.ref)("https://img2.baidu.com/it/u=800963741,3900389833&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889");
//# sourceMappingURL=PullTemplate-ItemList.js.map