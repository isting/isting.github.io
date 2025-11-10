import { defineConfig } from "vitepress";
import { head } from "./config/head";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";

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
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/isting" }],
  },
  markdown: {
    config: (md) => {
      // md.use(timeline);
    },
  },
});
