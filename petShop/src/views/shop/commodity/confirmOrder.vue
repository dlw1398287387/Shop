<template>
	<div>
		<navigationTop>
			<div slot="icon_left">
				<div style="margin-top: 5px; font-size: 24px;">
					<van-icon name="arrow-left" />
				</div>
			</div>
			<div slot="content_center">
				<span style="display: flex;justify-content: center;margin-top: 8px;">确认订单</span>
			</div>n
			<div slot="icon_right"></div>
		</navigationTop>
		
		<div style="width: 100%; height: 100%; background: #F7F7F7;">
			<div class="addressInformation">
				<div class="name_phone">
					<van-tag round type="danger">收件人</van-tag>&nbsp;&nbsp;<span>{{recipients.name}}</span>&nbsp;&nbsp;&nbsp;<span style="margin-top: 2px;">{{recipients.tel}}</span>
				</div>
				<div class="address"  @click="selectAddress">
					<van-tag round type="primary">地 &nbsp;&nbsp;&nbsp;址</van-tag>&nbsp;&nbsp;<span>{{recipients.address}}</span>
				</div>
				<van-icon name="arrow" @click="selectAddress"  style='float: right; margin-top: -40px;font-size: 14px;font-weight: bold;margin-right: 6px;'/>
				<div class="border"></div>
				<shippingAddress ref="shippingaddress" v-on:changeAddress="changeAddress"></shippingAddress>
			</div>
			<div class="modeofpayment " @click="maintain">
				<van-cell title="支付方式" value="在线支付..." style="text-align: left;"/>
			</div>
			<div class="order_details">
				<div class="store">
					<van-icon name="shop-o" class="store_icon"/>
					<span class="store_name">{{content.storeContent.storeName}}</span>
				</div>
				
				<div class="store_box">
					<img class="store_box_img" :src="content.defaultCheck.img" />
					<span class="store_box_name">{{content.ProductName}}</span>
					<span class="store_box_type">{{content.defaultCheck.Classify}}，{{content.defaultCheck.Versions}}</span>
					<span class="store_box_price">¥{{content.price*value}}.00</span>
					<div class="store_box_tag">支持七天无理由退货(拆封后不支持)</div>
				</div>
				
				<div class="store_count">
					<span style="margin-left: 10px; line-height:30px;">购买数量</span>
					<van-stepper v-model="value" style="margin-right: 10px;"/>
				</div>
				
				<div>
					<van-cell title="配送" value="快递运输" style="text-align: left;"/>
	  				<van-cell title="工作日、双休与节假日均送货" style="text-align: right;"/>
				</div>
				
				<div class="afterService">
					<span>退换无忧&nbsp;<label style="font-weight: bold;">商家赠送<van-icon name="info-o" /></label></span>
					<span>7天退货，15天内换货。</span>
				</div>  
				
				<div class="leave_msg">
					<span class="leave_span">留言</span>&nbsp;&nbsp;
					<input class="leave_input" type="text" placeholder="建议留言前先与商家沟通确认" />
				</div>
				<div style="display: flex;margin-bottom: 20px; justify-content: space-between; background: #FFFFFF;" @click="invoice">
					<span style="font-size: 14px;margin-left: 10px;">发票</span>
					<span style="font-size: 14px;margin-right: 10px;">不开发票&nbsp;&nbsp;<van-icon name="weapp-nav" /></span>
				</div>
			</div>
			
			<div style="width: 94%; margin-left: 3%; background: #FFFFFF; margin-top: 10px; margin-bottom: 20px;">
				<div style="display: flex; justify-content: space-between;">
					<span style="font-size: 14px;margin-top: 10px;margin-left: 10px;">商品金额</span>
					<span style="font-size: 14px;margin-top: 10px;margin-right: 10px;margin-bottom: 10px;">¥{{content.price*value}}.00</span>
				</div>
				<div style="display: flex; justify-content: space-between;">
					<span style="font-size: 14px;margin-left: 10px;">运费</span>
					<span style="font-size: 14px;margin-right: 10px;margin-bottom: 10px; color: red;">¥0.00</span>
				</div>
				<div style="display: flex; justify-content: space-between;">
					<span style="font-size: 14px;margin-left: 10px;">立减</span>
					<span style="font-size: 14px;margin-right: 10px; margin-bottom: 10px;color: red;">¥0.00</span>
				</div>
			</div>
			
			<van-notice-bar :scrollable="false">
				 北京市北京市东城区某些个不知名的地界
			</van-notice-bar>
			<div style="height: 50px;"></div>
			<van-submit-bar
			  :price="content.price*value*100"
			  button-text="提交订单"
			  @submit="onSubmit"
			/>
		</div>
	</div>
