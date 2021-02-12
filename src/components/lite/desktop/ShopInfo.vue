<template>
  <div>
    <div class="position-relative">
      <div
        class="shop_banner"
        :style="{ 'background-image': 'url(' + shop.banner + ')' }"
      >
        <div class="container position-relative">
          <h2 class="shop_title">{{ shop.name }}</h2>
        </div>
        <!-- container -->
      </div>
      <!-- shop_banner -->
      <div class="shop_banner_shadow"></div>
      <!-- shop_banner_shadow -->
    </div>
    <!-- position-relative -->

    <div class="container position-relative" style="bottom: 60px;">
      <div class="row">
        <div class="col-md-3 pr-0">
          <div class="shop_block1">
            <div
              class="shop_logo mr-3"
              :style="{ 'background-image': 'url(' + shop.avatar + ')' }"
            ></div>
            <!-- shop_logo -->
            <div class="product_sidebar_date">
              <span class="mr-2">{{ $t("shop.created_at") }}:</span>
              <h6 class="pb-1">{{ shop.createdAt }}</h6>
              <!-- <star-rating
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
                :star-size="13"
                inactive-color="transparent"
                active-color="#fc8301"
                :rating="4.5"
                text-class="custom-text"
                :read-only="true"
                :increment="0.5"
              ></star-rating> -->
              <SubscribeBtn :isSubscribed="this.isSubscribed" data-show="true" @click.prevent="toggleSub"/>
            </div>
            <!-- product_sidebar_date -->
          </div>
          <!-- shop_block1 -->
        </div>
        <!-- col-md-3 -->
        <div class="col-md-9">
          <div class="shop_block2">
            <div class="row">
              <div class="col-md-5">
                <div class="seller_info d-flex my-3">
                  <button class="seller_info_box mr-2">
                    <span>{{ shop.postsCount }}</span>
                    <h6>{{ $t("shop.update") }}</h6>
                  </button>
                  <!-- seller_info_box -->
                  <button class="seller_info_box">
                    <span>{{ shop.followersCount }}</span>
                    <h6>{{ $t("shop.subscriber") }}</h6>
                  </button>
                  <!-- seller_info_box -->
                </div>
                <!-- seller_info -->
                <div class="product_sidebar_socials d-flex align-items-center">
                  <span class="pt-1 mr-3">{{ $t("shop.socials") }}:</span>
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
              <!-- col-md-5 -->
              <div class="col-md-4"></div>
              <!-- col-md-4 -->
              <div class="col-md-3">
                <div class="product_btns mt-4">
                  <a
                    @click.prevent="toggleView"
                    class="show_number_btn mb-3 d-block w-100 text-center"
                  >
                    {{ text }}
                  </a>
                  <!-- show_number_btn -->
                  <a
                    href="#"
                    class="send_message_btn mainbtn d-block w-100 text-center"
                  >
                    {{ $t("shop.send_message") }}
                  </a>
                  <!-- send_message_btn -->
                </div>
                <!-- product_btns -->
              </div>
              <!-- col-md-3 -->
            </div>
            <!-- row -->
          </div>
          <!-- shop_block2 -->
        </div>
        <!-- col-md-9 -->
      </div>
      <!-- row -->
      <div class="row mt-3">
        <div class="col-md-6 pr-0">
          <div class="shop_block3">
            <h3 class="pb-3">{{ $t("shop.description") }}</h3>
            <p>
              {{ shop.description }}
            </p>
          </div>
          <!-- shop_block3 -->
        </div>
        <!-- col-md-6 -->
        <!-- <div class="col-md-6">
          <div class="shop_block4">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Abba8008a5450056cb02076d704d37f7a73e78cb7fb71ec31993b722f7295c93a&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
            <div class="shop_adress">
              <h5>Г. Ташкент, Яккасарайский район, улица Таффакур, дом 15</h5>
            </div>
          </div>
        </div> -->

        <div class="col-md-6">
          <div class="shop_block3">
            <h3 class="pb-3">Адрес</h3>
            <p>
              {{shop.location}}
            </p>
          </div>
        </div>
      </div>
      <!-- row -->
      <div class="row"></div>
      <!-- row -->
    </div>
    <!-- container -->
  </div>
</template>

<script>
import SubscribeBtn from "@/components/lite/desktop/SubscribeBtn";
import axios from "axios";
export default {
  name: "ShopInfo",
  components: {
    SubscribeBtn
  },
  data() {
    return {
      expanded: false,
      text: "Показать номер",
      isSubscribed: true,
      shopType: "shop"
    };
  },
  props: {
    shop: []
  },
  mounted() {
    console.log(this.shop);
  },
  methods: {
    async toggleSub() {
      console.log("asdasd");
      console.log(response);
      const form = new FormData();
      form.append("type", this.shopType);
      const response = await axios.post("subscribe/" + this.shop.id, form);

      this.subExpanded = !this.subExpanded;
      if (this.subExpanded) {
        this.subText = "Отписаться";
      } else {
        this.subText = "Подписаться";
      }
    },
    async toggleView() {
      this.expanded = !this.expanded;
      const response = await axios.post("shops/phone/" + this.shop.id);
      if (this.expanded) {
        this.text = response.data;
      } else {
        this.text = "Показать номер";
      }
    }
  }
};
</script>

<style scoped>
.shop_adress {
  background: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 35px;
}
.shop_adress h5 {
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #000000;
}
.product_btns a {
  background: #343538;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  padding: 11px 0px;
  width: 100%;
  transition: all 0.2s;
  font-family: "Inter", sans-serif;
  text-align: center;
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
  width: 17px;
}
.product_sidebar_socials span {
  color: #444;
  font-family: "Inter", sans-serif;
}
.product_sidebar_socials a {
  width: 25px;
  height: 25px;
  margin-right: 3px;
}
.seller_info_box {
  background: #ffffff;
  border-radius: 7px;
  padding: 12px 15px;
  width: 118px;
  text-align: left;
}
.seller_info_box span {
  font-weight: 900;
  font-size: 21px;
  color: var(--main-color);
}
.seller_info_box h6 {
  font-weight: 300;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  color: #737680;
}
.product_sidebar_date span {
  font-size: 13px;
  font-family: "Inter", sans-serif;
}
.product_sidebar_date h6 {
  font-weight: 900;
  font-size: 16px;
  font-family: "Inter", sans-serif;
}
.shop_block1 {
  background: #ffffff;
  border-radius: 6px;
  padding: 25px;
  display: flex;
  align-items: center;
  height: 170px;
}
.shop_block2 {
  height: 170px;
  background: rgba(255, 255, 255, 0.81);
  backdrop-filter: blur(10px);
  border-radius: 6px;
  padding: 10px 25px;
}
.shop_block3 {
  height: 250px;
  background: #ffffff;
  border-radius: 6px;
  padding: 25px 25px;
}
.shop_block3 h3 {
  font-size: 25px;
  font-weight: 600;
}
.shop_block4 h3 {
  font-size: 25px;
  font-weight: 600;
}
.shop_block3 p {
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.5px;
  font-size: 16px;
  color: #000;
}
.shop_block4 {
  height: 250px;
  background: #ffffff;
  border-radius: 6px;
  padding: 15px;
}
.shop_logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 19px 25px rgba(0, 0, 0, 0.11);
}
.shop_banner {
  width: 100%;
  height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.shop_banner_shadow {
  width: 100%;
  height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.548), transparent);
}
.shop_title {
  color: #fff;
  font-size: 43px;
  padding-top: 13rem;
  z-index: 2;
  position: relative;
  font-family: "Inter", sans-serif;
  font-weight: 900;
}
</style>
