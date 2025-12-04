import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  assetsInclude: ["**/*.md"],
  plugins: [
    Components({
      dirs: ["_vue-components"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ArcoResolver({ sideEffect: true, resolveIcons: true })],
    }) as any,
  ],
  resolve: {
    alias: {},
  },
});
