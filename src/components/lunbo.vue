<template>
  <div class="nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list">
            <img :src="item.picUrl">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
      this.$axios.get("http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D")
        .then((res)=>{
            this.list=res.data.data.carousel
        })
  },
  watch: {
    list() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            },
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>
<style>
.swiper-container {
  height: 3.32rem;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet-active{
    opacity: 1;
    background: #fff;
    width:.16rem;
    height:.16rem;
}
</style>


