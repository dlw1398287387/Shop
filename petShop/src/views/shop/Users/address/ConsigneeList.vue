<template>
	<div>
		<!--导航栏-->
		<navigationTop>
			<div slot="icon_left">
				<div style="margin-top: 5px; font-size: 24px;">
					<van-icon name="arrow-left" />
				</div>
			</div>
			<div slot="content_center">
				<span style="display: flex;justify-content: center;margin-top: 8px;">我的收货地址</span>
			</div>
			<div slot="icon_right">
			</div>
		</navigationTop>
		<!--地址内容-->
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		  add-button-text="新增地址"
		  @add="goSkip('AddConsignee')"
		  @edit="onEdit"
		  @select="onSelect"
		/>
		
		<div v-show="show1">
			<span>
				您还没有收货地址喔！
			</span><br />
			<!--<van-button type="default" @click="addmock">添加几条mock数据</van-button>-->
		</div>
		
	</div>
</template>

<script>
	
	import navigationTop from '@/components/modularization/navigationTop'
	import { AddressList,Popup ,Toast } from 'vant';
	export default{
		name:"AddConsignee",
		data(){
			return{
				chosenAddressId: '1',
				list: [],
				show1:false,
			}
		},
		created(){
			
		},
		mounted(){
//			this.$nextTick(()=>{})
			if(JSON.parse(localStorage.getItem('DirectoryInquiries'))==null){
				this.show1=true
				console.log(JSON.parse(localStorage.getItem('DirectoryInquiries')))
			}else{
				this.list=JSON.parse(localStorage.getItem('DirectoryInquiries'))
				console.log(this.list)
				this.show1=false
			}
		},
		methods:{
			goSkip(routerName,routerParams){
				this.$router.push({name:routerName,params:{index:routerParams}})
			},
		    onEdit(item, index) {
		      	this.$router.push({name:'EditConsignee',params:{ctx:item,index:index}})
		    },
		    onSelect(item,index){
//		      	var addresslists = JSON.parse(localStorage.getItem('DirectoryInquiries'))
//		      	if(addresslists.length==1){
//		      		console.log("就一个地址你还设置个蛇？")
//		      	}else{//简单粗暴的写法，直接把所有的选中ID改为2
//		      		for(var i=0;i<addresslists.length;i++){
//		      			addresslists[i].id="2"
//		      		}
//		      		//在赋值角标为index的选项
//		      		addresslists[index].id="1"
//		     		//然后在存入
//		      		localStorage.setItem("DirectoryInquiries",JSON.stringify(addresslists))
//		      		Toast("您将姓名："+item.name+",手机号："+item.tel+",收货地址:"+item.address+",成功设置为默认收货地址！")
//		      	}
		    },

		},
		components:{
			navigationTop,
			AddressList,
			Popup ,
			Toast 
		}
	}
</script>

<style lang="scss" scoped>
	.van-address-item__edit{
		/*display: none;*/
		
	}
	.Popup_r{
		background: #FFFFFF;
		width: 100%;
	}
</style>