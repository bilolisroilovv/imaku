<template>
  <div>
    <section class="product_section">
      <div class="container loading_div">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center mb-3">
              <a
                href="#"
                @click.prevent="$router.go(-1)"
                class="back_btn mainbtn mr-4 dark"
              >
                <img src="@/assets/lite/back_btn.png" class="mr-2" alt="" />
                Назад
              </a>
              <!-- back_btn -->

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item">
                    <router-link to="/">Главная</router-link>
                  </li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item">
                    <router-link to="/category">Автомобили</router-link>
                  </li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item">
                    <router-link to="/category"
                      >Легковые автомобили</router-link
                    >
                  </li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item">
                    <router-link to="/category">Mercedes</router-link>
                  </li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item active" aria-current="page">
                    Mercedes Benz E-53
                  </li>
                </ol>
              </nav>
            </div>
            <!-- d-flex -->
            <h2 class="section_title">
              {{ postData.name }}
            </h2>
            <!-- section_title -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->

        <div class="row mt-4">
          <div class="col-md-8">
            <ProductMainSlider :gallery="gallery" />
          </div>
          <!-- col-md-8 -->

          <div class="col-md-4">
            <div class="bg-white product_sidebar">
              <div
                class="d-flex justify-content-between align-items-center pb-2"
              >
                <h2 class="product_price">{{ postData.price }}</h2>

                <div
                  class="product_favourite mycard_favorite_stroke2 flex-center d-flex"
                  v-b-tooltip.hover
                  title="Добавить в избранное"
                >
                  <ToggleFavorite class="d-flex align-items-center" />
                </div>
                <!-- product_favourite -->
              </div>
              <!-- d-flex -->

              <div class="d-flex align-items-center mt-0 mb-3">
                <star-rating
                  border-color="#fc8301"
                  :border-width="2"
                  :star-points="[
                    23,
                    2,
                    14,
                    17,
                    0,
                    19,
                    10,
                    34,
                    7,
                    50,
                    23,
                    43,
                    38,
                    50,
                    36,
                    34,
                    46,
                    19,
                    31,
                    17,
                  ]"
                  :star-size="20"
                  inactive-color="transparent"
                  active-color="#fc8301"
                  :rating="4.5"
                  text-class="custom-text"
                  :read-only="true"
                  :increment="0.5"
                ></star-rating>
                <a href="#reviews" class="product_revew_text ml-4 anim"
                  >Комментарии (2762)</a
                >
              </div>
              <!-- d-flex -->

              <hr />

              <div
                class="mycard_btns myproduct_btns d-flex align-items-center pb-1 pt-3"
              >
                <button
                  class="like_btn card_like_btn d-flex align-items-center mr-3"
                  @click.prevent="handleLike"
                  title="Мне нравится"
                >
                  <div class="like_btn_icon d-flex align-items-center">
                    <svg
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.95088 3.86499H0.639545C0.458503 3.86499 0.311707 4.01176 0.311707 4.19283V9.43807C0.311707 9.61911 0.458481 9.76591 0.639545 9.76591H1.95086C2.1319 9.76591 2.27869 9.61913 2.27869 9.43807V4.19281C2.27869 4.01177 2.13194 3.86499 1.95088 3.86499Z"
                        fill="#7D95AE"
                      />
                      <path
                        d="M10.1399 4.73397C10.0821 4.22542 9.60704 3.86497 9.09521 3.86497H6.53936C6.75657 3.47603 6.87315 2.37597 6.86798 1.9266C6.85941 1.18276 6.24341 0.58667 5.49955 0.58667H5.22903C5.04784 0.58667 4.90119 0.733292 4.90119 0.914509C4.90119 1.67259 4.60601 3.04092 4.04929 3.59766C3.67458 3.97237 3.35424 4.10815 2.9342 4.31807V9.23714C3.5773 9.45148 4.39382 9.76591 5.63836 9.76591H7.78286C8.48946 9.76591 9.03979 9.11147 8.76598 8.42003C9.18314 8.30638 9.49078 7.9238 9.49078 7.4711C9.49078 7.34335 9.46613 7.22107 9.42163 7.10869C10.1246 6.91716 10.3834 6.04914 9.89546 5.50412C10.0747 5.30386 10.1736 5.02994 10.1399 4.73397Z"
                        fill="#7D95AE"
                      />
                    </svg>
                  </div>
                  <!-- like_btn_icon -->
                  <div class="like_btn_count">+{{ likesCount }}</div>
                  <!-- like_btn_count -->
                </button>
                <!-- like_btn -->
                <button
                  class="dislike_btn card_like_btn d-flex align-items-center mr-3"
                  @click.prevent="handleDislike"
                  title="Мне не нравится"
                >
                  <div class="dislike_btn_icon d-flex align-items-center">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.85912 6.67188H0.468556C0.276576 6.67188 0.120911 6.51623 0.120911 6.32423V0.762087C0.120911 0.570107 0.276553 0.414442 0.468556 0.414442H1.85909C2.05107 0.414442 2.20674 0.570084 2.20674 0.762087V6.32425C2.20674 6.51623 2.05112 6.67188 1.85912 6.67188Z"
                        fill="#7D95AE"
                      />
                      <path
                        d="M10.5432 5.75057C10.4818 6.28985 9.97809 6.67207 9.43534 6.67207H6.72507C6.9554 7.08451 7.07903 8.25103 7.07355 8.72755C7.06446 9.51634 6.41124 10.1484 5.62243 10.1484H5.33557C5.14343 10.1484 4.98793 9.99296 4.98793 9.80079C4.98793 8.9969 4.67491 7.54591 4.08456 6.95553C3.6872 6.55818 3.34752 6.4142 2.9021 6.19159V0.975336C3.58404 0.748036 4.4499 0.414617 5.76963 0.414617H8.04369C8.79299 0.414617 9.37657 1.10859 9.08621 1.84181C9.52858 1.96232 9.8548 2.36802 9.8548 2.84807C9.8548 2.98354 9.82867 3.11321 9.78148 3.23237C10.5269 3.43548 10.8013 4.35594 10.2839 4.93389C10.474 5.14625 10.5788 5.43672 10.5432 5.75057Z"
                        fill="#7D95AE"
                      />
                    </svg>
                  </div>
                  <!-- dislike_btn_icon -->
                  <div class="dislike_btn_count">-{{ disLikesCount }}</div>
                  <!-- dislike_btn_count -->
                </button>
                <!-- dislike_btn -->
                <div
                  class="d-flex align-items-center mycard_views"
                  title="Просмотры"
                >
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0441 3.71484C9.99799 1.64824 7.927 0.25 5.55567 0.25C3.18433 0.25 1.11277 1.64922 0.0672412 3.71504C0.0231134 3.80342 0.00012207 3.90107 0.00012207 4.0001C0.00012207 4.09913 0.0231134 4.19678 0.0672412 4.28516C1.11334 6.35176 3.18433 7.75 5.55567 7.75C7.927 7.75 9.99857 6.35078 11.0441 4.28496C11.0882 4.19658 11.1112 4.09893 11.1112 3.9999C11.1112 3.90087 11.0882 3.80322 11.0441 3.71484ZM5.55567 6.8125C5.00627 6.8125 4.46922 6.64755 4.01242 6.33851C3.55561 6.02947 3.19958 5.59021 2.98934 5.0763C2.77909 4.56238 2.72408 3.99688 2.83126 3.45131C2.93844 2.90574 3.203 2.4046 3.59148 2.01126C3.97996 1.61793 4.47491 1.35006 5.01375 1.24154C5.55259 1.13302 6.1111 1.18872 6.61868 1.40159C7.12625 1.61446 7.56008 1.97495 7.86531 2.43746C8.17053 2.89997 8.33345 3.44374 8.33345 4C8.33362 4.36939 8.2619 4.7352 8.12236 5.07651C7.98283 5.41782 7.77822 5.72794 7.52025 5.98914C7.26227 6.25034 6.95598 6.4575 6.61889 6.59878C6.28179 6.74006 5.9205 6.81268 5.55567 6.8125ZM5.55567 2.125C5.39038 2.12734 5.22615 2.15224 5.06743 2.19902C5.19826 2.37904 5.26105 2.60056 5.24439 2.82343C5.22774 3.04629 5.13276 3.25573 4.97667 3.41377C4.82059 3.57181 4.61373 3.66798 4.39362 3.68484C4.17351 3.7017 3.95472 3.63813 3.77692 3.50566C3.67568 3.88332 3.69396 4.28361 3.82918 4.6502C3.9644 5.01678 4.20975 5.33121 4.53071 5.54921C4.85166 5.76722 5.23206 5.87782 5.61835 5.86547C6.00465 5.85311 6.37739 5.71841 6.68412 5.48033C6.99084 5.24225 7.21611 4.91278 7.3282 4.53828C7.4403 4.16378 7.43359 3.76312 7.309 3.39269C7.18442 3.02226 6.94825 2.70071 6.63372 2.4733C6.31919 2.2459 5.94215 2.12408 5.55567 2.125Z"
                      fill="#7D95AE"
                    />
                  </svg>
                  <span>{{ postData.views }}</span>
                </div>
                <!-- d-flex -->
              </div>
              <!-- myproduct_btns -->

              <!-- mycard_btns -->
              <div class="product_seller d-flex align-items-center mt-4">
                <router-link
                  :to="{
                    name: 'SellerPage',
                    params: {
                      id: this.postData.author.id,
                      name: this.postData.author.name,
                    },
                  }"
                  target="_blank"
                  class="product_seller_img mybg_center mr-3"
                  :style="{
                    'background-image': 'url(' + postData.author.avatar + ')',
                  }"
                ></router-link>
                <!-- product_cusomer_img -->
                <div class="seller_text">
                  <router-link
                    :to="{
                      name: 'SellerPage',
                      params: {
                        id: this.postData.author.id,
                        name: this.postData.author.name,
                      },
                    }"
                    title="Алексеев Эдуaрд Львович"
                    target="_blank"
                    class="product_seller_name d-block text_ellipsis1 myhover_text"
                    >{{ postData.author.name }}</router-link
                  >
                  <!-- product_seller_name -->
                  <span>({{ postData.author.postsCount }} объявлений)</span>
                  <button class="d-block mt-1 subscribe_btn" data-show="true">
                    Подписаться
                  </button>
                </div>
                <!-- seller_text -->
              </div>
              <!-- product_cusomer -->

              <div class="product_btns mt-4">
                <a
                  href="#"
                  class="show_number_btn mb-2 d-block w-100 text-center"
                >
                  <img src="@/assets/lite/show_number_icon.png" alt="" />
                  Показать номер
                </a>
                <!-- show_number_btn -->
                <a
                  href="#"
                  class="send_message_btn mainbtn d-block w-100 text-center"
                >
                  <img src="@/assets/lite/send_message_icon.png" alt="" />
                  Написать продавцу
                </a>
                <!-- send_message_btn -->
              </div>
              <!-- product_btns -->

              <hr class="mt-3" />
              <div class="pt-2 pb-2 product_adress">
                <h4 class="pb-2">Адрес:</h4>
                <p class="mb-2">
                  Г. Ташкент, Яккасарайский район, улица Таффакур, дом 15
                </p>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A82c9b4a2e8ccf86a57718e06a3d4ec2a03aee27235dcf51300db4b6fdc836b89&amp;source=constructor"
                  width="100%"
                  height="123"
                  frameborder="0"
                ></iframe>
              </div>
              <!-- product_adress -->

              <hr />

              <div
                class="d-flex justify-content-between product_sidebar_bottom mt-2"
              >
                <div class="product_sidebar_socials">
                  <span>Поделиться в :</span>
                  <div class="d-flex pt-1">
                    <a href="#" target="_blank">
                      <img
                        src="@/assets/lite/instagram.png"
                        class="img-width"
                        alt=""
                      />
                    </a>
                    <a href="#" target="_blank">
                      <img
                        src="@/assets/lite/twitter.png"
                        class="img-width"
                        alt=""
                      />
                    </a>
                    <a href="#" target="_blank">
                      <img
                        src="@/assets/lite/vk.png"
                        class="img-width"
                        alt=""
                      />
                    </a>
                    <a href="#" target="_blank">
                      <img
                        src="@/assets/lite/facebook.png"
                        class="img-width"
                        alt=""
                      />
                    </a>
                    <a href="#" target="_blank">
                      <img
                        src="@/assets/lite/tik-tok.png"
                        class="img-width"
                        alt=""
                      />
                    </a>
                  </div>
                  <!-- d-flex -->
                </div>
                <!-- product_sidebar_socials -->

                <div class="product_sidebar_date text-right">
                  <span class="mt-2 d-block">Дата публикации:</span>
                  <h6 class="mt-1">{{ postData.createdAt }}</h6>
                </div>
                <!-- product_sidebar_date -->
              </div>
              <!-- product_sidebar_bottom -->
            </div>
            <!-- product_sidebar -->
          </div>
          <!-- col-md-4 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->

      <div class="py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="bg-white product_bottom_info">
                <h3 class="pb-3">Описание</h3>
                <div class="desc_text">
                  <p>
                    {{ postData.description }}
                  </p>
                </div>
                <!-- desc_text -->

                <div class="row pt-4">
                  <div class="col-md-6">
                    <h4 class="pb-4">Характеристики</h4>

                    <div class="product_params">
                      <div
                        class="pp"
                        v-for="character in postData.characters"
                        :key="character.id"
                      >
                        <span
                          ><b>{{ character.title }}</b></span
                        >
                        <span>{{ character.value }}</span>
                      </div>
                      <!-- pp -->
                    </div>
                    <!-- product_params -->
                  </div>
                  <!-- col-md-6 -->
                  <div class="col-md-6">
                    <h4 class="pb-3">Хештеги</h4>
                    <div class="product_hashtags mb-4">
                      <router-link
                        :to="{ name: 'CategoryPage' }"
                        class="product_hashtag"
                        v-for="hashtag in postData.hashtags"
                        :key="hashtag.id"
                      >
                        <span>#{{ hashtag.name }}</span>
                      </router-link>
                      <!-- product_hashtag -->
                    </div>
                    <!-- product_hashtags -->

                    <h4 class="pb-4">Другие товары продавца</h4>

                    <div>
                      <div class="position-relative">
                        <!-- Swiper -->
                        <swiper
                          class="swiper other_seller_goods_slider"
                          :options="otherSellerGoodsOption"
                        >
                          <swiper-slide
                            class="swiper-slide"
                            v-for="post in postData.author.posts"
                            :key="post.id"
                          >
                            <Card3 :post="post" />
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
                  </div>
                  <!-- col-md-6 -->
                </div>
                <!-- row -->
              </div>
              <!-- product_bottom_info -->
            </div>
            <!-- col-md-12 -->
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </div>
    </section>
    <!-- product_section -->

    <section class="section pt-0">
      <div class="container">
        <h2 class="section_title pb-4">Похожие объявления</h2>
        <h5 v-if="!postData.similarAds">К сожалению похожих объявлений нет (</h5>
        <!-- section_title -->
        <PostsSlider :posts="postData.similarAds" />
      </div>
      <!-- container -->
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section_title pb-4">Специально для вас</h2>
        <!-- section_title -->
        <PostsSection :posts="postData.posts" />
      </div>
      <!-- container -->
    </section>

    <!-- The modal -->
    <b-modal id="my-modal" centered> </b-modal>
  </div>
</template>

<script>
import ToggleFavorite from "@/components/lite/desktop/ToggleFavorite";
import ProductMainSlider from "@/components/lite/desktop/Sliders/ProductMainSlider";
import PostsSlider from "@/components/lite/desktop/Sliders/PostsSlider";
import PostsSection from "@/components/lite/desktop/postsSection/PostsSection";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Card3 from "@/components/lite/desktop/Cards/Card3";
import axios from "axios";
import "swiper/css/swiper.css";

export default {
  name: "PostPage",
  components: {
    ToggleFavorite,
    ProductMainSlider,
    PostsSlider,
    PostsSection,
    Swiper,
    SwiperSlide,
    Card3,
  },
  props: {
    id: {},
  },
  data() {
    return {
      otherSellerGoodsOption: {
        spaceBetween: 15,
        slidesPerView: 3,
        navigation: {
          nextEl: ".other_seller_goods_slider_next",
          prevEl: ".other_seller_goods_slider_prev",
        },
      },
      likesCount: null,
      disLikesCount: null,
      isLiked: false,
      isDisliked: false,
      isFavorited: false,
      postData: [],
      gallery: [],
      authorPosts: [],
      colorLoading: "var(--main-color)",
    };
  },
  async mounted() {
    this.getPost();
  },
  watch: {
    id() {
      this.getPost();
    },
  },
  methods: {
    async handleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked === true) {
        this.likesCount++;
      } else {
        this.likesCount--;
      }
      if (this.isDisliked === true) {
        this.isDisliked = false;
        this.disLikesCount--;
      }
      const response = await axios.get("like/" + this.postData.id);
      console.log(response);
      /* this.likesCount = response.data.likes
      this.dislikesCount = response.data.dislikes */
    },
    async handleDislike() {
      this.isDisliked = !this.isDisliked;
      if (this.isDisliked === true) {
        this.disLikesCount++;
      } else {
        this.disLikesCount--;
      }
      if (this.isLiked === true) {
        this.isLiked = false;
        this.likesCount--;
      }
      const response = await axios.get("dislike/" + this.postData.id);
      console.log(response);
      /* this.likesCount = response.data.likes
      this.dislikesCount = response.data.dislikes */
    },
    async handleFavorite() {
      const response = await axios.get("favorite/" + this.postData.id);
      console.log(response);
      this.isFavorited = !this.isFavorited;
    },

    async getPost() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading,
      });

      const response = await axios
        .get("posts/" + this.id)
        .finally(() => this.$vs.loading.close(".con-vs-loading"));

      this.postData = response.data;
      this.likesCount = response.data.likes;
      this.disLikesCount = response.data.dislikes;
      this.isLiked = response.data.isLiked;
      this.isDisliked = response.data.isDisliked;
      this.isFavorited = response.data.favorite;
      this.gallery = response.data.gallery;
      this.authorPosts = response.data.author.posts;
    },
  },
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
.product_btns a {
  background: #343538;
  border-radius: 4px;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding: 11px 20px;
  width: 100%;
  transition: all 0.2s;
  font-family: "Inter", sans-serif;
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
/* START Product page styles */
.like_btn {
  border-radius: 2px;
  background: #ecf2f9;
  height: 19px;
}
.like_btn_icon {
  background: #dde9f7;
  border-radius: 2px;
  height: 19px;
  padding: 3px 6px 4px 7px;
}
.like_btn_count {
  font-weight: 500;
  font-size: 10px;
  padding: 3px 15px 3px 7px;

  color: #898eaf;
}
.like_btn.active {
  background: #fff2d2;
}
.like_btn.active .like_btn_icon {
  background: #ffe19a;
}
.like_btn.active .like_btn_icon svg path {
  fill: #fca947;
}
.like_btn.active .like_btn_count {
  color: #fca947;
}
.dislike_btn {
  border-radius: 2px;
  background: #ecf2f9;
  height: 19px;
}
.dislike_btn_icon {
  background: #dde9f7;
  border-radius: 2px;
  height: 19px;
  padding: 3px 6px 4px 7px;
}
.dislike_btn_count {
  font-weight: 500;
  font-size: 10px;
  padding: 3px 15px 3px 7px;

  color: #898eaf;
}

.dislike_btn.active {
  background: #ffd8d2;
}
.dislike_btn.active .dislike_btn_icon {
  background: #ffa09a;
}
.dislike_btn.active .dislike_btn_icon svg path {
  fill: #fc4747;
}
.dislike_btn.active .dislike_btn_count {
  color: #fc4747;
}
.breadcrumb {
  background: transparent !important;
  display: flex;
  align-items: center;
}

.breadcrumb-item a {
  color: #555 !important;
  transition: all 0.2s;
  font-size: 15px;
  font-family: "Inter", sans-serif;
}
.breadcrumb-item a:hover {
  color: #000 !important;
}
.breadcrumb-item.active {
  color: #555 !important;
  font-family: "Inter", sans-serif;
  font-size: 15px;
}

.breadcrumb span {
  font-size: 12px;
  color: #777;
}
.back_btn {
  color: #fff;
  font-size: 14px;
  padding: 7px 20px 7px 15px;
  background: #343538 !important;
  color: #ffffff;
}
.back_btn:hover {
  background: #343538 !important;
}
.product_sidebar {
  border-radius: 6px;
  padding: 30px 30px 20px 30px;
}
.product_price {
  font-weight: bold;
  font-size: 33px;
  letter-spacing: 1px;

  color: #343538;
}
.myproduct_btns .like_btn_icon {
  height: 27px;
  padding: 3px 10px 4px 10px;
}
.myproduct_btns .like_btn_icon svg {
  width: 16px;
  height: 16px;
}
.myproduct_btns .like_btn_count {
  font-size: 13px;
  padding: 5px 15px 5px 10px;
}

.myproduct_btns .like_btn {
  height: inherit;
}

.subscribe_btn {
  font-size: 13px;
  color: var(--main-color);
  border-radius: 5px;
  font-weight: normal;
  padding: 5px 13px;
  border: none;
  border: 1px solid transparent;
  background: #ff902948;
}
.subscribe_btn.active {
  background: transparent;
  transition: all 0.2s;
  border: 1px solid #ff902948;
}
.subscribe_btn.active:hover {
  border: 1px solid var(--main-color);
}

.myproduct_btns .dislike_btn_icon {
  height: 27px;
  padding: 3px 10px 4px 10px;
}
.myproduct_btns .dislike_btn_icon svg {
  width: 15px;
  height: 15px;
}
.myproduct_btns .dislike_btn_count {
  font-size: 13px;
  padding: 5px 15px 5px 10px;
}

.myproduct_btns .dislike_btn {
  height: inherit;
}

.myproduct_btns .mycard_views svg {
  width: 18px;
  height: 18px;
}

.myproduct_btns .mycard_views span {
  font-size: 14px;
  margin-left: 3px;
}

.product_favourite {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  cursor: pointer;
  padding-top: 2px;
  transition: all 0.2s;
  border: 1px solid rgb(230, 230, 230);
  background: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.product_favourite:hover {
}
.product_favourite .mycard_favorite {
  position: inherit;
}
.product_seller_img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.product_seller_name {
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  color: #000;
}
.seller_text {
  width: 74%;
}
.seller_text span {
  font-weight: normal;
  font-size: 15px;

  color: #737680;
}

.product_btns a {
  background: #343538;
  border-radius: 4px;
  color: #fff;
  font-size: 17px;
  padding: 11px 20px;
  width: 100%;
  transition: all 0.2s;
}
.product_btns a:hover {
  background: #2b2c2e;
}

.product_btns a img {
  position: relative;
  bottom: 2px;
  margin-right: 5px;
}
.product_revew_text {
  font-weight: 500;
  font-size: 19px;

  color: #343538;
  font-family: "Inter", sans-serif;
}
.product_revew_text:hover {
  color: #343538;
}

.custom-text {
  font-weight: 500;
  position: relative;
  top: 5px;
  font-family: "Inter", sans-serif;
}
.product_adress h4 {
  font-weight: 500;
  font-size: 25px;
  color: #343538;
}
.product_adress p {
  font-weight: normal;
  font-size: 17px;
  line-height: 1.4;
  color: #737680;
  height: 47px;
}

.product_sidebar_bottom span {
  font-weight: 300;
  font-size: 12px;
  color: #938f8f;
}
.product_adress a {
  font-weight: normal;
  font-size: 16px;
  text-decoration-line: underline !important;
  color: var(--main-color);
}
.product_sidebar_socials a {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.product_sidebar_date h6 {
  font-weight: bold;
  font-size: 17px;

  color: #737680;
}
.product_bottom_info {
  background: #ffffff;
  border-radius: 6px;
  padding: 30px 30px;
}
.product_bottom_info h3 {
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 1px;
  color: #000000;
}
.product_bottom_info h4 {
  font-weight: bold;
  font-size: 27px;
  letter-spacing: 1px;
  color: #000000;
}
.desc_text p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: #000000;
}
.product_params .pp {
  margin-bottom: 12px;
}
.product_params .pp span {
  display: inline-block;
  width: 33%;
}

.product_params .pp > span:first-child {
  color: #8b8b8b;
  margin: 0 2.5% 0 0;
  position: relative;
  vertical-align: top;
  width: 63%;
}
.product_params .pp b {
  background: #fff;
  font-weight: 400;
  position: relative;
  z-index: 1;
  padding: 0 20px 0 0;
}
.product_params .pp > span:first-child:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 5px;
  left: 0;
  height: 20px;
  width: 100%;
  border-bottom: 1px dashed #ccc;
}

.product_hashtags {
  display: inline-block;
}
.product_hashtag {
  border-radius: 100px;
  padding: 6px 16px;
  margin-top: 9px;
  background: #f2f3f5;
  margin-right: 8px;
  color: #333;
  display: inline-flex;
  transition: all 0.15s;
}
.product_hashtag:hover {
  background: #eaecf0;
  color: #333;
}
.product_hashtag:active {
  background: #eaecf0;
}
.product_hashtag:focus {
  background: #eaecf0;
}
.product_reviews_section {
  background: #ffffff;
  border-radius: 8px;
  padding: 25px 30px;
}
.write_review_btn {
  border-radius: 3px;
  padding: 9px 15px;
}
.product_review_filter span {
  font-size: 15px;
  line-height: 16px;
  color: #666666;
}
.product_review_filter .control {
  font-weight: 500;
  font-size: 14px;
  color: #222;
}
.control {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 18px;
}
.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.control__indicator {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: transparent;
  border: 2px solid #cacaca;
  border-radius: 3px;
}
.control--radio .control__indicator {
  border-radius: 50%;
}
.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: transparent;
}
.control input:checked ~ .control__indicator {
  background: var(--main-color);
  border: 2px solid var(--main-color);
}
.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: var(--main-color);
  border: 2px solid var(--main-color);
}
.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.6;
  pointer-events: none;
}
.control__indicator:after {
  content: "";
  position: absolute;
  display: none;
}
.control input:checked ~ .control__indicator:after {
  display: block;
}
.control--checkbox .control__indicator:after {
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}
.control--radio .control__indicator:after {
  left: 7px;
  top: 7px;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: #fff;
}
.control--radio input:disabled ~ .control__indicator:after {
  background: #7b7b7b;
}

