webpackJsonp([21],{i3WZ:function(t,e){},qyGq:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mvHQ"),s=i.n(n),a=i("cjUp"),o=i("Fd2+"),r={name:"EditConsignee",data:function(){return{id:"",name:"",tel:"",address:"",index:""}},mounted:function(){console.log(this.$route.params),this.id=this.$route.params.ctx.id,this.name=this.$route.params.ctx.name,this.tel=this.$route.params.ctx.tel,this.address=this.$route.params.ctx.address,this.index=this.$route.params.index},methods:{saveConsignee:function(){try{var t=JSON.parse(localStorage.getItem("DirectoryInquiries")),e={id:this.id,name:this.name,tel:this.tel,address:this.address};console.log(t),11===this.tel.length?(t[this.index]=e,localStorage.setItem("DirectoryInquiries",s()(t)),Object(o.F)("修改成功"),this.$router.go(-1)):Object(o.F)("确认手机号是否正确！")}catch(t){Object(o.F)("修改失败！")}},onDeleteadderss:function(){var t=this;o.k.confirm({title:"删除此地址栏",message:"您确定要删除此项收货地址栏吗？"}).then(function(){console.log("是的"),console.log(t.id),console.log(JSON.parse(localStorage.getItem("DirectoryInquiries")));for(var e=JSON.parse(localStorage.getItem("DirectoryInquiries")),i=0;i<e.length;i++)t.id==e[i].id&&e.splice(i,1);localStorage.setItem("DirectoryInquiries",s()(e))}).catch(function(){console.log("不了")})}},components:{navigationTop:a.a,Field:o.l,Toast:o.F,Dialog:o.k}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigationTop",[i("div",{attrs:{slot:"icon_left"},slot:"icon_left"},[i("div",{staticStyle:{"margin-top":"5px","font-size":"24px"}},[i("van-icon",{attrs:{name:"arrow-left"}})],1)]),t._v(" "),i("div",{attrs:{slot:"content_center"},slot:"content_center"},[i("span",{staticStyle:{display:"flex","justify-content":"center","margin-top":"8px"}},[t._v("编辑收货地址")])]),t._v(" "),i("div",{attrs:{slot:"icon_right"},slot:"icon_right"},[i("span",{staticStyle:{"font-size":"16px",display:"flex","margin-top":"10px"},on:{click:t.saveConsignee}},[t._v("保存")])])]),t._v(" "),i("div",{staticStyle:{height:"15px"}}),t._v(" "),i("div",[i("van-cell-group",[i("van-field",{attrs:{label:"收货人"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),i("van-field",{attrs:{label:"电话",type:"number"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),t._v(" "),i("van-field",{attrs:{label:"地址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1),t._v(" "),i("div",{staticStyle:{width:"90%","margin-left":"5%",height:"46px",background:"#FF4444","border-radius":"4px","margin-top":"20px"},on:{click:t.onDeleteadderss}},[i("span",{staticStyle:{position:"absolute",color:"#FFFFFF","margin-top":"10px","margin-left":"-30px"}},[t._v("删除地址")])])],1)},staticRenderFns:[]};var c=i("VU/8")(r,l,!1,function(t){i("i3WZ")},null,null);e.default=c.exports}});