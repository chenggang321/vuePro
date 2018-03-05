<template>
  <div>
    <v-header></v-header>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1"
                d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 32 32">
          <title>ok</title>
          <path class="path1"
                d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1"
                d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path class="path1"
                d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
          <path class="path2"
                d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path3"
                d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path4"
                d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 32 32">
          <title>clock</title>
          <path class="path1" fill="#605f5f"
                d="M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
          <path class="path2" fill="#605f5f"
                d="M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"></path>
        </symbol>
      </defs>
    </svg>
    <v-bread>
      <span>购物车</span>
    </v-bread>
    <div class="container">
      <div class="cart">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>我的购物车</span></h2>
        </div>
        <div class="item-list-wrap">
          <div class="cart-item">
            <div class="cart-item-head">
              <ul>
                <li>商品</li>
                <li>单价</li>
                <li>数量</li>
                <li>小计</li>
                <li>操作</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li
                v-for="item in cartList"
                :key="item.id"
              >
                <div class="cart-tab-1">
                  <div class="cart-item-check">
                    <a href="javascipt:;" class="checkbox-btn item-check-btn"
                       v-bind:class="{'check':item.checked=='1'}" @click="editCart('checked',item)">
                      <svg class="icon icon-ok">
                        <use xlink:href="#icon-ok"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="cart-item-pic">
                    <img v-lazy="'/static/img/'+item.productImage" v-bind:alt="item.productName">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{item.productName}}</div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{item.salePrice | currency('￥')}}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self select-self-open">
                      <div class="select-self-area">
                        <a class="input-sub" @click="editCart('minu',item)">-</a>
                        <span class="select-ipt">{{item.productNum}}</span>
                        <a class="input-add" @click="editCart('add',item)">+</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">{{item.productNum * item.salePrice | currency('￥')}}</div>
                </div>
                <div class="cart-tab-5">
                  <div class="cart-item-opration">
                    <a href="javascript:;" class="item-edit-btn" @click="delCartConfirm(item)">
                      <svg class="icon icon-del">
                        <use xlink:href="#icon-del"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="cart-foot-wrap">
          <div class="cart-foot-inner">
            <div class="cart-foot-l">
              <div class="item-all-check">
                <a href="javascipt:;" @click="toggleCheckAll">
                           <span class="checkbox-btn item-check-btn" v-bind:class="{'check':checkAllFlag}">
                              <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                           </span>
                  <span>全选</span>
                </a>
              </div>
            </div>
            <div class="cart-foot-r">
              <div class="item-total">
                总价: <span class="total-price">{{totalPrice | currency('￥')}}</span>
              </div>
              <div class="btn-wrap">
                <a class="btn btn--red">去结算</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-modal :mdShow="modalConfirm" @close="closeModal">
      <p slot="message">你确认要删除此条数据吗？</p>
      <div class="btnGroup" slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="delCart">确认</a>
        <a class="btn btn--m btn--red" href="javascript:;" @click="modalConfirm = false">关闭</a>
      </div>
    </v-modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import header from '../../components/headder/header'
  import bread from '../../components/bread/bread'
  import modal from '../../components/modal/modal'
  import {currency} from '../../util/currency'

  export default{
    components: {
      'v-header': header,
      'v-bread': bread,
      'v-modal': modal
    },
    data () {
      return {
        cartList: [],
        delItem: {},
        modalConfirm: false
      }
    },
    mounted () {
      this.init();
    },
    filters: {
      currency: currency
    },
    computed: {
      checkAllFlag () {
        return this.checkedCount === this.cartList.length;
      },
      checkedCount () {
        var i = 0;
        this.cartList.forEach((item) => {
          if (item.checked === '1') {
            i++
          }
        });
        return i;
      },
      totalPrice () {
        var money = 0;
        this.cartList.forEach((item) => {
          if (item.checked === '1') {
            money += parseFloat(item.salePrice) * parseInt(item.productNum)
          }
        });
        return money;
      }
    },
    methods: {
      init () {
        axios.get('/users/cartList').then((response) => {
          let res = response.data;
          this.cartList = res.result;
        });
      },
      closeModal () {
        this.modalConfirm = false;
      },
      delCartConfirm (item) {
        this.delItem = item;
        this.modalConfirm = true;
      },
      delCart () {
        axios.post('/users/cartDel', {
          productId: this.delItem.productId
        }).then((response) => {
          let res = response.data;
          if (res.status === '0') {
            this.modalConfirm = false;
            var delCount = this.delItem.productNum;
            this.$store.commit('updateCartCount', -delCount);
            this.init();
          }
        });
      },
      editCart (flag, item) {
        if (flag === 'add') {
          item.productNum++
        } else if (flag === 'minu') {
          if (item.productNum <= 1) {
            return;
          }
          item.productNum--;
        } else {
          item.checked = item.checked === '1' ? '0' : '1';
        }
        axios.post('/users/cartEdit', {
          productId: item.productId,
          productNum: item.productNum,
          checked: item.checked
        }).then((response) => {
          let res = response.data;
          if (res.status === '0' && flag !== 'checked') {
            console.log(flag);
            this.$store.commit('updateCartCount', flag === 'add' ? 1 : -1);
          }
        })
      },
      toggleCheckAll () {
        var flag = !this.checkAllFlag;
        this.cartList.forEach((item) => {
          item.checked = flag ? '1' : '0';
        });
        axios.post('/users/editCheckAll', {
          checkAll: flag
        }).then((response) => {
          let res = response.data;
          if (res.status === '0') {
            console.log('update suc');
          }
        });
      }
    }
  }
