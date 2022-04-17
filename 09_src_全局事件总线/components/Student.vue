//快速创建三个标签快捷键输入 vbase
<template>
  <div class="student">
    <h2>学校名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
  //默认暴露
  export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            sex:'男',
        }
    },
    mounted() {
    // console.log('Student',this.x)
  },
  methods: {
    sendStudentName(){
      // 提供数据
      this.$bus.$emit('hello',666)
    }
  },
  }
    
</script>

<style scoped>
.student{
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>