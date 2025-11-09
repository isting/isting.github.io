---
title: 项目时间线
---

<!-- 引入自定义组件 -->
<Timeline :data="sidebarItems" />

<!-- 脚本部分：获取侧边栏数据并处理 -->
<script setup>
import { useData } from 'vitepress'
import Timeline from '../.vue-components/Timeline.vue'

// 获取当前页面的侧边栏数据
const {theme, ...other } = useData()
const sidebar = theme.value.sidebar

// 提取侧边栏中的 items 数据（根据实际结构调整）
const sidebarItems1 = sidebar['/today'] || []

console.log('000', sidebarItems1, other)
const sidebarItems = [{
  text: '项目启动77',
    link: '/project',
    date: '2024-01',
    subtitle: 'v1.0',
    tags: ['Vue', 'TypeScript'],
    description: '这是项目的初始版本，包含核心功能实现'
  },{
    date: '2024-01',
    text: '项目启动',
    link: '/project',
    subtitle: 'v1.0',
    tags: ['Vue', 'TypeScript'],
    description: '这是项目的初始版本,包含核心功能实现'
  },{
    date: '2024-01',
    text: '项目启动',
    link: '/project',
    subtitle: 'v1.0',
    tags: ['Vue', 'TypeScript'],
    description: '这是项目的初始版本,包含核心功能实现'
  },{
    date: '2024-01',
    text: '项目启动',
    link: '/project',
    subtitle: 'v1.0',
    tags: ['Vue', 'TypeScript'],
    description: '这是项目的初始版本,包含核心功能实现'
  },{
    date: '2024-01',
    text: '项目启动',
    link: '/project',
    subtitle: 'v1.0',
    tags: ['Vue', 'TypeScript'],
    description: '这是项目的初始版本，包含核心功能实现'
  },,{
    date: '2024-04',
    text: '项目启动',
    link: '/project',
    subtitle: 'v1.0',
    tags: ['Vue', 'TypeScript'],
    description: '这是项目的初始版本，包含核心功能实现'
  },{
    date: '2024-07',
    text: '项目启动',
    link: '/project',
    subtitle: 'v1.0',
    tags: ['Vue', 'TypeScript'],
    description: '这是项目的初始版本，包含核心功能实现'
  }]

console.log('88', sidebar)
</script>
