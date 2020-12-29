<template>
<header>
  <div class="mynavbar_inner">
    <div class="mygradient">
      <svg style="height: 0; top: 0; left: 0; width: 0; position: absolute; visibility: hidden;">
        <linearGradient class="linear-gradient" id="gradient-start">
          <stop class="linear-gradient linear-gradient__stop-one" offset="0%" stop-color="#f55683" />
          <stop class="linear-gradient linear-gradient__stop-two" offset="100%" stop-color="#6d5bf5" />
        </linearGradient>
        <symbol id="gradient-rect">
          <rect width="100%" height="100%" fill="url(#gradient-start)" />
        </symbol>
      </svg>
      <svg class="h-30px w-100 position-absolute">
        <use xlink:href="#gradient-rect"></use>
      </svg>
      <div class="mynavbar_inner_content">
        <div class="container">
        </div> <!-- container -->
      </div> <!-- mynavbar_inner_content -->
    </div><!-- mygradient -->
  </div><!-- mynavbar_inner -->

<!-------------------------------- START HeaderNavbar -------------------------------->
  <div
    class="mynavbar"
    v-on="handleScroll()"
    :scrollPosition="scrollPosition"
    :class="{
      'fixed': scrollPosition > 200,
      'inview': scrollPosition > 250,
      'inview2': scrollPosition > 450,
      'headroom--unpinned': scrolled
    }"
  >
    <div class="container">
      <div class="navbar_links myd-flex justify-content-between align-items-center pb-3 pt-2" :class="{'d-none': scrollPosition > 220}">
        <div class="d-flex justify-content-between align-items-center">
          <a href="#" class="navbar_top_link geo_link">
            <svg width="16" height="15" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12C10.206 12 12 10.206 12 8C12 5.794 10.206 4 8 4C5.794 4 4 5.794 4 8C4 10.206 5.794 12 8 12ZM8 6C9.103 6 10 6.897 10 8C10 9.103 9.103 10 8 10C6.897 10 6 9.103 6 8C6 6.897 6.897 6 8 6Z" fill="black"/>
              <path d="M7.42009 19.814C7.58934 19.9349 7.79211 19.9998 8.00009 19.9998C8.20806 19.9998 8.41084 19.9349 8.58009 19.814C8.88409 19.599 16.0291 14.44 16.0001 8C16.0001 3.589 12.4111 0 8.00009 0C3.58909 0 8.80377e-05 3.589 8.80377e-05 7.995C-0.028912 14.44 7.11609 19.599 7.42009 19.814ZM8.00009 2C11.3091 2 14.0001 4.691 14.0001 8.005C14.0211 12.443 9.61209 16.428 8.00009 17.735C6.38909 16.427 1.97909 12.441 2.00009 8C2.00009 4.691 4.69109 2 8.00009 2Z" fill="black"/>
            </svg>
            Ташкент
          </a> <!-- navbar_top_link -->
        </div> <!-- d-flex -->
        <div class="d-flex justify-content-between align-items-center">
          <a href="#" class="navbar_top_link bg">
            Мобильное приложение
          </a> <!-- navbar_top_link -->
          <a href="#" class="navbar_top_link">
            Обратиться в поддержку
          </a> <!-- navbar_top_link -->
          <a href="#" class="navbar_top_link">
            Сообщения
          </a> <!-- navbar_top_link -->
          <a href="#" class="navbar_top_link">
            Избранные
          </a> <!-- navbar_top_link -->
          <a href="#" class="navbar_top_link">
            Частые вопросы
          </a> <!-- navbar_top_link -->
          <a href="#" class="navbar_top_link">
            Русский
          </a> <!-- navbar_top_link -->
        </div> <!-- d-flex -->
      </div> <!-- navbar_links -->
      <div class="d-flex myalign-items-center justify-content-between">

        <div class="d-flex myalign-items-center">
          <a href="/" class="logo mr-3">
            <img src="@/assets/lite/logo.png" alt="" class="img-width">
          </a>
          <div class="header_categories position-relative mt-1 mr-3">

            <button class="categories_hamburger">
              <div class="menu cross menu--1">
                <label
                class="hamburger_label"
                ref="button"
                @click="headerCategoriesDropdowntoggle">
                  <input type="checkbox" class="hamburger_input" v-model="headerCategoriesDropdownVisible">
                  <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  ref="button"
                  @click="headerCategoriesDropdowntoggle">
                    <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                    <path class="line--2" d="M0 50h70" />
                    <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                  </svg>
                  <span>Каталог</span>
                </label>
              </div>
            </button> <!-- categories_hammburger -->

            <HeaderCategoriesDropdown
            class="header_categories_dropdown"
            :class="{active: headerCategoriesDropdownVisible}"
            :scrollPosition="scrollPosition"
            v-closable="{
            exclude: ['button'],
            handler: 'onClose',
            }"
            />

          </div> <!-- header_categories -->
          <SearchGroup
          :scrollPosition="scrollPosition"
          />
      </div> <!-- d-flex -->
      <div>
        <div class="d-flex align-items-center">
          <a href="#" class="create_store_btn d-flex align-items-center mr-2">
            Создать магазин
          </a> <!-- mainbtn -->
          <router-link to="/post-add" class="mainbtn create_ad_btn d-flex align-items-center mr-2">
            Подать объявление
          </router-link> <!-- mainbtn -->
          <a href="#" class="header_icon" data-toggle="modal" @click.prevent v-b-modal.signModal >
            <svg version="1.1" width="55" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
              style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <g>
                <g>
                  <path d="M256,288.389c-153.837,0-238.56,72.776-238.56,204.925c0,10.321,8.365,18.686,18.686,18.686h439.747
                            c10.321,0,18.686-8.365,18.686-18.686C494.56,361.172,409.837,288.389,256,288.389z M55.492,474.628
                            c7.35-98.806,74.713-148.866,200.508-148.866s193.159,50.06,200.515,148.866H55.492z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M256,0c-70.665,0-123.951,54.358-123.951,126.437c0,74.19,55.604,134.54,123.951,134.54s123.951-60.35,123.951-134.534
                            C379.951,54.358,326.665,0,256,0z M256,223.611c-47.743,0-86.579-43.589-86.579-97.168c0-51.611,36.413-89.071,86.579-89.071
                            c49.363,0,86.579,38.288,86.579,89.071C342.579,180.022,303.743,223.611,256,223.611z" />
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg>
            <span>Войти</span>
          </a>
        </div>
      </div>
    </div> <!-- d-flex -->
  </div> <!-- container -->
