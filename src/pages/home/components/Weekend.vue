<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                  <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '1001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡,目前在上海噢全球最大的迪士尼城堡,目前在上海噢'
      }, {
        id: '1002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡,目前在上海噢全球最大的迪士尼城堡,目前在上海噢'
      }, {
        id: '1003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡,目前在上海噢全球最大的迪士尼城堡,目前在上海噢'
      }, {
        id: '1004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg',
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
    .item-img-wrapper
      height: 0
      overflow: hidden
      padding-bottom: 33.9%
      .item-img
        width: 100%
    .item-info
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsisxxx()
      .item-desc
        color: #ccc
        ellipsisxxx()
</style>
