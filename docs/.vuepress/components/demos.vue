<template>
  <div>
    <button>默认按钮， {{ msg }}</button>
  </div>
</template>
<script>
export default {
  name: "button-demos",
  data() {
    return {
      msg: "你好"
    };
  },
  mounted() {
    console.log("mounted ");
  }
};
</script>