<template>
  <div class="w-71 position-relative">
    <div id="div-with-loading" class="vs-con-loading__container">
    </div> <!-- loading_block -->
    <div class="grid-container grid-template-4 grid-gap-10">
      <Card4
        v-for="(post, index) in profileData"
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
        Показать еще
      </button> -->
  </div>
</template>

<script>
import Card4 from "@/components/lite/desktop/Cards/Card4";
import axios from "axios";

export default {
  name: "ProductPage",
  data() {
    return {
      profileData: [],
      colorLoading: "var(--main-color)"
    };
  },
  components: {
    Card4
  },
  methods: {
    async getPosts() {
      this.$vs.loading({
        container: "#div-with-loading",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
      .get("profile/favourites")
      .finally(() => this.$vs.loading.close("#div-with-loading > .con-vs-loading"));
      this.profileData = response.data.posts;
      // console.log(this.profileData.posts);
    }
  },
  mounted() {
    this.getPosts();
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
.w-71 {
  width: 71%;
  padding: 0 15px;
  position: inherit;
}
</style>
