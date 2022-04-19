// 引入Vue --运行版
import Vue from 'vue'

// 引入APP组件，它是所有组件的父组件
import App from './App.vue'
// 完整引入：
// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入：
import {Button,DatePicker,Row} from 'element-ui'
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Row);

// 关闭vue的生产提示
Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI)

new Vue({
  el:'#app',
  render: h => h(App),
})
