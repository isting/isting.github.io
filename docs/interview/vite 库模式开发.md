---
timeline: true
title: vite 库模式开发_配置示例
subtitle: ""
tags: [前端]
time: "2025-11-26 14:20:44"
description: ""
---

# vite 库模式开发

```javascript
const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "YOUR_LIBRARY_NAME",
      fileName: (format) => `YOUR_LIBRARY_NAME.${format}.js`,
    },
  },
});
```

```json
{
  "name": "YOUR_LIBRARY_NAME",
  "version": "1.0.0",
  "description": "A GOOD DESCRIPTION",
  "files":["dist"],
  "main":"./dist/YOUR_LIBRARY_NAME.umd.js",
  "module":"./dist/YOUR_LIBRARY_NAME.es.js",
  "exports": {
    ".": {
      "import": "./dist/YOUR_LIBRARY_NAME.es.js",
      "require": "./dist/YOUR_LIBRARY_NAME.umd.js"
    }
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  ...
}
```

---

### acme-monorepo

```javascript
// pageage.json
{
  "name": "@acme/components",
  "private": false,
  "version": "2.0.7",
  "type": "module",
  "exports": {
    ".": {
      "require": "./dist/lib/index.cjs",
      "import": "./dist/es/index.mjs"
    },
    "./*": "./*"
  },
  "main": "./dist/lib/index.cjs",
  "module": "./dist/es/index.mjs",
  "files": [
    "dist",
    "package.json"
  ],
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.31"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.5",
    "sass": "1.78.0",
    "typescript": "^5.2.2",
    "vite": "^5.3.4",
    "vue-tsc": "^2.0.24"
  }
}



// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    minify: true,
    modulePreload: false,
    lib: {
      entry: 'packages/index.ts',
      name: 'acme-components',
      fileName: 'acme-components'
    },
    rollupOptions: {
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          // preserveModulesRoot: __dirname,
          dir: 'dist/lib',
          entryFileNames: '[name].cjs'
        },
        {
          format: 'es',
          preserveModules: true,
          // preserveModulesRoot: __dirname,
          dir: 'dist/es',
          entryFileNames: '[name].mjs'
        }
      ],
      external: ['vue', '@element-plus/icons-vue', '@vueuse/core', 'element-plus', 'vue-router']
    }
  }
})

```

### <font style="color:rgb(44, 44, 54);">peerDependencies</font>

> <font style="color:rgb(44, 44, 54);">正确使用 </font>`<font style="color:rgb(44, 44, 54);">peerDependencies</font>`<font style="color:rgb(44, 44, 54);"> 可以帮助你更好地管理项目的依赖关系，提高代码的可维护性和稳定性。</font>

1. 多用在插件或者库中
2. 声明当前插件的运行环境依赖，如果不匹配，将会报警
3. 这里的依赖不会安装与打包。仅声明作用
