<template>
  <div>
    <!-- 组件的结构 -->
    <div class="demo">
      <h2>学生名称：{{ name }}</h2>
      <h2>学生年龄{{ age }}</h2>
      <button @click="showName">点我提示学校名</button>
    </div>
  </div>
</template>

<script>
// 组件交互的相关代码(数据，方法等等)
//组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
export default {
  name: "Student",
  data() {
    return {
      schoolName: "尚硅谷",
      name: "张三",
      age: 18,
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>