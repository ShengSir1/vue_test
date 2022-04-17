//该文件是整个项目的入口文件

// 引入Vue --运行版
import Vue from 'vue'
import VueResource from 'vue-resource'
// 引入APP组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

//全局混入
// import {mixin} from './mixin'
// Vue.mixin(mixin)
// 创建Vue实例对象 ---vm

// 使用插件
Vue.use(VueResource)

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    //安装全局事件总线 --本质就是自定义事件，不过是给$bus绑定的
    Vue.prototype.$bus =this
  }
})
// .$mount('#app') //与el:'#app',功能相同
