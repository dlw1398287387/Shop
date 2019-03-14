<template>
	<div>
		
		<img v-for="img in imageList" v-lazy="img" style="width: 100%;">
		
	</div>
</template>

<script> 
	export default{
		name:'particulars',
		data(){
			return{
				imageList:['https://img.alicdn.com/imgextra/i3/1795846248/O1CN01byiMBe1w1d75K1Iid_!!1795846248.jpg',
				'https://img.alicdn.com/imgextra/i1/1795846248/O1CN014vNtGU1w1d72yhA3A_!!1795846248.jpg',
				'https://img.alicdn.com/imgextra/i4/1795846248/O1CN01i4oiju1w1d76qUze6_!!1795846248.jpg',
				'https://img.alicdn.com/imgextra/i3/1795846248/O1CN01egjHRy1w1d75K1yJL_!!1795846248.jpg',
				'https://img.alicdn.com/imgextra/i1/1795846248/O1CN01nZ4QYG1w1d74kRARM_!!1795846248.jpg',
				'https://img.alicdn.com/imgextra/i2/1795846248/O1CN01MGwEde1w1d75u92cb_!!1795846248.jpg',
				'https://img.alicdn.com/imgextra/i2/1795846248/O1CN01cSnyyH1w1d745yQjw_!!1795846248.jpg',
				'https://img.alicdn.com/imgextra/i4/1795846248/O1CN01J4R8Mw1w1d75NJa7Y_!!1795846248.jpg',
				'https://img.alicdn.com/imgextra/i3/1795846248/O1CN01Kj4nM71w1d6xsfuv1_!!1795846248.jpg',
				'http://gdp.alicdn.com/imgextra/i4/1795846248/TB2n.3wlCFmpuFjSZFrXXayOXXa_!!1795846248.jpg',
				'http://img.alicdn.com/tfs/TB1.CUdsY9YBuNjy0FgXXcxcXXa-1572-394.png'
				],
			}
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>