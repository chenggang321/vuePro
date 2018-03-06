/**
 * Created by HH_Girl on 2018/1/22.
 */
import Vue from 'vue'
import Router from 'vue-router'
import goodsList from '@/views/goodsList/goodsList'
import cart from '@/views/cart/cart'
import address from '@/views/address/address'
import orderConfirm from '@/views/orderConfirm/orderConfirm'
import orderSuccess from '@/views/orderSuccess/orderSuccess'

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
      name: 'cart',
      component: cart
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: orderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'orderSuccess',
      component: orderSuccess
    }
  ]
})
