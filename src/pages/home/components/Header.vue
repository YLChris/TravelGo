<template>
    <div class="header">
        <div class="header-left">
           <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
           输入城市/经典/游玩主题
        </div>
        <router-link to='/city'>
            <div class="header-right">
            <!-- {{this.$store.state.city}} 从vuex引入了mapState映射，只需要调用cityxxx-->
            {{this.cityxxx}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['cityxxx']) // 展开运算符... mapState是用来将state中的公用数据cityxxx映射到名为cityxxx的计算属性中，即可在本文中引用名为cityxxx的计算属性
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeader
        background: $xxxbgColor
        color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        flex: 1
        background: #fff
        border-radius: .1rem
        height: .64rem
        line-height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        padding-left: .2rem
        color: #ccc
    .header-right
        min-width: 1.04rem
        padding: 0 .1rem
        float: right
        text-align: center
        color: #fff
        .arrow-icon
            font-size: .24rem
            margin-left: -.04rem
</style>
