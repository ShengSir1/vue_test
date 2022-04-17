<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group 
      name="animate__animated animate__bounce" 
      appear
      enter-active-class="animate__tada"
      leave-active-class="animate__backOutDown"
    >
        //transition --过渡 , appear --首次出现
      <h1 v-show="isShow" key="1">你好大帅逼</h1>
      <h1 v-show="!isShow" key="2">大帅逼你好</h1>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css'
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
  
</style>