</script>

<style rel="stylesheet">
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *, *::after, *::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  /** erro msg **/
  .lemall-error-top-wrap {
    width: 100%;
    left: 0;
  }

  .lemall-error-top-wrap.fixed .lemall-error-top {
    margin-bottom: 0;
    border-bottom: 1px solid #e9e9e9;
    -webkit-transition: margin-bottom .3s ease-out;
    transition: margin-bottom .3s ease-out;
  }

  .lemall-error-top-wrap .lemall-error-top:last-child {
    border-bottom: none;
  }

  .lemall-error-top {
    position: relative;
    margin-bottom: 10px;
    padding: 10px 0;
    background: #FBEFE7;
    font-size: 12px;
    -webkit-transition: margin-bottom .3s ease-out;
    transition: margin-bottom .3s ease-out;
  }

  .lemall-error-top:before {
    position: absolute;
    top: 50%;
    left: 20px;
    content: "";
    width: 15px;
    height: 15px;
    background: url(http://image4.lecloud.com/lemallus/20161104-dfc340f2-cd94-4a1c-b158-2d899b23071e.png) no-repeat 0 0;
    background-size: 100% auto;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .lemall-error-top .error-text {
    padding: 0 45px;
    color: #333;
    line-height: 1.25;
  }

  .lemall-error-top .error-text a {
    color: #ee7a23;
    text-decoration: underline;
  }

  .lemall-error-top .error-btn {
    position: absolute;
    right: 10px;
    top: 50%;
    width: 12px;
    height: 12px;
    z-index: 1;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .lemall-error-top .error-close-btn {
    display: block;
    width: 100%;
    height: 100%;
    background: url(http://image4.lecloud.com/lemallus/20161104-32702ecd-f983-4942-a799-cf1e2bdd30c2.png) no-repeat 0 0;
    background-size: 100% auto;
    text-indent: -8000px;
  }

  @media only screen and (max-width: 767px) {
    .lemall-error-top {
      font-size: 1.2rem;
    }

    .lemall-error-top:before {
      left: 10px;
    }

    .lemall-error-top .error-text {
      padding: 0 35px;
    }
  }

  .check-step {
    padding: 30px 0 20px 0;
  }

  .check-step ul {
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .check-step ul:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .check-step li {
    position: relative;
    float: left;
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 25%;
    line-height: 1.25em;
    padding: 0 1em 1.25em 1em;
    border-bottom: 2px solid #ccc;
    color: #999;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
  }

  .check-step li em {
    color: #999;
    font-size: .8em;
    font-weight: normal;
  }

  .check-step li:after {
    position: absolute;
    bottom: -7px;
    left: 50%;
    margin-left: -7px;
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ccc;
  }

  .check-step li.cur {
    border-color: #d1434a;
    color: #d1434a;
  }

  .check-step li.cur:after {
    background: #d1434a;
  }

  @media only screen and (max-width: 991px) {
    .check-step {
      padding: 20px 0;
    }

    .check-step li {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 767px) {
    .check-step {
      padding: 20px 0 0 0;
    }

    .check-step li {
      font-size: 1.2rem;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  .addr-list ul:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .addr-list li {
    position: relative;
    float: left;
    width: 23.8095%;
    height: 162px;
    margin: 0 1.587% 1.587% 0;
    padding: 20px 20px 40px 20px;
    background: #fff;
    border: 2px solid #e9e9e9;
    overflow: hidden;
    cursor: pointer;
    color: #333;
  }

  .addr-list li dt {
    line-height: 1em;
    padding: 0 25px 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
  }

  .addr-list li dd {
    margin-bottom: 10px;
    line-height: 1.4285;
  }

  .addr-list li .address {
    height: 2.8517em;
    overflow: hidden;
  }

  .addr-list li .tel {
    color: #605F5F;
    line-height: 1.2142;
  }

  .addr-list li .addr-opration {
    position: absolute;
  }

  .addr-list li .addr-opration .icon {
    width: 100%;
    height: 100%;
    fill: #605F5F;
  }

  .addr-list li .addr-opration:hover .icon {
    fill: #ee7a23;
  }

  .addr-list li .addr-edit {
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
  }

  .addr-list li .addr-del {
    bottom: 17px;
    right: 20px;
    width: 20px;
    height: 20px;
  }

  .addr-list li .addr-set-default {
    display: none;
  }

  .addr-list li .addr-set-default, .addr-list li .addr-default {
    bottom: 18px;
    left: 20px;
    color: #ee7a23;
  }

  .addr-list li:nth-child(4n) {
    margin-right: 0;
  }

  .addr-list li:hover {
    border-color: #ee7a23;
  }

  .addr-list li.addr-new {
    color: #605F5F;
    text-align: center;
  }

  .addr-list li.addr-new .add-new-inner {
    padding-top: 20px;
  }

  .addr-list li.addr-new .add-new-inner .icon-add {
    display: inline-block;
    width: 50px;
    height: 50px;
  }

  .addr-list li.addr-new .add-new-inner .icon-add .icon-add {
    width: 50px;
    height: 50px;
    fill: #605F5F;
  }

  .addr-list li.addr-new .add-new-inner p {
    margin-top: 10px;
  }

  .addr-list li.check {
    border-color: #ee7a23;
    border-width: 2px;
  }

  .addr-list li.check .addr-opration {
    display: block;
  }

  .shipping-addr-more {
    text-align: center;
  }

  @media only screen and (max-width: 991px) {
    .addr-list li {
      width: 49%;
      margin-right: 2%;
      height: auto;
    }

    .addr-list li:nth-child(4n) {
      margin-right: 2%;
    }

    .addr-list li:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 767px) {
    .addr-list {
      padding: 0 10px;
    }

    .addr-list li {
      width: 100%;
      margin: 0 0 10px 0;
    }

    .addr-list li dt {
      font-size: 1.6rem;
    }

    .addr-list li .address {
      height: auto;
    }
  }

  .cart-item {
    display: table;
    width: 100%;
  }

  .cart-item-head {
    display: table-header-group;
    width: 100%;
  }

  .cart-item-head ul {
    display: table-row;
    width: 100%;
  }

  .cart-item-head li {
    display: table-cell;
    height: 40px;
    line-height: 40px;
    background: #605F5F;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-family: "moderat", sans-serif;
    letter-spacing: .25em;
  }

  .cart-item-head li:nth-child(2), .cart-item-head li:nth-child(3), .cart-item-head li:nth-child(4), .cart-item-head li:nth-child(5) {
    /*width: 11%;*/
    padding: 0 10px;
  }

  .cart-item-list {
    display: table-row-group;
  }

  .cart-item-list > li {
    position: relative;
    display: table-row;
    padding: 32px 0;
    background: #fff;
  }

  .cart-item-list > li > div {
    position: relative;
    display: table-cell;
    text-align: center;
    vertical-align: top;
    border-bottom: 1px solid #e9e9e9;
    height: 100%;
  }

  .cart-item-list > li.disabled {
    background: #e9e9e9;
  }

  .cart-item-list > li.disabled .item-check-btn {
    background: #ccc;
  }

  .cart-item-list > li.disabled > div:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  .cart-item-list > li.item-has-include .cart-item-title {
    display: block;
    min-height: 66px;
    padding-left: 160px;
  }

  .cart-item-list .cart-tab-1 {
    min-height: 72px;
    padding: 32px 0 32px 0;
    text-align: left;
    border-left: 1px solid #e9e9e9;
  }

  .cart-item-list .cart-tab-2 {
    padding-top: 64px;
  }

  .cart-item-list .cart-tab-3 {
    padding-top: 48px;
  }

  .cart-item-list .cart-tab-4 {
    padding-top: 64px;
  }

  .cart-item-list .cart-tab-5 {
    padding-top: 62px;
    border-right: 1px solid #e9e9e9;
  }

  .cart-item-list .cart-item-check {
    float: left;
    padding: 30px 0 0 20px;
  }

  .cart-item-list .cart-item-pic {
    float: left;
    width: 80px;
    height: 80px;
    margin-left: 20px;
    border: 1px solid #e9e9e9;
    overflow: hidden;
  }

  .cart-item-list .cart-item-pic img {
    width: 100%;
  }

  .cart-item-list .cart-item-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 76px;
    padding: 0 20px 0 20px;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .cart-item-list .cart-item-title .item-name {
    width: 100%;
    line-height: 76px;
    color: #000;
    font-family: "moderat", sans-serif;
    font-weight: bold;
  }

  .cart-item-list .cart-item-title .item-count-down {
    margin-top: 10px;
    font-size: 12px;
  }

  .cart-item-list .cart-item-title .item-count-down .icon-clock {
    width: 1em;
    height: 1em;
    fill: #605F5F;
    vertical-align: top;
  }

  .cart-item-list .cart-item-title .item-count-down .item-count-down-time {
    padding: 1px 5px 0 5px;
    background: #f0f0f0;
    color: #605F5F;
  }

  .cart-item-list .cart-item-title .item-count-down .item-count-down-tips {
    margin-top: 5px;
    color: #ee7a23;
  }

  .cart-item-list .item-include {
    position: relative;
    width: 96%;
    padding-left: 160px;
  }

  .cart-item-list .item-include dl {
    padding-right: 60px;
  }

  .cart-item-list .item-include dl dt {
    float: left;
    width: 4.5em;
  }

  .cart-item-list .item-include dl dd {
    margin-bottom: 13px;
    padding-left: 4.5em;
    color: #999;
  }

  .cart-item-list .item-include dl dd:last-child {
    margin-bottom: 0;
  }

  .cart-item-list .item-include dl:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .cart-item-list .item-include .item-include-more {
    position: absolute;
    right: 10px;
    top: 0;
  }

  .cart-item-list .item-stock {
    margin-top: 5px;
    font-size: 12px;
    color: #999;
  }

  .cart-item-list .item-stock-no {
    color: #d1434a;
  }

  .cart-item-list .item-price {
    font-size: 16px;
    color: #333;
  }

  .cart-item-list .item-price-total {
    color: #d1434a;
    font-size: 16px;
  }

  .cart-item-list .item-edit-btn {
    position: relative;
    z-index: 6;
  }

  .cart-item-list .item-edit-btn:hover .icon {
    fill: #ee7a23;
  }

  .item-check-btn {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #999;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
  }

  .item-check-btn .icon-ok {
    position: relative;
    display: none;
    width: 100%;
    height: 100%;
    fill: #fff;
    -webkit-transform: scale(0.6);
    -ms-transform: scale(0.6);
    transform: scale(0.6);
    vertical-align: top;
  }

  .item-check-btn.check {
    background-color: #ee7a23;
    border-color: #ee7a23;
  }

  .item-check-btn.check .icon-ok {
    display: inline-block;
  }

  .item-edit-btn {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  .item-edit-btn .icon-del {
    width: 100%;
    height: 100%;
    fill: #999;
  }

  .order-item .cart-item-head li:nth-child(2), .order-item .cart-item-head li:nth-child(3), .order-item .cart-item-head li:nth-child(4) {
    width: 16%;
    padding: 0 10px;
  }

  .order-item .select-self {
    cursor: default;
  }

  .order-item .select-self-area .select-ipt {
    padding: 0;
    text-align: center;
  }

  @media only screen and (max-width: 991px) {
    .cart-item {
      display: block;
    }

    .cart-item-head {
      display: none;
    }

    .cart-item-list {
      display: block;
    }

    .cart-item-list > li {
      position: relative;
      display: block;
      margin-bottom: 10px;
      padding: 0;
      border-top: 1px solid #e9e9e9;
      border-bottom: 1px solid #e9e9e9;
    }

    .cart-item-list > li > div {
      position: static;
      display: block;
      border: none;
    }

    .cart-item-list > li:last-child {
      margin-bottom: 0;
    }

    .cart-item-list > li:after {
      visibility: hidden;
      display: block;
      content: " ";
      clear: both;
    }

    .cart-item-list > li:after {
      visibility: visible;
    }

    .cart-item-list > li.item-has-include .cart-item-title {
      min-height: 76px;
      display: block;
      padding-left: 126px;
    }

    .cart-item-list .cart-tab-1 {
      padding: 18px 0 0 0;
      border: none;
    }

    .cart-item-list .cart-tab-2 {
      display: none;
    }

    .cart-item-list .cart-tab-3 {
      float: left;
      width: 50%;
      margin-top: 10px;
      padding: 8px 0 8px 10px;
      text-align: left;
      border-top: 1px solid #f0f0f0;
    }

    .cart-item-list .cart-tab-4 {
      float: right;
      width: 50%;
      margin-top: 10px;
      padding: 15px 10px 14px 0;
      text-align: right;
      border-top: 1px solid #f0f0f0;
    }

    .cart-item-list .cart-tab-5 {
      clear: both;
      padding: 0;
    }

    .cart-item-list .cart-item-check {
      padding-left: 8px;
    }

    .cart-item-list .cart-item-pic {
      margin-left: 8px;
      width: 75px;
      height: 75px;
    }

    .cart-item-list .cart-item-title {
      min-height: 76px;
      padding: 0 10px 0 15px;
    }

    .cart-item-list .cart-item-title .item-count-down {
      font-size: 1.2rem;
    }

    .cart-item-list .item-include {
      clear: both;
      width: 100%;
      margin-top: 6px;
      padding: 0 10px 0 36px;
      font-size: 12px;
    }

    .cart-item-list .item-quantity > div {
      display: inline-block;
      margin-right: 3px;
      vertical-align: middle;
    }

    .cart-item-list .item-stock {
      margin-top: 0;
      font-size: 1.2rem;
    }

    .cart-item-list .cart-item-opration {
      position: absolute;
      top: 60px;
      right: 10px;
    }

    .order-item .cart-item-list .item-include {
      padding-left: 10px;
    }
  }

  /** shipping method **/
  .shipping-method:after, .shipping-method-whiteglove:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .shipping-method li, .shipping-method-whiteglove li {
    float: left;
    width: 23.8095%;
    height: 162px;
    margin: 0 1.587% 1.587% 0;
    padding: 20px;
    background: #fff;
    border: 2px solid #e9e9e9;
    font-size: 16px;
    line-height: 1.625;
    cursor: pointer;
    color: #333;
  }

  .shipping-method li:nth-child(4n), .shipping-method-whiteglove li:nth-child(4n) {
    margin-right: 0;
  }

  .shipping-method li .price, .shipping-method-whiteglove li .price {
    height: 26px;
    font-weight: bold;
  }

  .shipping-method li .shipping-tips, .shipping-method-whiteglove li .shipping-tips {
    height: 44px;
    margin-top: 20px;
    font-weight: 200;
    font-size: 14px;
  }

  .shipping-method li .shipping-tips p, .shipping-method-whiteglove li .shipping-tips p {
    line-height: 1.2587;
    color: #999;
  }

  .shipping-method li .shipping-tips .details, .shipping-method-whiteglove li .shipping-tips .details {
    display: inline-block;
    margin-top: 10px;
    color: #ee7a23;
    line-height: 1.5714;
    font-weight: bold;
  }

  .shipping-method li .shipping-tips .details .icon-question, .shipping-method-whiteglove li .shipping-tips .details .icon-question {
    width: 15px;
    height: 15px;
    fill: #ee7a23;
    vertical-align: middle;
  }

  .shipping-method li .shipping-tips .details span, .shipping-method-whiteglove li .shipping-tips .details span {
    text-decoration: underline;
    margin-left: 5px;
  }

  .shipping-method li.check, .shipping-method li:hover, .shipping-method-whiteglove li.check, .shipping-method-whiteglove li:hover {
    border-color: #ee7a23;
  }

  @media only screen and (max-width: 991px) {
    .shipping-method li, .shipping-method-whiteglove li {
      width: 49%;
      margin-right: 2%;
    }

    .shipping-method li:nth-child(4n), .shipping-method-whiteglove li:nth-child(4n) {
      margin-right: 2%;
    }

    .shipping-method li:nth-child(2n), .shipping-method-whiteglove li:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 767px) {
    .shipping-method, .shipping-method-whiteglove {
      padding: 0 10px;
    }

    .shipping-method li, .shipping-method-whiteglove li {
      width: 100%;
      margin: 0 0 10px 0;
      font-size: 1.6rem;
    }

    .shipping-method li .shipping-tips, .shipping-method-whiteglove li .shipping-tips {
      font-size: 1.4rem;
    }
  }

  /** apply promotion **/
  .apply-promotion {
    font-size: 0;
  }

  .apply-promotion:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .apply-promotion li {
    float: left;
    width: 24.25%;
    margin: .5% 1% .5% 0;
    height: 160px;
    padding-top: 25px;
    background: #fff;
    border: 2px solid #e9e9e9;
    vertical-align: top;
    text-align: center;
  }

  .apply-promotion li:nth-child(4n) {
    margin-right: 0;
  }

  .apply-promotion li p {
    margin-top: 12px;
    font-size: 16px;
    color: #333;
  }

  .apply-promotion .type i {
    display: inline-block;
    width: 70px;
    height: 70px;
    background: url(http://image3.lecloud.com/lemallus/20170206-bea3d222-1877-433d-9dec-325e35f92a77.png) no-repeat 0 0;
    background-size: 140px auto;
  }

  .apply-promotion .type.coupon-money i {
    background-position: 0 -70px;
  }

  .apply-promotion .type.coupon-off i {
    background-position: 0 -210px;
  }

  .apply-promotion .type.coupon-off-ladder i {
    background-position: 0 -140px;
  }

  .apply-promotion .type.coupon-gift i {
    background-position: 0 -350px;
  }

  .apply-promotion .type.coupon-gift-ladder i {
    background-position: 0 -280px;
  }

  @media only screen and (max-width: 767px) {
    .apply-promotion {
      padding: 0 10px;
    }

    .apply-promotion li {
      width: 49%;
      height: 100px;
      padding-top: 5px;
      border-width: 1px;
      margin-right: 2%;
      margin-bottom: 2%;
    }

    .apply-promotion li:nth-child(2n) {
      margin-right: 0;
    }

    .apply-promotion li .type i {
      -webkit-transform: scale(0.65);
      -ms-transform: scale(0.65);
      transform: scale(0.65);
    }

    .apply-promotion li p {
      margin-top: 0;
      font-size: 12px;
    }
  }

  .price-count ul {
    display: table;
    width: 100%;
  }

  .price-count li {
    display: table-row;
    font-size: 18px;
  }

  .price-count li span {
    display: table-cell;
    height: 36px;
    padding-right: 10px;
    vertical-align: top;
    text-align: right;
  }

  .price-count li span:first-child {
    color: #999;
  }

  .price-count li span:last-child {
    width: 20px;
    padding-left: 10px;
    white-space: nowrap;
  }

  .price-count .order-total-price span:last-child {
    color: #d1434a;
    font-size: 1.125em;
    font-weight: bold;
  }

  .tips_pop {
    position: relative;
  }

  .tips_pop .i_info {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(http://image3.lecloud.com/lemallus/20160904-732243ef-e62b-4642-acea-153967123d03.png) no-repeat 0 0;
    background-size: 100% auto;
    border-radius: 50%;
    vertical-align: top;
  }

  .tips_pop .tips_pop_box {
    position: absolute;
    bottom: 28px;
    left: -250px;
    display: none;
    width: 274px;
    padding: 20px 10px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .tips_pop .i_down {
    position: absolute;
    bottom: -6px;
    right: 10px;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: #fff;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .tips_pop:hover .tips_pop_box {
    display: block;
  }

  .tee_tips_pop {
    display: inline-block;
    margin-right: 44px;
    font-size: 14px;
    text-align: left;
  }

  .tee_tips_pop dt {
    margin-bottom: 10px;
    color: #333;
  }

  .tee_tips_pop .tee_pop_box em {
    display: inline-block;
    width: 190px;
    vertical-align: top;
  }

  .tee_tips_pop .tee_pop_box .price {
    width: 50px;
    text-align: right;
  }

  .tee_tips_pop .tee_pop_box .tee_total {
    margin-top: 13px;
    padding-top: 13px;
    border-top: 1px solid #f0f0f0;
  }

  .tee_tips_pop .tee_pop_box .tee_total em {
    color: #333;
  }

  .tee_tips_pop .tee_pop_box .price {
    color: #d1434a;
  }

  @media only screen and (max-width: 991px) {
    .price-count li {
      font-size: 1.4rem;
    }

    .price-count li span {
      height: 29px;
    }
  }

  /*  订单成功  */
  .order-create {
    padding: 80px 0 50px 0;
    text-align: center;
  }

  .order-create-pic {
    height: 130px;
    margin: 0 auto;
    margin-bottom: 60px;
  }

  .order-create-pic img {
    height: 100%;
  }

  .order-create-main {
    font-size: 18px;
    line-height: 1.3;
  }

  .order-create-main h3 {
    margin-bottom: 20px;
    font-size: 1.25em;
    font-weight: 200;
    color: #333;
  }

  .order-create-main p {
    margin-bottom: 40px;
    color: #999;
  }

  .order-create-main p span {
    margin: 0 10px;
  }

  .order-create-main .order-create-btn-wrap {
    max-width: 460px;
    margin: 0 auto;
    padding: 0 5px;
  }

  .order-create-main .order-create-btn-wrap > div {
    float: left;
    width: 50%;
    padding: 0 10px;
  }

  .order-create-main .order-create-btn-wrap .btn {
    width: 100%;
    min-width: 120px;
  }

  .order-create-main .order-create-btn-wrap:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .order-create-main .checkout-share-order {
    margin: 20px auto;
  }

  .order-create-main .checkout-share-order .checkout-share-tit {
    font-size: 1.44em;
    color: #e02614;
    font-weight: 200;
  }

  .order-create-main .checkout-share-main {
    text-align: center;
  }

  .order-create-main .checkout-share-main button {
    margin: 0 5%;
    padding: 20px 0;
    color: #e02614;
  }

  .order-create-main .checkout-share-main button:hover {
    opacity: .6;
  }

  .order-create-main .checkout-share-main .checkout-share-icon {
    width: 60px;
    height: 60px;
    margin: 10px auto;
  }

  .order-create-main .checkout-share-main .checkout-share-icon .icon {
    width: 100%;
    height: 100%;
    fill: #e02614;
  }

  .order-create-main .checkout-share-main .checkout-share-twitter {
    color: #ee7a23;
  }

  .order-create-main .checkout-share-main .checkout-share-twitter .icon {
    fill: #ee7a23;
  }

  .order-create-main .checkout-share-main .checkout-share-name {
    margin: 0;
    font-weight: 200;
    text-transform: uppercase;
    font-size: .6em;
    letter-spacing: .25em;
  }

  .order-create-main .get-lecode {
    margin-bottom: 40px;
    padding: 0 10px;
  }

  .order-create-main .get-lecode .lecode-main {
    max-width: 767px;
    margin: 0 auto 10px auto;
    padding: 37px 0;
    border: 1px dashed #ee7a23;
  }

  .order-create-main .get-lecode .lecode-main .lecode-num {
    margin-bottom: 20px;
    color: #ee7a23;
    font-size: 20px;
  }

  .order-create-main .get-lecode .get-lecode-tips {
    color: #999;
    line-height: 16px;
    line-height: 18px;
  }

  @media only screen and (max-width: 767px) {
    .order-create {
      padding: 60px 0 0 0;
    }

    .order-create-pic {
      height: 104px;
      margin-bottom: 40px;
    }

    .order-create-main {
      font-size: 1.4rem;
    }

    .order-create-main h3, .order-create-main p {
      line-height: 1.5;
    }

    .order-create-main h3 {
      margin-bottom: 20px;
    }

    .order-create-main p span {
      display: block;
    }

    .order-create-main .order-create-btn-wrap > div {
      padding: 0 5px;
    }

    .order-create-main .order-create-btn-wrap .btn {
      font-size: 1.2rem;
      letter-spacing: .1em;
    }

    .order-create-main .checkout-share-main {
      font-size: 1.2rem;
    }

    .order-create-main .checkout-share-main .checkout-share-icon {
      width: 40px;
      height: 40px;
    }

    .order-create-main .get-lecode .lecode-main {
      width: 100%;
    }
  }

  .footer {
    margin-top: 50px;
  }

  .checkout-page .btn, .checkout .btn {
    min-width: 200px;
  }

  .checkout-page .page-title-h2 {
    display: none;
  }

  .checkout-title h2 {
    padding: 20px 0;
    font-size: 16px;
    color: #605F5F;
  }

  /** 确认地址 **/
  .checkout-addr {
    padding: 10px 0 50px 0;
  }

  .checkout-addr .next-btn-wrap {
    margin-top: 20px;
    text-align: right;
  }

  /** cart **/
  .cart {
    padding-bottom: 50px;
  }

  .cart-foot-wrap {
    margin-top: 20px;
    background: #fff;
    border: 1px solid #e9e9e9;
    font-size: 16px;
  }

  .cart-foot-wrap.fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 101;
  }

  .cart-foot-wrap .cart-foot-inner:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .cart-foot-wrap .cart-foot-l {
    float: left;
    padding: 0 22px;
    line-height: 54px;
  }

  .cart-foot-wrap .item-all-check {
    float: left;
  }

  .cart-foot-wrap .item-all-check .item-check-btn {
    margin-right: 18px;
  }

  .cart-foot-wrap .item-all-check span {
    vertical-align: middle;
  }

  .cart-foot-wrap .item-all-del {
    float: left;
    margin-left: 22px;
  }

  .cart-foot-wrap .item-all-del .item-del-btn {
    vertical-align: middle;
  }

  .cart-foot-wrap .cart-foot-r {
    float: right;
  }

  .cart-foot-wrap .cart-foot-r:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .cart-foot-wrap .item-total {
    float: left;
    margin: 0px 30px 0 0;
    color: #999;
    font-size: 16px;
    text-align: right;
    line-height: 54px;
  }

  .cart-foot-wrap .item-total .total-price {
    margin-left: 6px;
    color: #d1434a;
    font-size: 1.125em;
    font-weight: bold;
    line-height: 1.2;
  }

  .cart-foot-wrap .cart-foot-checkout-promotions {
    margin-top: 2px;
    font-size: 12px;
  }

  .cart-foot-wrap .btn-wrap, .cart-foot-wrap .next-btn-wrap {
    float: right;
  }

  .cart-foot-wrap .next-btn-wrap .btn {
    height: 55px;
    line-height: 55px;
  }

  /** order confirm **/
  .checkout-order {
    padding: 10px 0 50px 0;
  }

  .checkout-order .item-list-wrap {
    margin-bottom: 40px;
  }

  .redeem-coupon-wrap {
    padding-bottom: 40px;
  }

  .redeem-coupon-wrap .text-redeem {
    width: 380px;
    height: 40px;
    line-height: 40px;
    margin-right: 16px;
    padding-top: 0;
    padding-bottom: 0;
    vertical-align: top;
  }

  .apply-promotion-wrap {
    margin-bottom: 60px;
  }

  .price-count-wrap {
    margin-bottom: 20px;
  }

  .order-foot-wrap .prev-btn-wrap {
    float: left;
  }

  .order-foot-wrap .next-btn-wrap {
    float: right;
  }

  .order-foot-wrap:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .md-white-glove {
    width: 620px;
  }

  .md-white-glove .md-modal-inner {
    padding: 54px 30px 28px 30px;
  }

  .md-white-glove .main-white-glove {
    padding-left: 15px;
    line-height: 1;
  }

  .md-white-glove .main-white-glove ul {
    margin: 40px 0;
  }

  .md-white-glove .main-white-glove li {
    margin: 15px 0;
    list-style-type: decimal;
    color: #999;
  }

  .md-white-glove .main-white-glove .link-faq {
    text-align: right;
    font-size: 16px;
    font-weight: bold;
  }

  /** cart blank **/
  .cart-blank-wrap {
    padding-bottom: 50px;
  }

  .cart-blank-wrap .page-title-normal {
    display: none;
  }

  .cart-blank {
    padding: 80px 0 0 0;
    text-align: center;
  }

  .cart-blank .cart-blank-pic {
    height: 107px;
    margin-bottom: 60px;
  }

  .cart-blank .cart-blank-pic img {
    height: 100%;
  }

  .cart-blank h3 {
    line-height: 1.35;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 200;
  }

  @media only screen and (max-width: 1280px) {
    .container {
      width: 100%;
    }
  }

  @media only screen and (max-width: 991px) {
    .cart-foot-wrap .cart-foot-l {
      padding: 0 0 0 10px;
    }
  }

  @media only screen and (max-width: 767px) {
    .footer {
      margin-top: 0;
    }

    .md-white-glove .md-content {
      padding: 30px 10px 20px 10px;
    }

    .md-white-glove .main-white-glove {
      font-size: 12px;
      font-weight: 200;
    }

    .md-white-glove .main-white-glove ul {
      margin: 20px 0;
    }

    .md-white-glove .main-white-glove .link-faq {
      font-size: 12px;
    }

    .checkout-page, .checkout {
      padding-bottom: 50px;
    }

    .checkout-page .header, .checkout .header {
      border-bottom: 1px solid #e9e9e9;
    }

    .checkout-page .lemall-msg-info, .checkout .lemall-msg-info {
      margin-left: 10px;
      margin-right: 10px;
    }

    .cart-page {
      padding-bottom: 75px;
    }

    .cart-page {
      padding-bottom: 75px;
    }

    .checkout-page .page-title-h2 {
      display: block;
    }

    .cart {
      padding-bottom: 0;
    }

    .page-title-normal {
      border: none;
    }

    .checkout-title h2 {
      padding: 2.5rem 0 1.3rem;
      font-size: 1.4rem;
      border-bottom: none;
    }

    .check-step ul {
      margin-bottom: 0;
    }

    .next-btn-wrap {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 101;
    }

    .next-btn-wrap .btn {
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
    }

    .checkout-addr {
      padding: 0;
    }

    .checkout-addr .next-btn-wrap {
      margin: 0;
      border: none;
    }

    .checkout-order {
      padding: 0;
    }

    .checkout-order .item-list-wrap {
      margin-bottom: 0;
    }

    .cart-foot-wrap {
      border: none;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 101;
    }

    .cart-foot-wrap .cart-foot-l {
      font-size: 1.4rem;
      line-height: 48px;
    }

    .cart-foot-wrap .item-all-check {
      color: #605F5F;
    }

    .cart-foot-wrap .item-all-check .item-check-btn {
      margin-right: 5px;
    }

    .cart-foot-wrap .item-all-del {
      display: none;
    }

    .cart-foot-wrap .item-total {
      margin-top: 8px;
      margin-right: 10px;
      padding-left: 0;
      text-align: right;
      font-size: 1.2rem;
    }

    .cart-foot-wrap .item-total .total-price {
      display: block;
      margin: 0;
      font-size: 1.6rem;
      margin-top: 2px;
    }

    .cart-foot-wrap .cart-foot-checkout-promotions {
      position: absolute;
      bottom: 50px;
      left: 0;
      width: 100%;
      padding: 5px;
      background: #f0f0f0;
      border-top: 1px solid #e9e9e9;
      text-align: center;
      font-size: 1.2rem;
    }

    .cart-foot-wrap .btn {
      min-width: 116px;
      height: 50px;
      line-height: 50px;
      font-size: 13px;
    }

    .cart-foot-wrap .next-btn-wrap {
      position: relative;
      float: right;
      width: auto;
    }

    .cart-foot-wrap .next-btn-wrap .btn {
      width: 120px;
    }

    .confirm-item-list-wrap, .redeem-coupon-wrap, .apply-promotion-wrap {
      margin-bottom: 0;
    }

    .redeem-coupon-wrap {
      padding-bottom: 0;
    }

    .redeem-coupon-wrap .redeem-coupon {
      margin: 0 10px;
    }

    .redeem-coupon-wrap .text-redeem {
      width: 100%;
      margin-bottom: 8px;
      margin-right: 0;
    }

    .redeem-coupon-wrap .btn {
      width: 100%;
    }

    .price-count-wrap {
      margin: 0;
      padding: 25px 0 15px 0;
      border: none;
    }

    .tee_tips_pop {
      display: none;
    }

    .order-foot-wrap .prev-btn-wrap {
      display: none;
    }

    .addr-list-wrap {
      /*padding-bottom:23px;*/
    }

    .cart-blank-wrap .page-title-normal {
      display: block;
    }

    .cart-blank {
      padding-top: 60px;
    }

    .cart-blank .cart-blank-pic {
      height: 96px;
      margin-bottom: 20px;
    }

    .cart-blank h3 {
      font-size: 18px;
    }

    .cart-blank .br {
      display: block;
    }

    .header__primary {
      display: none;
    }

    .header__secondary__user {
      right: 61px;
    }

    .header__secondary__cart {
      right: 22px;
    }

    .header__search-mobile, .header__search-wrapper {
      display: none;
    }
  }

  .input-sub, .input-add {
    min-width: 40px;
    height: 100%;
    border: 0;
    color: #605F5F;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    display: inline-block;
    background: #f0f0f0;
  }

  .item-quantity .select-self-area {
    background: none;
    border: 1px solid #f0f0f0;
  }

  .item-quantity .select-self-area .select-ipt {
    display: inline-block;
    padding: 0 3px;
    width: 30px;
    min-width: 30px;
    text-align: center;
  }
</style>
