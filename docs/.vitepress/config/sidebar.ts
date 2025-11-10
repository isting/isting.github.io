import type { DefaultTheme } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// interface TimelineOptions {
//   time: string;
//   desc: string;
//   tag: string[];
// }

// const todayList: any = generateSidebar({
//   documentRootPath: "/docs/today",
//   collapseDepth: 3, // 折叠层级
//   useTitleFromFileHeading: true, // 从文件标题提取名称
//   collapsed: true, // 默认折叠sortMenusByName: true, // 排序
//   // sortMenusOrderNumericallyFromTitle: true, // 数字排序
//   // sortMenusByFrontmatterOrder: true, // 前端排序
//   // sortMenusByFrontmatterDate: true, // 前端排序
//   // sortMenusOrderByDescending: true, // 降序
//   // sortFolderTo: "top", // 排序到顶部
//   // rootGroupText: "今日总结", // 根目录名称
//   // rootGroupLink: "/today/", // 根目录链接
//   // rootGroupCollapsed: true, // 根目录默认折叠
//   // // excludePattern: ["**/index.md", "**/README.md"], // 排除文件
//   // excludePattern: ["**/README.md"], // 排除文件
// });

// console.log(777, JSON.stringify(todayList));
export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/today": generateSidebar({
    documentRootPath: "/docs/today",
    collapseDepth: 3,
    useTitleFromFileHeading: true,
    collapsed: true,
  }) as any,
  "/interview": generateSidebar({
    documentRootPath: "/docs/interview",
    collapseDepth: 3,
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