</template>

<script>
	import { Icon ,Tag,Cell ,Stepper,SubmitBar,NoticeBar,Toast   } from 'vant';
	import navigationTop from '@/components/modularization/navigationTop'
	import shippingAddress from '@/components/popups/shippingAddress'
	export default{
		name:'confirmOrder',
		data(){
			return{
				value:1,//进步数
				content:this.$route.params.orderContent,//订单信息,(从params中读取)
				recipients:this.$route.params.orderContent.defaultsite,//收件人(从params中读取)
			}
		},
		mounted(){
			console.log(this.$route.params.orderContent)
		},
		computed:{
			
		},
		methods:{
			//唤醒shippingAddress回调
			selectAddress(){
				this.$refs.shippingaddress.openShow()
			},
			//设置新地址回调，当触发此方法，则证明，用户需要从新设置收件人地址信息，我们从回调中从新获取并覆盖this.recipients即可！
			changeAddress(val) {
				this.recipients = val
			},
			maintain(){
				Toast('目前仅支持线上交易!敬请期待后续迭代!');
			},
			invoice(){
				Toast('此项维护中！~');
			},
			onSubmit(){
				
			},
		},
		components:{
			navigationTop,Icon,Tag ,Cell,Stepper,SubmitBar ,NoticeBar,shippingAddress,Toast 
		}
	}
</script>

<style lang="scss" scoped>
.addressInformation{
	width: 100%; 
	height: 70px; 
	background: #FFFFFF; 
	margin-bottom: 10px;
	.name_phone{
		display: flex; 
		font-size: 14px; 
		font-weight: bold; 
		padding: 10px;
	}
	.address{
		display: flex;
		font-size: 12px;
		margin-left: 10px;
	}
	.border{
		margin-top: 4px;
		height: 2px;
		background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
	    background-size: 100px;
    }
}
.modeofpayment{
	width: 94%;
	height: 40px;
	margin-left: 3%;
	background: #FFFFFF;
	margin-bottom: 20px;
}
.order_details{
	width: 94%;
	height: 100%;
	margin-left: 3%;
	background: #FFFFFF;
	.store{
		height: 30px;
		border-bottom: 1px solid #e5e5e5;	
		.store_icon{
			display: flex;
			font-size: 20px;
			padding: 4px;
		}
		.store_name{
			display: flex;
			margin-top: -24px;
			margin-left: 30px;
		}
	}
	.store_box{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		.store_box_img{
			padding: 4px;
			display: flex;
			width: 90px;
			background: #FFFFFF;
		}
		.store_box_name{
			display: flex;
			font-size: 12px;
			font-weight: bold;
			margin-left: 98px;
			margin-top: -90px;
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			/*! autoprefixer: off*/
			-webkit-box-orient:vertical;
			/* autoprefixer: on */
			-webkit-line-clamp:1; 
			text-align: left;
			margin-bottom: 6px;
		}
		.store_box_type{
			display: flex;
			font-size: 12px;
			margin-left: 98px;
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			/*! autoprefixer: off*/
			-webkit-box-orient:vertical;
			/* autoprefixer: on */
			-webkit-line-clamp:1; 
			text-align: left;
			margin-bottom: 4px;
		}
		.store_box_price{
			display: flex;
			font-size: 18px;
			margin-left: 98px;
			color: red;
			margin-bottom: 4px;
		}
		.store_box_tag{
			float: left;
			padding: 2px;
			font-size: 10px;
			margin-left: 98px;
			border: 1px solid #1989FA;
			border-radius: 4px;
			color: #1989FA;
			margin-bottom: 10px;
		}
	}
	.store_count{
		display: flex;
		justify-content:space-between;
		width: 100%;
		font-size: 14px;
		margin-bottom: 10px;
	}
	.afterService span{
		display: flex;
		font-size: 14px;
		margin-left: 10px;
	}
	
	.leave_msg{
		margin-top: 20px;
		display: flex;
		margin-left: 10px;
		margin-bottom: 20px;
		.leave_span{
			font-size: 14px;
		}
		.leave_input{
			width: 80%;
			border: 0px solid;
			font-size: 14px;
			color: #666;
			margin-top: -4px;
		}
	}
}


</style>