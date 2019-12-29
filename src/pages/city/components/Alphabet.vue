<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of tranCities" :key="key">{{key}}</li>
    </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    tranCities: Object
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
