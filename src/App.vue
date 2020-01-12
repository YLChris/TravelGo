<!--这里App.vue是整个应用的跟组件     以vue结尾的叫单文件组件-->
<template>
  <div id="app">
<!--router-view显示的是当前路由地址所对应的内容,keep-alive是为了防止多次路由请求而作的优化，会将组件路由的内容存储到缓存中-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
