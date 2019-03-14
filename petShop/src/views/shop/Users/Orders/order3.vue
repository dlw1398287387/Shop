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
		    <van-button size="mini" >删除订单</van-button>
		    <van-button size="mini" >去付款</van-button>
		  </div>
		</van-card>
	</div>
</template>

<script>
	import { Card } from 'vant';
	export default{
		name:'order3',
		data(){
			return{
				
			}
		},
		components:{
			Card
		}
	}
</script>

<style>
</style>