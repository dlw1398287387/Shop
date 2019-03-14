<template>
	<div>
		<van-card style="text-align: left;"
		  num="1"
		  tag="新货"
		  price="188"
		  desc="Gigabyte/技嘉 RTX 2080  显存容量: 8GB 成色: 全新"  
		  title="现货AORUS 技嘉RTX2080ti 11G显卡 XTREME大雕"
		  thumb="http://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/97649794/O1CN012MDhX4e7juV6SM1_!!0-saturn_solar.jpg_180x180.jpg_.webp"
		  origin-price="12888"
		>
		  <div slot="footer">
		    <van-button size="mini">删除订单</van-button>
		    <van-button size="mini">去付款</van-button>
		  </div>
		</van-card>
	</div>
</template>

<script>
	const datas=[
		{	count:'1',
			tag:'二手',
			price:'188',
			desc:'原件只要12888的现在，血亏甩卖只要188',
			productname:'现货AORUS 技嘉RTX2080ti 11G显卡 XTREME大雕',
			thumb:'http://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/97649794/O1CN012MDhX4e7juV6SM1_!!0-saturn_solar.jpg_180x180.jpg_.webp',
			master_price:'12888'
		},
		{
			count:'1',
			tag:'新货',
			price:'30000',
			desc:'显存容量: 11GB成色: 全新品牌: 英伟达型号: 英伟达 Volta 伏特质保时间: 3年',
			productname:'NVIDIA TITAN V 英伟达 Volta 伏特 新泰坦V显卡公版正品',
			thumb:'http://g-search3.alicdn.com/img/bao/uploaded/i4/i1/698714162/TB2Syd_bbSYBuNjSspiXXXNzpXa_!!698714162.png_180x180.jpg_.webp',
			master_price:'36666'
		}
	]
	import { Card } from 'vant';
	export default{
		name:'order2',
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