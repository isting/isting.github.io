import { readonly, shallowRef } from "vue";
import { data as articlesData } from "../article.data.js";

let timelineData = shallowRef([]);
let tagsData = shallowRef([]);

export const useGlobalMd = () => {
  /**
   *获取 tags 数据
   */
  const getTagsData = () => {
    if (tagsData.value.length) {
      return tagsData.value;
    }

    return tagsData.value;
  };

  /**
   * 获取时间轴数据
   * @returns
   */
  const getTimeLineData = () => {
    if (timelineData.value.length) {
      return timelineData.value;
    }

    const data = articlesData
      .filter((item) => item.timeline)
      .map((item) => ({
        ...item,
        title: item.title || "time",
        description: item.description || "",
        subtitle: item.subtitle || "",
        tags: item.tags || [],
        time: item.time,
        timestamp: item.time ? new Date(item.time).getTime() : 0,
      }));

    timelineData.value = data.sort((a, b) => b.timestamp - a.timestamp);
    return timelineData.value;
  };

  return {
    _data: readonly(articlesData), // 原始数据
    timelineData: getTimeLineData(),
    tagsData: getTagsData(),
  };
};
