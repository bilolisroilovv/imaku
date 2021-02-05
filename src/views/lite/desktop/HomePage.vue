<template>
  <div class="home">
    <h3>{{ content }}</h3>
    <!-------------------------------- START HeaderSlider -------------------------------->
    <div class="container pt-3">
      <HeaderMainSlider />
    </div>
    <!-- container -->

    <div class="container">
      <HeaderCategoriesSlider />
    </div>
    <!-- container -->

    <!-------------------------------- END HeaderSlider -------------------------------->
    <section class="section pt-5 pb-3">
      <div class="container">
        <h2 class="section_title pb-4">
          Отдам даром
        </h2>
        <!-- section_title -->
        <PostsSlider :posts="givesSliderData" />
      </div>
      <!-- container -->
    </section>

    <section class="section section2 pb-5">
      <div class="container">
        <h2 class="section_title pb-4">
          Популярные объявления
        </h2>
        <!-- section_title -->
        <SelectionSection :posts="allPosts" />
      </div>
      <!-- container -->
    </section>

    <section class="section pt-0">
      <div class="container">
        <h2 class="section_title pb-4">
          Для вас
        </h2>
        <!-- section_title -->
        <PostsSection :posts="allPosts" />
      </div>
      <!-- container -->
    </section>
  </div>
</template>

<script>
import HeaderMainSlider from "@/components/lite/desktop/Sliders/HeaderMainSlider";
import HeaderCategoriesSlider from "@/components/lite/desktop/Sliders/HeaderCategoriesSlider";
import SelectionSection from "@/components/lite/desktop/SelectionSection/SelectionSection";
import PostsSection from "@/components/lite/desktop/postsSection/PostsSection";
import PostsSlider from "@/components/lite/desktop/Sliders/PostsSlider";
import { mapGetters } from "vuex"; 
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      content: "",
      givesSliderData: []
    };
  },
  components: {
    SelectionSection,
    PostsSection,
    PostsSlider,
    HeaderMainSlider,
    HeaderCategoriesSlider
  },
  created() {
    this.$store.dispatch("fetchHeaderCategories");
    this.$store.dispatch("fetchHeaderMainSlider");
    this.$store.dispatch("fetchPosts");
  },
  computed: {
    ...mapGetters(["allPosts"])
  },
  async mounted() {
    const response = await axios.get("");
    this.givesSliderData = response.data.gives;
  }
};
</script>

<style scoped></style>
