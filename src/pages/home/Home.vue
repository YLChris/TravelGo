<template>
    <div>
       <Home-header></Home-header>
       <Home-swiper :list="swiperList"></Home-swiper>
       <Home-icons :listAAAA="iconList"></Home-icons>
      <Home-recommend :recommendListAAAA="recommendList"></Home-recommend>
      <Home-weekend :weekendListAAAA="weekendList"></Home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['cityxxx'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.cityxxx).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () { // 生命周期钩子初始化调用该方法
    this.lastCity = this.cityxxx // 保存上一次的城市记录，为了再activated生命周期钩子函数中和即将跳转的城市作比较
    this.getHomeInfo()
  },
  activated () { // 使用了keep-alive之后会出现一个新的生命周期函数activated，页面被重新渲染显示的时候，将会执行
    if (this.lastCity !== this.cityxxx) { // 当临时缓存变量lastCity和当前state中的公用数据cityxxx不一致时，才会触发xhr异步请求
      this.lastCity = this.cityxxx
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
