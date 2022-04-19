<template>
  <div class="col-xs-offset-2 col-xs-8">
		<div class="page-header">
			<h2>Vue Router Demo</h2>
			<button @click="back">后退</button>
			<button @click="forward">前进</button> 
			<button @click="testGo">测试一下Go Api</button> 
		</div>

	</div>
</template>

<script>
	export default {
		name:'Banner',
		methods: {
			// $router的三个关于调用浏览器历史记录的api
			//$router.back()  --前进一步
			// $router.forward()  --后退一步
			// $router.go()  --go中传入一个参数 正数即前进 负数即后退
			back(){
				console.log(this.$router);
				this.$router.back()
			},
			forward(){
				this.$router.forward()
			},
			testGo(){
				this.$router.go(-2) 
			}
		},
	}
</script>

<style scoped>

</style>