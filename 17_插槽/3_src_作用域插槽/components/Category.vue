<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个默认插槽(挖个坑，等着组件的使用者进行填充) -->
    <slot :games="games">我是默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["CSGO", "战地5", "彩虹六号", "LOL"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>