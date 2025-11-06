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
const {theme} = useData()
const sidebar = theme.value.sidebar

// 提取侧边栏中的 items 数据（根据实际结构调整）
const sidebarItems = sidebar['/today'] || []

console.log('88', sidebar)
</script>
