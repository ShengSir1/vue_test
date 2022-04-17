//快速创建三个标签快捷键输入 vbase
<template>
  <div class="student">
    <h2>学校名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>当前求和为{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前student组件的实例</button>
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
            number:0
        }
    },
    methods: {
      add(){
        console.log('add回调被调用了')
        this.number++
      },
      sendStudentName() {
        //触发student组件实例身上的atguigu事件
        this.$emit('atguigu',this.name,666,888,999)
        this.$emit('click')
      },
      unbind(){
        //解绑一个student组件身上的自定义事件
        this.$off('atguigu')
        //解绑多个自定义事件
        // this.$off(['atguigu',''])
        //解绑所有student组件身上自定义事件
        // this.$off()
      },
      death(){
        //销毁了当前student组件的实例，销毁后所有student实例的自定义事件全都不奏效。
        this.$destroy()
      },
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