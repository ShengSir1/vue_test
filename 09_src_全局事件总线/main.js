//该文件是整个项目的入口文件

// 引入Vue --运行版
import Vue from 'vue'
// 引入APP组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// window.x={a:1,b:2}

// const Demo =Vue.extend({})
// const d=new Demo()
// Vue.prototype.x=d

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  }
})
// .$mount('#app') //与el:'#app',功能相同
