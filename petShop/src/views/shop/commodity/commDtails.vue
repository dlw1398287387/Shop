<template>
	<div>
			<van-swipe @change="onChange">
				<div v-for="item in imgs">
				  <van-swipe-item>
				  	<img class="swipe_imgs" :src="item.img"/>
				  </van-swipe-item>
			 	</div>
			
			  <div class="custom-indicator" slot="indicator">
			    {{ current + 1 }}/4
			  </div>
			</van-swipe>
			
			<div class="details_content">
				<!--促销价格  2个Icon-->
				<div class="details_next">
					<span class="details_price">¥2899.00</span>
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
							  	<span style="font-size: 12px; font-weight: bold;">好主人狗粮 全犬种通用5斤泰迪金毛拉布拉多比熊萨摩耶边牧法斗柯基阿拉斯加幼犬狗粮天然粮</span>
							</van-col>
							<van-col span="2">
							  	<van-icon name="ellipsis" style="margin: 8px; font-weight: bold;"/>
							</van-col>
						</van-row>
					</div>
					<!--选择送货地址-->
					<div style="margin-top:10px ; background: #FFFFFF;">
						<van-row>
							<van-col span="4">
							  	<span style="display: flex; margin: 10px; font-size: 14px; color: #666;">送至</span>
							</van-col>
							<van-col span="18" style="padding: 6px 0px;">
							  	<span style="font-size: 12px;">广东深圳龙华区大浪北路凯宾新村()</span><br />
							  	<span style="color: red;font-size: 12px;">现货,</span>
							  	<span style="font-size: 12px;">今日16:00前完成下单，预计3月6日23:30前发货</span>
							</van-col>
							<van-col span="2">
							  	<van-icon name="ellipsis" style="margin: 8px; font-weight: bold;"/>
							</van-col>
						</van-row>
					</div>
					<!--免运费desc-->
					<div style="margin-top:00px; background: #FFFFFF;">
						<van-row>
							<van-col span="4">
							  	<span style="display: flex; margin: 10px; font-size: 14px; color: #666;">运费</span>
							</van-col>
							<van-col span="20" style="padding: 10px 0px;">
							  	<span style="font-size: 12px; font-weight: bold;">免运费</span>
							</van-col>
						</van-row>
					</div>
					<div style="height: 100px; background: #FFFFFF;">
						<ul v-for="item in service_support">
							<li class="detail_ul_li">
								<van-icon name="passed" color="red" class="detail_li_icon"/>
								<span style="font-size: 12px;">{{item.desc}}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<van-goods-action>
			  <van-goods-action-mini-btn
			    icon="chat-o"
			    text="客服"
			    @click="clickService"
			  />
			  <van-goods-action-mini-btn
			    icon="shop-o"
			    text="店铺"
			    @click="clickShop"
			  />
			  <van-goods-action-mini-btn
			    info="5"
			    icon="cart-o"
			    text="购物车"
			    @click="clickShoppingCart"
			  />
			  <van-goods-action-big-btn text="加入购物车" />
			  <van-goods-action-big-btn
			    primary
			    text="立即购买"
			    @click="clickPurchase"
			  />
			</van-goods-action>
	</div>
</template>

<script>
	import { Swipe, SwipeItem ,Icon,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,  Row, Col  } from 'vant';
	export default{
		name:'commDtails',
		data(){
			return{
				imgs:[{img:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/7891/27/15904/130166/5c7507ecE37fbbcca/e83f9dd699604906.jpg!q80.dpg.webp'},
					  {img:'http://m.360buyimg.com/mobilecms/s720x720_jfs/t27685/257/138174952/125243/91747752/5b8657d3N0fc91f44.jpg!q70.dpg.webp'},
					  {img:'http://m.360buyimg.com/mobilecms/s720x720_jfs/t23188/261/2536609299/123828/d9875db5/5b8657d5Nc20275f4.jpg!q70.dpg.webp'},
					  {img:'http://m.360buyimg.com/mobilecms/s720x720_jfs/t26683/240/128771839/125798/d7787eb2/5b8657d7Nd941db4b.jpg!q70.dpg.webp'}
					  ],
				current: 0,
				service_support:[{desc:'店铺发货&售后'},{desc:'货到付款'},{desc:'送保险'},{desc:'极速审核'},{desc:'七天无理由退货'}]
			}
		},
		methods:{
			onChange(index) {
		      this.current = index;
		   	},
			clickService(){
			   	console.log("客服")
			},
			clickShoppingCart(){
				console.log("购物车")
			},
			clickShop(){
				console.log("店铺")
			},
			clickPurchase(){
				console.log("立即购买")
			}
		},
		components:{
			Swipe, SwipeItem ,Icon,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,  Row, Col 
		}
	}
</script>

<style lang="scss" scoped>
.swipe_imgs{
	width: 100%;
	height: 300px;
}
.custom-indicator{
	position: absolute;
	font-size: 14px;
	bottom: 10px;
	right: 10px;
	background: rgba(0, 0, 0, 0.1);
	color: #fff;
	padding: 2px 10px;
	border-radius: 8px;
}
.details_content{
	border: 0px solid black;
	.details_next{
		/*height: 40px;*/
		.details_price{
			display: flex;
			font-weight: bold;
			color: red; 
			margin: 10px;
		}
		.details_icon_box1{
			border: 0px solid black; 
			height: 36px; 
			width: 60px;
			float: right;
			margin-top: -40px;
			margin-right: 50px;
			.details_icon1{
				font-size: 20px;
			}
			.details_icon1_text{
				font-size: 12px;
				display: flex;
				margin-left: 6px;
				margin-top: -4px;
			}
		}
		.details_icon_box2{
			border: 0px solid black; 
			height: 36px; 
			width: 60px;
			float: right;
			margin-top: -40px;
			margin-right: 0px;
			.details_icon2{
				font-size: 20px;
			}
			.details_icon1_text{
				font-size: 12px;
				display: flex;
				margin-left: 18px;
				margin-top: -4px;
			}
		}
	}
	.original_cost{
		display: flex;
		margin-left: 10px;
		color: #666;
		font-size: 14px;
		text-decoration: line-through;
	}
	.commodity_name{
		margin-top: 6px;
		font-size: 14px;
		font-weight: bold;
		margin-left: 10px;
		display: flex;
		text-align: left;
	}
	.commodity_desc{
		margin-top: 6px;
		font-size: 12px;
		margin-left: 10px;
		display: flex;
		text-align: left;
	}
}

.commodity_configuration{
	border: 1px solid #F7F8FA; 
	background: #F7F8FA; 
	text-align: left;
	height: 90px;
}

.detail_ul_li{
	float: left;
	padding:0px 10px;
}
.detail_li_icon{
	font-size: 2px; margin-top: 4px;
}
</style>