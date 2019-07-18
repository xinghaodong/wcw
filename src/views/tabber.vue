<template>
  <div class="wc">
    

    <div class="main">
      <router-view />
    </div>

    <div class="footer">
      <ul>
        <li>
          <router-link to="/wc/home" :class="{active:current=='home'}">
            <i class="home"></i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/wc/classify" :class="{active:current=='classify'}">
            <i class="classify"></i>
            <!-- <img src="http://wmall.wochu.cn/h5/img/vueCommon/shopping_n.png" /> -->
            <p>分类</p>
          </router-link>
        </li>
        <li>
          <router-link to="/wc/cart" :class="{active:current=='cart'}">
            <i class="cart"></i>
            <!-- <img src="http://wmall.wochu.cn/h5/img/vueCommon/cart_n.png" /> -->
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link to="/wc/mine" :class="{active:current=='mine'}">
            <i class="mine"></i>
            <!-- <img src="http://wmall.wochu.cn/h5/img/vueCommon/my_n.png" /> -->
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: "home"
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
.wc {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 0.9rem;
}
.main {
  flex: 1;
  overflow: auto;
}
.footer {
  height: 0.9rem;
  padding-top: 0.1rem;
  text-align: center;
}
.footer ul {
  display: flex;
}

.footer ul li {
  width: 25%;
}
.home {
  background:url("http://wmall.wochu.cn/h5/img/vueCommon/index_n.png")  no-repeat bottom;
  background-size: cover;
}
.classify {
  background:url("http://wmall.wochu.cn/h5/img/vueCommon/shopping_n.png")  no-repeat bottom;
  background-size: cover;
}
.cart {
  background:url("http://wmall.wochu.cn/h5/img/vueCommon/cart_n.png")  no-repeat bottom;
  background-size: cover;
}
.mine {
  background:url("http://wmall.wochu.cn/h5/img/vueCommon/my_n.png")  no-repeat bottom;
  background-size: cover;
}

i{
  height: .58rem;
    width: .58rem;
    display: block;
    margin: 0 auto;
}
.footer ul li p {
  color: #999;
}
.footer .router-link-exact-active p {
  color: #5d8640;
}
.footer .router-link-exact-active .home{
  background:url("http://wmall.wochu.cn/h5/img/vueCommon/index_r.png")  no-repeat bottom;
  background-size: cover;
}
.footer .router-link-exact-active .classify{
  background:url("http://wmall.wochu.cn/h5/img/vueCommon/shopping_r.png")  no-repeat bottom;
  background-size: cover;
}
.footer .router-link-exact-active .cart{
  background:url("http://wmall.wochu.cn/h5/img/vueCommon/cart_r.png")  no-repeat bottom;
  background-size: cover;
}
.footer .router-link-exact-active .mine{
  background:url("http://wmall.wochu.cn/h5/img/vueCommon/my_r.png")  no-repeat bottom;
  background-size: cover;
}
</style>

