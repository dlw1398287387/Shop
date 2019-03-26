<template>
	<div>
		<van-swipe @change="onChange">
			<div v-for="item in datas.img">
				<van-swipe-item>
					<img class="swipe_imgs" :src="item.img" />
				</van-swipe-item>
			</div>

			<div class="custom-indicator" slot="indicator">
				{{ current + 1 }}/4
			</div>
		</van-swipe>

		<div class="details_content">
			<!--促销价格  2个Icon-->
			<div class="details_next">
				<span class="details_price">¥{{CalculationAmount}}.00</span>
				<div class="details_icon_box1">
					<van-icon class="details_icon1" name="refund-o" />
					<span class="details_icon1_text">降价通知</span>
				</div>
				<div class="details_icon_box2">
					<van-icon class="details_icon2" name="like-o" />
					<span class="details_icon1_text">关注</span>
				</div>
			</div>
			<!--原价格-->
			<span class="original_cost">¥123.00</span>

			<!--商品名称-->
			<div>
				<span class="commodity_name">【不吃包退】好主人狗粮 全犬种通用5斤泰迪金毛拉布拉多比熊萨摩耶边牧法斗柯基阿拉斯加幼犬狗粮天然粮</span>
			</div>
			<!--商品描述，或者是备注-->
			<div>
				<span class="commodity_desc">关注店铺享粉丝价，每日抽奖赢宠粮，奶糕专区满699送爱丽丝价值128元储粮桶，为犬猫囤起来！</span>
			</div>
			<div style="margin-top: 10px; border-bottom: 1px solid #666;"></div>

			<!--选项-->
			<div class="commodity_configuration">
				<!--选择配置，或者商品类型，大小，价格-->
				<div style="margin-top:10px ; background: #FFFFFF;">
					<van-row>
						<van-col span="4">
							<span style="display: flex; margin: 10px; font-size: 14px; color: #666;">已选</span>
						</van-col>
						<van-col span="18" style="padding: 6px 0px;">
							<span style="font-size: 12px; font-weight: bold;">{{datas.defaultCheck.Classify}}-{{datas.defaultCheck.Versions}}</span>
						</van-col>
						<van-col span="2">
							<van-icon name="ellipsis" @click="onOpencation" style="margin: 8px; font-weight: bold;" />
						</van-col>
					</van-row>
					<Classification ref="classification" :comm="datas"></Classification>
				</div>
				<!--选择送货地址-->
				<div style="margin-top:10px ; background: #FFFFFF;">
					<van-row>
						<van-col span="4">
							<span style="display: flex; margin: 10px; font-size: 14px; color: #666;">送至</span>
						</van-col>
						<van-col span="18" style="padding: 6px 0px;">
							<!--{{changessite!=null?changessite:defaultAddress}}-->
							<span style="font-size: 12px;">{{changessite.address!=null?changessite.address:defaultAddress}}</span><br />
							<span style="color: red;font-size: 12px;">现货,</span>
							<span style="font-size: 12px;">今日16:00前完成下单，预计3月6日23:30前发货</span>
						</van-col>
						<van-col span="2">
							<van-icon name="ellipsis" style="margin: 8px; font-weight: bold;" @click="onOpenAddress" />
						</van-col>
					</van-row>
					<shippingAddress ref="shippingaddress" v-on:changeAddress="changeAddress"></shippingAddress>
				</div>
				<!--免运费desc-->
				<div style="margin-top:00px; background: #FFFFFF;">
					<van-row>
						<van-col span="4">
							<span style="display: flex; margin: 10px; font-size: 14px; color: #666;">运费</span>
						</van-col>
						<van-col span="20" style="padding: 6px 0px;">
							<span style="font-size: 12px; font-weight: bold;">免运费</span>
						</van-col>
					</van-row>
				</div>
				<div style="height: 100px; background: #FFFFFF;">
					<ul v-for="item in datas.Service_Support">
						<li class="detail_ul_li">
							<van-icon name="passed" color="red" class="detail_li_icon" />
							<span style="font-size: 12px;">{{item}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<van-goods-action>
			<van-goods-action-mini-btn icon="chat-o" text="客服" @click="clickService" />
			<van-goods-action-mini-btn icon="shop-o" text="店铺" @click="clickShop" />
			<van-goods-action-mini-btn info="5" icon="cart-o" text="购物车" @click="clickShoppingCart" />
			<van-goods-action-big-btn text="加入购物车" />
			<van-goods-action-big-btn primary text="立即购买" @click="clickPurchase" />
		</van-goods-action>

	</div>
</template>

<script>
	import { CommDatails } from '@/views/shop/commodity/mock'
	import { Swipe, SwipeItem, Icon, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Row, Col } from 'vant';
	import shippingAddress from '@/components/popups/shippingAddress'
	import Classification from '@/components/popups/Classification'
	export default {
		name: 'commDtails',
		data() {
			return {
				datas: CommDatails,
				current: 0,
				defaultsite:{},
				changessite: {},
				
			}
		},
		computed: {
			/**
			 * 计算金额
			 */
			CalculationAmount(){
				for(var j=0;j<this.datas.verify.length;j++){
					if(this.datas.defaultCheck.Classify==this.datas.verify[j].c&&this.datas.defaultCheck.Versions==this.datas.verify[j].v){
						return this.datas.verify[j].price
					}
				}
			},
			/**
			 * 计算当前设置的默认地址。并显示在地址栏里
			 */
			defaultAddress() {
				var addressList = JSON.parse(localStorage.getItem("DirectoryInquiries"))
				for(var i = 0; i < addressList.length; i++) {
					if(addressList[i].id == "1") {
//						console.log(addressList[i].address)
						this.defaultsite=addressList[i]
						return addressList[i].address
					}
				}
			}
			
		},
		mounted() {
//			console.log(this.defaultsite)
//			console.log(this.changessite.address==null)
			this.datas.defaultsite=this.changessite.address==null?this.defaultsite:this.changessite
		},
		methods: {
			onChange(index) {//轮播图角标
				this.current = index;
			},
			onOpenAddress() {//回调shippingAddress中的唤醒方法
				this.$refs.shippingaddress.openShow()
			},
			onOpencation() {//回调shippingAddress中的关闭方法
				this.$refs.classification.onOpenshow()
			},
			clickService() {
				console.log("客服")
			},
			clickShoppingCart() {
				console.log("购物车")
			},
			clickShop() {
				console.log("店铺")
			},
			clickPurchase() {//提交订单页
				//将必要订单信息 传递给订单页。
				var orderContent={
					storeContent:this.datas.storeContent,
					ProductName:this.datas.ProductName,
					price:this.CalculationAmount,
					defaultCheck:this.datas.defaultCheck,
					/**
					 * 这个地方解释一下：我们在详情页没有设置收货地址时，此时是以默认地址。同时计算方法中会将默认收货地址赋值给this.defaultsite
					 * 如果从新设置了收货地址，从容defaultsite回调方法会将新的收货地址赋值给this.changessite。
					 * 由于订单提交页需要同时 兼容2部分。1.用户没新设置地址，则以默认地址传递给订单页。2.用户设置了新地址，也要传递给订单页。（由此可知设置和没设置只能存在一个。即三元表达式）
					 */
					defaultsite:this.changessite.address==null?this.defaultsite:this.changessite//默认地址
				}
				this.$router.push({name:'confirmOrder',params:{orderContent:orderContent}})
			},
			changeAddress(val) {//设置新地址 回调方法
				this.changessite = val
				console.log(val)
			}
		},
		components: {
			Swipe,
			SwipeItem,
			Icon,
			GoodsAction,
			GoodsActionBigBtn,
			GoodsActionMiniBtn,
			Row,
			Col,
			shippingAddress,
			Classification
		}
	}
</script>

<style lang="scss" scoped>
	.swipe_imgs {
		width: 100%;
		height: 300px;
	}
	
	.custom-indicator {
		position: absolute;
		font-size: 14px;
		bottom: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.1);
		color: #fff;
		padding: 2px 10px;
		border-radius: 8px;
	}
	
	.details_content {
		border: 0px solid black;
		.details_next {
			/*height: 40px;*/
			.details_price {
				display: flex;
				font-weight: bold;
				color: red;
				margin: 10px;
			}
			.details_icon_box1 {
				border: 0px solid black;
				height: 36px;
				width: 60px;
				float: right;
				margin-top: -40px;
				margin-right: 50px;
				.details_icon1 {
					font-size: 20px;
				}
				.details_icon1_text {
					font-size: 12px;
					display: flex;
					margin-left: 6px;
					margin-top: -4px;
				}
			}
			.details_icon_box2 {
				border: 0px solid black;
				height: 36px;
				width: 60px;
				float: right;
				margin-top: -40px;
				margin-right: 0px;
				.details_icon2 {
					font-size: 20px;
				}
				.details_icon1_text {
					font-size: 12px;
					display: flex;
					margin-left: 18px;
					margin-top: -4px;
				}
			}
		}
		.original_cost {
			display: flex;
			margin-left: 10px;
			color: #666;
			font-size: 14px;
			text-decoration: line-through;
		}
		.commodity_name {
			margin-top: 6px;
			font-size: 14px;
			font-weight: bold;
			margin-left: 10px;
			display: flex;
			text-align: left;
		}
		.commodity_desc {
			margin-top: 6px;
			font-size: 12px;
			margin-left: 10px;
			display: flex;
			text-align: left;
		}
	}
	
	.commodity_configuration {
		border: 1px solid #F7F8FA;
		background: #F7F8FA;
		text-align: left;
		height: 90px;
	}
	
	.detail_ul_li {
		float: left;
		padding: 0px 10px;
	}
	
	.detail_li_icon {
		font-size: 2px;
		margin-top: 4px;
	}
</style>