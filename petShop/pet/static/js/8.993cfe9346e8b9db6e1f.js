webpackJsonp([8],{"/8Gn":function(t,i){},DFYs:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a("Fd2+"),s={name:"commDtails",data:function(){return{imgs:[{img:"http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/7891/27/15904/130166/5c7507ecE37fbbcca/e83f9dd699604906.jpg!q80.dpg.webp"},{img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t27685/257/138174952/125243/91747752/5b8657d3N0fc91f44.jpg!q70.dpg.webp"},{img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t23188/261/2536609299/123828/d9875db5/5b8657d5Nc20275f4.jpg!q70.dpg.webp"},{img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t26683/240/128771839/125798/d7787eb2/5b8657d7Nd941db4b.jpg!q70.dpg.webp"}],current:0,service_support:[{desc:"店铺发货&售后"},{desc:"货到付款"},{desc:"送保险"},{desc:"极速审核"},{desc:"七天无理由退货"}]}},methods:{onChange:function(t){this.current=t},clickService:function(){console.log("客服")},clickShoppingCart:function(){console.log("购物车")},clickShop:function(){console.log("店铺")},clickPurchase:function(){console.log("立即购买")}},components:{Swipe:n.x,SwipeItem:n.y,Icon:n.p,GoodsAction:n.m,GoodsActionBigBtn:n.n,GoodsActionMiniBtn:n.o,Row:n.u,Col:n.j}},c={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("van-swipe",{on:{change:t.onChange}},[t._l(t.imgs,function(t){return a("div",[a("van-swipe-item",[a("img",{staticClass:"swipe_imgs",attrs:{src:t.img}})])],1)}),t._v(" "),a("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v("\n\t\t    "+t._s(t.current+1)+"/4\n\t\t  ")])],2),t._v(" "),a("div",{staticClass:"details_content"},[a("div",{staticClass:"details_next"},[a("span",{staticClass:"details_price"},[t._v("¥2899.00")]),t._v(" "),a("div",{staticClass:"details_icon_box1"},[a("van-icon",{staticClass:"details_icon1",attrs:{name:"refund-o"}}),t._v(" "),a("span",{staticClass:"details_icon1_text"},[t._v("降价通知")])],1),t._v(" "),a("div",{staticClass:"details_icon_box2"},[a("van-icon",{staticClass:"details_icon2",attrs:{name:"like-o"}}),t._v(" "),a("span",{staticClass:"details_icon1_text"},[t._v("关注")])],1)]),t._v(" "),a("span",{staticClass:"original_cost"},[t._v("¥123.00")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px","border-bottom":"1px solid #666"}}),t._v(" "),a("div",{staticClass:"commodity_configuration"},[a("div",{staticStyle:{"margin-top":"10px",background:"#FFFFFF"}},[a("van-row",[a("van-col",{attrs:{span:"4"}},[a("span",{staticStyle:{display:"flex",margin:"10px","font-size":"14px",color:"#666"}},[t._v("已选")])]),t._v(" "),a("van-col",{staticStyle:{padding:"6px 0px"},attrs:{span:"18"}},[a("span",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[t._v("好主人狗粮 全犬种通用5斤泰迪金毛拉布拉多比熊萨摩耶边牧法斗柯基阿拉斯加幼犬狗粮天然粮")])]),t._v(" "),a("van-col",{attrs:{span:"2"}},[a("van-icon",{staticStyle:{margin:"8px","font-weight":"bold"},attrs:{name:"ellipsis"}})],1)],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px",background:"#FFFFFF"}},[a("van-row",[a("van-col",{attrs:{span:"4"}},[a("span",{staticStyle:{display:"flex",margin:"10px","font-size":"14px",color:"#666"}},[t._v("送至")])]),t._v(" "),a("van-col",{staticStyle:{padding:"6px 0px"},attrs:{span:"18"}},[a("span",{staticStyle:{"font-size":"12px"}},[t._v("广东深圳龙华区大浪北路凯宾新村()")]),a("br"),t._v(" "),a("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("现货,")]),t._v(" "),a("span",{staticStyle:{"font-size":"12px"}},[t._v("今日16:00前完成下单，预计3月6日23:30前发货")])]),t._v(" "),a("van-col",{attrs:{span:"2"}},[a("van-icon",{staticStyle:{margin:"8px","font-weight":"bold"},attrs:{name:"ellipsis"}})],1)],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"00px",background:"#FFFFFF"}},[a("van-row",[a("van-col",{attrs:{span:"4"}},[a("span",{staticStyle:{display:"flex",margin:"10px","font-size":"14px",color:"#666"}},[t._v("运费")])]),t._v(" "),a("van-col",{staticStyle:{padding:"10px 0px"},attrs:{span:"20"}},[a("span",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[t._v("免运费")])])],1)],1),t._v(" "),a("div",{staticStyle:{height:"100px",background:"#FFFFFF"}},t._l(t.service_support,function(i){return a("ul",[a("li",{staticClass:"detail_ul_li"},[a("van-icon",{staticClass:"detail_li_icon",attrs:{name:"passed",color:"red"}}),t._v(" "),a("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(i.desc))])],1)])}),0)])]),t._v(" "),a("van-goods-action",[a("van-goods-action-mini-btn",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.clickService}}),t._v(" "),a("van-goods-action-mini-btn",{attrs:{icon:"shop-o",text:"店铺"},on:{click:t.clickShop}}),t._v(" "),a("van-goods-action-mini-btn",{attrs:{info:"5",icon:"cart-o",text:"购物车"},on:{click:t.clickShoppingCart}}),t._v(" "),a("van-goods-action-big-btn",{attrs:{text:"加入购物车"}}),t._v(" "),a("van-goods-action-big-btn",{attrs:{primary:"",text:"立即购买"},on:{click:t.clickPurchase}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{staticClass:"commodity_name"},[this._v("【不吃包退】好主人狗粮 全犬种通用5斤泰迪金毛拉布拉多比熊萨摩耶边牧法斗柯基阿拉斯加幼犬狗粮天然粮")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{staticClass:"commodity_desc"},[this._v("关注店铺享粉丝价，每日抽奖赢宠粮，奶糕专区满699送爱丽丝价值128元储粮桶，为犬猫囤起来！")])])}]};var e=a("VU/8")(s,c,!1,function(t){a("amQ/")},"data-v-7901208c",null).exports,o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",this._l(this.imageList,function(t){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}],staticStyle:{width:"100%"}})}),0)},staticRenderFns:[]};var l=a("VU/8")({name:"particulars",data:function(){return{imageList:["https://img.alicdn.com/imgextra/i3/1795846248/O1CN01byiMBe1w1d75K1Iid_!!1795846248.jpg","https://img.alicdn.com/imgextra/i1/1795846248/O1CN014vNtGU1w1d72yhA3A_!!1795846248.jpg","https://img.alicdn.com/imgextra/i4/1795846248/O1CN01i4oiju1w1d76qUze6_!!1795846248.jpg","https://img.alicdn.com/imgextra/i3/1795846248/O1CN01egjHRy1w1d75K1yJL_!!1795846248.jpg","https://img.alicdn.com/imgextra/i1/1795846248/O1CN01nZ4QYG1w1d74kRARM_!!1795846248.jpg","https://img.alicdn.com/imgextra/i2/1795846248/O1CN01MGwEde1w1d75u92cb_!!1795846248.jpg","https://img.alicdn.com/imgextra/i2/1795846248/O1CN01cSnyyH1w1d745yQjw_!!1795846248.jpg","https://img.alicdn.com/imgextra/i4/1795846248/O1CN01J4R8Mw1w1d75NJa7Y_!!1795846248.jpg","https://img.alicdn.com/imgextra/i3/1795846248/O1CN01Kj4nM71w1d6xsfuv1_!!1795846248.jpg","http://gdp.alicdn.com/imgextra/i4/1795846248/TB2n.3wlCFmpuFjSZFrXXayOXXa_!!1795846248.jpg","http://img.alicdn.com/tfs/TB1.CUdsY9YBuNjy0FgXXcxcXXa-1572-394.png"]}},components:{}},o,!1,function(t){a("/8Gn")},"data-v-2de4c8f0",null).exports,r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("p",[this._v("商品评论")])])}]};var d=a("VU/8")({name:"comment",data:function(){return{}}},r,!1,function(t){a("jXQh")},null,null).exports,m={name:"details_navigation",data:function(){return{active_comm:"color:red",active_detail:"",active_comment:"",show:1}},methods:{goback:function(){1==this.show?this.$router.go(-1):(this.show=1,this.active_comm="color:red;",this.active_detail="",this.active_comment="")},selected:function(t){"active_comm"==t?(this.active_comm="color:red;",this.active_detail="",this.active_comment="",this.show=1,console.log("商品")):"active_detail"==t?(this.active_detail="color:red;",this.active_comm="",this.active_comment="",console.log("详情"),this.show=2):"active_comment"==t&&(this.active_comment="color:red",this.active_comm="",this.active_detail="",console.log("评价"),this.show=3)}},components:{Icon:n.p,commDtails:e,particulars:l,comments:d}},v={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"details_navigation"},[a("div",{staticStyle:{width:"10%",float:"left","margin-top":"10px","font-size":"22px"}},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:t.goback}})],1),t._v(" "),a("div",{staticStyle:{width:"30%",float:"left","margin-top":"12px"}},[a("span",{style:t.active_comm,on:{click:function(i){return t.selected("active_comm")}}},[t._v("商品")])]),t._v(" "),a("div",{staticStyle:{width:"30%",float:"left","margin-top":"12px"}},[a("span",{style:t.active_detail,on:{click:function(i){return t.selected("active_detail")}}},[t._v("详情")])]),t._v(" "),a("div",{staticStyle:{width:"30%",float:"left","margin-top":"12px"}},[a("span",{style:t.active_comment,on:{click:function(i){return t.selected("active_comment")}}},[t._v("评论")])])]),t._v(" "),a("div",{staticStyle:{height:"44px"}}),t._v(" "),a("div",{staticStyle:{width:"100%"}},[1==t.show?a("div",[a("commDtails")],1):t._e(),t._v(" "),2==t.show?a("div",[a("particulars")],1):t._e(),t._v(" "),3==t.show?a("div",[a("comments")],1):t._e()])])},staticRenderFns:[]};var p=a("VU/8")(m,v,!1,function(t){a("HZvF")},"data-v-1296ec55",null);i.default=p.exports},HZvF:function(t,i){},"amQ/":function(t,i){},jXQh:function(t,i){}});