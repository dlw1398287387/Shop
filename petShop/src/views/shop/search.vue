<template>
  <div>
			
			<div class="search_box" >
				<div style="width: 18px;"></div>
				<div class="search_box_ii">
					<van-icon class="search_icon" name="search" />
					<input class="search_input"  placeholder="请输入" v-model="search_condition"/>
				</div>
				<span class="search_text">搜索</span>
			</div>
			
			<div v-for="item in lists" class="search_return">
				<div class="search_return_font" @click="onclickContent(item.id)">
					{{item.id}}
				</div>
			</div>
			
			<div v-if="lists==0" class="recommend_box">
					<div class="recommend_content">
						<span>热门搜索</span>
						<div v-for="item in searchText">
							<div class="recommend_content_condition" @click="onclickContent(item.name)">{{item.name}}</div>
						</div>
					</div>
			</div>
			
			<div v-if="lists==0" class="recommend_box">
					<div class="recommend_content">
						<van-icon class="history_icon" name="delete"  @click="recycleHistory"/>
						<span>历史搜索</span>
						<div v-for="item in searchText1">
							<div class="recommend_content_condition" @click="onclickContent(item.name)">{{item.name}}</div>
						</div>
					</div>
			</div>

		
  </div>
</template>

<script>

import { Icon } from 'vant';
export default {
	name:"searc",
	data (){
    return {
      results: [],
      value: 'test',
      search_condition:"",
      searchText:[{name:'狗粮'},{name:"猫粮"},{name:'狗粮'},{name:"猫粮"},{name:'狗粮'},{name:"猫粮"},{name:'狗粮'},{name:"猫粮"},{name:'狗粮'},{name:"猫粮"},{name:"铲屎官"},{name:"猫砂"},{name:"狗罐头"},{name:'狗罐头'},{name:"猫罐头"},{name:"铲屎官"},{name:"猫砂"},],
      searchText1:[{name:'砂锅粥连锁经典'},{name:"砂锅粥"},{name:"3D星空梦幻错觉艺术馆"},{name:"灸鼎京味灸子烤肉"},{name:"[同城送花]七彩鲜花店"},{name:"花店送花上门"},{name:"咖啡厅"}],
      lists:[]
    }
  },
  components: {
    
  },
  methods: {
  	onBack(){
  		this.$router.back(-1);
  	},
    recycleHistory(){
    	alert("确定要清空历史搜索记录吗？")
    	this.searchText1=[]
    },
    onclickContent(msg){
    	console.log(msg)
    }
  },
  components:{
  	Icon
  },
  watch:{
    	search_condition(value){
    		console.log(value)
    		if(value!=""){
    			this.lists=[{id:value+"条件1"},{id:value+"条件2"},{id:value+"条件3"},{id:value+"条件4"},{id:value+"条件5"},{id:value+"条件6"},{id:value+"条件7"},{id:value+"条件8"},{id:value+"条件1"}]
    		}else{
    			this.lists=[]
    		}
    	}
  },
}

</script>
<style lang="scss" scoped>
.search_box{
	height: 40px; 
	border: 0px solid black;
	display: flex;
	margin-top: 4px;
	border-bottom: 1px solid #e5e5e5;
	.search_box_ii{
		background: #F7f7f7;
		overflow: hidden;
		width: 80%;
		height: 36px;
		display: flex;
		border-radius: 4px;
		.search_icon{
			font-size: 22px;
			margin-top: 8px;
			margin-left: 14px;
		}
		.search_input{
			width: 80%;
			margin-top: 6px;
			height: 22px;
			font-size: 14px;
			border: 0;
			background: #F7F7F7;
		}
	}
	.search_text{
		font-size: 16px;
		margin-left: 12px;
		margin-top: 6px;
	}
}

.search_return{
	width: 100%;
	height: 100%;
	border-bottom: 1px solid #B6B6B6;
	margin-left: 4%;
}
.search_return_font{
	margin: 5px 0px;
	display: flex;
	margin-left: 10px;
}
.recommend_box{
	width: 94%;
	height: 100%;
	/*border: 0.5px solid lightcoral;*/
	margin-left: 3%;
	display: flex;
}
.recommend_content{
	width: 100%;
	height: 100%;
	/*border: 0.5px solid blueviolet;*/
}
.recommend_content span{
	margin: 10px;
	display: flex;
	font-weight: bolder;
}
.recommend_content_condition{
	/*border: 1px solid #9F9F9F;*/
	float: left;
	background: #F0F2F5;
	padding: 4px 10px;
	margin: 5px 5px;
	border-radius: 4px;
}
.history_icon{
	font-size: 20px;
	float: right;
	margin-right: 10px;
	margin-top: 8px;
}

</style>