<template lang="html">
  <div class="zhibo">
    <div class="search">
      搜索房间或主播
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in data1.banner" :key="index">
        <a :href="item.link">
          <img :src="item.img" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <div class="nav">
    <ul class="qu">
      <li v-for="(item,index) in data1.entranceIcons">
        <img :src="'./../../static/img/n'+(index+1)+'.png'" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
  <div class="tuijian">
    <p class="tui-top"><img :src="tuijian.src" alt=""><span>{{tuijian.name}}</span><span>当前{{tuijian.count}}个直播，进去看看</span></p>
    <div class="tuis">
      <ul>
        <li v-for="(item,index) in tuijian.lives">
          <div class="">
            <img v-lazy="getImage(item.cover.src)" alt="">
          </div>
          <p>{{item.title}}</p>
          <p>
            <span>{{item.area}}</span>
            <span class="online">{{item.online}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="pus" v-for="(item,index) in data1.partitions">
      <p class="tui-top"><img :src="item.partition.sub_icon
      .src" alt=""><span>{{item.partition.name}}</span><span>当前{{item.partition.count}}个直播，进去看看</span></p>
      <div class="tuis">
        <ul>
          <li v-for="(item,index) in item.lives" v-if="index<4">
            <div class="">
              <img v-lazy="getImage(item.cover.src)" alt="">
            </div>
            <p>{{item.title}}</p>
            <p>
              <span>{{item.area}}</span>
              <span class="online">{{item.online}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  name:'zhibo',
  data(){
    return {
      data1:{},
      tuijian:{},
      swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          loop:true,
          autoplayDisableOnInteraction:false,
          pagination : '.swiper-pagination',
          observeParents:true,
        }
    }
  },
  created(){
    this.axios.get('/api/AppIndex/home?device=phone&platform=ios&scale=3&build=10000').then((data)=>{
      this.data1 = data.data.data
      this.tuijian = data.data.data.recommend_data.partition
      this.tuijian.src = data.data.data.recommend_data.partition.sub_icon.src
      this.tuijian.lives = data.data.data.recommend_data.lives

      console.log(this.data1);
    },function(err){
      console.log(err);
    })
  },
  components:{
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
  .search{
    width: 95%;
    background-color: #ddd;
    margin:.2rem auto;
    height: .7rem;
    line-height:.7rem;
    text-align: left;
    text-indent: .4rem;
    border-radius: .1rem;
    font-size: .3rem;
  }
  .swiper-container{
    width: 95%;
    margin-top: .3rem;
  }
  .swiper-slide{
    border-radius: .2rem;
    img{
      border-radius: .2rem;
      width: 100%;
    }
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    width: 20%;
    left:auto;
    right:0;
  }
  .qu{
    display: flex;
    font-size: .25rem;
    white-space: nowrap;
    justify-content: space-around;
    padding-bottom: .3rem;
  }
  .tuijian{
    background-color: #f4f4f4;
    margin: 0 auto;
    img{
      width: .5rem;
      height: .5rem;
      float: left;
    }
    span{
      height: .5rem;
      font-size: .25rem;
      float: left;
      margin-top: .15rem;
      margin-left: .1rem;
      &:nth-of-type(2){
        float: right;
        margin-right: .4rem;
      }
    }
  }
  .tui-top{
    overflow: hidden;
    position: relative;
    padding:.2rem .2rem 0 .2rem;
    &:after{
      content:'>';
      display: block;
      border-radius: 50%;
      background-color: #888;
      color:#fff;
      width: .35rem;
      height: .35rem;
      font-size: .3rem;
      text-align: center;
      line-height: .35rem;
      position: absolute;
      right: 0.2rem;
      bottom:.15rem;
    }
  }
  .tuis{
    padding-bottom: .4rem;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    p{
      margin:.2rem 0 0 .2rem;
      float: left;
      font-size: .25rem;
      width: 90%;
      height: .8rem;
      text-align: left;
      overflow : hidden;
      text-overflow: ellipsis;
      &:last-of-type{
        margin-top: 0;
        height: .4rem;
      }
      span{
        margin:0;
      }
      // display: -webkit-box;
      // -webkit-line-clamp:2;
      // -webkit-box-orient: vertical;
    }
    li{
      width: 45%;
      background-color: #fff;
      border-radius: .2rem;
      margin-top: .4rem;
    }
    div>img{
      width: 100%;
      border-radius: .2rem;
      height: 100%;
    }
  }
  .online{
    float: right;
  }
</style>
