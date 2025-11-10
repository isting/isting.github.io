---
title: monorepo工程管理
timeline: true
subtitle: ""
tags: ["前端", "面试"]
time: "2025-11-10 17:52:09"
description: "这是描述"
---

# monorepo 工程管理

> 来自渡一

## mutirepo vs monorepo

![monorepo vs multirepo](https://resource.duyiedu.com/yuanjin/202509190953043.svg)

常见 monorepo 管理工具：

- **pnpm**
- npm
- Yarn
- Lerna
- Nx
- Turborepo
- Rush
- ...

### pnpm monorepo

```shell
touch pnpm-workspace.yaml
```

```yaml
# pnpm-workspace.yaml

packages:
  - "packages/*"
  - "apps/*"
```

执行工程级命令

```shell
pnpm --workspace-root [...]
```

或

```shell
pnpm -w [...]
```

执行子包命令

```shell
进入子目录中执行
```

或

```shell
pnpm -C 子包路径 [...]
```

## 环境版本锁定

```json
// package.json
"engines": {
  "node": ">=22.14.0",
  "npm": ">=10.9.2",
  "pnpm": ">=10.15.1"
}
```

```yaml
# .npmrc
engine-strict=true
```

## TypeScript

```shell
pnpm -Dw add typescript @types/node
```

```shell
touch tsconfig.json
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "module": "esnext",
    "target": "esnext",
    "types": [],
    "lib": ["esnext"],
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "verbatimModuleSyntax": false,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  },
  "exclude": ["node_modules", "dist"]
}
```

```json
// apps/backend/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "types": ["node"],
    "lib": ["esnext"]
  },
  "include": ["src"]
}
```

```json
// apps/frontend/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "types": ["node"],
    "lib": ["esnext", "DOM"]
  },
  "include": ["src"]
}
```

## 代码风格与质量检查

### prettier

`prettier`安装

```shell
pnpm -Dw add prettier
```

`prettier`配置

```shell
touch prettier.config.js
```

```js
// prettier.config.js
/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
export default {
  // 指定最大换行长度
  printWidth: 120,
  // 缩进制表符宽度 | 空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行 (true：制表符，false：空格)
  useTabs: false,
  // 结尾不用分号 (true：有，false：没有)
  semi: true,
  // 使用单引号 (true：单引号，false：双引号)
  singleQuote: false,
  // 在对象字面量中决定是否将属性名用引号括起来 可选值 "<as-needed|consistent|preserve>"
  quoteProps: "as-needed",
  // 在JSX中使用单引号而不是双引号 (true：单引号，false：双引号)
  jsxSingleQuote: false,
  // 多行时尽可能打印尾随逗号 可选值"<none|es5|all>"
  trailingComma: "none",
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }" (true：有，false：没有)
  bracketSpacing: true,
  // 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)
  bracketSameLine: false,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号 (avoid：省略括号，always：不省略括号)
  arrowParens: "avoid",
  // 指定要使用的解析器，不需要写文件开头的 @prettier
  requirePragma: false,
  // 可以在文件顶部插入一个特殊标记，指定该文件已使用 Prettier 格式化
  insertPragma: false,
  // 用于控制文本是否应该被换行以及如何进行换行
  proseWrap: "preserve",
  // 在html中空格是否是敏感的 "css" - 遵守 CSS 显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
  htmlWhitespaceSensitivity: "css",
  // 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf 结尾是 可选值 "<auto|lf|crlf|cr>"
  endOfLine: "auto",
  // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码 (rangeStart：开始，rangeEnd：结束)
  rangeStart: 0,
  rangeEnd: Infinity,
};
```

`prettier`忽略项

```shell
touch .prettierignore
```

```yaml
# .prettierignore
dist
public
.local
node_modules
pnpm-lock.yaml
```

`prettier`脚本命令

```json
"scripts":{
    //......其他省略
    "lint:prettier": "prettier --write \"**/*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}\"",
}
```

执行命令

```shell
pnpm run lint:prettier
pnpm lint:prettier
```

### ESLint

```shell
pnpm -Dw add eslint@latest @eslint/js globals typescript-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-vue
```

| 类别                 | 库名                                               |
| -------------------- | -------------------------------------------------- |
| **核心引擎**         | `eslint`                                           |
| **官方规则集**       | `@eslint/js`                                       |
| **全局变量支持**     | `globals`                                          |
| **TypeScript 支持**  | `typescript-eslint`                                |
| **类型定义（辅助）** | `@types/node`                                      |
| **Prettier 集成**    | `eslint-plugin-prettier`, `eslint-config-prettier` |
| **Vue.js 支持**      | `eslint-plugin-vue`                                |

配置

```shell
touch eslint.config.js
```

```js
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const ignores = [
  "**/dist/**",
  "**/node_modules/**",
  ".*",
  "scripts/**",
  "**/*.d.ts",
];

export default defineConfig(
  // 通用配置
  {
    ignores, // 忽略项
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ], // 继承规则
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ecmaVersion: "latest", // ecma语法支持版本
      sourceType: "module", // 模块化类型
      parser: tseslint.parser, // 解析器
    },
    rules: {
      // 自定义
    },
  },
  // 前端配置
  {
    ignores,
    files: [
      "apps/frontend/**/*.{ts,js,tsx,jsx,vue}",
      "packages/components/**/*.{ts,js,tsx,jsx,vue}",
    ],
    extends: [
      ...eslintPluginVue.configs["flat/recommended"],
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  // 后端配置
  {
    ignores,
    files: ["apps/backend/**/*.{ts,js}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);
```

脚本命令

```json
"scripts":{
    //......其他省略
    "lint:eslint": "eslint",
}
```

### 拼写检查

vscode 插件： Code Spell Checker

安装

```shell
pnpm -Dw add cspell @cspell/dict-lorem-ipsum
```

配置

```shell
touch cspell.json
```

```json
{
  "import": ["@cspell/dict-lorem-ipsum/cspell-ext.json"],
  "caseSensitive": false,
  "dictionaries": ["custom-dictionary"],
  "dictionaryDefinitions": [
    {
      "name": "custom-dictionary",
      "path": "./.cspell/custom-dictionary.txt",
      "addWords": true
    }
  ],
  "ignorePaths": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/lib/**",
    "**/docs/**",
    "**/vendor/**",
    "**/public/**",
    "**/static/**",
    "**/out/**",
    "**/tmp/**",
    "**/*.d.ts",
    "**/package.json",
    "**/*.md",
    "**/stats.html",
    "eslint.config.mjs",
    ".gitignore",
    ".prettierignore",
    "cspell.json",
    "commitlint.config.js",
    ".cspell"
  ]
}
```

自定义字典

```shell
mkdir -p ./.cspell && touch ./.cspell/custom-dictionary.txt
```

检查脚本

```json
"lint:spellcheck": "cspell lint \"(packages|apps)/**/*.{js,ts,mjs,cjs,json,css,less,scss,vue,html,md}\""
```

## git 提交规范

git 仓库创建

```shell
touch .gitignore
```

```yaml
# .gitignore
# Node
node_modules/
dist/
build/
.env
.env.*
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# IDE
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS
.DS_Store
Thumbs.db

# TypeScript
*.tsbuildinfo

# Misc
coverage/
*.local
*.cache
*.tmp

# Git
.git/
```

```shell
git init
```

### commitizen

安装

```shell
pnpm -Dw add @commitlint/cli @commitlint/config-conventional commitizen cz-git
```

- `@commitlint/cli 是 commitlint` 工具的核心。
- `@commitlint/config-conventional` 是基于 conventional commits 规范的配置文件。
- `commitizen` 提供了一个交互式撰写 commit 信息的插件
- [cz-git](https://cz-git.qbb.sh/zh/guide/)是国人开发了这一款工具，工程性更强，自定义更高，交互性更好。

配置命令

```json
// package.json
"scripts": {
  // 其他省略
 "commit": "git-cz"
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-git"
  }
}
```

配置`cz-git`

```shell
touch commitlint.config.js
```

```js
/** @type {import('cz-git').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release",
      ],
    ],
  },
  prompt: {
    types: [
      { value: "feat", name: "✨ 新功能: 新增功能" },
      { value: "fix", name: "🐛 修复: 修复缺陷" },
      { value: "docs", name: "📚 文档: 更新文档" },
      {
        value: "refactor",
        name: "📦 重构: 代码重构（不新增功能也不修复 bug）",
      },
      { value: "perf", name: "🚀 性能: 提升性能" },
      { value: "test", name: "🧪 测试: 添加测试" },
      { value: "chore", name: "🔧 工具: 更改构建流程或辅助工具" },
      { value: "revert", name: "⏪ 回滚: 代码回滚" },
      { value: "style", name: "🎨 样式: 格式调整（不影响代码运行）" },
    ],
    scopes: ["root", "backend", "frontend", "components", "utils"],
    allowCustomScopes: true,
    skipQuestions: ["body", "footerPrefix", "footer", "breaking"], // 跳过“详细描述”和“底部信息”
    messages: {
      type: "📌 请选择提交类型:",
      scope: "🎯 请选择影响范围 (可选):",
      subject: "📝 请简要描述更改:",
      body: "🔍 详细描述 (可选):",
      footer: "🔗 关联的 ISSUE 或 BREAKING CHANGE (可选):",
      confirmCommit: "✅ 确认提交?",
    },
  },
};
```

### husky

安装`husky`

```shell
pnpm -Dw add husky
```

初始化

```cmd
pnpx husky init
```

配置

```cmd
#!/usr/bin/env sh
pnpm lint:prettier && pnpm lint:eslint && pnpm lint:spellcheck
```

### lint-staged

安装

```shell
pnpm -Dw add lint-staged
```

配置命令

```json
"precommit": "lint-staged"
```

配置文件

```js
// .lintstagedrc.js
export default {
  "*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}": ["cspell lint"],
  "*.{js,ts,vue,md}": ["prettier --write", "eslint"],
};
```

重新配置 husky

```cmd
#!/usr/bin/env sh
```

## 公共库打包

安装`rollup`

```shell
pnpm -Dw add rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-typescript2 @rollup/plugin-terser @vitejs/plugin-vue rollup-plugin-postcss
```

- `@rollup/plugin-node-resolve`: 解析 node_modules 中的依赖
- `@rollup/plugin-commonjs`: 将 CommonJS 模块转为 ESM
- `rollup-plugin-typescript2`: 让 Rollup 支持 TS 编译
- `@rollup/plugin-terser`： 压缩和混淆
- `@vitejs/plugin-vue`： 支持 SFC 编译
- `rollup-plugin-postcss`： 处理 css 代码

配置： 略

## 子包间依赖

```json
{
  "foo": "workspace:*",
  "bar": "workspace:^1.0.0"
}
```

## 单元测试

安装

```shell
pnpm -Dw add vitest @vitest/browser vitest-browser-vue vue
```

添加命令

```json
"test": "vitest"
```

更改`tsconfig.json`

```json
"types": ["vitest/globals", "@vitest/browser/matchers"],
"lib": ["esnext", "DOM"],
```

安装 vscode 插件： vitest

编写测试脚本： 略

## 发布

累了，不想写了
