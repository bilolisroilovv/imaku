<template>
  <div class="w-71 position-relative">
    <div id="div-with-loading" class="vs-con-loading__container">
    </div> <!-- loading_block -->
    <div class="row position-relative">
      <div class="col-md-12 justify-content-center">
        <Card5
          v-for="(post, index) in profileData"
          :key="index"
          class="mb-3"
          :post="post"
          @clicked="openConfirmModal"
        />
         <button class="mainbtn see_more_btn mt-4 d-block ml-auto mr-auto" v-if="showBtn" @click.prevent="showMore">
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
        </button>
         <div id="div-with-loading" v-show="!showBtn" class="vs-con-loading__container mt-4">
          </div> <!-- div-with-loading -->
      </div>
      <!-- col-md-12 -->
    </div>
    <ConfirmModal :postId="postId" @removePost="getPost"/>
    <!-- row -->
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
      Показать еще
    </button> -->
  </div>
</template>

<script>
import Card5 from "@/components/lite/desktop/Cards/Card5";
import ConfirmModal from "@/components/lite/desktop/Modals/ConfirmModal"
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ProfilePosts",
  components: {
    Card5,
    ConfirmModal
  },
  data() {
    return {
      profileData: [],
      postId: null,
      colorLoading: "var(--main-color)"
    };
  },
  methods: {
    openConfirmModal(val) {
      this.postId = val
      this.$bvModal.show("confirmModal")
    },
    handleLogout() {
      localStorage.removeItem("token");
      this.$router.push({name: 'HomePage'});
      this.$router.go(this.$router.currentRoute);
    },
    checkLogin() {
      if (!this.currentUser) {
        this.$router.push("/");
      }
    },
    async getPost() {
      this.$vs.loading({
        container: "#div-with-loading",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
      .get("profile/posts")
      .finally(() => this.$vs.loading.close("#div-with-loading > .con-vs-loading"));
      this.profileData = response.data;
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  // mounted() {
  //   this.checkLogin();
  // }
  mounted() {
    this.getPost();
  }
};
</script>

<style lang="scss" scoped>
#div-with-loading {
  width: 200px;
  height: 40px;
  margin: auto;
  display: flex;
  margin-top: 1.2rem;
  justify-content: center;
  position: absolute!important;
  left: 50%;
  transform: translate(-50%, 0);
  align-items: bottom;
}
.loading_div {
  max-height: 100%;
  max-width: 100%;
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
.seller_text span {
  font-weight: normal;
  font-size: 13px;
  color: #737680;
}
.seller_sidebar .product_seller_name {
  font-size: 23px;
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
  background: #f8f8fc;
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
  color: #938f8f;
}
</style>
