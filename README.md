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
  在需要显示1像素border的区块上直接添加样式即可
  要改变border-topbottom（上下）的颜色
  .border-topbottom    
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
  4).引入fastClick库
   目的：由于有些浏览器的限制  click事件可能延迟几秒  导致用户体验感差
   操作：npm install fastclick --save  将此库安装在项目的依赖中   --save是不管在开发环境还是生产环境都要使用fastclick
   使用：
        main.js:import fastClick from 'fastclick'   
                fastClick.attach(document.body)这样子就可以使用fastClick了
  5).此时用了阿里巴巴的iconfont创建了图标管理项目
  6).在项目中安装stylus   
  目的：便于css样式代码编写
  操作:npm install stylus --save   npm install stylus-loader --save

4:项目中stylus的使用
  1).<style lang="stylus" scoped></style>即可使用stylus   scoped限制只在当前组件使用  不会影响其他组件
  2).1rem = html的font-size=50px   也就是43px等于0.86rem---->  .86rem

5:iconfont的使用
  1).到iconfont将需要的图标添加至购物车 下载   将.eot,.svg,.ttf,.woff结尾的新建文件夹iconfont放置其中
  2).将iconfont.css放置styles目录
  3).在iconfont.css中将里面的url改成对应上述四个后缀结尾的文件所在位置
  4).图标的使用  <span class="iconfont">&#xe624;</span>命名一个iconfont的类，在iconfont的网站复制对应图标的代码
6:全场主色调 
  1).可以创建一个varibles.styl文件代表这是一个stylus要使用的全局变量文件
  在对应要使用主色调的css中添加 @import '~@/assets/styles/varibles.styl'  此时的@符号代表src目录  当在css样式文件中引入其他css时  要在@前添加~
  2).在varibles.styl中定义主色调的变量在需要使用该颜色的文件内引用  变量名可随意起
7:别名配置
  1).在文件中 经常引用到src目录下的styles目录下的文件
     那么可以在webpack.base.conf.js文件下增加如下所示的styles别名去代替完整的路径
     resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'styles': resolve('src/assets/styles')
      }
    }
  2).修改了配置项之后要重启服务

8:轮播图使用了GitHub上搜索的surmon-china/vue-awesome-swiper
  1):优点能够简单的建立一个轮播
  2):使用(可参考github上的手册)
    便于稳定使用2.6.7版本
    1.npm install vue-awesome-swiper@2.6.7 --save
    2.在main.js上引用
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    3.穿透  在wrapper下的这个样式穿透变红色
    .wrapper >>> .swiper-pagination-bullet-active
        background :red !important
9:三个点省略号(在对应文字上样式)
    overflow: hidden
    white-space: nowrap   不进行换行
    text-overflow: ellipsis   以省略号代表被修剪的文字
