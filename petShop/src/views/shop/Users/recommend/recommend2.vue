<template>
	<div>
		<div class="recommend_box">
			<div class="recommend_content" v-for="item in content">
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
			img:'http://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/118028622/TB2YyHcvKSSBuNjy0FlXXbBpVXa_!!0-saturn_solar.jpg_180x180.jpg_.webp',
			cargoName:'布尔宝螨真猫癣狗藓猫咪狗狗皮肤病外用药真菌感染宠物除螨虫喷剂',
			price:'¥ 55.00',
		},
		{
			img:'http://g-search1.alicdn.com/img/bao/uploaded/i4/i1/754897779/O1CN0182hSrb27KpUqJVjRJ_!!0-item_pic.jpg_180x180.jpg_.webp',
			cargoName:'波奇网福来恩体外驱虫药中型犬驱虫滴剂整盒',
			price:'¥ 191.00',
		},
		{
			img:'http://g-search2.alicdn.com/img/bao/uploaded/i4/i1/72589981/O1CN01ZXfs9L2NbLczbSJoK_!!72589981.jpg',
			cargoName:'FPV试纸猫瘟病毒检测卡 dogstory',
			price:'¥ 5.00',
		},
		{
			img:'http://g-search2.alicdn.com/img/bao/uploaded/i4/i3/300382276/O1CN01Y5DFDJ1SgRvvMn0Jy_!!300382276.jpg_180x180.jpg_.webp',
			cargoName:'狗狗伤口止血粉消炎泰迪雪纳瑞法斗断甲止血粉',
			price:'¥ 39.90',
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
			console.log("2")
		},
		components:{
			Tag
		}
	}
</script>

<style lang="scss" scoped>
	@import url("recommend.css");
</style>