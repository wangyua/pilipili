// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import axios from 'axios'
import swiper from 'vue-awesome-swiper'
Vue.use(swiper)
import lazyload from 'vue-lazyload'
Vue.use(lazyload)
import rem from './../static/js/rem.js'
import reset from './../static/css/reset.css'
import jsonp from 'jsonp'
Vue.config.productionTip = false
Vue.prototype.jsonp = jsonp;
Vue.prototype.axios = axios;
Vue.prototype.getImage = function getImage(url) {
  if (url !== undefined) {
    return url.replace("https://", "https://images.weserv.nl/?url=");
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
