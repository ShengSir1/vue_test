//求和相关的配置
export default {
	namespaced:true, //引入命名空间
	actions:{
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
	},
	mutations:{
		JIA(state,value){
			state.sum += value
		},
		JIAN(state,value){
			state.sum -= value
		},
	},
	state:{
		sum: 0, //当前的和
		school:'唐职',
		subject:'前端',
	},
	getters:{
		bigSum(state){
			return state.sum*10
		}
	},
} 