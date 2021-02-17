<template>
  <div>
    <section class="product_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center mb-3">
              <a href="index.html" class="back_btn mainbtn mr-4 dark">
                <img src="@/assets/lite/back_btn.png" class="mr-2" alt="" />
                {{ $t("post_page.back") }}
              </a>
              <!-- back_btn -->

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item">
                    <router-link :to="{ name: 'HomePage' }">{{ $t("profile.home") }}</router-link>
                  </li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ sellerData.name }}
                  </li>
                </ol>
              </nav>
            </div>
            <!-- d-flex -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- product_section -->

    <section class="section pt-3">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="bg-white product_sidebar seller_sidebar">
              <!-- mycard_btns -->
              <div class="product_seller d-flex align-items-center ">
                <div
                  target="_blank"
                  class="product_seller_img mybg_center mr-3"
                  :style="{
                    'background-image': 'url(' + sellerData.avatar + ')'
                  }"
                ></div>
                <!-- product_cusomer_img -->
                <div class="seller_text">
                  <h3
                    title="Алексеев Эдуaрд Львович"
                    target="_blank"
                    class="product_seller_name d-block text_ellipsis1"
                  >
                    {{ this.sellerData.name }}
                  </h3>
                  <!-- product_seller_name -->
                  <div class="product_sidebar_date">
                    <span class="mt- d-block"
                      >{{ $t("shop.created_at") }}:</span
                    >
                    <h6 class="mt-1">{{ this.sellerData.createdAt }}</h6>
                  </div>
                  <!-- product_sidebar_date -->
                </div>
                <!-- seller_text -->
              </div>
              <!-- product_cusomer -->

              <div class="d-flex align-items-center mt-3 mb-3">
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
                    17
                  ]"
                  :star-size="15"
                  inactive-color="transparent"
                  active-color="#fc8301"
                  class="mr-3"
                  :rating="4.5"
                  text-class="custom-text"
                  :read-only="true"
                  :increment="0.5"
                ></star-rating>
                <div @click.prevent="toggleSub">
                  <SubscribeBtn :isSubscribed="this.isSubscribed" data-show="true"/>
                </div>
              </div>
              <!-- d-flex -->

              <div class="seller_info d-flex justify-content-between my-3">
                <button class="seller_info_box">
                  <span>{{ sellerData.postsCount }}</span>
                  <h6>{{ $t("shop.update") }}</h6>
                </button>
                <!-- seller_info_box -->
                <button class="seller_info_box">
                  <span>{{ sellerData.followersCount }}</span>
                  <h6>{{ $t("profile.post_followers") }}</h6>
                </button>
                <!-- seller_info_box -->
                <button class="seller_info_box">
                  <span>{{ sellerData.followingCount }}</span>
                  <h6>{{ $t("profile.post_subscriptions") }}</h6>
                </button>
                <!-- seller_info_box -->
              </div>
              <!-- seller_info -->

              <div class="product_btns mt-4">
                <a
                  class="show_number_btn mb-2 d-block w-100 text-center"
                  @click.prevent="toggleView"
                >
                  <img src="@/assets/lite/show_number_icon.png" alt="" />
                  {{ text }}
                </a>
                <!-- show_number_btn -->
                <a
                  href="#"
                  class="send_message_btn mainbtn d-block w-100 text-center"
                >
                  <img src="@/assets/lite/send_message_icon.png" alt="" />
                  {{ $t("post_page.contact_the_seller") }}
                </a>
                <!-- send_message_btn -->
              </div>
              <!-- product_btns -->

              <hr class="mt-3" />
              <div class="pt-3 pb-2 product_adress">
                <h4 class="pb-2">{{ $t("post_page.addess") }}:</h4>
                <p class="mb-2">
                  {{ sellerData.location }}
                </p>
                <p class="noadress" v-if="sellerData.location === null">
                  К сожалению пользователь не добавил свой адрес (
                </p>
              </div>
              <!-- product_adress -->
              <!-- 
              <hr />
              <div class="py-3">
                <div class="mb-1">
                  <a href="#" class="maincolor_link underline fz-17">
                    Заблокировать
                  </a>
                </div>
                <div>
                  <a href="#" class="maincolor_link underline fz-17">
                    Сообщить о нарушении
                  </a>
                </div>
              </div> -->

              <hr />

              <div
                class="d-flex justify-content-between product_sidebar_bottom mt-3"
              >
                <div class="product_sidebar_socials d-flex align-items-center">
                  <span class="pt-1 mr-2">{{ $t("seller_social") }}:</span>
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
              </div>
              <!-- product_sidebar_bottom -->
            </div>
            <!-- product_sidebar -->
          </div>
          <!-- col-md-4 -->

          <div class="col-md-8 pl-0">
            <div class="grid-container grid-template-4 grid-gap-10">
              <Card4
                v-for="(post, index) in this.sellerData.posts"
                :key="index"
                :post="post"
              />
            </div>
            <!-- grid-container -->
            <!-- <button class="mainbtn see_more_btn mt-4 d-block ml-auto mr-auto">
              <svg
                width="12"
                height="12"
                viewBox="0 0 341.333 341.333"
                style="enable-background:new 0 0 341.333 341.333;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <polygon
                      points="311.253,140.587 192,259.627 192,0 149.333,0 149.333,259.627 30.293,140.373 0,170.667 170.667,341.333 341.333,170.667"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              {{ $t("view_more") }}
            </button> -->
          </div>
          <!-- col-md-8 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- section -->
  </div>
</template>

<script>
import Card4 from "@/components/lite/desktop/Cards/Card4";
import SubscribeBtn from "@/components/lite/desktop/SubscribeBtn";
import axios from "axios";

export default {
  name: "ProductPage",
  components: {
    Card4,
    SubscribeBtn
  },
  props: {
    id: {}
  },
  data() {
    return {
      expanded: false,
      text: "Показать номер",
      isSubscribed: Boolean,
      sellerData: []
    };
  },
  async mounted() {
    const response = await axios.get("seller/" + this.id);
    this.sellerData = response.data;
    this.isSubscribed = response.data.isSubscribed;
  },
  methods: {
    async toggleView() {
      this.expanded = !this.expanded;
      const response = await axios.post("phone/" + this.sellerData.id);
      if (this.expanded) {
        this.text = response.data;
      } else {
        this.text = "Показать номер";
      }
    },
    async toggleSub() {
      this.isSubscribed = !this.isSubscribed
      const form = new FormData();
      form.append("type", this.sellerData.type);
      const response = await axios.post(
        "subscribe/" + this.sellerData.id,
        form
      );
      
      console.log(response.data.isSubscribed);
    },
  }
};
</script>

<style lang="scss" scoped>
.noadress {
  font-family: 'Inter';
  font-size: 14px;
  color: #737680;
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
  cursor: pointer;
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
  font-size: 20px;
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
.product_sidebar_date h6 {
  font-weight: bold;
  font-size: 15px;
  color: #737680;
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
  background: #343538 !important;
  color: #ffffff;
}
.back_btn:hover {
  background: #343538 !important;
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
.product_sidebar {
  border-radius: 6px;
  padding: 30px 30px 20px 30px;
}
.seller_info_box {
  background: #f8f8fc;
  border-radius: 11px;
  padding: 12px 10px;
  width: 115px;
  text-align: left;
}
.seller_info_box span {
  font-weight: bold;
  font-size: 21px;
  color: var(--main-color);
}
.seller_info_box h6 {
  font-weight: 300;
  font-size: 14px;

  color: #737680;
}
.product_sidebar_bottom span {
  font-weight: 300;
  font-size: 14px;
  color: #938f8f;
}
</style>