</div> <!-- mynavbar -->

<!-------------------------------- END HeaderNavbar -------------------------------->

<!-------------------------------- START HeaderSlider -------------------------------->

<div class="container">
  <swiper class="swiper main_slider mt-5" :options="mainSliderOption">
    <swiper-slide class="slide-1 myhover_bg">
      <router-link to="/category" class="mybg_center d-block h-100 w-100"
        :style="{'background-image': 'url(' + require('@/assets/lite/mainslider1.jpg') + ')'}"></router-link>
    </swiper-slide>
    <swiper-slide class="slide-2 myhover_bg">
      <router-link to="/category" class="mybg_center d-block h-100 w-100"
        :style="{'background-image': 'url(' + require('@/assets/lite/mainslider2.jpg') + ')'}"></router-link>
    </swiper-slide>
    <swiper-slide class="slide-3 myhover_bg">
      <router-link to="/category" class="mybg_center d-block h-100 w-100"
        :style="{'background-image': 'url(' + require('@/assets/lite/mainslider3.jpg') + ')'}"></router-link>
    </swiper-slide>
    <swiper-slide class="slide-4 myhover_bg">
      <router-link to="/category" class="mybg_center d-block h-100 w-100"
        :style="{'background-image': 'url(' + require('@/assets/lite/mainslider4.jpg') + ')'}"></router-link>
    </swiper-slide>
    <swiper-slide class="slide-5 myhover_bg">
      <router-link to="/category" class="mybg_center d-block h-100 w-100"
        :style="{'background-image': 'url(' + require('@/assets/lite/mainslider5.jpg') + ')'}"></router-link>
    </swiper-slide>
    <!-- Add Arrows -->
    <div class="main_slider_next main_slider_btns flex-center d-flex">
      <i class="fas fa-chevron-right"></i>
    </div><!-- main_slider_next -->
    <div class="main_slider_prev main_slider_btns flex-center d-flex">
      <i class="fas fa-chevron-left"></i>
    </div><!-- main_slider_prev -->
  </swiper>
  <!-- Add Pagination -->
  <div class="swiper-pagination main_slider_pagination mt-3"></div>
