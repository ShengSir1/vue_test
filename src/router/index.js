//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'

import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


export default new VueRouter ({
	routes: [
		//一级路由
		{
			name:'guanyu',
			path:'/about',
			component:About,
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					name:'xiaoxi',
					path:'message',
					component:Message,
					children:[
						{
							name:'xiangqing',
							path:'detail', //给params参数占位
							component:Detail,
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