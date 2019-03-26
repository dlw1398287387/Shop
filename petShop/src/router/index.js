import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
//	mode: 'history',
  routes: [
		{
			path:'/',
			name:'index',
			redirect:'pet_home',
		},
		{//主页
			path:'/pet_home',
			name:'pet_home',
			component:()=>import('@/views/shop/pet_home')
		},
		{//搜索栏
			path:'/search',
			name:'search',
			component:()=>import('@/views/shop/search')
		},
		{//搜索宠物商店页头部
			path:'/Folded_plate',
			name:'Folded_plate',
			component:()=>import('@/components/modularization/Folded_plate')
		},
		{//搜索宠物商店列表
			path:'/petStoreList',
			name:'petStoreList',
			component:()=>import('@/views/shop/petStoreList')
		},
		{//商品详情页
			path:'/details_navigation',
			name:'details_navigation',
			component:()=>import('@/views/shop/commodity/details_navigation')
		},
		{
			path:'/purchase',
			name:'purchase',
			component:()=>import('@/views/shop/commodity/purchase')
		},
		{//用户主页
			path:'/Users/User_page',
			name:'User_page',
			component:()=>import('@/views/shop/Users/User_Page'),
		},
		{//用户设置
			path:'/Users/setting',
			name:'setting',
			component:()=>import('@/views/shop/Users/setting')
		},
		{//店铺关注，喜欢，浏览记录 子页
			path:'/container',
			name:'container',
			component:()=>import('@/views/shop/Users/container')
		},
		{//收货地址列表
			path:'/Users/ConsigneeList',
			name:'ConsigneeList',
			component:()=>import('@/views/shop/Users/address/ConsigneeList')
		},
		{//添加收货列表
			path:'/Users/AddConsignee',
			name:'AddConsignee',
			component:()=>import('@/views/shop/Users/address/AddConsignee')
		},
		{//修改收货列表
			path:'/Users/EditConsignee',
			name:'EditConsignee',
			component:()=>import('@/views/shop/Users/address/EditConsignee')
		},
		{//订单页
			path:'/Users/orderLists',
			name:'orderLists',
			component:()=>import('@/views/shop/Users/Orders/orderLists')
		},
		{//提交订单
			path:'/confirmOrder',
			name:'confirmOrder',
			component:()=>import('@/views/shop/commodity/confirmOrder')
		},
		{//购物车订单提交
			path:'/submitCart',
			name:'submitCart',
			component:()=>import('@/views/shop/commodity/submitCart')
		},
		{//购物车
			path:'/shoppingCart',
			name:'shoppingCart',
			component:()=>import('@/views/shop/shoppingCart')
		},
    { //设备端 petTV
      path: '/pettv',
      name: 'pettv',//
      component:()=>import('@/views/pet_tv/petTv')
    },
		{//协议页
			path:'/registerProtocol',
			name:'registerProtocol',
			component:()=>import('@/views/Userreadingprotocol/RegisterProtocol')
		},
		{//隐私
			path:'/Users/privacy',
			name:'privacy',
			component:()=>import('@/views/shop/else/privacy')
		},
		{//反馈
			path:'/Users/feedback',
			name:'feedback',
			component:()=>import('@/views/shop/else/feedback')
		},
		{//关于我们
			path:'/User/About_Us',
			name:'About_Us',
			component:()=>import('@/views/shop/else/About_Us')
		},
    {//400错误页面
			path:'/400',
			name:'400',
			component:()=>import('@/views/error/400')
		},
		
		//测试页面
		{
    	path:'/t1',
    	name:'t1',
    	component:()=>import('@/views/test/t1')
    },
    {
    	path:'/No_more',
			name:'No_more',
			component:()=>import('@/components/modularization/No_more')
    },
    {
    	path:'/check',
    	name:'check',
    	component:()=>import('@/views/test/check')
    }
  ],
  
  /**
   * 解决跳转第二页不在顶部的问题！
   */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
	}
})


//		{//商品详情页——(导航栏)
//  	path:'/detailsLayout',
//  	name:'detailsLayout',
//  	component:()=>import('@/components/modularization/detailsLayout'),
//  	children:[
//  			
//  	]
//  },