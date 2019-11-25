# travelgo

> 如下命令来打包生成一个vuedd项目vue init webpack travelgo

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

一:知识点

1：vue中链接
<!--在vue中链接可以使用router-link-->
<router-link to="/list" class="home">列表页</router-link>

2：单页应用
页面跳转---->是通过JS渲染的   即通过路由   
优点：页面切换快   不需要去请求html，那么减少了请求时间    缺点：seo差  百度等搜索引擎不会将其排名靠前

3：项目初始化配置
  1).index.html的meta中配置
<!--由于是移动端使用  minimum-scale=1.0,maximum-scale=1.0,user-scalable=no 
      此举禁止用户通过手指放大缩小  比例始终为1：1-->
  2).引入reset.css
  目的：手机浏览器的限制   在入口文件main.js引入此css保证页面初始化样式一致
  3).引入border.css
  目的：手机大屏可能导致的1像素问题  即在大屏显示中  1像素可能显示多像素
  4).引入fastClick库
   目的：由于有些浏览器的限制  click事件可能延迟几秒  导致用户体验感差
   操作：npm install fastclick --save  将此库安装在项目的依赖中   --save是不管在开发环境还是生产环境都要使用fastclick
   使用：
        main.js:import fastClick from 'fastclick'   
                fastClick.attach(document.body)这样子就可以使用fastClick了
  5).此时用了阿里巴巴的iconfont创建了图标管理项目

