<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of tranHotCities" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                 v-for="(item,key) of tranCities"
                 :key="key"
                 :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" v-for="sonItem of item" :key="sonItem.id">
                    <div class="item border-bottom">{{sonItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    tranCities: Object,
    tranHotCities: Array,
    tranLetter: String
  },
  watch: {
    tranLetter () { // 监听tranLetter的变化，betterScroll提供了一个接口，this.scroll.scrllToElement()可以自动滚动到某个元素上
      if (this.tranLetter) {
        const element = this.$refs[this.tranLetter][0] // 可以通过定义一个ref来获取对应的dom元素，ref在dom中定义为key
        this.scroll.scrollToElement(element) // 此接口参数必须为dom元素或者dom选择器
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper) /** this是指vue实例,$refs是指整个Vue实例里的所有引用,helloDom是所有引用里的某一个 */
  }
}
</script>
<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        width: 33.33%
        float: left
        .button
          text-align: center
          margin: .1rem
          border: .02rem solid #ccc
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
