<template>
  <div class="timeline">
    <div
      v-for="(item, index) in timelineData"
      :key="index"
      class="timeline-item"
    >
      <div class="timeline-date">{{ item.date }}</div>
      <div class="timeline-content">
        <a :href="item.link" class="timeline-title">{{ item.text }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// 定义传入的时间线数据格式
const props = defineProps<{
  data: Array<{
    text: string;
    link: string;
    date: string;
  }>;
}>();

// 按日期排序（可选，确保时间线顺序正确）
const timelineData = [...props.data].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: #e5e7eb;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-date {
  position: absolute;
  left: -4rem;
  color: #6b7280;
  font-size: 0.875rem;
  white-space: nowrap;
}

.timeline-content {
  padding: 0.5rem 1rem;
  background: #f9fafb;
  border-radius: 6px;
}

.timeline-title {
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
}

.timeline-title:hover {
  color: #3b82f6;
  text-decoration: underline;
}
</style>
