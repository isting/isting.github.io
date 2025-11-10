import type { DefaultTheme } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// interface TimelineOptions {
//   time: string;
//   desc: string;
//   tag: string[];
// }

// console.log(
//   '侧边栏调试',
//   JSON.stringify(
//     generateSidebar({
//       documentRootPath: "/docs",
//       scanStartPath: "/interview",
//       // resolvePath: "interview",
//       // basePath: "interview",
//     })
//   )
// );
export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/today": generateSidebar({
    documentRootPath: "/docs",
    scanStartPath: "/today",
    collapseDepth: 3,
    useTitleFromFileHeading: true,
    collapsed: true,
  }) as any,
  "/interview": generateSidebar({
    documentRootPath: "/docs",
    scanStartPath: "/interview",
    useTitleFromFileHeading: true,
    collapseDepth: 3,
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
