<template>
  <div>
    <section class="product_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center mb-2">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item"><a href="/">Главная</a></li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item active" aria-current="page">Исроилов Билол</li>
                </ol>
              </nav>

            </div> <!-- d-flex -->

          </div> <!-- col-md-12 -->
        </div> <!-- row -->

      </div> <!-- container -->
    </section> <!-- product_section -->

    <section class="section pt-3">
      <div class="container">
        <div class="row">
          <div class="w-29 pr-0">
            <div class="bg-white product_sidebar seller_sidebar">

              <!-- mycard_btns -->
              <div class="product_seller">
                <a href="seller.html" target="_blank" class="product_seller_img mybg_center"
                  :style="{ 'background-image': 'url(' + this.avatarImage + ')' }"></a> <!-- product_cusomer_img -->
                <div class="seller_text text-center">
                  <h3 title="Исроилов Билол" target="_blank" class="product_seller_name d-block text_ellipsis1 mt-3">
                    Исроилов Билол</h3>
                  <!-- product_seller_name -->
                  <div class="product_sidebar_date text-center justify-content-center d-flex align-items-center">
                    <span class="mr-2 mt-1">Дата регистрации:</span>
                    <h6 class="">13.02.2020</h6>
                  </div> <!-- product_sidebar_date -->

                </div> <!-- seller_text -->

              </div> <!-- product_cusomer -->

              <div class="d-flex align-items-center justify-content-center mt-1 mb-3">
                <star-rating border-color="#fc8301" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="15" inactive-color="transparent" active-color="#fc8301" :rating="4.5" text-class="custom-text" :read-only="true" :increment="0.5"></star-rating>
              </div> <!-- d-flex -->

              <div class="seller_info d-flex justify-content-between mb-3 mt-4">
                <button class="seller_info_box">
                  <span>52</span>
                  <h6>Объявлении</h6>
                </button> <!-- seller_info_box -->
                <button class="seller_info_box">
                  <span>859</span>
                  <h6>Подписчики</h6>
                </button> <!-- seller_info_box -->
                <button class="seller_info_box">
                  <span>84</span>
                  <h6>Подписки</h6>
                </button> <!-- seller_info_box -->
              </div> <!-- seller_info -->

              <hr class="mt-3">
              <div class="pt-2 pb-2 profile_links">
                <ul class="product_adress_ul">
                  <li class="active">
                    <router-link to="/profile-posts">
                      <i class="far fa-file"></i>
                      Мои объявления
                    </router-link>
                  </li>
                  <li>
                    <router-link href="#">
                      <i class="far fa-heart"></i>
                      Избранные
                    </router-link>
                  </li>
                  <li>
                    <router-link href="#">
                      <i class="far fa-comment-dots"></i>
                      Сообщения
                    </router-link>
                  </li>
                  <li>
                    <router-link href="#">
                      <i class="far fa-edit"></i>
                      Настройки
                    </router-link>
                  </li>
                  <li>
                    <router-link href="#">
                      <i class="far fa-question-circle"></i>
                      Обратиться в поддержку
                    </router-link>
                  </li>
                  <li>
                    <router-link href="#">
                      <i class="fas fa-sign-out-alt"></i>
                      Выход
                    </router-link>
                  </li>
                </ul> <!-- product_adress_ul -->
              </div> <!-- profile_links -->

              <hr>

              <div class="d-flex justify-content-between product_sidebar_bottom mt-3">

                <div class="product_sidebar_socials d-flex align-items-center">
                  <span class="pt-1 mr-2">Мои Соцсети:</span>
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

              </div> <!-- product_sidebar_bottom -->

            </div> <!-- product_sidebar -->
          </div> <!-- w-29 -->

          <div class="w-71">

            <div class="row">
              <div class="col-md-12">
                <Card5 class="mb-3"/>
                <Card5 class="mb-3"/>
                <Card5 class="mb-3"/>
                <Card5 class="mb-3"/>
                <Card5 class="mb-3"/>
                <Card5 class="mb-3"/>
              </div> <!-- col-md-12 -->
            </div> <!-- row -->
            <button class="mainbtn see_more_btn mt-4 d-block ml-auto mr-auto">
              <svg width="12" height="12" viewBox="0 0 341.333 341.333"
                style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve">
                <g>
                  <g>
                    <polygon points="311.253,140.587 192,259.627 192,0 149.333,0 149.333,259.627 30.293,140.373 0,170.667 170.667,341.333 341.333,170.667" />
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
              Показать еще
            </button>

          </div> <!-- w-71 -->
        </div> <!-- row -->
      </div> <!-- container -->
    </section> <!-- section -->

  </div>
