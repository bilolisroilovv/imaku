<template>
  <div>
    <!-- Swiper -->
    <swiper
      class="swiper gallery-top bg-white"
      :options="swiperOptionTop"
      ref="swiperTop"
      id="lightgallery"
    >
      <swiper-slide
        v-for="(image, index) in gallery"
        class="swiper-slide"
        :key="index"
      >
        <div class="zoom-imgs item" :data-src="image">
          <img :src="image" />
        </div>
      </swiper-slide>
      <!-- Add Arrows -->
      <div
        class="product_slider_next main_slider_btns flex-center d-flex swiper-button-next"
        slot="button-next"
      ></div>
      <!-- main_slider_next -->
      <div
        class="product_slider_prev main_slider_btns flex-center d-flex swiper-button-prev"
        slot="button-prev"
      ></div>
    </swiper>
    <swiper
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
      ref="swiperThumbs"
    >
      <swiper-slide
        v-for="(image, index) in gallery"
        :key="index"
        class="gallery-thumb"
        id="swiper-slide6"
      >
        <div class="item" :data-src="image">
          <img :src="image" />
        </div>
      </swiper-slide>
    </swiper>
    <!-- gallery-thumbs -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "lightgallery.js";
import "lightgallery.js/dist/css/lightgallery.css";

export default {
  name: "ProductMainSlider",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 5,
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  props: ["gallery"],
  computed: {
    swiperTop() {
      return this.$refs.swiperTop.$swiper;
    },
    swiperThumbs() {
      return this.$refs.swiperThumbs.$swiper;
    }
  },
  mounted() {
    this.swiperTop.controller.control = this.swiperThumbs;
    this.swiperThumbs.controller.control = this.swiperTop;
    const el = document.getElementById("lightgallery");
    window.lightGallery(el, {
      thumbnail: true,
      selector: ".item"
    });
  }
};
</script>

<style lang="scss">
.gallery-top {
  height: 600px;
  width: 100%;
  border-radius: 5px;
  img {
    max-width: 100%;
  }
}

.gallery-thumbs {
  height: 150px;
  box-sizing: border-box;
  padding: 10px 0;
}

.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  cursor: pointer;
  opacity: 1;
  border-radius: 3px !important;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.gallery-thumbs .swiper-slide-active {
  -webkit-box-shadow: inset 0px 0px 0px 3px var(--main-color);
  -moz-box-shadow: inset 0px 0px 0px 3px var(--main-color);
  box-shadow: inset 0px 0px 0px 3px var(--main-color);
  opacity: 1;
  padding: 5px;
}

.product_slider_next {
  top: 50%;
  right: -50px;
}
.product_slider_prev {
  top: 50%;
  left: -50px;
}
.product_slider_next,
.product_slider_prev {
  &::after {
    font-size: 18px;
  }
}
.gallery-top:hover .product_slider_prev {
  left: 25px;
}
.gallery-top:hover .product_slider_next {
  right: 25px;
}
</style>
