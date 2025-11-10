<template>
  <div class="timeline">
    <div
      v-for="(item, index) in timelineData"
      :key="index"
      class="timeline-item"
    >
      <!-- 左侧年月标签，同月只显示一次 -->
      <!-- <div v-if="item.showYearMonth" class="timeline-year-month">
        {{ item.yearMonth }}
      </div> -->
      <div class="timeline-content">
        <div class="timeline-header">
          <!-- <a :href="item.path" class="timeline-title">{{ item.title }} </a> -->
          <span @click="toDetails(item)" class="timeline-title"
            >{{ item.title }}
          </span>
          <span v-if="item.subtitle" class="timeline-subtitle">{{
            item.subtitle
          }}</span>
        </div>
        <!-- 右侧具体日期 -->
        <div class="timeline-specific-date">{{ item.time }}</div>
        <div v-if="item.tags?.length" class="timeline-tags">
          <span
            v-for="(tag, tagIndex) in item.tags"
            :key="tagIndex"
            class="timeline-tag"
            >{{ tag }}</span
          >
        </div>
        <p v-if="item.description" class="timeline-description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalMd } from "../.vue-hooks/useGlobalMd.js";
const { timelineData } = useGlobalMd();

const toDetails = (item: any) => {
  window.open("/" + item.path, "_blank");
};
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
  padding-left: 6rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    Arial, sans-serif;
}

/* 时间轴主线 - 细线条 2px */
.timeline::before {
  content: "";
  position: absolute;
  left: 4.5rem;
  top: 0.5rem;
  height: calc(100% - 2rem);
  width: 2px;
  background: #d1d5db;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
}

/* 时间轴节点 - 简洁圆形 10px */
.timeline-item::before {
  content: "";
  position: absolute;
  left: -1.75rem;
  top: 0.25rem;
  width: 10px;
  height: 10px;
  background: #3b82f6;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #d1d5db;
}

/* 左侧年月标签 */
.timeline-year-month {
  position: absolute;
  left: -6rem;
  top: -4px;
  color: #1f2937;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
}

/* 右侧具体日期 */
.timeline-specific-date {
  color: #9ca3af;
  font-size: 13px;
  margin-top: 0.25rem;
  font-weight: 400;
}

.timeline-content {
  padding: 0;
  background: transparent;
  line-height: 1.6;
}

.timeline-header {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.timeline-title {
  color: #1f2937;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.15s ease;
  cursor: pointer;
}

.timeline-title:hover {
  color: #3b82f6;
}

.timeline-subtitle {
  color: #6b7280;
  font-size: 14px;
  font-weight: 400;
}

.timeline-tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.timeline-tag {
  display: inline-block;
  padding: 0.125rem 0.5rem;
  font-size: 12px;
  color: #3b82f6;
  background: #eff6ff;
  border-radius: 4px;
  font-weight: 400;
}

.timeline-description {
  margin: 0.5rem 0 0 0;
  color: #4b5563;
  font-size: 14px;
  line-height: 1.6;
}
</style>
