<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
//默认暴露
export default {
  name: "School",
  data() {
    return {
      name: "唐职",
      address: "河北唐山",
    };
  },
  //挂载钩子
  mounted() {
    // console.log('School',this)
    // 使用傀儡（this.$bus）
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是School组件,收到了数据',data)
    // })

    //使用消息订阅
    pubsub.subscribe('hello',(msgName,data)=>{
     this.pubId = console.log('有人发布了hello消息,hello消息的回调执行了',msgName,data)
    })
  },
  //销毁钩子
  beforeDestroy() {
    // 解绑傀儡身上的事件
    // this.$bus.$off('hello')

    //取消订阅
    pubsub.unsubscribe(this.pubId)
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>