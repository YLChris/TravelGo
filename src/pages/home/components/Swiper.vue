<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {/** 都是这个插件的属性,swiperOption可更改,然其内部的属性不可更改 */
        pagination: '.swiper-pagination',
        loop: true/** 循环播放 */
      }
    }
  },
  computed: {
    showSwiper () { /** 为了放置轮播图默认显示为第一张图  在此处判断swiper数组内有值的话则显示 不会因为空数组胡乱显示其他图片 */
      return this.list.length
    }
  }
}
</script>
<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background :#fff !important
    .wrapper
        overflow: hidden
        width: 100%;
        height: 0
        padding-bottom: 37.07%
        background: #eee
        .swiper-img{
            width:100%;
        }
</style>
