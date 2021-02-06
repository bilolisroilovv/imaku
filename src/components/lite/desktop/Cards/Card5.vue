<template>
  <div class="mycard">
    <div class="position-relative">
      <router-link :to="{ name: 'PostPage', params: { id:post.id, slug: post.slug } }">
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
    </div>
    <!-- position-relative -->
    <div class="w-100">
      <div class="d-flex justify-content-between">
        <div>
          <router-link
            :to="{ name: 'PostPage', params: { id: post.id, slug: post.slug } }"
            :title="post.name"
            class="mycard_title text_ellipsis1 pt-1 myhover_text"
          >
            {{ post.name }}
          </router-link>
          <div class="d-flex align-items-center pt-1">
            <star-rating
              border-color="#fc8301"
              :border-width="1"
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
                17
              ]"
              :star-size="14"
              inactive-color="transparent"
              active-color="#fc8301"
              :rating="4.5"
              text-class="custom-text"
              :read-only="true"
              :increment="0.5"
            ></star-rating>
          </div>
        </div>
        <h4 class="mycard_price pt-2">{{ post.price }}</h4>
      </div>
      <!-- d-flex -->
      <p class="card_location mb-0 pt-1">
        С: {{ post.createdAt }} | {{ post.location }}
      </p>
      <p class="mycard_text mb-0 mt-1 text_ellipsis2">
        {{ post.desc }}
      </p>
      <!-- mycard_text -->
      <hr class="mt-1" />
      <!-- d-flex -->
      <div
        class="mycard_btns d-flex align-items-center justify-content-between mt-1"
      >
        <div class="d-flex align-items-center">
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
            :title="$t('card_base.dont_like')"
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
          <vs-tooltip :text="$t('card_base.view')">
            <div
              class="d-flex align-items-center mycard_views mr-2"
              :title="$t('card_base.view')"
            >
              <i class="far fa-eye mr-1"></i>
              <span>{{ post.views }}</span>
            </div>
            <!-- d-flex -->
          </vs-tooltip>
          <vs-tooltip :text="$t('card_base.phone')">
            <div
              class="d-flex align-items-center mycard_views mr-2"
              :title="$t('card_base.phone')"
            >
              <i class="fas fa-phone-alt mr-1"></i>
              <span>{{ post.phoneViews }}</span>
            </div>
            <!-- d-flex -->
          </vs-tooltip>
          <vs-tooltip :text="$t('card_base.toggle_favorite')">
            <div
              class="d-flex align-items-center mycard_views mr-2"
              :title="$t('card_base.phone')"
            >
              <i class="far fa-heart mr-1"></i>
              <span>{{ post.favouritesCount }}</span>
            </div>
            <!-- d-flex -->
          </vs-tooltip>
          <vs-tooltip :text="$t('card_base.message')">
            <div
              class="d-flex align-items-center mycard_views"
              :title="$t('card_base.message')"
            >
              <i class="far fa-comment-alt mr-1"></i>
              <span>{{ post.comment }}</span>
            </div>
            <!-- d-flex -->
          </vs-tooltip>
        </div>
        <!-- d-flex -->
        <div class="mycard_edit_btns">
          <button @click.prevent="removePost" class="post_remove_btn mainbtn"
            ><i class="far fa-trash-alt mr-1"></i> {{ $t('card_base.delete') }}
          </button>
          <button @click.prevent="editPost" class="post_edit_btn ml-2">
            <i class="far fa-edit mr-1"></i> {{ $t('card_base.edit') }}
          </button>
        </div>
        <!-- mycard_edit_btns -->
      </div>
      <!-- mycard_btns -->
    </div>
    <!-- w-100 -->
  </div>
  <!-- mycard -->
</template>

<script>
import axios from 'axios'
export default {
  name: "Card5",
  components: {},
  data() {
    return {
      colorLoading: "var(--main-color)"
    };
  },
  props: ["post"],
  methods: {
    async removePost () {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
      .get('posts/delete/' + this.post.id)
      .finally(() =>
        setTimeout( ()=> {
          this.$vs.loading.close(".con-vs-loading")
        }, 10)
      );
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Объявлено успешно размещена",
      });
      this.$emit('removePost', response)
    },
    editPost () {

    }
  },
};
</script>

<style lang="scss" scoped>
.post_edit_btn {
  border: 1px solid var(--main-color);
  color: var(--main-color);
  border-radius: 3px;
  padding: 7px 12px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background: transparent;
}
.post_remove_btn {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  padding: 8px 12px !important;
  font-size: 14px;
  background: #f44643 !important;
  color: #ffffff;
}
.mycard {
  background: #ffffff;
  border-radius: 4px;
  padding: 12px 17px 12px 12px;
  transition: all 0.2s;
  display: flex;
  /* box-shadow: 2px 5px 20px #0000000f; */
}
.mycard .mycard_img {
  border-radius: 4px;
  width: 210px;
  height: 180px;
  position: relative;
  overflow: hidden;
  margin-right: 15px;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: #19191d;
  width: 500px;
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
.mycard_views {
  font-size: 12px;

  color: #7d95ae;
}
.mycard_views span {
  font-weight: 500;
  font-size: 12px;

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
.card_location {
  color: #9d9d9d;
  font-size: 13px;
  font-family: "Inter", sans-serif;
}
.mycard_text {
  color: #242424;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  padding-top: 3px;
  height: 50px;
}
</style>
