// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';  //ui 框架            
import 'vant/lib/index.css'; //UI样式
import Axios from 'axios'  //请求依赖
import {Request_get,Request_post,Request_put,generateTimeReqestNumber,clientTimeZone,getBylanguage} from '@/utils/util.js'
import VueResource from 'vue-resource'
import Vuei18n from 'vue-i18n'	//国际化
import { Lazyload } from 'vant';  //局部使用懒加载报错
Vue.use(Lazyload); //局部使用懒加载报错
Vue.use(Vant);
Vue.use(VueResource) //浏览器版本低请求兼容
Vue.use(Vuei18n) //国际化

Vue.config.productionTip = false
Vue.prototype.$Axios=Axios
Vue.prototype.$Request_get=Request_get  //全局get请求
Vue.prototype.$Request_post=Request_post	//全局post请求
Vue.prototype.$Request_put=Request_put 		//全局Put请求
Vue.prototype.$SimpleDateFormat=generateTimeReqestNumber  //全局获取时间yyyymmdd
Vue.prototype.$Gettimezone=clientTimeZone  //获取时区

Axios.defaults.headers.post['Content-Type'] = 'application/json';
//拦截器
Axios.interceptors.request.use(function(config){
//	alert(config.url)
//	config.headers.Authorization = "d98awdawd45a6wd7ad7aw4";
	console.log(config)
	return config
	
},function(error){
	return Promise.reject(error)
})
Axios.interceptors.response.use(function(response){
//	alert(response)
	console.log(response)
	return response
	
},function(error){
	return Promise.reject(error)
})


// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new Vuei18n({
  locale: "en",//getBylanguage()
  messages: {
    'zh': require('@/assets/language/zh.json'),
    'en': require('@/assets/language/en.json')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})


