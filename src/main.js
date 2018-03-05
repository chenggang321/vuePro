// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import Vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(infiniteScroll);
Vue.use(Vuex);
Vue.use(Vuelazyload, {
  loading: 'static/img/loading-svg/loading-bars.svg',
  attempt: 3 // default 1
});
/* eslint-disable no-unused-vars */
const store = new Vuex.Store({
  state: {
    nickName: '',
    cartCount: 0
  },
  mutations: {
    // 更新用户信息
    updateUserInfo (state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount (state, cartCount) {
      console.log('updateCartCount');
      state.cartCount += cartCount;
    },
    // 重置数量
    resetCartCount (state, cartCount) {
      state.cartCount = cartCount;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted () {
    this.checkLogin();
    this.getCartCount();
  },
  methods: {
    checkLogin () {
      axios.get('/users/checkLogin').then((response) => {
        var res = response.data;
        if (res.status === '0') {
          // this.nickName = res.result;
          this.$store.commit('updateUserInfo', res.result);
          this.mdShow = false;
        } else {
          if (this.$route.path !== '/') {
            this.$router.push('/');
          }
        }
      });
    },
    getCartCount () {
      console.log('getCartCount');
      axios.get('users/getCartCount').then(response => {
        var res = response.data;
        if (res.status === '0') {
          this.$store.commit('updateCartCount', res.result);
        } else {
          this.$store.commit('resetCartCount', 0);
        }
      })
    }
  },
  components: {App},
  template: '<App/>'
})
