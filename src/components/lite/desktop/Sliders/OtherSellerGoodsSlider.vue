<template>
  <div>
    <div class="position-relative">
      <!-- Swiper -->
      <swiper
        class="swiper other_seller_goods_slider"
        :options="otherSellerGoodsOption"
      >
        <swiper-slide class="swiper-slide">
          <Card3 />
        </swiper-slide>
        <!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <Card3 />
        </swiper-slide>
        <!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <Card3 />
        </swiper-slide>
        <!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <Card3 />
        </swiper-slide>
        <!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <Card3 />
        </swiper-slide>
        <!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <Card3 />
        </swiper-slide>
        <!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <Card3 />
        </swiper-slide>
        <!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <Card3 />
        </swiper-slide>
        <!-- swiper-slide -->
      </swiper>
      <!-- other_seller_goods_slider -->

      <div
        class="other_seller_goods_slider_next main_slider_btns flex-center d-flex"
      >
        <i class="fas fa-chevron-right"></i>
      </div>
      <!-- other_seller_goods_slider_next -->
      <div
        class="other_seller_goods_slider_prev main_slider_btns flex-center d-flex"
      >
        <i class="fas fa-chevron-left"></i>
      </div>
      <!-- other_seller_goods_slider_prev -->
    </div>
    <!-- position-relative -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Card3 from "@/components/lite/desktop/Cards/Card3";

export default {
  name: "HeaderMainSlider",
  components: {
    Swiper,
    SwiperSlide,
    Card3
  },
  data() {
    return {
      otherSellerGoodsOption: {
        spaceBetween: 15,
        slidesPerView: 3,
        navigation: {
          nextEl: ".other_seller_goods_slider_next",
          prevEl: ".other_seller_goods_slider_prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.other_seller_goods_slider {
  width: 100%;
  height: 230px;
}
.other_seller_goods_slider_prev.swiper-button-disabled {
  opacity: 0 !important;
  pointer-events: none;
}
.other_seller_goods_slider_next.swiper-button-disabled {
  opacity: 0 !important;
  pointer-events: none;
}
.other_seller_goods_slider_next {
  top: 45%;
  right: -19px;
  font-size: 15px;
  width: 40px;
  height: 40px;
  opacity: 1;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.13);
  outline: none;
}
.other_seller_goods_slider_prev {
  top: 45%;
  left: -19px;
  font-size: 15px;
  width: 40px;
  height: 40px;
  opacity: 1;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.13);
  outline: none;
}
.other_seller_goods_slider:hover .other_seller_goods_slider_prev {
  left: 20px;
}
.other_seller_goods_slider:hover .other_seller_goods_slider_next {
  right: 20px;
}
</style>
