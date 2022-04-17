<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
//默认暴露
export default {
  name: "School",
  data() {
    return {
      name: "唐职",
      address: "河北唐山",
    };
  },
  mounted() {
    // console.log('School',this)
    // 使用傀儡（this.$bus）
    this.$bus.$on('hello',(data)=>{
      console.log('我是School组件,收到了数据',data)
    })
  },
  beforeDestroy() {
    // 解绑傀儡身上的事件
    this.$bus.$off('hello')
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>