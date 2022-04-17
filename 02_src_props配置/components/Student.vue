//快速创建三个标签快捷键输入 vbase
<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{Myage}}</h2>
      <button @click="UpdateShow">点我尝试修改age</button>
  </div>
</template>

<script>
//默认暴露
export default {
    name:'Student',
    data() {
        return {
            msg:'欢迎来到老罗讲法',
            Myage:this.age
        }
    },
    methods: {
        UpdateShow(){
           this.Myage++
        }
    },
    // props:['name','sex','age'], //简单声明接收
    // 接收的同时对数据进行类型限制
    /*props:{
        name:String,
        age:Number,
        sex:String
    }*/

    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String, //name的类型是字符串
            required:true, //name是必须的
        },
        age:{
            type:Number,
            default:99 //默认值
        },
        sex:{
            type:String,
            required:true,
            //required 一般不与 default 一起写
        }
        
    }
}
</script>

<style>

</style>