<template>
    <ul class="list">
        <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
        {{item}}
        </li>
    </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    tranCities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.tranCities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('cityChange', e.target.innerText) // 向外触发cityChange事件，事件携带的内容为e.target.innerText
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) { // 只允许在为true的时候进行计算
        const startY = this.$refs['A'][0].offsetTop // offsetTop是A元素距离顶部的高度
        const touchY = e.touches[0].clientY - 79 // 事件对象e.touches[0]就可以获取手指的信息，clientY是距离最顶部的高度，79是指像素是指最顶部距离alphabet的字母框的距离
        const index = Math.floor((touchY - startY) / 20) // 20是每个字母的高度
        if (index >= 0 && index < this.letters.length) {
          this.$emit('cityChange', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      text-align: center
      line-height: .4rem
      color: $xxxbgColor
</style>
