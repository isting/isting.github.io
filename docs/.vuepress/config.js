module.exports = {
  title: 'Dear Friends',
  description: 'Just playing around',
  displayAllHeaders: true,
  lastUpdated: true,
  base: './',
  head: [
    ['link', { rel: 'icon', href: '../assets/sun.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate' }]
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10,
    nav: [
      { text: '首页', link: '/' },
      { text: '阅读摘录', link: '/excerpt/' },
      // { text: '零碎', link: '/fragmentary/' },
      {
        text: '技术分类',
        items: [
          { text: 'vue', link: '/vue/' },
          { text: 'react', link: '/react/' },
          { text: 'node', link: '/node/' },
          { text: 'python', link: '/python/' }
        ]
      },
      { text: 'github', link: 'https://github.com/isting/' }
    ],
    sidebar: {
      '/article/': '',
      '/excerpt/': '',
      '/fragmentary/': '',
      '/vue/': ['', 'directives'],
      '/react/': [''],
      '/node/': [''],
      '/python/': [
        ''
        // 'one',
        // 'two'
      ]
    },
    sidebarDepth: 2 // 侧边栏显示2级
  },
  plugins: ['vuepress-plugin-cat'],
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
}
