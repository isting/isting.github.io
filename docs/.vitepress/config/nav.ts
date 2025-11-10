import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  {
    text: "每日有进步",
    link: "/today",
  },
  {
    text: "AI",
    link: "/ai",
  },
  // {
  //   text: "2025",
  //   link: "/2025",
  //   // link: "/markdown-examples",
  // },
  {
    text: "前端",
    items: [
      // { text: "Vue3", link: "/frontend/vue3" },
      { text: "面试相关", link: "/interview" },
      // { text: "VueUse", link: "/frontend/vueuse" },
      // { text: "bug记录", link: "/bug" },
      // { text: "手写代码", link: "/interview/write" },
      // { text: "碎片", link: "/interview/write" },
      // { text: "方法论", link: "/methodology" },
      // { text: "工具", link: "/tools" },
      // { text: "后端", link: "/study" },
    ],
  },
  // { text: "收藏与分享", link: "/share" },
  { text: "关于我", link: "/about" },
  // { text: "2025", link: "/markdown-examples" },
];