</template>

<script>
import Card5 from '@/components/lite/desktop/Cards/Card5'
import { mapGetters } from 'vuex'

export default {
  name: 'ProfilePosts',
  components: {
    Card5
  },
  data () {
    return {
      avatarImage: "'https://picsum.photos/500?random=1'"
    }
  },
  methods: {
    handleLogout () {
      localStorage.removeItem('token')
      this.$router.push('/')
      this.$router.go(this.$router.currentRoute)
    },
    checkLogin () {
      if (!this.currentUser) {
        this.$router.push('/')
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

<style lang="scss" scoped>
.product_adress_ul {
  display: flex;
  flex-direction: column;
}
.product_adress_ul li a {
  padding: 13px 15px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
  color: #000000;
  transition: all 0.2s;
  border-radius: 4px;
}
.product_adress_ul li a svg path {
  transition: all 0.2s;
}
.product_adress_ul li.active a {
  background: var(--main-color);
  box-shadow: 0px 6px 10px rgba(255, 144, 41, 0.21);
  color: #fff;
}
.product_adress_ul li.active a svg path {
  stroke: #fff;
}
.product_adress_ul li.active a:hover {
  color: #fff;
}
.product_adress_ul li.active a:hover svg path {
  stroke: #fff;
}
.product_adress_ul li a:hover {
  color: var(--main-color);
}
.product_adress_ul li a:hover svg path {
  stroke: var(--main-color);
}
.product_adress_ul li a i {
  margin-right: 11px;
}
.w-29 {
  width: 29%;
  padding: 0 15px;
}
.w-71 {
  width: 71%;
  padding: 0 15px;
}
.product_btns a {
  background: #343538;
  border-radius: 4px;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding: 11px 20px;
  width: 100%;
  transition: all 0.2s;
  font-family: 'Inter', sans-serif;
}
.product_btns a:hover {
  background: #2b2c2e;
}
.show_number_btn {
}
.product_btns a img {
  position: relative;
  bottom: 2px;
  margin-right: 5px;
}
.seller_text span {
  font-weight: normal;
  font-size: 13px;
  color: #737680;
}
.seller_sidebar .product_seller_name {
  font-size: 23px;
}
.see_more_btn {
  background: transparent!important;
  border: 2px solid var(--main-color)!important;
  color: var(--main-color);
  font-weight: 500;
  font-size: 14px;
  padding: 10px 25px;
  text-transform: uppercase;
}
.see_more_btn svg {
  margin-right: 7px;
}
.see_more_btn svg g {
  fill: var(--main-color);
}
.see_more_btn:hover {
  color: #fff;
  background: var(--main-color)!important;
}
.see_more_btn:hover svg g {
  fill: #fff;
}
.product_sidebar_date h6 {
  font-weight: bold;
  font-size: 17px;
  color: #737680;
}
.product_sidebar_date span {
  font-size: 14px;
}
.product_sidebar_socials a {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.back_btn {
  color: #fff;
  font-size: 14px;
  padding: 7px 20px 7px 15px;
  background: #343538!important;
  color: #FFFFFF;
}
.back_btn:hover {
  background: #343538!important;
}
.breadcrumb {
  background: transparent!important;
  display: flex;
  align-items: center;
}
.breadcrumb-item a {
  color: #555!important;
  transition: all 0.2s;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
}
.breadcrumb-item a:hover {
  color: #000!important;
}
.breadcrumb-item.active {
  color: #555!important;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}
.breadcrumb span {
  font-size: 12px;
  color: #777;
}
.product_seller_img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  box-shadow: 0px 19px 25px rgba(0, 0, 0, 0.11);
}
.product_seller_name {
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  color: #000;
}
.product_sidebar {
  border-radius: 6px;
  padding: 30px 30px 20px 30px;
}
.seller_info_box {
  background: #F8F8FC;
  border-radius: 9px;
  padding: 11px 9px;
  width: 102px;
  text-align: left;
}
.seller_info_box span {
  font-weight: bold;
  font-size: 20px;
  color: var(--main-color);
}
.seller_info_box h6 {
  font-weight: 300;
  font-size: 13px;

  color: #737680;
}
.product_sidebar_bottom span {
  font-weight: 300;
  font-size: 14px;
  color: #938F8F;
}
</style>
