// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex --3.6.2版本（可在vue2中使用的版本）
import Vuex from 'vuex'

// 使用Vuex ---($store)
Vue.use(Vuex)

// 引入求和配置
import countOptions from './count'
// 引入人员管理配置
import personOption from './person'

// 创建并暴露store
export default new Vuex.Store({
	// 模块
	modules:{
		countAbout:countOptions,
		personAbout:personOption,
	}
})