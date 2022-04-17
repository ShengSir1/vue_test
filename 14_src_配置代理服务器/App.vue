<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    methods: {
      getStudents(){
        // 跨域问题：直接访问了5000端口
        // 违背了同源策略： 协议名、主机名、端口号 必须一致
        // 解决方案：使用vue-cli启动代理服务器8080端口
        // axios.get('http://localhost:8080/students').then(
          axios.get('http://localhost:8080/api/students').then(
          response=>{
            console.log('请求成功了',response.data)
          },
          error=>{
            console.log('请求失败了',error.message)
          }
        )
      },
      getCars(){
          axios.get('http://localhost:8080/demo/cars').then(
          response=>{
            console.log('请求成功了',response.data)
          },
          error=>{
            console.log('请求失败了',error.message)
          }
        )
      },
    },
  }
</script>

<style>

</style>
