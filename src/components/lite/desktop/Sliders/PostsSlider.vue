<template>
  <div class="position-relative">
    <!-- Swiper -->
    <swiper
      class="swiper similar_goods_slider"
      :options="SimilarGoodsSliderOption"
    >
      <swiper-slide class="swiper-slide" v-for="post in posts" :key="post.id">
        <CardBase :post="post" />
      </swiper-slide>
      <!-- swiper-slide -->
    </swiper>
    <!-- other_seller_goods_slider -->

    <div class="similar_goods_slider_next main_slider_btns flex-center d-flex">
      <i class="fas fa-chevron-right"></i>
    </div>
    <!-- other_seller_goods_slider_next -->

    <div class="similar_goods_slider_prev main_slider_btns flex-center d-flex">
      <i class="fas fa-chevron-left"></i>
    </div>
    <!-- other_seller_goods_slider_prev -->
  </div>
  <!-- position-relative -->
</template>

<script>
import CardBase from "@/components/lite/desktop/Cards/CardBase";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "PostsSlider",
  components: {
    Swiper,
    SwiperSlide,
    CardBase
  },
  props: {
    posts: {
      type: Array
    }
  },
  data() {
    return {
      SimilarGoodsSliderOption: {
        spaceBetween: 20,
        slidesPerView: 5,
        navigation: {
          nextEl: ".similar_goods_slider_next",
          prevEl: ".similar_goods_slider_prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.similar_goods_slider {
  width: 100%;
  height: 400px;
}
.similar_goods_slider_prev.swiper-button-disabled {
  opacity: 0 !important;
  pointer-events: none;
}
.similar_goods_slider_next.swiper-button-disabled {
  opacity: 0 !important;
  pointer-events: none;
}
.similar_goods_slider_next {
  top: 45%;
  right: -23px;
  font-size: 17px;
  width: 45px;
  height: 45px;
  opacity: 1;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.13);
  outline: none;
}
.similar_goods_slider_prev {
  top: 45%;
  left: -23px;
  font-size: 17px;
  width: 45px;
  height: 45px;
  opacity: 1;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.13);
  outline: none;
}
.similar_goods_slider:hover .similar_goods_slider_prev {
  left: 20px;
}
.similar_goods_slider:hover .similar_goods_slider_next {
  right: 20px;
}
</style>
