// 引入vue和router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 安装router
Vue.use(VueRouter)
// 引入路由要用到的组件
import firstpage from './../pages/firstpage.vue'
import fenqu from './../pages/fenqu.vue'
import dongtai from './../pages/dongtai.vue'
import xiaoxi from './../pages/xiaoxi.vue'
import zhibo from './../pages/zhibo.vue'
// 创建路由规则
let routes = [
  {path:'/',redirect:'/firstpage/zhibo'},
  {path:'/firstpage',component:firstpage,children:[
    {path:'/firstpage',component:zhibo},
    {path:'/firstpage/zhibo',component:zhibo}
  ]},
  {path:'/fenqu',component:fenqu},
  {path:'/dongtai',component:dongtai},
  {path:'/xiaoxi',component:xiaoxi},
]
// 根据路由规则创建路由对象
let router = new VueRouter({
  routes
})
// 导出路由对象
export default router
