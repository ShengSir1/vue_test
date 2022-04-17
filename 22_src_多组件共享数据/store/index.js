// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex --3.6.2版本（可在vue2中使用的版本）
import Vuex from 'vuex'

// 使用Vuex ---($store)
Vue.use(Vuex)

// 准备actions --用于响应组件中的动作
const actions = {
	jia(context, value) {
		context.commit('JIA',value)
	},
	jian(context, value) {
		context.commit('JIAN',value)
	},
	jiaOdd(context, value) {
		if (context.state.sum % 2) {
			context.commit('JIA',value)
		}
	},
	jiaWait(context, value) {
		setTimeout(() => {
			context.commit('JIA',value)
		}, 800);
	},
}
// 准备mutations --用于操作数据（state）
const mutations = {
	JIA(state,value){
		state.sum += value
	},
	JIAN(state,value){
		state.sum -= value
	},
	ADD_PERSON(state,value){
		state.personList.unshift(value)
	}
}
// 准备state --用于存储数据
const state = {
	sum: 0, //当前的和
	school:'唐职',
	subject:'前端',
	personList:[
		{id:'001',name:'张三'},
	],
}

const getters = {
	bigSum(state){
		return state.sum*10
	}
}



// 创建并暴露store
export default new Vuex.Store({
	actions: actions, //对象里的key和保存对应值的变量重名，可以引发简写形式
	mutations,
	state,
	getters,
})