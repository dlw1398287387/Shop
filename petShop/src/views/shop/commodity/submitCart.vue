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
				<div class="address" @click="selectAddress">
					<van-tag round type="primary">地 &nbsp;&nbsp;&nbsp;址</van-tag>&nbsp;&nbsp;<span>{{recipients.address}}</span>
				</div>
				<van-icon name="arrow" @click="selectAddress" style='float: right; margin-top: -40px;font-size: 14px;font-weight: bold;margin-right: 6px;' />
				<div class="border"></div>
				<shippingAddress ref="shippingaddress" v-on:changeAddress="changeAddress"></shippingAddress>
			</div>
			<div class="modeofpayment" @click="maintain">
				<van-cell title="支付方式" value="在线支付..." style="text-align: left;" />
			</div>

			<div class="order_details" v-for="item in data">
				<div class="store">
					<van-icon name="shop-o" class="store_icon" />
					<span class="store_name">{{item.storeName}}</span>
				</div>
				<div class="store_box">
					<img class="store_box_img" :src="item.img" />
					<span class="store_box_name">{{item.comm_name}}</span>
					<span class="store_box_type">{{item.comm_type}}</span>
					<div style="display: flex; justify-content: space-between;">
						<span class="store_box_price">¥{{item.comm_price}} </span>
						<span style="margin-right: 10px;">x{{item.comm_sum}}</span>
					</div>
					<div class="store_box_tag">支持七天无理由退货(拆封后不支持)</div>
				</div>
				<div style="width: 100%; display: flex;" v-if="item.complimentary!=''">
					<span style="font-size: 12px; color: #666; margin-left: 14px;">[赠品]{{item.complimentary}}</span>
				</div>
				<div>
					<van-cell title="配送" value="快递运输" style="text-align: left;" />
					<van-cell title="工作日、双休与节假日均送货" style="text-align: right;" />
				</div>
				<div class="leave_msg">
					<span class="leave_span">留言</span>&nbsp;&nbsp;
					<input class="leave_input" type="text" placeholder="建议留言前先与商家沟通确认" />
				</div>
			</div>
			
			<div style="width: 94%; margin-left: 3%; background: #FFFFFF; margin-top: 10px; margin-bottom: 20px;">
				<div style="display: flex; justify-content: space-between;">
					<span style="font-size: 14px;margin-top: 10px;margin-left: 10px;">商品金额</span>
					<span style="font-size: 14px;margin-top: 10px;margin-right: 10px;margin-bottom: 10px;">¥.00</span>
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
			<div style="height: 50px;"></div>
			<van-submit-bar
			  :price="100*100"
			  button-text="提交订单"
			  @submit="onSubmit"
			/>
		</div>

	</div>
</template>

<script>
	const data = [{
		storeName: '形形色色旗舰店',
		img: 'http://img10.360buyimg.com/mobilecms/s117x117_jfs/t18298/75/754514272/379264/afdd3c20/5aa64678N0b4e73c8.jpg!q70.dpg.webp',
		comm_name: '菠萝菠萝菠萝蜜新鲜水果20kg',
		comm_type:'0-20斤',
		comm_price:'89.90',
		comm_sum:1,
		complimentary:'坏多少赔多少，附带损坏图片'
	},
	{
		storeName: '形形色色旗舰店',
		img: 'http://img10.360buyimg.com/mobilecms/s117x117_jfs/t18298/75/754514272/379264/afdd3c20/5aa64678N0b4e73c8.jpg!q70.dpg.webp',
		comm_name: '菠萝菠萝菠萝蜜新鲜水果20kg',
		comm_type:'0-20斤',
		comm_price:'89.90',
		comm_sum:1,
		complimentary:'坏多少赔多少，附带损坏图片'
	},
	]
	import { Cell, Toast, SubmitBar} from 'vant';
	import navigationTop from '@/components/modularization/navigationTop'
	import shippingAddress from '@/components/popups/shippingAddress'
	export default {
		name: 'submitCart',
		data() {
			return {
				recipients: '',
				data:data,
			}
		},
		computed: {

		},
		mounted() {
			this.defaultAddress()
		},
		methods: {
			//唤醒shippingAddress回调
			selectAddress() {
				this.$refs.shippingaddress.openShow()
			},
			//设置新地址回调，当触发此方法，则证明，用户需要从新设置收件人地址信息，我们从回调中从新获取并覆盖this.recipients即可！
			changeAddress(val) {
				this.recipients = val
			},
			maintain() {
				Toast('目前仅支持线上交易!敬请期待后续迭代!');
			},
			invoice() {
				Toast('此项维护中！~');
			},
			/**
			 * 获取默认地址
			 */
			defaultAddress() {
				var addressData = JSON.parse(localStorage.getItem('DirectoryInquiries'))
				for(var i = 0; i < addressData.length; i++) {
					if(addressData[i].id == "1") {
						this.recipients = addressData[i]
					}
				}
			},
			onSubmit(){
				
			}

		},
		components: {
			navigationTop,
			shippingAddress,
			Cell,
			Toast,
			SubmitBar
		}
	}
