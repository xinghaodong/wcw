<template>
  <div>
    <header>
      <div>
        <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png" />
      </div>
      <div>
        <p>请填写地址</p>
        <span>
          <img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png" />
        </span>
      </div>
      <div>
        <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" />
      </div>
    </header>
    <div>
      <lunbo />
    </div>
  </div>
</template>
<script>
import lunbo from "../components/lunbo";
export default {
  components: {
    lunbo
  }
};
</script>
<style scoped>
header {
  position: fixed;
  width: 93.5%;
  height: 0.9rem;
  line-height: 0.9rem;
  padding: 0 .24rem;
  background: #fff;
  z-index: 3;
  top: 0;
  left: 0;
}
header div:nth-child(1) {
  margin-right: 0.3rem;
  float: left;
}
header div:nth-child(1) img {
  display: block;
  width: 0.88rem;
  margin-top: 0.25rem;
}
header div:nth-child(2) {
  width: 3.5rem;
  float: left;
  font-size: 0.3rem;
  color: #1f6117;
  text-align: center;
}
header div:nth-child(2) p {
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  height: 0.9rem;
}
header div:nth-child(2) span {
  float: left;
}
header div:nth-child(2) span img {
  width: 0.15rem;
  vertical-align: 6%;
}
header div:nth-child(3){
    width: .8rem;
    float: right;
    font-size: .26rem;
    color: #666;
    text-align: right;
}
header div:nth-child(3) img{
    width: .36rem;
    height: auto;
    vertical-align: middle;
}
</style>
