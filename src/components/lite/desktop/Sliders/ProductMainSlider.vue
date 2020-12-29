<template>
  <div>
    <!-- Swiper -->
      <swiper class="swiper gallery-top bg-white" :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide
        class="swiper-slide mybg_center zoom-imgs"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes.jpg') + ')'}"
        >
        </swiper-slide>
        <swiper-slide
        class="swiper-slide mybg_center zoom-imgs"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes2.jpg') + ')'}"
        >
        </swiper-slide>
        <swiper-slide
        class="swiper-slide mybg_center zoom-imgs"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes3.jpg') + ')'}"
        >
        </swiper-slide>
        <swiper-slide
        class="swiper-slide mybg_center zoom-imgs"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes4.jpg') + ')'}"
        >
        </swiper-slide>
        <swiper-slide
        class="swiper-slide mybg_center zoom-imgs"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes5.jpg') + ')'}"
        >
        </swiper-slide>
        <swiper-slide
        class="swiper-slide mybg_center zoom-imgs"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes6.jpg') + ')'}"
        >
        </swiper-slide>
        <!-- Add Arrows -->
        <div class="product_slider_next main_slider_btns flex-center d-flex">
          <i class="fas fa-chevron-right"></i>
        </div>
        <!-- main_slider_next -->
        <div class="product_slider_prev main_slider_btns flex-center d-flex">
          <i class="fas fa-chevron-left"></i>
        </div>
      </swiper>
      <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide
        class="gallery-thumb slide mybg_center"
        id="swiper-slide1"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes.jpg') + ')'}"
        ></swiper-slide>
        <swiper-slide
        class="gallery-thumb slide mybg_center"
        id="swiper-slide1"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes2.jpg') + ')'}"
        ></swiper-slide>
        <swiper-slide
        class="gallery-thumb slide mybg_center"
        id="swiper-slide1"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes3.jpg') + ')'}"
        ></swiper-slide>
        <swiper-slide
        class="gallery-thumb swiper-slide mybg_center"
        id="swiper-slide1"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes4.jpg') + ')'}"
        ></swiper-slide>
        <swiper-slide
        class="gallery-thumb slide mybg_center"
        id="swiper-slide1"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes5.jpg') + ')'}"
        ></swiper-slide>
        <swiper-slide
        class="gallery-thumb slide mybg_center"
        id="swiper-slide1"
        :style="{'background-image': 'url(' + require('@/assets/lite/mercedes6.jpg') + ')'}"
        ></swiper-slide>
      </swiper> <!-- gallery-thumbs -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'ProductMainSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptionTop: {
        effect: 'fade',
        navigation: {
          nextEl: '.product_slider_next',
          prevEl: '.product_slider_prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss">
.gallery-top {
  height: 600px;
  width: 100%;
  border-radius: 5px;
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
  border-radius: 3px!important;
  overflow: hidden;
}

.gallery-thumbs .swiper-slide-active {
  -webkit-box-shadow: inset 0px 0px 0px 3px var(--main-color);
  -moz-box-shadow: inset 0px 0px 0px 3px var(--main-color);
  box-shadow: inset 0px 0px 0px 3px var(--main-color);
  opacity: 1;
}

.product_slider_next {
  top: 50%;
  right: -50px;
}
.product_slider_prev {
  top: 50%;
  left: -50px;
}
.gallery-top:hover .product_slider_prev {
  left: 25px;
}
.gallery-top:hover .product_slider_next {
  right: 25px;
}
</style>
