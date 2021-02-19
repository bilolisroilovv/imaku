<template>
  <div class="mycard">
    <div class="position-relative">
      <router-link
        :to="{
          name: 'PostPage',
          params: { id: this.post.id, slug: this.post.slug }
        }"
      >
        <div class="mycard_img mybg_center position-relative d-block">
          <div class="mycard_img_list">
            <div
              class="d-block w-100"
              v-for="(image, index) in this.post.gallery"
              :key="index"
            >
              <div class="slide_item"></div>
              <div
                class="mybg_center myimg"
                :style="{ 'background-image': 'url(' + image + ')' }"
              ></div>
            </div>
            <!-- d-block -->
          </div>
          <!-- mycard_img_list -->
        </div>
        <!-- mycard_img -->
      </router-link>
      <div
        class="product_favourite flex-center d-flex"
        @click.prevent="ToggleFavoriteRequest"
      >
        <ToggleFavorite
          :isFavorite="this.isFavorite"
          :title="$t('post_page.add_to_favorites')"
          class="position-bottom-right mycard_favorite2 flex-center d-flex"
        />
      </div>
      <!-- product_favourite -->
      <!-- mycard_favorite -->
    </div>
    <!-- position-relative -->

    <router-link
      :to="{
        name: 'PostPage',
        params: { id: this.post.id, slug: this.post.slug }
      }"
      target="_blank"
      :title="post.name"
      class="mycard_title text_ellipsis2 mb-2 pt-2 mt-1 myhover_text"
    >
      {{ post.name }}
    </router-link>
    <h4 class="mycard_price text_ellipsis1">{{ post.price }}</h4>
    <!-- mycard_price -->
    <div class="d-flex align-items-center">
      <b-form-rating class="p-0" :color="mainColor" readonly show-value :value="post.rating" id="rating-inline" inline no-border size="sm"></b-form-rating>
    </div>
    <!-- d-flex -->
    <div class="mycard_btns d-flex align-items-center pt-2 pb-1">
      <button
        class="like_btn card_like_btn d-flex align-items-center mr-2"
        :title="$t('card_base.like')"
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
        <div class="like_btn_count">{{ post.likes }}</div>
        <!-- like_btn_count -->
      </button>
      <!-- like_btn -->
      <button
        class="dislike_btn card_like_btn d-flex align-items-center mr-2"
        :title="$t('card_base.like')"
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
        <div class="dislike_btn_count">{{ post.dislikes }}</div>
        <!-- dislike_btn_count -->
      </button>
      <!-- dislike_btn -->
      <div
        class="d-flex align-items-center mycard_views"
        :title="$t('card_base.view')"
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
        <span>{{ post.views }}</span>
      </div>
      <!-- d-flex -->
    </div>
    <!-- mycard_btns -->
  </div>
  <!-- mycard -->
</template>

<script>
import ToggleFavorite from "@/components/lite/desktop/ToggleFavorite";
import axios from "axios";
export default {
  name: "Card4",
  components: {
    ToggleFavorite
  },
  data() {
    return {
      isFavorite: this.post.isFavourite,
      mainColor: "var(--main-color)"
    };
  },
  props: {
    post: {
      id: {
        type: Number,
        default: null
      },
      slug: {
        type: String,
        default: ""
      }
    }
  },
  methods: {
    async ToggleFavoriteRequest() {
      const response = await axios.get("favourite/" + this.post.id);
      this.isFavorite = response.data.isFavourite;
      console.log(this.isFavorite);
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Объявлено успешно добавлено/удалено из избранных"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#rating-inline {
  max-width: 150px;
  padding: 0;
  box-shadow: none!important;
}
.mycard {
  background: #ffffff;
  border-radius: 10px;
  padding: 9px;
  transition: all 0.2s;
  /* box-shadow: 2px 5px 20px #0000000f; */
}
.mycard .mycard_img {
  border-radius: 6px 6px 2px 2px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.mycard_favorite {
  width: 18px;
  height: 18px;
  position: absolute;
  z-index: 7;
  background: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.mycard_favorite2 {
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.13);
  padding: 4px;
  z-index: 7;
  transition: all 0.2s;
}
/* .mycard_favorite_stroke {
  background-image: url(../images/heart_stroke.svg);
}
.mycard_favorite_full {
  background-image: url(../images/heart_full.svg);
}
.mycard_favorite_stroke2 .mycard_favorite2 {
  background-image: url(../images/heart_stroke.svg);
}
.mycard_favorite_full2 .mycard_favorite2 {
  background-image: url(../images/heart_full.svg);
} */
.mycard_favorite.active {
  background: var(--main-color);
}
.mycard_favorite.active svg path {
  fill: #fff;
}
.product_favourite {
  background: #fff;
}
.mycard_img_list {
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
}
.mycard_img_list .slide_item {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 7;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
  transition: all 0.15s;
}
.mycard_img_list .slide_item:after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.mycard_img_list:hover .slide_item:after {
  border-bottom: 2px solid #ccc;
}
.mycard_img_list .slide_item:before {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
}
.mycard_img_list .slide_item:hover:before {
  border-bottom: 2px solid var(--main-color);
}
.mycard_img_list .myimg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.mycard_img_list .slide_item:hover + .myimg {
  display: block;
  z-index: 4;
}
.mycard .mycard_title {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.4;
  height: 45px;
  color: #19191d;
}
.mycard .mycard_price {
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 18px;

  color: #000;
}
.stars_rating_count {
  font-weight: 500;
  font-size: 12px;

  color: #5e6366;
}
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

.mycard_views span {
  font-weight: 500;
  font-size: 11px;

  color: #7d95ae;
}
.mycard_store_img {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.mycard_store_name {
  font-weight: normal;
  font-size: 12px;
  text-decoration-line: underline !important;
  color: #8ba7c5;
}
.my_rating1 div {
  cursor: auto;
}
</style>
