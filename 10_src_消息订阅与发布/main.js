//该文件是整个项目的入口文件

// 引入Vue --运行版
import Vue from 'vue'
// 引入APP组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

//全局混入
// import {mixin} from './mixin'
// Vue.mixin(mixin)
// 创建Vue实例对象 ---vm

new Vue({
  el:'#app',
  render: h => h(App),
})
// .$mount('#app') //与el:'#app',功能相同