.product_review_sort_text {
  font-weight: 500;
  font-size: 14px;
  color: #222;
}
.product_review_sort_text svg {
  margin-left: 3px;
}
.product_review_sort_text svg path {
}
.product_review_sort_text:hover {
  color: #222;
}

.product_review_sort_text.active {
  color: var(--main-color);
}
.product_review_sort_text.active:hover {
  color: var(--main-color);
}
.product_review_sort_text.active > svg path {
  fill: var(--main-color);
}

.product_review_sort_icon_up {
  transform: rotate(180deg);
}

.reviews {
}

.review {
  border-bottom: 1px solid #eee;
  padding: 30px 0 22px 0;
}

.subreview {
  margin-left: 45px;
}
.review:last-child {
  border-bottom: 0;
}
.review_avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 16px;
}

.review_name {
  font-weight: normal;
  font-size: 15px;
  font-weight: 500;
  color: #000000;
}
.review_name:hover {
  color: #000000;
}
.review_title {
  font-weight: 500;
  font-size: 17px;
  margin-left: 10px;

  color: #000000;
}

.review_time {
  font-weight: normal;
  font-size: 13px;
  margin-left: 6px;
  color: #949494;
}

.review_text {
  font-weight: normal;
  font-size: 15px;
  line-height: 26px;
  margin: 10px 0;
  letter-spacing: 0.3px;

  color: #000;
}

