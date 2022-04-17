<template>
  <div class="container">
    <Category title="美食">
      <template v-slot:center>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fc75c10385343fbf2b211b3c09a34dd8065380dd721b4&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652184655&t=bdc8910d4bebec104c65b9c0a86e097c" alt="">
      </template>
      <template v-slot:footer>
        <a href="http://www.baidu.com">更多美食</a>
      </template>
    </Category>

    <Category title="游戏">
      <template v-slot:center>
        <ul>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
      </template>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">单机游戏</a>
          <a href="http://www.baidu.com">网络游戏</a>
        </div>
      </template>
    </Category>

    <Category title="电影">
      <template v-slot:center>
        <video controls src="//mp4.vjshi.com/2022-04-10/020b153bf7e4409d82516fbc0ae2103b.mp4"></video>
      </template>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">单机游戏</a>
          <a href="http://www.baidu.com">网络游戏</a>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'
  export default {
    name: 'App',
    components:{Category},
    data() {
      return {
        foods:['牛扒','东北烧烤','天津炒河粉','凉皮'],
        games:['CSGO','战地5','彩虹六号','LOL'],
        films:['《教父》','《黑手党》','《你好，李焕英》','《复联4》'],
      }
    },
  }
</script>

<style>
  .container,.foot{
    display: flex;
    /* 主轴对齐 */
    justify-content: space-around; 
  }
</style>
