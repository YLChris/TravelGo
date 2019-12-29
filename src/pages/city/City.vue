<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :tranCities="cities" :tranHotCities="hotCities" :tranLetter="letter"></city-list>
        <city-Alphabet :tranCities="cities"
        @cityChange="handleLetterChange"></city-Alphabet>
    </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '' // 父组件向子组件List.vue传值
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) { // 此时是监听子组件Alphabet通过emit向外触发的事件
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style scoped lang="stylus">

</style>
