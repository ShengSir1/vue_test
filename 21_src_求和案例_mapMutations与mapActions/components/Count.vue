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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
// 引入 映射状态
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name: "Count",
    data() {
      return {
        n:1, //用户选择的数字
      }
    },
		computed:{
			// 借助mapState生成计算属性，从state中读取数据。(对象写法)
			//  ’...‘ 是在一个对象中将另一个对象展开(Es6的扩展运算符)
			// ...mapState({sum:'sum',school:'school',subject:'subject'}),

      // 借助mapState生成计算属性，从state中读取数据（数据写法）
      ...mapState(['sum','school','subject']),
      
      // 借助mapGetters，从Getters中读取返回的数据（对象写法）
      // ...mapState({bigSum:'bigSum'})

      // 借助mapGetters，从Getters中读取返回的数据（对象写法）
      ...mapGetters(['bigSum'])
		},
    methods: {
      // 程序猿亲自写方法
      // 根据需求可以直接跳过actions不使用dispatch，直接操作mutations数据调用commit API
      // increment(){
      //   this.$store.commit('JIA',this.n)
      // },
      // decrement(){
      //   this.$store.commit('JIAN',this.n)
      // },

      // 借助mapMutation生成对应的方法，方法中会调用commit去联系mutations(对象写法)
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),

      // 借助mapMutation生成对应的方法，方法中会调用commit去联系mutations(数组写法)
      // ...mapMutations(['JIA','JIAN'])

      // ========================================
      // 程序猿亲自写方法
      // incrementOdd(){
      //   this.$store.dispatch('jiaOdd',this.n)
      // },
      // incrementWait(){
      //   this.$store.dispatch('jiaWait',this.n)
      // },

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions(对象写法)
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
      
      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions(数组写法)
      // ...mapActions(['jiaOdd','jiaWait']) //生成的方法名，调用时也得改

    },
  };
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>