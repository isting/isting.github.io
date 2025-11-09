import fs from "node:fs";
import path from "node:path";
import parseFrontmatter from "gray-matter";

export default {
  watch: ["./docs/**/*.md"],
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
