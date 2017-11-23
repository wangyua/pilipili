<template lang="html">
  <div id="tabbar">
    <div class="tab-top">
      <div class="imgbox">
        <span v-for="i in 3"></span>
        <img src="./../../static/img/men.jpg" alt="">
      </div>
      <div class="btnbox">
        <img src="./../../static/img/coupon.png" alt="">
        <img src="./../../static/img/game.png" alt="">
        <img src="./../../static/img/download.png" alt="">
        <img src="./../../static/img/search.png" alt="">
      </div>
    </div>
    <router-view />
    <div class="tab-bottom">
      <router-link class="links" to="/firstpage">首页</router-link>
      <router-link class="links" to="/fenqu">分区</router-link>
      <router-link class="links" to="/dongtai">动态</router-link>
      <router-link class="links" to="/xiaoxi">消息</router-link>
    </div>
  </div>
</template>

<script>
import firstpage from './../pages/firstpage.vue'
import fenqu from './../pages/fenqu.vue'
import dongtai from './../pages/dongtai.vue'
import xiaoxi from './../pages/xiaoxi.vue'
export default {
  name:'tabbar',
  components:{
    firstpage,
    fenqu,
    dongtai,
    xiaoxi
  }
}
</script>

<style lang="less" scoped>
.tab-top{
  height: 1.6rem;
  background-color: #fb7299;
  .imgbox{
    position: relative;
    float: left;
    width: 1.3rem;
    margin-top: .5rem;
    span{
      width: .3rem;
      height: .07rem;
      background-color: #fff;
      display: block;
      position: absolute;
      border-radius: 0 50% .1rem 50%;
      &:nth-of-type(1){
        top:.12rem;
        left:0;
      }
      &:nth-of-type(2){
        top:.32rem;
        left:0;
      }
      &:nth-of-type(3){
        top:.52rem;
        left:0;
      }
    }
    img{
      width: .7rem;
      height: .7rem;
      border-radius: 50%;
      border:2px solid #fff;
      float: right;
    }
  }
}
.btnbox{
  float: right;
  img{
    float: left;
    width: .5rem;
    height:.5rem;
    margin-top: .6rem;
    padding: 0 .15rem;
  }
}
  .tab-bottom{
    position: fixed;
    bottom:0;
    background-color: #fff;
    border-top: 1px solid #ccc;
    display: flex;
    width: 100%;
    height: 1.3rem;
    line-height: 1.9rem;
    justify-content: space-around;
    font-size: .25rem;
  }
  a{
    color:#c5c5c5;
    width: 25%;
  }
  .links:nth-of-type(1){
    background: url(./../../static/img/home_2.png) no-repeat 50% 20%;
    background-size: .55rem;
  }
  .links:nth-of-type(2){
    background: url(./../../static/img/tab_2.png) no-repeat 50% 20%;
    background-size: .55rem;
  }
  .links:nth-of-type(3){
    background: url(./../../static/img/dongtai_2.png) no-repeat 50% 20%;
    background-size: .55rem;
  }
  .links:nth-of-type(4){
    background: url(./../../static/img/msg_2.png) no-repeat 50% 20%;
    background-size: .55rem;
  }
</style>
