<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {/** 都是这个插件的属性,swiperOption可更改,然其内部的属性不可更改 */
        pagination: '.swiper-pagination',
        loop: true/** 循环播放 */
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1809/f4/03da905b8b7d2202.jpg_890x330_afab380f.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/5992b485924b2f348e59e9285a804f3d.jpg_890x330_37202f9c.jpg'
      }]
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
