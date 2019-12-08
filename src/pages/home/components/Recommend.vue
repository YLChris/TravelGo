<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '1001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡,目前在上海噢全球最大的迪士尼城堡,目前在上海噢'
      }, {
        id: '1002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡,目前在上海噢全球最大的迪士尼城堡,目前在上海噢'
      }, {
        id: '1003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡,目前在上海噢全球最大的迪士尼城堡,目前在上海噢'
      }, {
        id: '1004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡,目前在上海噢全球最大的迪士尼城堡,目前在上海噢'
      }]
    }
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
