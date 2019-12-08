<template>
    <div>
       <Home-header></Home-header>
       <Home-swiper></Home-swiper>
       <Home-icons></Home-icons>
      <Home-recommend></Home-recommend>
      <Home-weekend></Home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  }
}
</script>

<style>

</style>