.review_content {
  max-width: 90%;
}
.review_photos {
  display: flex;
  margin-top: 20px;
}

.review_photos a {
  width: 105px;
  height: 120px;
  overflow: hidden;
  display: block;
  margin-right: 10px;
  position: relative;
  border-radius: 5px;
}

.review_photos a > div {
  transition: all 0.35s;
}
.review_photos a:hover > div {
  filter: brightness(80%);
  transform: scale(1.05);
}
.review_photos a img {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.25s;
  filter: brightness(100%);
}

.review_photos a:hover > div {
}
.review_btn {
  background: transparent;
}
.review_btn span {
  font-size: 14px;
  color: #8f8f8f;
}
.review_like {
  position: relative;
  bottom: 2px;
}
.review_btn.active svg path {
  fill: var(--main-color);
}
.review_btn.active span {
  color: var(--main-color);
}
.reply_btn {
  padding: 5px 20px;
  font-size: 14px;
}
.complain_review_btn {
  color: #555;
  transition: all 0.2s;
  font-size: 15px;
  border-bottom: 1px dashed #555;
}
.complain_review_btn:hover {
  color: var(--main-color);
  border-bottom: 1px dashed var(--main-color);
}
.see_more_btn {
  background: transparent !important;
  border: 2px solid var(--main-color) !important;
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
  background: var(--main-color) !important;
}
.see_more_btn:hover svg g {
  fill: #fff;
}
.product_review_stats {
  background: #ffffff;
  border-radius: 8px;
  padding: 22px 25px;
}
.product_review_stats h4 {
  color: var(--main-color);
  font-weight: bold;
  font-size: 55px;
}

.product_review_stats h6 {
  font-weight: 300;
  font-size: 15px;

  color: #666666;
}

.progressbar_part {
  display: flex;
  flex-direction: column;
}

.progress_star {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.progress_star:last-child {
  margin-bottom: 0;
}
.progress_star span {
  font-size: 14px;

  color: #666666;
}

.myprogress {
  width: 150px;
  height: 8px !important;
  margin: 0 10px;
  border-radius: 2px !important;
}

.myprogress .progress-bar {
  background: var(--main-color);
  border-radius: 2px;
}

.subreview {
  border: none;
}

.reply_form {
  margin-top: 25px;
  width: 100%;
  display: none;
}
.reply_form.active {
  display: block;
}
.reply_form textarea {
  width: 100%;
  outline: none;
  background: #f8f8fc;
  border-radius: 5px;
  border: none;
  padding: 20px 25px;
  color: #505050;
}
.reply_form_cancelbtn {
  background: transparent;
  color: var(--main-color);
  font-size: 15px;
  cursor: pointer;
}
.reply_form_cancelbtn:hover {
}
.reply_form_sendbtn {
  padding: 8px 30px;
  border-radius: 5px;
  font-size: 15px;
}
</style>
