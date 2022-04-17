<template>
  <div>
    <!-- 组件的结构 -->
    <div class="demo">
      <h2>学校名称：{{ schoolName }}</h2>
      <h2>学校地址：{{ address }}</h2>
      <button @click="showName">点我提示学校名</button>
    </div>
  </div>
</template>

<script>
// 组件交互的相关代码(数据，方法等等)
//组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。

//==========================================================
// 全部写法：
//     const school = Vue.extend({
//     data() {
//       return {
//         schoolName: '尚硅谷',
//         address: '北京昌平'
//       }
//     },
//     methods: {
//       showName() {
//         alert(this.schoolName)
//       }
//     },
//   })
//   export default school //默认暴露  --ES6模块化的内容
//==========================================================
//简写
export default {
  name: "School",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京昌平",
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