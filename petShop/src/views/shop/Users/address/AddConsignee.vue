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
				<span style="display: flex;justify-content: center;margin-top: 8px;">添加收货地址</span>
			</div>
			<div slot="icon_right">
			</div>
		</navigationTop>
		<div style="height: 20px;"></div>
		<!--添加地址-->
		<van-address-edit
		  :area-list="areaList"
		  show-postal
		  show-set-default
		  save-button-text="保存"
		  @save="onSave"
		  @change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>
	import {data} from '@/views/shop/Users/address/address'
	import navigationTop from '@/components/modularization/navigationTop'
	import { AddressEdit } from 'vant';
	export default{
		name:"AddConsignee",
		data(){
			return{
				areaList:data,
			}
		},
		methods:{
			onSave(content) {
		      console.log(content)
		      var addressData=JSON.parse(localStorage.getItem('DirectoryInquiries'))
		      console.log(addressData)
		      if(addressData!=null&&content.isDefault){
					for(var i=0;i<addressData.length;i++){
						console.log(addressData[i].id="2")
					}
					var address1 ={
			      		id : "1", 
			      		name : content.name, 
			      		 tel : content.tel,
			      		address : content.province+content.city+content.county+content.addressDetail
		      		}
					addressData.push(address1)
					localStorage.setItem("DirectoryInquiries",JSON.stringify(addressData))
					console.log(addressData)
		      }else if(addressData==null){
		      	console.log("添加成功")
		      	var address1 =[{
		      		id : "1", 
		      		name : content.name, 
		      		 tel : content.tel,
		      		address : content.province+content.city+content.county+content.addressDetail
		      	}]
		      	localStorage.setItem("DirectoryInquiries",JSON.stringify(address1))
		      }else{
		      	var address1 ={
			      	id : content.isDefault==true?'1':'2', 
			      	name : content.name, 
			      	 tel : content.tel,
			      	address : content.province+content.city+content.county+content.addressDetail
		      	}
		      	addressData.push(address1)
				localStorage.setItem("DirectoryInquiries",JSON.stringify(addressData))
		      }
		    },
		    onChangeDetail(val) {
//		      console.log(val)
		    }
		},
		components:{
			navigationTop,
			AddressEdit
		}
	}
</script>

<style>
	
</style>