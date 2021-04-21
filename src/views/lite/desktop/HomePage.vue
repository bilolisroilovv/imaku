<template>
  <div class="home">
    <h3>{{ content }}</h3>
    <!-------------------------------- START HeaderSlider -------------------------------->
    <div class="pt-2">
      <div class="container">
        <HeaderMainSlider :mainSliders="mainSliders" />
      </div>
    </div> <!-- pt-3 -->
    <!-- container -->
    <div class="container">
      <HeaderCategoriesSlider />
    </div>
    <!-- container -->

    

    <!-------------------------------- END HeaderSlider -------------------------------->
    <section class="section pt-5 pb-3">
      <div class="container">
        <div class="d-flex align-items-center pb-4">
          <h2 class="section_title mr-3">
            {{givesPosts.title}}
          </h2>
          <router-link
          class="mt-1 see_all_link"
          :to="{
            name: 'CategoryPage',
            params: { id: 153, slug: 'otdam-darom' }
          }">Смотреть все</router-link>
        </div> <!-- d-flex -->
        <!-- section_title -->
        <PostsSlider :posts="givesPosts.posts" />
      </div>
      <!-- container -->
    </section>

    <section class="section section2 pb-5">
      <div class="container">
        <h2 class="section_title pb-4">
          {{ $t("homepage.popular_ads") }}
        </h2>
        <SelectionSection :posts="selectionPosts" />
      </div>
    </section>

    <section class="section pt-0">
      <div class="container">
        <h2 class="section_title pb-4">
          {{ $t("homepage.for_you") }}
        </h2>
        <!-- section_title -->
        <PostsSection @showMore="showMore" :posts="postsForYouData" :showBtn="showBtn" />
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
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      mainSliders: [],
      givesPosts: [],
      selectionPosts: [],
      postsForYouData: [],
      content: "",
      currentPage: 1,
      colorLoading: "var(--main-color)",
      showBtn: false,
      postsC: 0,
      limit: true
    };
  },
  components: {
    SelectionSection,
    PostsSection,
    PostsSlider,
    HeaderMainSlider,
    HeaderCategoriesSlider
  },
  watch: {
    currentPage() {
      this.postsC = 0
      this.getForYouPosts();
    }
  },
  mounted() {
    this.getGivesPosts();
    this.getSelectionPosts();
    this.getForYouPosts();
    this.scroll();
    this.getMainSlider()
  },
  methods: {
    async getMainSlider() {
      const response = await axios.get('sliders')
      this.mainSliders = response.data
    },
    async getGivesPosts() {
      const response = await axios.get('gives')
      this.givesPosts = response.data
    },
    async getSelectionPosts() {
      const response = await axios.get('selectionSection')
      this.selectionPosts = response.data
    },
    showMore() {
      this.showBtn = false
      this.currentPage++
    },
    async getForYouPosts () {
      this.$vs.loading({
        container: "#div-with-loading",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios.get('posts?page=' + this.currentPage + '&paginate=' + 0, {
        headers: {
          "Accept-Language": `${this.$i18n.locale}`
        }
      }).finally(() => this.$vs.loading.close("#div-with-loading > .con-vs-loading"));
      for(var i = 0; i < response.data.posts.length; i++) {
        this.postsForYouData.push(response.data.posts[i])
      }
      this.showBtn = false
    },
    scroll() {
      window.onscroll = () => {
        let offsetHeight = document.documentElement.offsetHeight-800
        let offsetHeight2 = document.documentElement.offsetHeight-700
        let scrollTop = document.documentElement.scrollTop
        let innerHeight= window.innerHeight

        let bottomOfWindow = scrollTop + innerHeight >= offsetHeight && scrollTop + innerHeight <= offsetHeight2; 
        /* console.log('scrollTop ' + scrollTop);
        console.log('innerHeight ' + innerHeight);
        console.log('offsetHeight ' + offsetHeight); */
        if (bottomOfWindow && this.limit) {
          if(this.postsC < 15) {
            this.$vs.loading({
              container: "#div-with-loading",
              scale: 0.8,
              color: this.colorLoading
            });
            this.postsC += 15
            axios.get('posts?page=' + this.currentPage + '&paginate=' + this.postsC, {
              headers: {
                "Accept-Language": `${this.$i18n.locale}`
              }
            })
            .then(response => {
              for(var i = 0; i < response.data.posts.length; i++) {
                this.postsForYouData.push(response.data.posts[i])
              }
              this.showBtn = true
            })
            .finally(() => this.$vs.loading.close("#div-with-loading > .con-vs-loading"));
          }
          this.limit = false
          setTimeout(() => {
            this.limit = true
          }, 100);
        }
      };
    }
  }
};
</script>

<style scoped>
.see_all_link {
  font-family: "Inter";
  font-size: 15px;
  font-weight: 500;
  color: var(--main-color);
  transition: all 0.2s;
  text-decoration: underline!important;
}
.see_all_link:hover {
  
}
</style>