10:可以复用样式  利用stylus提供的styl去定义一个方法样式
    mixins.styl
      ellipsisxxx()
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    使用：
    css中导入@import '~styles/mixins.styl';
    在需要的地方添加对应的ellipsisxxx()
  11:1像素边框的问题  在Recommend里的li上加上border-bottom即可
  12:在flex设置为1时，mix-width设置为0可以保证内容不溢出flex容器
     情景（在Recommend的省略号中使用了）

  13：axios 使用ajax
     安装：npm install axios --save
    在home.vue中使用axios异步请求  创建static/mock来模拟数据库数据
    只有在static下的目录下才能由外部进行访问
    访问src下的目录将会直接定位到对应页面

    代理路径访问  Home.vue中的模拟数据的访问  代理跳转
    在config目录下的index.js的dev环境配置该：   则'^/api/'意思是以api开头的用户将会定位到static/mock下
    proxyTable: {
      '/api':{
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
    配置成功后脚手架工具将会自动将api转换成static/mock下
    14:  Header.vue跳转到city.vue使用router-link跳转新路由
    15: better-scroll滚动条使用以及字母表布局   github：ustbhuangyi/better-scroll
        npm install better-scroll --save
        具体查看city/list.vue里面使用
    16:字母表跳转到对应模块 （兄弟组件之间传值）
       1：通过Alphabet组件传值到父组件，再由父组件传值到List子组件
       2：此时获取的元素会是个数组   因为循环的缘故 所有标上序号
       const element = this.$refs[this.tranLetter][0]
       List.vue中this.scroll.scrllToElement()可以让滚动条自动滚动到某个元素上
    17:Alphabet.vue中touchstart，touchmove,touchend是betterScroll的模块，不可修改
    18：updated生命周期函数  在DOM元素重新被渲染之后将会被触发
    19:函数节流 search.vue中使用了 Alphabet timer creatTimeOut 将会延迟动作发生  当前一个动作移动未完成又执行下一个的时候，将会清除上一个动作，从而优化性能
    20：vuex 数据框架   （官网查看）
        目的：为了解决组件之间复杂传值
        原理：vuex将公用的数据存放在一个公共的数据存储区域   当某个组件改变了公用的数据  其他的组件能够感知到公共数据存储区域改变

        公共数据存储区域分布部分：
        1：state （存储公共数据），当数据发生改变时，不能直接改变state，要通过某个流程进行操作
        2: 更改数据流程----》vue components--（dispatch）--->调用Actions--(commit)-->Mutations------>state改变数据

        使用方式：新增store文件夹  创建index.js  其中Vuex是插件   vue中使用插件儿是用的Vue.use(Vuex)

        例子：1.在home下的head组件里使用this.$store.state即可使用到store/index.js下的数据存储区的数据
             2.当要改变state时，需要调用dispatch方法去调用action达到改变的效果
                this.$store.dispatch('changeCity', city);
                在store下的index下有一个属性为actions，是在改变state时做出改变而调用dispatch分发到actions某个动作上
                
                actions里分发的方法有俩参数 （ctx）是上下文，另一个是传递的值


              改变state数据的方法：此处可以用commit直接调用mutations
              ```
              1：this.$store.dispatch('changeCity', city)
              actions: {
                changeCity (ctx, city) { // actions被分发，ctx是上下文，继而调用commit方法去调用对应的mutations去改变具体state的数据
                  ctx.commit('changeCityxxx', city)
                }
              },
              mutations: {
                changeCityxxx (state, city) { // state公用数据
                  state.city = city
                }
              }
              2: this.$store.commit('changeCityxxx', city)
              mutations: {
                changeCityxxx (state, city) { // state公用数据
                  state.city = city
                }
              }

              ```
      21:页面跳转router编程式路由
          1：a标签
          2：router-link标签
          3：vue代码中this.$router.push('地址')  //this.$router实例里自带push 方法
      22:vuex的localstoreage的使用
      23:vuex中state,mutations,actions拆分为不同的js，只要在主要的index.js中引入即可
      24:mapState,mapMutations...映射到computed计算属性
      25:keep-alive在App.vue中包裹router-view
          用处：为了在路由被加载过一次之后，将路由中的内容放到内存中，下次再次执行路由时，就不会再去加载对应的路由组件，直接从内存中将路由内容显示即可，对应生命周期钩子的函数异步操作也不会被执行
          是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM
      26:使用router-link跳转页面，vue将会对应渲染成一个a标签，在此基础上可以添加tag标签，tag标签内部声明为li，那么在页面渲染时将会是li标签
      在其中可以通过动态绑定to传递参数（为具体将要跳转的地址）详情见Recommend.vue
      27:热门推荐详情画廊组件，创建文件夹common/gallary/Gallary.vue
         创建完Gallary.vue文件后在build/webpack.base.conf.js下的resolve/alias新建一个别名
         'common': resolve('src/common')
      28: display弹性盒子
      flex-direction: column容器内子元素由上至下进行排列  row从左至右进行排列
      justify-content: center子元素在父容器中垂直分布
      29： 在detail的Header页对滚动头进行了全局滚动监听，在此基础上是在window上进行绑定的滚动监听，因此在其他页面可能会收到影响，因此需要进行全局事件解绑
      页面中使用了路由被keep-alive那么生命周期钩子函数将会多出这几个函数
      deactivated:页面被隐藏被执行该方法
      activated：页面一展示将会被执行

      30： 递归组件  detail的Detail.vue与List.vue可看递归组件
      ### 31: this.$route.params路由传参  详情参考Detail的ajax请求
        router/index.js
        > 1.如果你要使用params传参，那么你的路由页面index.js必须带上参数，如下
        /data/:id这个路由匹配/data/1,/data/2这里的 id 叫 params

        ```
        {
          path: '/detail/:id/',
          name: "detail",
          component: detail//这个details是传进来的组件名称
        }

        使用： 
        方法1：<router-link :to="{ name: 'details', params: { id: 123 }}">点击按钮</router-link>
        方法2：this.$router.push({name:'details',params:{id:123}})
        页面url显示结果是：http://localhost:8081/#/details/123
        ```

        > 2.如果你要使用query传参，那么你的路由页面index.js不需要带上参数，如下
        /data?id=1 /data?id=2 这里的 id 叫 query

        ```
            {
              path: '/detail',//这里不需要参入参数，参见上面的params写法
              name: "detail",
              component: detail//这个details是传进来的组件名称
            }

            使用： 
            方法1：<router-link :to="{ name: 'details', query: { id: 123 }}">点击按钮</router-link>
            方法2：this.$router.push({name:'details',query:{id:123}})

            方法3：<router-link :to="{ path: 'details', query: { id: 123 }}">点击按钮</router-link>
            方法4：this.$router.push({path:'details',query:{id:123}})
            页面url显示结果是：http://localhost:8081/#/details?id=123
        ```

        > 3.要是想获取参数值：各自的获取方法是：
          ```
          query和params分别是：this.$route.query.id，this.$route.params.id
          ```

          ##### 注意：这里看方法3,4,其实是对应方法1,2的，也就是说使用query方法，可以与path和name共用，2个都可以，但是params只能对应name

        > 4.顺便说一些参数是多个的情况params传参，如果路由index.js如下
        ```
            {
              path: '/detail/:id/:name',
              name: "detail",
              component: detail//这个details是传进来的组件名称
            }
            那么跳转写法：this.$router.push({name:'detail',params:{id:123,name:'lisi'}})
            效果：http://localhost:8081/#/details/123/lisi
        ```
        ##### query跟params，前者在浏览器地址栏中显示参数，后者则不显示。

        32.若要某个组件的路由不被keep-alive影响，那么有两种方式
            1.activated生命周期钩子函数
            由于使用了keep-alive做了路由router缓存，则页面一加载的时候mounted将只会执行一次，要想解决此问题就可以配合使用
            activated生命周期钩子函数(或可只使用activated)，例如detail下的header.vue
            2.在APP.vue中的keep-alive加上exclude=“你需要除去的组件”即可除去keep-alive对该组件造成的影响

        33.每个组件内的name作用
            1：递归组件使用到
            2：keep-alive进行缓存,对某个页面或组件取消缓存时使用到name
            3: vue插件里的结构展示
        34：问题：在detail组件里  访问不同的页面  在第一个页面拉动到下面时，打开第二个页面将会停在第一个页面所在位置
            解决方法：
            vue-router官网滚动行为
            使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动
            在router/index.js中配置scrollBehavior