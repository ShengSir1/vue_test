//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'

import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


const router = new VueRouter ({
	mode:'history', //三种模式cd
	routes: [
		//一级路由
		{
			name:'guanyu',
			path:'/about',
			component:About,
			meta:{isAuth:true,title:'关于'}
		},
		{
			name:'zhuye',
			path:'/home',
			component:Home,
			meta:{title:'主页'},
			children:[
				{
					name:'xinwen',
					path:'news',
					component:News,
					meta:{isAuth:true,title:'新闻'},
					// 独享路由守卫可以全局后置守卫搭配组合使用
					// beforeEnter: (to, from, next) => {
					// 	console.log('独享路由守卫',to,from);
					// 	if (to.meta.isAuth) { //判断是否需要鉴定权限
					// 		if (localStorage.getItem('school')==='atguigu') {
					// 			next()
					// 		}else{
					// 			alert('学校错误，无权限查看')
					// 		}
					// 	}else{
					// 		next()
					// 	}
					// },
				},
				{
					name:'xiaoxi',
					path:'message',
					component:Message,
					meta:{isAuth:true,title:'消息'},
					children:[
						{
							name:'xiangqing',
							path:'detail', //给params参数占位
							component:Detail,
							meta:{isAuth:true,title:'详情'},
							// props的第一种写法，值为对象,该对象的所有key-value都会以props的形式传给Detail组件。
							// props:{a:1,b:'hello'}

							// props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params的形式传给Detail组件。
							// props:true,

							// props的第三种写法，值为函数 不要给params参数占位
							props($route){
								return {
									id:$route.query.id,
									title:$route.query.title,
									a:1,
									b:'hello'
								}
							}
						}
					]
				},
			]
		},
	]
})

//全局前置路由守卫 --初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
// 	console.log('前置路由守卫',to,from);
// 	if (to.meta.isAuth) { //判断是否需要鉴定权限
// 		if (localStorage.getItem('school')==='atguigu') {
// 			next()
// 		}else{
// 			alert('学校错误，无权限查看')
// 		}
// 	}else{
// 		next()
// 	}
// })

//全局后置路由守卫  --初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
	console.log('后置路由守卫',to,from);
	document.title = to.meta.title || 'Vue路由守卫案例'
})

export default router