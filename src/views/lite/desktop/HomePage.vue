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
          {{ $t('homepage.give_it_away') }}
        </h2>
        <!-- section_title -->
        <PostsSlider :posts="allIndexInfo.gives" />
      </div>
      <!-- container -->
    </section>

    <section class="section section2 pb-5">
      <div class="container">
        <h2 class="section_title pb-4">
          {{ $t('homepage.popular_ads') }}
        </h2>
        <SelectionSection :posts="allIndexInfo.selectionSection" />
      </div>
    </section>

    <section class="section pt-0">
      <div class="container">
        <h2 class="section_title pb-4">
          {{ $t('homepage.for_you') }}
        </h2>
        <!-- section_title -->
        <PostsSection :posts="allIndexInfo.posts" />
      </div>
      <!-- container -->
    </section>

  </div>
</template>

<script>
import HeaderMainSlider from "@/components/lite/desktop/Sliders/HeaderMainSlider";
import HeaderCategoriesSlider from "@/components/lite/desktop/Sliders/HeaderCategoriesSlider";
/* import SelectionSection from "@/components/lite/desktop/SelectionSection/SelectionSection"; */
import PostsSection from "@/components/lite/desktop/postsSection/PostsSection";
import PostsSlider from "@/components/lite/desktop/Sliders/PostsSlider";
import SelectionSection from "@/components/lite/desktop/SelectionSection/SelectionSection";
import { mapGetters } from "vuex"; 
/* import axios from "axios"; */

export default {
  name: "HomePage",
  data() {
    return {
      content: ""
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
    this.$store.dispatch("fetchInfo");
  },
  computed: {
    ...mapGetters(["allIndexInfo"])
  },
  async mounted() {
  }
};
</script>

<style scoped></style>
