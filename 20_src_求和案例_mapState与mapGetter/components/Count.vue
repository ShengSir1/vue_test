<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
		<h3>当前求和放大10倍为: {{bigSum}}</h3>
		<h3>我在{{school}},学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
// 引入 映射状态
import {mapState,mapGetters} from 'vuex'
  export default {
    name: "Count",
    data() {
      return {
        n:1, //用户选择的数字
      }
    },
		computed:{
			// 程序猿自己亲自去写计算机属性
			sum (){
				return this.$store.state.sun
			},
			school (){
				return this.$store.state.school
			},
			subject (){
				return this.$store.state.subject
			}	,	

			// 借助mapState生成计算属性，从state中读取数据。(对象写法)
			//  ’...‘ 是在一个对象中将另一个对象展开(Es6的扩展运算符)
			// ...mapState({sum:'sum',school:'school',subject:'subject'}),

      // 借助mapState生成计算属性，从state中读取数据（数据写法）
      ...mapState(['sum','school','subject']),
      
			// bigSum (){
			// 	return this.$store.getters.bigSum
			// },

      // 借助mapGetters，从Getters中读取返回的数据（对象写法）
      // ...mapState({bigSum:'bigSum'})
      // 借助mapGetters，从Getters中读取返回的数据（对象写法）
      ...mapGetters(['bigSum'])
		},
    methods: {
      // 根据需求可以直接跳过actions不使用dispatch，直接操作mutations数据调用commit API
      increment(){
        this.$store.commit('JIA',this.n)
      },
      decrement(){
        this.$store.commit('JIAN',this.n)
      },
      incrementOdd(){
        this.$store.dispatch('jiaOdd',this.n)
      },
      incrementWait(){
        this.$store.dispatch('jiaWait',this.n)
      },
    },
  };
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>