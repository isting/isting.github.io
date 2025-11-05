import type { DefaultTheme } from "vitepress";
interface TimelineOptions {
  time: string;
  desc: string;
  tag: string[];
}

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/today": [
    {
      text: "css 动画分类",
      link: "/frontend/css-animation",
      // timelineOptions: {
      //   time: "2025-04-07 11:34:18",
      //   desc: "",
      //   tag: [],
      // },
    },
    {
      text: "vueuse 简单了解",
      link: "/frontend/vueuse",
      // timelineOptions: {
      //   time: "2025-04-07 11:34:18",
      //   desc: "",
      //   tag: [],
      // },
    },
    {
      text: "工具库的使用",
      link: "/share/",
      // timelineOptions: {
      //   time: "2025-04-07 11:34:18",
      //   desc: "",
      //   tag: [],
      // },
    },
  ],
  "/frontend/vue3": [],
  "/share": [
    {
      text: "收藏与分享",
      link: "/share/",
      items: [
        { text: "站点分享", link: "/share/collection" },
        { text: "工具分享", link: "/share/share" },
      ],
    },
    // {
    //   text: "减肥心得",
    //   link: "/share/",
    //   items: [
    //     { text: "站点分享", link: "/share/collection" },
    //     { text: "工具分享", link: "/share/share" },
    //   ],
    // },
  ],
};
