<template>
	<div>
		1
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				 a:100
			};
		},
		mounted(){
			var aaa=10000
			console.log(aaa)
			aaa=10
			console.log(aaa)
			var that=this
			function test(){
			   console.log(that.a)
			   that.a=10
			   console.log(that.a)
			}
			test()
		}
	};
</script>

<style>

</style>