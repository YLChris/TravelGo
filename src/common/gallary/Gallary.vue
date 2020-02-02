<template>
    <div class="container" @click="handleGallaryClick">
      <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(item,index) in imgs"
              :key="index">
                <img class="gallary-img" :src="item"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick: function () {
      this.$emit('close') /* 向外触发emit事件关闭画廊子元素 */
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', /* 这个是图片的数量展示 */
        observeParents: true,
        observer: true /* 用于监听父级元素或者当前元素是否有发生dom结构变化，发生变化将会再次刷新当前页面，目的是为了防止父级元素dom更改导致swiper插件宽度重新计算不准确 */
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    z-index: 99
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
