<template>
  <div>
    <swiper class="swiper main_slider" :options="mainSliderOption">
      <swiper-slide
        class="slide-1 myhover_bg"
        v-for="item in allHeaderMainSlider"
        :key="item.id"
      >
        <router-link
          :to="item.link"
          class="mybg_center d-block h-100 w-100"
          :style="{'background-image': 'url(' + item.image + ')' }">
        </router-link>
      </swiper-slide>
      <div class="main_slider_next main_slider_btns flex-center d-flex">
        <i class="fas fa-chevron-right"></i>
      </div><!-- main_slider_next -->
      <div class="main_slider_prev main_slider_btns flex-center d-flex">
        <i class="fas fa-chevron-left"></i>
      </div><!-- main_slider_prev -->
    </swiper>
    <!-- Add Pagination -->
    <div class="swiper-pagination main_slider_pagination mt-3"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import 'swiper/css/swiper.css'

export default {
  name: 'HeaderMainSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      mainSliderOption: {
        effect: 'fade',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.main_slider_next',
          prevEl: '.main_slider_prev'
        },
        pagination: {
          el: '.main_slider_pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    ...mapGetters(['allHeaderMainSlider'])
  }
}
</script>

<style lang="scss">

.main_slider {
  width: 100%;
  height: 370px;
  overflow: hidden;
  border-radius: 10px;
}
.main_slider_btns {
  border-radius: 50%;
  opacity: 0.5;
  width: 48px;
  height: 48px;
  position: absolute;
  transition: all 0.25s;
  transform: translate(0, -50%);
  z-index: 2;
  font-size: 18px;
  color: #000;
  background: #fff;
}
.main_slider_btns:hover {
  opacity: 1;
  color: var(--main-color);
}

.main_slider_next {
  top: 50%;
  right: -50px;
}
.main_slider_prev {
  top: 50%;
  left: -50px;
}
.main_slider:hover .main_slider_prev {
  left: 35px;
}
.main_slider:hover .main_slider_next {
  right: 35px;
}

.main_slider_pagination {
  position: relative;
  z-index: 2;
}
.main_slider_pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 0 3px;
  outline: none !important;
  background: var(--main-color);
}
</style>
