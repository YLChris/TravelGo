<template>
    <div>
        <router-link tag="div" to="/"  class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed"
            v-show="!showAbs"
            :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () { /* 因为使用了keep-alive，当前页面只要一展示，activated将会被执行 */
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { /* 全局解绑，当页面被隐藏，去掉监听事件，为了防止在其他页面被全局调用 */
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped lang="stylus">
    @import '~styles/varibles.styl'
    .header-abs
      position: absolute
      left: .2rem
      top: .2rem
      width: .8rem
      height: .8rem
      line-height: .8rem
      text-align: center
      border-radius: .4rem
      background: rgba(0, 0, 0, .8)
      .header-abs-back
        color: #fff
        font-size: .4rem
    .header-fixed
      position: fixed
      height: $headerHeader
      line-height: $headerHeader
      top: 0
      left: 0
      right: 0
      text-align: center
      color: #fff
      background: $xxxbgColor
      font-size: .32rem
      .header-fixed-back
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: -0.4rem
        font-size: .4rem
        color: #fff
</style>
