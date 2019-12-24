<template>
    <div class="header">
        城市选择
        <router-link to="/">
          <div class="iconfont header-icon">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: $headerHeader
    line-height: $headerHeader
    overflow: hidden
    text-align: center
    color: #fff
    background: $xxxbgColor
    font-size: .32rem
  .header-icon
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: -0.4rem
    font-size: .4rem
    color: #fff
</style>
