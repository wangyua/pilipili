<template lang="html">
  <div id="firstpage">
    <div class="nav">
      <router-link to="/firstpage/zhibo">直播</router-link>
      <router-link to="/">推荐</router-link>
      <router-link to="/">追番</router-link>
      <router-link to="/">影视</router-link>
      <router-link to="/">专栏</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import zhibo from './zhibo.vue'
export default {
}
</script>

<style lang="less" scoped>
  .nav{
      display: flex;
      background-color: #fb7299;
      justify-content: space-around;
      padding-bottom: 1px;
    a{
      font-size: .3rem;
      color:#fff;
      padding:.15rem;
      white-space: nowrap;
    }
    .active{
      border-bottom:3px solid #fff;
    }
  }
</style>
