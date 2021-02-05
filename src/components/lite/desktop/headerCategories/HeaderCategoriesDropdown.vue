<template>
  <div>
    <ul class="mymenu">
      <HeaderCategoriesItem
        v-for="category in allCategories"
        :key="category.id"
        :category="category"
      />
    </ul>
    <!-- mymenu -->
  </div>
  <!-- header_categories_dropdown -->
</template>

<script>
import HeaderCategoriesItem from "@/components/lite/desktop/headerCategories/HeaderCategoriesItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeaderCategoriesDropdown",
  components: {
    HeaderCategoriesItem
  },
  props: {
    scrollPosition: Number
  },
  data() {
    return {
      categories: []
    };
  },
  computed: {
    ...mapGetters(["allCategories"])
  },
  methods: {
  },
  async mounted() {}
};
</script>

<style scoped>
.mymenu {
  background: #ffffff;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px 13px;
  display: inline-block;
  height: 600px;
  min-width: 250px;
  position: relative;
}
.mymenu_li {
  transition: all 0s;
  border-radius: 4px;
  min-width: 250px;
}
.mymenu_li:hover {
  background: rgb(255, 234, 197);
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
.mymenu .submenu_content {
  display: flex;
  flex-flow: column wrap;
  -webkit-box-pack: start;
  place-content: flex-start;
  height: 100%;
}
.submenu_list li {
  margin: 4px 0;
}
.submenu_list {
  margin: 25px 10px;
}
.submenu_list a {
  font-weight: normal;
  font-size: 14px;
  padding: 6px 4px;
  color: #515151;
  transition: all 0.2s;
}
.submenu_list .submenu_title a {
  font-weight: bold;
  font-size: 17px;
  padding: 10px 4px;

  color: #000000;
}

.submenu_list a:hover {
  color: var(--main-color);
}

.submenu_list .submenu_title {
  margin-bottom: 7px;
}
.first_submenu {
  height: 100%;
  display: block;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 325px;
  padding: 15px 35px;
}
</style>
