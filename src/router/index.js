import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id', // 此处是动态传递参数，表明以detail开头携带一个数据传递到id中
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) { // vue-router官网，每次路由切换时，进入显示页面让页面回到顶部
    return { x: 0, y: 0 }
  }
})