</script>

<style lang="scss" scoped>
	.addressInformation {
		width: 100%;
		height: 70px;
		background: #FFFFFF;
		margin-bottom: 10px;
		.name_phone {
			display: flex;
			font-size: 14px;
			font-weight: bold;
			padding: 10px;
		}
		.address {
			display: flex;
			font-size: 12px;
			margin-left: 10px;
		}
		.border {
			margin-top: 4px;
			height: 2px;
			background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
			background-size: 100px;
		}
	}
	
	.modeofpayment {
		width: 94%;
		height: 40px;
		margin-left: 3%;
		background: #FFFFFF;
		margin-bottom: 20px;
	}
	
	.order_details {
		width: 94%;
		height: 100%;
		margin-left: 3%;
		background: #FFFFFF;
		margin-bottom: 20px;
		border-radius: 4px;
		.store {
			height: 30px;
			border-bottom: 1px solid #e5e5e5;
			.store_icon {
				display: flex;
				font-size: 20px;
				padding: 4px;
				margin-left: 6px;
			}
			.store_name {
				display: flex;
				margin-top: -24px;
				margin-left: 30px;
			}
		}
		.store_box {
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			overflow: hidden;
			.store_box_img {
				padding: 4px;
				display: flex;
				width: 90px;
				background: #FFFFFF;
			}
			.store_box_name {
				display: flex;
				font-size: 12px;
				font-weight: bold;
				margin-left: 98px;
				margin-top: -90px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				/*! autoprefixer: off*/
				-webkit-box-orient: vertical;
				/* autoprefixer: on */
				-webkit-line-clamp: 1;
				text-align: left;
				margin-bottom: 6px;
			}
			.store_box_type {
				display: flex;
				font-size: 12px;
				margin-left: 98px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				/*! autoprefixer: off*/
				-webkit-box-orient: vertical;
				/* autoprefixer: on */
				-webkit-line-clamp: 1;
				text-align: left;
				margin-bottom: 4px;
			}
			.store_box_price {
				display: flex;
				font-size: 18px;
				margin-left: 98px;
				color: red;
				margin-bottom: 4px;
			}
			.store_box_tag {
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
		.store_count {
			display: flex;
			justify-content: space-between;
			width: 100%;
			font-size: 14px;
			margin-bottom: 10px;
		}
		.afterService span {
			display: flex;
			font-size: 14px;
			margin-left: 10px;
		}
		.leave_msg {
			display: flex;
			margin-left: 10px;
			margin-bottom: 20px;
			.leave_span {
				font-size: 14px;
			}
			.leave_input {
				width: 80%;
				border: 0px solid;
				font-size: 14px;
				color: #666;
				margin-top: -4px;
			}
		}
	}
</style>