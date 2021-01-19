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
          <vs-dropdown class="header_lang_link">
            <a class="navbar_top_link" href="#">
              Русский
              <vs-icon class="" icon="expand_more"></vs-icon>
            </a>
            <vs-dropdown-menu>
              <vs-dropdown-item class="navbar_top_link">
                O'zbekcha
              </vs-dropdown-item>
              <vs-dropdown-item class="navbar_top_link">
                Endglish
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
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
  <AuthModal />
</header>
</template>

<script>
import SearchGroup from '@/components/lite/desktop/SearchGroup'
import HeaderCategoriesDropdown from '@/components/lite/desktop/headerCategories/HeaderCategoriesDropdown'
import AuthModal from '@/components/lite/desktop/Modals/AuthModal'

export default {
  name: 'Header',
  components: {
    SearchGroup,
    HeaderCategoriesDropdown,
    AuthModal
  },
  data () {
    return {
      limitPosition: 950,
      scrolled: false,
      scrollPosition: null,
      headerCategoriesDropdownVisible: false
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
  padding: 10px 14px!important;
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
.header_lang_link {
  display: flex!important;
  align-items: center!important;
}
.header_lang_link .navbar_top_link {
  display: flex!important;
  align-items: center!important;
}
.header_lang_link .navbar_top_link:hover {
  color: #000!important;
}
.header_lang_link .navbar_top_link i {
  font-size: 18px;
}
</style>
