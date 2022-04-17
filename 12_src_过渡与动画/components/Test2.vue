<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
        //transition --过渡 , appear --首次出现
    <h1 v-show="isShow" key="1">你好大帅逼</h1>
    <h1 v-show="!isShow" key="2">大帅逼你好</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
  h1{
    background-color: orange;
  }
  /* hello默认是v */
  /* 进入的起点、离开的终点 */
  .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
  }
  .hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
  }
  /* 进入的终点 、离开的起点*/
  .hello-enter-to,.hello-leave{
    transform: translateX(0);
  }
</style>