//快速创建三个标签快捷键输入 vbase
<template>
  <div>
      <h2 @click="showName">学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin'
//默认暴露
export default {
    name:'School',
    data() {
        return {
            name:'唐职',
            address:'河北唐山'
        }
    },
    mixins:[mixin]
}

</script>

<style>

</style>