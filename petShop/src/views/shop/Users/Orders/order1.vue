<template>
	<div>
		<div v-for="item in orders" style="margin-bottom: 10px; text-align: left;">
			<van-card
			  :num="item.count"
			  :tag="item.tag"
			  :price="item.price"
			  :desc="item.desc"  
			  :title="item.productname"
			  :thumb="item.thumb"
			  :origin-price="item.master_price"
			>
			  <div slot="footer">
			    <van-button size="mini" >删除订单</van-button>
			    <van-button size="mini" v-if="item.state==100" >卖了换钱</van-button>
			    <van-button size="mini" v-if="item.state==101" >去付款</van-button>
			    <van-button size="mini" v-if="item.state==102" >待发货</van-button>
			    <van-button size="mini" v-if="item.state==103" >待收货</van-button>
			    <van-button size="mini" v-if="item.state==104" >去评价</van-button>
			  </div>
			</van-card>
		</div>
	</div>
</template>

<script>
	const datas=[
		{	count:'1',
			tag:'二手',
			price:'188.00',
			desc:'Gigabyte/技嘉 RTX 2080  显存容量: 8GB 成色: 全新',
			productname:'现货AORUS 技嘉RTX2080ti 11G显卡 XTREME大雕',
			thumb:'http://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/97649794/O1CN012MDhX4e7juV6SM1_!!0-saturn_solar.jpg_180x180.jpg_.webp',
			master_price:'12888.00',
			state:'100'
		},
		{
			count:'1',
			tag:'新货',
			price:'30000.00',
			desc:'显存容量: 11GB成色: 全新品牌: 英伟达型号: 英伟达 Volta 伏特质保时间: 3年',
			productname:'NVIDIA TITAN V 英伟达 Volta 伏特 新泰坦V显卡公版正品',
			thumb:'http://g-search3.alicdn.com/img/bao/uploaded/i4/i1/698714162/TB2Syd_bbSYBuNjSspiXXXNzpXa_!!698714162.png_180x180.jpg_.webp',
			master_price:'36666.00',
			state:'101'
		},
		{
			count:'1',
			tag:'现货',
			price:'1999.00',
			desc:'品牌: Intel/英特尔Intel型号: i5 8600k CPU主频: 3.6GHz',
			productname:'Intel/英特尔 i5 8600K 盒装CPU台式机电脑处理器 1151针cpu',
			thumb:'http://g-search2.alicdn.com/img/bao/uploaded/i4/i3/1134114936/O1CN01BCyYGo1mKjTlCIvNM_!!0-item_pic.jpg_180x180.jpg_.webp',
			master_price:'2349.00-2399.00',
			state:'102'
		},
		{
			count:'2',
			tag:'现货',
			price:'738.00',
			desc:'HX424C15FB/8G 8GB DDR4 2400MHz',
			productname:'金士顿 骇客神条ddr4 8G 2400 2666 3000 3200 3600 4000 台式机电脑游戏内存条RGB 8g内存条',
			thumb:'http://g-search3.alicdn.com/img/bao/uploaded/i4/i2/1577744489/O1CN0147bjZZ1j20QrnnUAg_!!0-item_pic.jpg_180x180.jpg_.webp',
			master_price:'435.00-789.00',
			state:'103'
		},
		{
			count:'1',
			tag:'现货',
			price:'899.00',
			desc:'B360-G GAMING intel LGA 1151 B360 M-ATX紧凑型 DDR4 双通道',
			productname:'Asus/华硕 B360-G GAMING旗舰店电脑台式机B360 1151针主板',
			thumb:'http://g-search2.alicdn.com/img/bao/uploaded/i4/i2/654519625/O1CN01Dn6cDv2KyIdO9BHwp_!!0-item_pic.jpg_180x180.jpg_.webp',
			master_price:'1099.00',
			state:'104'
		},
	]
	import { Card } from 'vant';
	export default{
		name:'order1',
		data(){
			return{
				orders:datas
			}
		},
		components:{
			Card
		}
	}
</script>

<style>
</style>