// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
import Vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(infiniteScroll);
Vue.use(Vuelazyload, {
  loading: 'static/img/loading-svg/loading-bars.svg',
  attempt: 3 // default 1
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
