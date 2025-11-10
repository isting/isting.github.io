import fs from "node:fs";
import parseFrontmatter from "gray-matter";

/**
 * vitepress  语法
 * https://vitepress.dev/zh/guide/data-loading#data-from-local-files
 */
export default {
  watch: ["./**/*.md"],
  load(watchedFiles) {
    // 解析文章 Frontmatter
    return watchedFiles.map((articleFile) => {
      const articleContent = fs.readFileSync(articleFile, "utf-8");
      const { data } = parseFrontmatter(articleContent);
      return {
        ...data,
        path: articleFile
          .substring(articleFile.lastIndexOf("/docs/") + 6)
          .replace(/\.md$/, ""),
      };
    });
  },
};
