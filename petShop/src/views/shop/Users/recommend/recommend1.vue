<template>
	<div>
		<div class="recommend_box">
			<div class="recommend_content" v-for="item in content" @click="goSkip('details_navigation')">
				<img class="recommend_Img" :src="item.img" />
				<div class="recommend_Name">{{item.cargoName}}</div>
				<div class="recommend_Price">{{item.price}}</div>
				<van-tag class="recommend_Tag"  plain type="danger">去看看</van-tag>
			</div>
			
		</div>
	</div>
</template>

<script>
	const data=[{
			img:'http://img11.360buyimg.com/n7/jfs/t1/14187/23/4083/314171/5c2ecacaE805405c5/e9091e031452459d.jpg',
			cargoName:'益和 MATCHWELL 宠物狗狗零食大礼包鸡胸肉  磨牙骨头饼干肉香肠等800g',
			price:'¥ 76.00',
		},
		{
			img:'http://img14.360buyimg.com/n7/jfs/t26281/54/1291734547/194234/32536758/5bc5503bNfbd860bf.jpg',
			cargoName:'YAHO亚禾 狗零食 鸡肉干270g  美味训练用 奖励训犬零食',
			price:'¥ 49.00',
		},
		{
			img:'http://img14.360buyimg.com/n7/jfs/t24409/35/1044463308/236614/e339e811/5b4da4afN5fee3eaf.jpg',
			cargoName:'顽皮宠物狗狗零食牛肝片泰迪金毛狗狗零食 补血补铁训狗奖励 牛肝180g（补血补铁）',
			price:'¥ 76.00',
		},
		{
			img:'http://img14.360buyimg.com/n7/jfs/t24409/35/1044463308/236614/e339e811/5b4da4afN5fee3eaf.jpg',
			cargoName:'多格萨萨蜜  狗零食 鸡胸肉干燥整只 营养肉类磨牙健体520g',
			price:'¥ 54.90',
		}]
	import { Tag } from 'vant';

	export default{
		name:'recommend1',
		data(){
			return{
				content:data,
			}
		},
		mounted(){
			console.log("1")
		},
		methods:{
			goSkip(val){
				this.$router.push({name:val})
			}
		},
		components:{
			Tag
		}
	}
</script>

<style lang="scss" scoped>
	@import url("recommend.css");
</style>