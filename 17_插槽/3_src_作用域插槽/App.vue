<template>
  <div class="container">
    <Category title="游戏">
      <template scope="sir">
        <ul>
          <li v-for="(g,index) in sir.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <!-- {games} --结构赋值 -->
        <ol>
          <li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
          <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'
  export default {
    name: 'App',
    components:{Category},
  }
</script>

<style>
  .container{
    display: flex;
    /* 主轴对齐 */
    justify-content: space-around; 
  }
</style>