</div><!-- container -->

<div class="container">
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
</div><!-- container -->

<!-------------------------------- END HeaderSlider -------------------------------->
<!-- The modal -->
<b-modal id="signModal" centered title="BootstrapVue">
  <div class="mymodal-header justify-content-center">
      <button type="button" @click="$bvModal.hide('signModal')" class="close">
        <img src="@/assets/lite/close.png" class="img-width" alt="">
      </button>
      <h5 class="modal-title pb-4" id="exampleModalLabel">Вход и регистрация</h5>
  </div> <!-- mymodal-header -->
    <form action="" class="sign_modal_form">
      <input id="modal_phone" type="tel" v-mask="'+998 (##) ###-##-##'" placeholder="Ваш номер..." required>
      <span class="mt-1">На этот номер будет высланно смс с кодом подтверждения</span>
      <div>
        <button class="mt-3 mainbtn w-100" type="submit">Продолжить</button>
      </div>

      <div class="mt-3 sign_modal_terms_link">
        <label class="control control--checkbox">
          <input type="checkbox" checked="checked" required />
          <div class="control__indicator"></div>
          Я согласен с <a href="#" class="complain_review_btn">правилами и условиями</a>
        </label>
        <label class="control control--checkbox mt-1">
          <input type="checkbox" checked="checked" required />
          <div class="control__indicator"></div>
          Я хочу получать новости и акции
        </label>
      </div>

      <div class="product_sidebar_socials mt-4">
        <span>Войти с помощью :</span>
        <div class="d-flex pt-1">
          <a href="#" target="_blank">
            <img src="@/assets/lite/instagram.png" class="img-width" alt="">
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/lite/twitter.png" class="img-width" alt="">
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/lite/vk.png" class="img-width" alt="">
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/lite/facebook.png" class="img-width" alt="">
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/lite/tik-tok.png" class="img-width" alt="">
          </a>
        </div> <!-- d-flex -->
      </div> <!-- product_sidebar_socials -->

    </form>
</b-modal>
</header>
</template>

<script>
import SearchGroup from '@/components/lite/desktop/SearchGroup'
import HeaderCategoriesDropdown from '@/components/lite/desktop/headerCategories/HeaderCategoriesDropdown'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Header',
  components: {
    SearchGroup,
    HeaderCategoriesDropdown,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      limitPosition: 950,
      scrolled: false,
      scrollPosition: null,
      headerCategoriesDropdownVisible: false,
      mainSliderOption: {
        effect: 'fade',
        loop: true,
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
      },
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
    } /* return */
  },
  methods: {
    ///   HeaderNavbar Animation   ///
    handleScroll () {
      if (this.scrollPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true
        // move up!
      }
      if (this.scrollPosition > window.scrollY) {
        this.scrolled = false
        // move down
      }
      this.scrollPosition = window.scrollY
    },
    headerCategoriesDropdowntoggle () {
      this.headerCategoriesDropdownVisible = !this.headerCategoriesDropdownVisible
    },
    onClose () {
      this.headerCategoriesDropdownVisible = false
    }
  },
  computed: {
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.create_store_btn {
  background: rgba(255, 201, 150, 0.377);
  color: var(--main-color);
  padding: 10px 14px;
  border-radius: 3px;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s;
  font-weight: 500;
}
.create_store_btn:hover {
  background: rgba(255, 201, 150, 0.527);
  color: var(--main-color);
}
.create_ad_btn {
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  padding: 10px 14px;
}
.navbar_top_link {
  font-size: 13px;
  color: #888;
  transition: all 0.2s;
  padding: 1px 10px;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
}

.navbar_top_link.bg {
  background: rgba(204, 204, 204, 0.308);
}
.navbar_top_link.geo_link {
  padding: 0;
  color: #333;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
}
.navbar_top_link.geo_link svg path {
  transition: all 0.2s;
}
.navbar_top_link.geo_link:hover svg path {
  fill: var(--main-color);
}
.navbar_top_link:hover {
  color: #000;
}
.navbar_top_link.geo_link:hover {
  color: var(--main-color);
}
.navbar_top_link.bg:hover {
  color: var(--main-color);
}
.swiper {
  height: 360px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
}
.header_categories_dropdown {
  width: 1350px;
  min-height: 600px;
  position: absolute;
  left: -131px;
  top: 70%;
  background: #FFFFFF;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  transition: all 0.25s;
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  overflow-x: hidden;
  overflow-y: auto;
}
.header_categories_dropdown.active {
  opacity: 1;
  pointer-events: inherit;
  transform: translateY(0);
}
.mynavbar {
  width: 100%;
  padding: 0 0 35px 0;
  background: transparent;
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 10;
  /* box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.05); */
}
.mynavbar.fixed {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity:0;
  padding: 20px 0;
  visibility:hidden;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.05);
  transform: translate(0, -120px);
}
.mynavbar.inview {
  transition: all 0.3s;
}
.mynavbar.out {
  transform: translateY(-100%);
}
.mynavbar.fixed .search_prompts {
  display: none!important ;
}
.mynavbar.inview2{
  opacity:1;
  visibility:visible;
  transition: all 0.3s;
  transform: translate(0, 0);
}
.mynavbar.inview2 .navbar_search_input {
  background: #f4f4fa;
}
.mynavbar.inview2 .navbar_search_input:hover {
  background: #e9e9f0;
}
.mynavbar.inview2 .navbar_search_input:focus {
  background: #f4f4fa;
}
.mynavbar.inview2 .myalign-items-center {
  align-items: center;
}
.mynavbar.inview2 .search_dropdown {
  background: #f4f4fa;
}
.mynavbar.inview2 .header_categories_dropdown {
  top: 120%;
}
.headroom--unpinned {
  transform: translateY(-100%)!important;
}
.logo {
  width: 115px;
  display: block;
  padding-top: 3px;
}
.categories_hamburger {
  background: var(--main-color);
  border-radius: 3px;
  padding: 9px 15px 9px 40px;
  position: relative;
  transition: all 0.2s;
  /* box-shadow: 2px 2px 5px #ff90295c; */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}
