<template>
	<div>
		<h2>我是About的内容</h2>
	</div>
</template>

<script>
	export default {
		name:'About',
		// beforeDestroy() {
		// 	console.log('About组件被销毁了')
		// },
		mounted() {
			// console.log('About组件挂载了')
		},
		// 通过路由规则，进入该组件时被调用
		beforeRouteEnter (to, from, next) {
			console.log('路由守卫',to,from);
			if (to.meta.isAuth) { //判断是否需要鉴定权限
				if (localStorage.getItem('school')==='atguigu') {
					next()
				}else{
					alert('学校错误，无权限查看')
				}
			}else{
				next()
			}
		},
		// 通过路由规则，离开该组件时被调用
		beforeRouteLeave (to, from, next) {
			console.log('beforeRouteLeave',to,from);
			next()
		}

	}
</script>

<style scoped>

</style>