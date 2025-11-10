---
title: CSS Animation 分类
timeline: true
subtitle: ""
tags: ["前端", "面试", "职场"]
time: "2025-11-01 00:00:00"
description: "CSS Animation 分类"
---

# CSS Animation 分类

> 来自豆包 2025-11-05 11:49:17

在 CSS 中实现动画效果主要有以下几种方式，各有不同的适用场景：

### 1. **`transition` 过渡动画**

通过定义元素从一种状态到另一种状态的**平滑过渡**（如颜色、尺寸、位置等变化），触发条件通常是用户交互（hover、click 等）或 JS 操作。

- **特点**：仅支持从“开始状态”到“结束状态”的一次性过渡，无法定义多关键帧。
- **核心属性**：
  - `transition-property`：指定过渡的 CSS 属性（如 `width`、`all`）。
  - `transition-duration`：过渡时长（如 `0.3s`）。
  - `transition-timing-function`：过渡速度曲线（如 `ease`、`linear`）。
  - `transition-delay`：延迟开始时间（如 `0.2s`）。
- **示例**：

  ```css
  .box {
    width: 100px;
    transition: width 0.3s ease;
  }
  .box:hover {
    width: 200px; /*  hover 时触发宽度过渡 */
  }
  ```

### 2. **`animation` 关键帧动画**

通过 `@keyframes` 定义**多阶段关键帧**，实现更复杂的动画（如循环、暂停、反向播放等），可自动触发或通过 JS 控制。

- **特点**：支持自定义多个状态（关键帧），可配置循环次数、方向、填充模式等。
- **核心属性**：
  - `animation-name`：关联 `@keyframes` 定义的动画名称。
  - `animation-duration`：动画总时长。
  - `animation-timing-function`：每段关键帧的速度曲线。
  - `animation-iteration-count`：循环次数（`infinite` 为无限循环）。
  - `animation-direction`：播放方向（`normal`、`reverse`、`alternate` 等）。
  - `animation-fill-mode`：动画结束后保持的状态（`forwards` 保留最后一帧）。
- **示例**：

  ```css
  @keyframes move {
    0% {
      transform: translateX(0);
    } /* 开始位置 */
    50% {
      transform: translateX(100px);
    } /* 中间位置 */
    100% {
      transform: translateX(0);
    } /* 结束位置 */
  }
  .box {
    animation: move 2s ease infinite; /* 2秒一次，无限循环 */
  }
  ```

### 3. **`transform` 变换动画**

结合 `transition` 或 `animation` 使用，通过 `transform` 实现元素的**几何变换**（无布局重绘，性能更好）。

- **常用变换**：
  - `translate(x, y)`：位移（2D）
  - `scale(x, y)`：缩放
  - `rotate(deg)`：旋转
  - `skew(x-deg, y-deg)`：倾斜
  - `transform: 3D` 变换（如 `translate3d`、`rotate3d`，可触发 GPU 加速）。
- **示例**：

  ```css
  .box {
    transition: transform 0.5s;
  }
  .box:hover {
    transform: rotate(30deg) scale(1.2); /* 同时旋转和缩放 */
  }
  ```

### 4. **`will-change` 性能优化**

不属于动画本身，但可**提前告知浏览器元素即将发生动画**，让浏览器提前优化渲染（如启用 GPU 加速）。

- **注意**：避免滥用，否则会占用过多内存。
- **示例**：

  ```css
  .box {
    will-change: transform; /* 提示浏览器即将变换该元素 */
  }
  ```

### 5. **其他辅助方式**

- **`steps()` 时间函数**：将动画分割为等距步骤，实现“逐帧动画”（如精灵图动画）。
- **JS 控制动画**：通过 JS 动态修改 CSS 样式（如 `element.style`）或操作 `animation`/`transition` 的属性（如暂停 `animation-play-state: paused`）。
- **`requestAnimationFrame`**：浏览器级别的定时器，用于优化动画渲染，避免卡顿。
- **`GIF`**
- **`SVG`**

ß

### 总结

- 简单交互过渡（如 hover 效果）：用 `transition` + `transform`。
- 复杂多阶段动画（如加载动画、循环动效）：用 `animation` + `@keyframes`。
- 追求性能：优先使用 `transform` 和 `opacity`（避免触发布局重排），配合 `will-change` 优化。
