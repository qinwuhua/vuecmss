//入口文件
import Vue from 'vue'
import App from './App.vue'
import { Header, Swipe, SwipeItem,Button  } from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'

import VueRouter from  'vue-router'
Vue.use(VueRouter);
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.http.options.root = 'http://192.168.1.103:7001/';
Vue.http.options.emulateJSON = true;

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);

var vm = new Vue({
	el:'#app',
	data:{},
	render: c => c(App),
	router
})