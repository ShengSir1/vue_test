//快速创建三个标签快捷键输入 vbase
<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
    import {mixin} from '../mixin'
    //默认暴露
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男'
            }
        },
        mixins:[mixin]
    }
    
</script>

<style>

</style>