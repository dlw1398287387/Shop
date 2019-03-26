<template>
	<div>
		<navigationTop>
			<div slot="icon_left">
				<div style="margin-top: 5px; font-size: 24px;">
					<van-icon name="arrow-left" />
				</div>
			</div>
			<div slot="content_center">
				<span style="display: flex;justify-content: center;margin-top: 8px;">购物车</span>
			</div>
			<div slot="icon_right"></div>
		</navigationTop>

		<div v-show="!data" style=" width: 100%; border: 0px solid black;" align="center">
			<img src="../../assets/img/kkry.jpg" style="width: 80%; margin-top: 50px;" />
			<div align="center">
				<span @click="goSkip('pet_home')">返回首页</span>
			</div>
		</div>

		<div style="width: 100%; height: 100%; background: #F7F7F7;">
			<div style="height: 10px;"></div>
			<div class="shoppingCart" v-for="item in data">
				<div style="width: 100%; border: 0px solid black;">
					<div style="height: 30px; border: 0px solid black; display: flex; ">
						<van-icon name="shop-o" class="store_icon" style="padding: 6px;" />
						<span style="padding: 6px; font-size: 14px;">{{item.storeName}}</span>
					</div>
					<div class="border"></div>
					<div>
						<van-row>
							<van-col span="2">
								<van-checkbox v-model="item.statu" style="line-height: 110px;" checked-color="red"></van-checkbox>
							</van-col>
							<van-col span="6">
								<img :src="item.img" class="comm_img" />
							</van-col>
							<van-col span="16">
								<span class="comm_Name">{{item.comm_Name}}</span>
								<span class="comm_Type">{{item.comm_Type}}</span>
								<div style="display: flex; justify-content: space-between;">
									<span class="comm_price">¥{{item.comm_price*item.value}}</span>
									<van-stepper v-model="item.value" :disable-input="true" />
								</div>
							</van-col>
						</van-row>
						<div v-if="item.complimentary!=''" style="font-size: 12px;text-align: left; margin-bottom: 10px; margin-left: 10px;">
							赠品:{{item.complimentary}}
						</div>
					</div>
				</div>
			</div>
			<!--拉长页面，当数据量少时看起来不算太突兀-->
			<div :class="data.length>=3==true?'length':'lengtha'"></div>
		</div>
		
		<van-submit-bar :price="totalPrice*100" button-text="提交订单" @submit="onSubmit">
			<van-checkbox style="margin-left: 10px;" v-model="checked" checked-color="red">全选</van-checkbox>
		</van-submit-bar>

	</div>
</template>

<script>
	const data = [{
			statu: true,
			value: 1,
			storeName: '上海电脑配件DIY专营店(浦东店)',
			img: 'http://m.360buyimg.com/mobilecms/s720x720_jfs/t5683/358/2922188343/417060/dc4a1cef/59356516N8668c9a1.png.webp',
			comm_Name: '索泰(ZOTAC)GeForce RTX2080Ti-11GD6X-GAMING',
			comm_Type: '[2080Ti X-GAMING]高效',
			comm_price: 12.00,
			complimentary:'精美改锥一套',
		},
		{
			statu: true,
			value: 1,
			storeName: '电脑配件DIY专营店(武汉店)',
			img: 'http://m.360buyimg.com/mobilecms/s720x720_jfs/t5683/358/2922188343/417060/dc4a1cef/59356516N8668c9a1.png.webp',
			comm_Name: '索泰(ZOTAC)GeForce RTX2080Ti-11GD6X-GAMING',
			comm_Type: '[2080Ti X-GAMING]高效',
			comm_price: 13.00,
			complimentary:'精美改锥一套',
		},
		{
			statu: true,
			value: 1,
			storeName: '电脑配件DIY专营店(武汉店)',
			img: 'http://m.360buyimg.com/mobilecms/s720x720_jfs/t5683/358/2922188343/417060/dc4a1cef/59356516N8668c9a1.png.webp',
			comm_Name: '索泰(ZOTAC)GeForce RTX2080Ti-11GD6X-GAMING',
			comm_Type: '[2080Ti X-GAMING]高效',
			comm_price: 20.00,
			complimentary:'',
		},
	]
	import navigationTop from '@/components/modularization/navigationTop'
	import { Icon, Checkbox, Stepper, SubmitBar, Row, Col } from 'vant';
	export default {
		name:'shoppingCart',
		data() {
			return {
				value: 12,
				checked: true,
				data: data,
				total: 0,
			};
		},
		mounted(){
			console.log(data.length>=3)
		},
		computed: { 
			totalPrice() {//计算购物车金额
				var total = 0;
				for(var i = 0; i < this.data.length; i++) {
					if(this.data[i].statu==true){
						total += this.data[i].comm_price * this.data[i].value
					}
				}
				return total
			}, 
		},
		methods: {
			onSubmit() {
				this.$router.push({name:'submitCart'})
			},
		},
		watch:{
			/**
			 * 全选按钮。当点击全选时将data数据中的状态全部改为true(反之)
			 */
			checked(val){
				if(val==true){
					for(var i=0;i<this.data.length;i++){
						this.data[i].statu=true
					}
				}else{
					for(var i=0;i<this.data.length;i++){
						this.data[i].statu=false
					}
				}
			}
		},
		components: {
			navigationTop,
			Icon,
			Checkbox,
			Stepper,
			SubmitBar,
			Row,
			Col
		}
	};
</script>

<style lang="scss" scoped>
	.van-stepper__input[disabled] {
		color: black;
	}
	
	.shoppingCart {
		display: flex;
		width: 94%;
		height: 100%;
		background: #FFFFFF;
		margin-left: 3%;
		margin-bottom: 10px;
		border-radius: 4px;
	}
	
	.border {
		margin-top: 4px;
		height: 2px;
		background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
		background-size: 100px;
		margin-bottom: 4px;
	}
	
	.comm_img {
		display: flex;
		width: 100%;
		height: 100%;
	}
	
	.comm_Name {
		display: flex;
		font-size: 12px;
		text-align: left;
		margin-bottom: 10px;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/*! autoprefixer: off*/
		-webkit-box-orient: vertical;
		/* autoprefixer: on */
		-webkit-line-clamp: 2;
		text-align: left;
	}
	
	.comm_Type {
		display: flex;
		font-size: 12px;
		text-align: left;
		margin-bottom: 10px;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/*! autoprefixer: off*/
		-webkit-box-orient: vertical;
		/* autoprefixer: on */
		-webkit-line-clamp: 1;
		text-align: left;
	}
	
	.comm_price {
		display: flex;
		font-size: 16px;
		margin-top: 10px;
		text-align: left;
		font-weight: bold;
		color: red;
	}
	.lengtha{
		height: 70vh;
	}
	.length{
		height: 10vh;
	}
	@media only screen and (min-width: 768px) and(max-width:1024px) {
		.comm_img {
			display: flex;
			width: 130px;
			height: 110px;
		}
	}
</style>