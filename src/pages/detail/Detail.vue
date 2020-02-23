<template>
    <div>
        <detail-banner :sightName="sightName"
                       :bannerImg="bannerImg"
                       :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :sonlist="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader,
    DetailList: DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () { /* 因为使用了keep-alive做了缓存所以在mouted一般只会执行一次 可以配合使用activited在参考detail下的header */
    this.getDetailInfo()
  }
}
</script>
<style scoped lang="stylus">
  .content
    height: 50rem
</style>