.categories_hamburger:hover {
  background: #ec8321;
}
.hamburger_input {
  display: none;
}
.hamburger_label {
  cursor: pointer;
/*   width: 58px;
  height: 58px; */
  display: flex;
  align-items: center;
}
.hamburger_label span {
  pointer-events: none;
}
.hamburger_label svg {
  width: 200px;
  position: absolute;
  padding: 72px;
  left: -77px;
}
.menu path {
  fill: none;
  stroke: #fff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  -moz-transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  -ms-transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.cross .hamburger_input:checked + svg .line--2 {
  --length: 0;
}
.menu--1 .line--1,
.menu--1 .line--3 {
  --total-length: 100;
}
.menu--1 .line--2 {
  --total-length: 70;
}
.menu--1 .hamburger_input:checked + svg .line--1,
.menu--1 .hamburger_input:checked + svg .line--3 {
  --offset: -93.7;
}
.menu--1 .hamburger_input:checked + svg .line--2 {
  --offset: -50;
}
.header_icon {
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  padding: 4px 14px;
}
.header_icon svg {
  width: 20px;
}
.header_icon span {
  color: #333;
  font-weight: 500;
  margin-top: 2px;
  transition: all 0.2s;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}
.header_icon:hover {
  /* background: #ececf5; */
}
.header_icon:active {
  /* background: #dddde6; */
}
.header_icon svg path {
  transition: all 0.2s;
}
.header_icon:hover span {
  color: var(--main-color);
}
.header_icon:hover svg path {
  fill: var(--main-color);
}
.mynavbar_inner {
  height: 10px;
  margin-bottom: 160px;
  /* background: linear-gradient(to right, #ffb88c, #de6262 ); */
}
.mygradient {
  height: 10px;
}
.linear-gradient {
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function:linear;
}
.h-30px {
  height: 10px;
}
.linear-gradient__stop-one {
  animation-name:animation-colors-one;
}
.linear-gradient__stop-two {
  animation-name:animation-colors-two;
}
@keyframes animation-colors-one {
  0% {
    stop-color: #f55683;
  }
  25% {
    stop-color: #6d5bf5;
  }
  50% {
    stop-color: #4689e8;
  }
  75% {
    stop-color: #ffe32a;
  }
  100% {
    stop-color: #f55683;
  }
}
@keyframes animation-colors-two {
  0% {
    stop-color: #6d5bf5;
  }
  25% {
    stop-color: #4689e8;
  }
  50% {
    stop-color: #ffe32a;
  }
  75% {
    stop-color: #f55683;
  }
  100% {
    stop-color: #6d5bf5;
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

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
