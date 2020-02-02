<template>
  <div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="https://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"/>
        <div class="banner-info">
          <div class="banner-title">
            大连圣亚海洋世界(AAAA景区)
          </div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe674;</span>
            39
          </div>
        </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return { /* 传递给画廊组件传值 */
      showGallary: false,
      imgs: ['https://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg', 'https://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleGallaryClose: function () { /* 由子组件触发emit事件外部接受更改父元素数据值 */
      this.showGallary = false
    }
  },
  components: {
    CommonGallary: CommonGallary
  }
}
</script>
<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
        flex: 1
      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        line-height: .32rem
        height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
