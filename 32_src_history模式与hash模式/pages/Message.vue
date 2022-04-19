<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        
        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link :to="{
          // 使用已命名的路由 
          name:'xiangqing', 
          query:{
            id:m.id,
            title:m.title
          }
        }">
        {{m.title}}
        </router-link>

        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带params参数，to的对象写法  -->
        <!-- <router-link :to="{
          // 携带params参数  ---只能使用已命名的路由 
          name:'xiangqing', 
          params:{
            id:m.id,
            title:m.title
          }
        }">
        {{m.title}}
        </router-link> -->

        <button @click="pushShow(m)" class="btn btn-secondary">push查看</button>
        <button @click="replaceShow(m)" class="btn btn-info">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'Message',
    data() {
      return {
        messageList:[
          {id:'001',title:'消息001'},
          {id:'002',title:'消息002'},
          {id:'003',title:'消息003'},
        ]
      }
    },
    methods: {
      pushShow(m){
        this.$router.push({
          name:'xiangqing', 
          query:{
            id:m.id,
            title:m.title
          }
        })
      },
      replaceShow(m){
        this.$router.replace({
          name:'xiangqing', 
          query:{
            id:m.id,
            title:m.title
          }
        })
      },
    },
  }
</script>

<style scoped>

</style>