import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";
import { head } from "./config/head";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的知识库",
  description: "分享&记录&学习",

  cleanUrls: true,
  lastUpdated: true, // 显示最后更新时间
  head, // <head>内标签配置
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "每日有进步",
        link: "/today",
      },
      {
        text: "AI",
        link: "/ai",
      },
      {
        text: "2025",
        items: [],
        // link: "/markdown-examples",
      },
      {
        text: "学习笔记",
        items: [
          { text: "Vue3", link: "/vue3" },
          { text: "面试相关", link: "/interview" },
          // { text: "bug记录", link: "/bug" },
          // { text: "手写代码", link: "/interview/write" },
        ],
      },
      { text: "关于我", link: "/about" },
      // { text: "2025", link: "/markdown-examples" },
    ],
    sidebar: [
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/isting" }],
  },
  markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
});
