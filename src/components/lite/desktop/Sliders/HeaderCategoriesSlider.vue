<template>
  <div>
    <div class="position-relative myswiper_hover mt-4">
      <swiper class="swiper categories_slider" :options="categoriesSliderOption">
        <swiper-slide class="slide-1">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie1.png') + ')'}">

          </router-link>
          <router-link to="/category" class="categorie_text">
            Автотовары
          </router-link>
        </swiper-slide><!-- swiper-slide -->
        <swiper-slide class="slide-1">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie2.png') + ')'}">

          </router-link>
          <router-link to="/category" class="categorie_text">
            Спорт и развлечение
          </router-link>
        </swiper-slide><!-- swiper-slide -->
        <swiper-slide class="slide-1">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie3.png') + ')'}">

          </router-link>
          <router-link to="/category" class="categorie_text">
            Недвижимость
          </router-link>
        </swiper-slide><!-- swiper-slide -->
        <swiper-slide class="slide-1">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie4.png') + ')'}">

          </router-link>
          <router-link to="/category" class="categorie_text">
            Товары для детей
          </router-link>
        </swiper-slide><!-- swiper-slide -->
        <swiper-slide class="slide-1">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie5.png') + ')'}">
          </router-link>
          <router-link to="/category" class="categorie_text">
            Электроника
          </router-link>
        </swiper-slide><!-- swiper-slide -->
        <swiper-slide class="slide-1">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie6.png') + ')'}">

          </router-link>
          <router-link to="/category" class="categorie_text">
            Одежда для мужчин
          </router-link>
        </swiper-slide><!-- swiper-slide -->
        <swiper-slide class="slide-1">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie7.png') + ')'}">

          </router-link>
          <router-link to="/category" class="categorie_text">
            Одежда для женщин
          </router-link>
        </swiper-slide><!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie2.png') + ')'}">

          </router-link>
          <router-link to="/category" class="categorie_text">
            Спорт и развлечение
          </router-link>
        </swiper-slide><!-- swiper-slide -->
        <swiper-slide class="swiper-slide">
          <router-link to="/category"
          class="mybg_center categorie_block d-block h-100 w-100"
          :style="{'background-image': 'url(' + require('@/assets/lite/categorie5.png') + ')'}">

          </router-link>
          <router-link to="/category" class="categorie_text">
            Спорт и развлечение
          </router-link>
        </swiper-slide><!-- swiper-slide -->
      </swiper><!-- swiper-container -->
      <!-- Add Arrows -->
      <div class="categories_slider_next main_slider_btns flex-center d-flex">
        <i class="fas fa-chevron-right"></i>
      </div><!-- main_slider_next -->
      <div class="categories_slider_prev main_slider_btns flex-center d-flex">
        <i class="fas fa-chevron-left"></i>
      </div><!-- main_slider_prev -->
    </div> <!-- position-relative -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'HeaderCategoriesSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      categoriesSliderOption: {
        slidesPerView: 7,
        spaceBetween: 15,
        autoplay: {
          delay: 15000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.categories_slider_next',
          prevEl: '.categories_slider_prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.categories_slider {
  width: 100%;
  height: 135px;
  overflow: hidden;
}

.categories_slider_next {
  top: 50%;
  right: -50px;
  font-size: 15px;
  width: 40px;
  height: 40px;
}
.categories_slider_prev {
  top: 50%;
  left: -50px;
  font-size: 15px;
  width: 40px;
  height: 40px;
}
.myswiper_hover {
  overflow-x: hidden;
}
.myswiper_hover:hover .categories_slider_prev {
  left: 20px;
}
.myswiper_hover:hover .categories_slider_next {
  right: 20px;
}
.categories_slider .swiper-slide {
  border-radius: 12px;
  overflow: hidden;
}
.categories_slider .categorie_block {
  position: relative;
  border-radius: 12px;
  background-size: 100%;
  transition: all 0.3s;
}
.categories_slider .categorie_text {
  font-weight: 500;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  color: #FFFFFF;
  position: absolute;
  line-height: 1.1;
  left: 7%;
  padding-right: 7%;
  bottom: 15%;
}
.categories_slider .swiper-slide:hover .categorie_block {
  background-size: 105%;
}
</style>
