<template>
    <transition> <!--当某个组件被transition包裹后将会有一些方法（代表动画进入或者离开的方法），此时只需要操作cssy样式即可-->
        <slot></slot>
    </transition>
</template>
<script>
export default {
  name: 'Fade'
}
</script>
<style lang="stylus" scoped>
  .v-enter,.v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
