<template>
  <li class="mymenu_li">
    <router-link
      :to="{
        name: 'CategoryPage',
        params: { id: category.id, slug: category.slug }
      }"
      class="mymenu_li_a"
    >
      <div class="d-flex">
        <div class="mymenu_li_a_img">
          <img :src="category.icon" alt="">
        </div>
        <!-- mymenu_li_a_img -->
        {{ category.name }}
      </div>
      <i class="fas fa-angle-right"></i>
    </router-link>
    <!-- mymenu_li_a -->

    <ul class="submenu">
      <div class="submenu_content">
        <HeaderCategoriesItemPart
          v-for="category in category.subCategories"
          :key="category.id"
          :category="category"
        />
      </div>
      <!-- submenu_content -->
    </ul>
    <!-- submenu -->
  </li>
  <!-- mymenu_li -->
</template>

<script>
import HeaderCategoriesItemPart from "@/components/lite/desktop/headerCategories/HeaderCategoriesItemPart";

export default {
  name: "HeaderCategoriesItem",
  components: {
    HeaderCategoriesItemPart
  },
  data() {
    return {};
  },
  props: {
    category: {
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
  mounted() {}
};
</script>

<style lang="scss" scoped>
.mymenu_li_a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 10px 10px;
  font-weight: 600;
  font-size: 14px;
  font-family: "Inter";

  color: rgb(31, 31, 31);
  transition: all 0.2s;
}
.mymenu_li_a i {
  font-size: 17px;
  color: #d4d4d4;
  transition: all 0s;
}
.mymenu_li_a_img {
  width: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  transition: all 0.2s;
}
.mymenu_li:hover .mymenu_li_a i {
  color: rgb(31, 31, 31);
}
.mymenu_li_a_img svg {
  width: 21px !important;
  height: 21px !important;
}
.mymenu_li .mymenu_li_a_img svg path {
  fill: rgb(31, 31, 31);
}
.mymenu_li:hover .mymenu_li_a {
  color: rgb(31, 31, 31);
}
.submenu {
  width: 1025px;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(255, 255, 255, 1) 5%,
    rgba(255, 255, 255, 1) 100%
  );
  padding: 15px 35px;
}
.submenu:before {
  content: "";
  display: block;
  background: transparent;
  position: absolute;
  width: 50px;
  height: 90%;
  left: -2%;
}
.mymenu_li:hover .submenu {
  display: block;
  z-index: 2 !important;
}
.submenu_content {
  display: flex;
  flex-flow: column wrap;
  -webkit-box-pack: start;
  place-content: flex-start;
  height: 100%;
}
.mymenu_li:hover .submenu {
  display: block;
  z-index: 2 !important;
}
</style>
