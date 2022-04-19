// 引入Vue --运行版
import Vue from 'vue'

// 引入APP组件，它是所有组件的父组件
import App from './App.vue'
//引入VueRouert插件
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//使用VueRouert插件
Vue.use(VueRouter)

// 关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router,
})
