// .vitepress/theme/index.ts or .vitepress/theme/index.js
import { h } from "vue";
import Theme from "vitepress/theme";
import "./styles/vars.css";
import "./styles/custom.css";
import Layout from "./components/Layout.vue";

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  ...Theme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx);
  },
};
