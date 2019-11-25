<!--这里App.vue是整个应用的跟组件     以vue结尾的叫单文件组件-->
<template>
  <div id="app">
<!--router-view显示的是当前路由地址所对应的内容-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
