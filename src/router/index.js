/**
 * Created by HH_Girl on 2018/1/22.
 */
import Vue from 'vue'
import Router from 'vue-router'
import goodsList from '@/views/goodsList/goodsList'
import cart from '@/views/cart/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodsList',
      component: goodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: cart
    }
  ]
})
