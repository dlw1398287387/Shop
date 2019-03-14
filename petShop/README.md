# petshop

> petshop

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




开发过程中遇到的问题，以及解决方式。
----
-  1.关于客户端pettv设备的版本低不支持直接axios请求，需要做兼容
```bash
npm install vue-resource
Import VueResource from 'vue-resource'
Vue.use(VueResource)
```

- 2.pet_home页，嵌入安卓中会导致轮播图与安卓viewpager滑动冲突
  解决办法H5中获取轮播图的高度，以及轮播图距离顶部的高度，XY轴位置，使用window.text=function(){}方法传递给安卓，禁用当前位置的viewpager

- 3.安卓 IOS主动向H5传递数据的问题。
	3.1:安卓中直接与JS交互，由JS收取数据，
	3.2:IOS跟安卓交互有所不同，但IOS支持可以直接在IOS本地设置JS的本地缓存，