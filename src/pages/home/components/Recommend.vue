<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <router-link tag="li"
                         class="item border-bottom"
                         v-for="item of recommendListAAAA"
                         :key="item.id"
                         :to="'/detail/' + item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendListAAAA: Array
  },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
      line-height: .8rem
      background: #eee
      text-indent: .2rem
      margin-top: .2rem
    .item
      overflow: hidden
      display: flex
      height: 1.9rem
      .item-img
        width: 1.7rem
        height: 1.3rem
        padding: .3rem
      .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
          line-height: .54rem
          font-size: .32rem
          ellipsisxxx()
        .item-desc
          color: #ccc
          ellipsisxxx()
        .item-button
          line-height: .44rem
          margin-top: .16rem
          background: #ff9300
          padding: 0 .2rem
          border-radius: .06rem
          color: #fff
</style>
