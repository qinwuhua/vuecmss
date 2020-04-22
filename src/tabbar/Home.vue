<template>
	<div>
		<mt-swipe :auto="4000">
			
		  <mt-swipe-item v-for="item in lunbolist" :key="item.ID" >
			  <img :src="item.IMG" />
		  </mt-swipe-item>
		  
		</mt-swipe>
		
		<!-- 9-6宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/newlist">
					<span class="mui-icon mui-icon-list"></span>
					<div class="mui-media-body">新闻资讯</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">图片分享</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-star"></span>
					<div class="mui-media-body">商品购买</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-chat"></span>
					<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-videocam"></span>
					<div class="mui-media-body">视频专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">联系我们</div></a></li>
			
		</ul> 
		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	export default {
		data(){
			return{
				lunbolist:[]
			}
		},
		created() {
			this.getLunbo()
		},
		methods:{
			getLunbo(){
				this.$http.get("test/getlunbo").then(result =>{
					if(result.body.code === 1) {
						this.lunbolist=result.body.data;
						
					}else{
						Toast("获取失败");
					}
				});
			}
		}
		
	}
	
</script>

<style lang="scss" scoped="scoped">
	.mint-swipe{
		height: 400px;
		.mint-swipe-item{
			/* &:nth-child(1){
				background: url(../img/1.jpg);
				background-size: 100%;
			}
			&:nth-child(2){
				background: url(../img/2.jpg);
				background-size: 100%;
			}
			&:nth-child(3){
				background: url(../img/3.jpg);
				background-size: 100%;
			} */
			
			img{
				height: 100%;
				width: 100%;
			}
		}
	}
	.mui-grid-view.mui-grid-9{
		background-color: #FFFFFF;
		border: 0px;
		.mui-table-view-cell{
			border: 0px;
		}
	}
</style>
