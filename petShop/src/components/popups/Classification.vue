<template>
	<div>
		<van-popup style="height:450px;" v-model="show" position="bottom" :overlay="true">
			<div>
				<div style="height: 110px;">
					<img class="commodity_img" :src="activeimg" />
					<van-icon name="cross" class="icons_cross" @click="outShow" />
					<span class="class_price">¥{{price}}</span>
					<span class="class_check">
		  			已选：<span style="color: black;">{{calculate}}</span>
					</span>
				</div>
				<div>
					<div class="Scroll_area">
						<div style="width: 100%;">
							<div class="commodity_type">类型</div>
							<div v-for="(item,index) in PropsData.Selectl.category">
								<span :class="active==item.id?'active':'Classification'" @click="oncheck1(item.id,item.img)">{{item.id}}</span>
							</div>
						</div>

						<div class="commodity_v">
							版本
						</div>
						<div style="width: 100%; display: flex;">
							<div v-for="item in PropsData.Selectl.versions">
								<span :class="active2==item.id?'active':'Classification'" @click="oncheck2(item.id)">{{item.id}}</span>
							</div>
						</div>

						<div style="width:100%; height: 41px;">
							<label style="margin-left: 10px;line-height: 31px;">数量</label>
							<van-stepper v-model="value" style=" float: right; margin-right: 20px;" />
						</div>
						
						<!--可拓展-->
					</div>
				</div>
			</div>

			<div style="position: fixed; bottom: 0px;width: 49.9%;height: 50px;background: #ff9600;">
				<span style="display: flex;line-height: 50px;justify-content: center;font-weight: bold;color: #FFFFFF;">加入购物车</span>
			</div>
			<div style="position: fixed;bottom: 0px; margin-left: 50%; width: 49.9%;height: 50px;background: #E4393C;">
				<span style="display: flex; line-height: 50px;justify-content: center;font-weight: bold;color: #FFFFFF;" @click="SubmitOrder">立即购买</span>
			</div>

		</van-popup>
	</div>
</template>

<script>
//	import {CommDatails} from '@/views/shop/commodity/mock'
	import { Popup, Icon, Stepper } from 'vant';
	export default {
		name: 'Classification',
		data() {
			return {
				show: false,
				PropsData:this.comm,
				active:'',
				active2:'',
				activeimg:'',
				value: 1,
				price:'',
				
			}
		},
		props:{
			comm:{
				type:Object
			}
		},
		mounted() {
			 this.active='760P'
			 this.active2='512G'
			 this.activeimg="http://m.360buyimg.com/mobilecms/s720x720_jfs/t23635/212/348009694/579108/3b61eb9b/5b2ce9b5Nc13ac7a7.png.webp"
			 console.log(this.PropsData)
		},
		computed:{
			calculate(){
				if(this.active!=""&&this.active2!=""){
					for(var i=0;i<this.PropsData.verify.length;i++){
						if(this.PropsData.verify[i].c==this.active&&this.PropsData.verify[i].v==this.active2){
							/**
							 * 这个地方解释一下。因为我们传过来是object类型，他们同时指向同一个地址。
							 * 当你修改子组件中的数据时，父组件也会做出相应的改变
							 */
							this.price=this.PropsData.verify[i].price*this.value
							this.PropsData.defaultCheck.Classify=this.active
							this.PropsData.defaultCheck.Versions=this.active2
							this.PropsData.defaultCheck.img=this.activeimg
							return this.active+","+this.active2+","+this.value+"个,"+this.PropsData.verify[i].inventory+"库存"
						}
					}
				}
			},
		},
		methods: {
			onOpenshow() {
				this.show = true
			},
			outShow() {
				this.show = false
			},
			//选择分类
			oncheck1(name,img){
				this.active=name
				this.activeimg=img
			},
			//选择颜色 版本
			oncheck2(name){
				this.active2=name
			},
			SubmitOrder(){
				//将必要订单信息 传递给订单页。
				var orderContent={
					storeContent:this.datas.storeContent,
					ProductName:this.PropsData.ProductName,
					price:this.price,
					defaultCheck:this.PropsData.defaultCheck,
					defaultsite:this.PropsData.defaultsite
				}
				console.log(orderContent)
				this.$router.push({name:'confirmOrder',params:{orderContent:orderContent}})
			}
		},
		components: {
			Popup,
			Icon,
			Stepper
		}
	}
</script>

<style lang="scss" scoped>
	.active{
		float: left;
		margin-left: 10px;
		padding: 10px;
		background: #efc531;
		margin-bottom: 10px;
		border-radius: 4px;
		font-size: 14px;
	}
	
	.commodity_img {
		height: 90px;
		padding: 10px;
	}
	
	.icons_cross {
		float: right;
		font-size: 18px;
		padding: 10px;
	}
	
	.class_price {
		color: red;
		position: absolute;
		margin: 10px;
		margin-top: 20px;
	}
	
	.class_check {
		position: absolute;
		font-size: 12px;
		margin-top: 40px;
		padding: 10px;
		color: #666;
	}
	
	.Scroll_area {
		width: 100%;
		height: 290px;
		overflow: scroll;
		border: 0px solid black;
	}
	
	.commodity_type {
		width: 100%;
		height: 30px;
		margin-left: 10px;
		font-size: 12px;
		color: #666;
	}
	
	.commodity_v {
		display: flex;
		width: 100%;
		height: 30px;
		font-size: 12px;
		color: #666;
		margin-left: 10px;
	}
	
	.Classification {
		float: left;
		margin-left: 10px;
		padding: 10px;
		background: #f7f7f7;
		margin-bottom: 10px;
		border-radius: 4px;
		font-size: 14px;
	}
</style>