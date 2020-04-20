//入口文件
import Vue from 'vue'
import App from './App.vue'
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'


Vue.component(Header.name, Header);

var vm = new Vue({
	el:'#app',
	data:{},
	render: c => c(App)
})