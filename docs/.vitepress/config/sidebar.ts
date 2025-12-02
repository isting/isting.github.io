import type { DefaultTheme } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// interface TimelineOptions {
//   time: string;
//   desc: string;
//   tag: string[];
// }

export const sidebar: DefaultTheme.Config["sidebar"] = {
  // 每日计划
  "/today": generateSidebar({
    documentRootPath: "/docs",
    scanStartPath: "/today",
    collapseDepth: 2,
    useTitleFromFileHeading: true,
    collapsed: true,
  }) as any,
  // 面试相关
  "/interview": generateSidebar({
    documentRootPath: "/docs",
    scanStartPath: "/interview",
    useTitleFromFileHeading: true,
    collapseDepth: 2,
    collapsed: true,
    // 排序
    manualSortFileNameByPriority: [
      // "从输入 url 到呈现到页面上.md",
      // "2025年10月面经.md",
    ],
    sortFolderTo: "top", // 文件夹排序方式
    debugPrint: false,
  }) as any,
  // 方法论
  "/methodology": generateSidebar({
    documentRootPath: "/docs",
    scanStartPath: "/methodology",
    useTitleFromFileHeading: true,
    collapseDepth: 2,
    collapsed: true,
  }) as any,
  // 最佳实践
  "/study/bestWay": generateSidebar({
    documentRootPath: "/docs",
    scanStartPath: "/study/bestWay",
    collapseDepth: 2,
    useTitleFromFileHeading: true,
    collapsed: true,
    sortFolderTo: "top", // 文件夹排序方式
    debugPrint: false,
  }) as any,
  // 学习计划
  "/study/plan": generateSidebar({
    documentRootPath: "/docs",
    scanStartPath: "/study/plan",
    collapseDepth: 2,
    useTitleFromFileHeading: true,
    collapsed: true,
  }) as any,

  // "/frontend/vue3": [],
  // "/share": [
  //   {
  //     text: "收藏与分享",
  //     link: "/share/",
  //     items: [
  //       { text: "站点分享", link: "/share/collection" },
  //       { text: "工具分享", link: "/share/share" },
  //     ],
  //   },
  // ],
};
