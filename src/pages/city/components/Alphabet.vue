<template>
    <ul class="list"><!--此处的touchstart.prevent是为了阻止手指拖动字母表时导致页面跟着走，防止了toychstart的默认行为-->
        <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
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
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // offsetTop是A元素距离顶部的高度，cities在其父组件没有值，通过ajax传值之后有值将会触发当前组件的数据变化，继而整个vue元素重新渲染，则会触发updated
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
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 事件对象e.touches[0]就可以获取手指的信息，clientY是距离最顶部的高度，79是指像素是指最顶部距离alphabet的字母框的距离
          const index = Math.floor((touchY - this.startY) / 20) // 20是每个字母的高度
          if (index >= 0 && index < this.letters.length) {
            this.$emit('cityChange', this.letters[index])
          }
        }, 16)
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
