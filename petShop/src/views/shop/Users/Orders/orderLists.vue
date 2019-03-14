<template>
	<div>
		<!--导航栏-->
		<navigationTop>
			<div slot="icon_left">
				<div style="margin-top: 5px; font-size: 24px;">
					<van-icon name="arrow-left" />
				</div>
			</div>
			<div slot="content_center">
				<span style="display: flex;justify-content: center;margin-top: 8px;">我的订单</span>
			</div>
			<div slot="icon_right">
			</div>
		</navigationTop>
		
		
		<div> 
			<van-tabs v-model="active">
			  <van-tab title="全部">
			  	<order1></order1>
			  </van-tab>
			  <van-tab title="待付款">
			  	<order2></order2>
			  </van-tab>
			  <van-tab title="待发货">
			  	<order3></order3>
			  </van-tab>
			  <van-tab title="待收货">
			  	<order4></order4>
			  </van-tab>
			  <van-tab title="待评价">
			  	<order5></order5>
			  </van-tab>
			</van-tabs>
		</div>
		
	</div>
</template>

<script>
	import navigationTop from '@/components/modularization/navigationTop' //导航栏
	import order1 from '@/views/shop/Users/Orders/order1' //待付款
	import order2 from '@/views/shop/Users/Orders/order2' //待发货
	import order3 from '@/views/shop/Users/Orders/order3' //待收货
	import order4 from '@/views/shop/Users/Orders/order4' //待收货
	import order5 from '@/views/shop/Users/Orders/order5' //待评价
	
	import { Tab, Tabs } from 'vant'
	export default{
		name:'orderLists',
		data(){
			return{
				active:0,//标签页角标
			}
		},
		mounted(){
			/**
			 * 接收由User_Page页（待付款，待发货，待收货，待评价）
			 * click传递过来的参数角标参数，从而定位到指定的标签页位置
			 */
			if(this.$route.params.index==null){
				this.active=0;
			}else{
				this.active=this.$route.params.index
			}
		},
		methods:{
			
		},
		components:{
			navigationTop,
			order1,
			order2,
			order3,
			order4,
			order5,
			Tab,
			Tabs
		}
	}
</script>

<style>
</style>