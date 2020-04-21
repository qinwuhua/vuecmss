import VueRouter from  'vue-router'
import Home from './tabbar/Home.vue'
import Member from './tabbar/Member.vue'
import Shopcar from './tabbar/Shopcar.vue'
import Search from './tabbar/Search.vue'

var router = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:Home},
		{path:'/member',component:Member},
		{path:'/shopcar',component:Shopcar},
		{path:'/search',component:Search}
	],
	linkActiveClass:'mui-active'
	
})

export default router