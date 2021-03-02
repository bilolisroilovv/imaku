<template>
  <div>
    <section class="category_section">
      <div class="container">
        <h2 class="section_title pb-4">
          {{ catData.category.title }}
          <span
            >{{ catData.postsCount }} {{ $t("category_page.results") }}</span
          >
        </h2>
        <div class="row">
          <div class="w-26 pr-0">
            <div class="category_sidebar bg-white">
              <div class="category_sidebar_categories">
                <a href="#" class="title">{{ catData.category.title }}</a>
                <div class="ml-3 pt-1 cateogires_links">
                  <router-link
                    v-for="subcategorie in catData.category.subcategories"
                    :key="subcategorie.id"
                    :to="{
                      name: 'CategoryPage',
                      params: { id: subcategorie.id, slug: subcategorie.slug }
                    }"
                    >{{ subcategorie.title }}</router-link
                  >
                </div>
              </div>
              <!-- category_sidebar_categories -->
            </div>
            <!-- category_sidebar -->
            <div class="category_sidebar_filter mt-4">
              <vs-collapse class="filter_collapse">
                <vs-collapse-item open>
                  <div slot="header">
                    <h5>{{ $t("category_page.price") }}</h5>
                  </div>
                  <div class="price_filter">
                    <!-- <vs-slider
                      class="w-100"
                      @focusout="changePrice()"
                      max="10000000"
                      :color="colorx"
                      v-model="value1"
                    /> -->
                    <div class="d-flex justify-content-between">
                      <div class="position-relative">
                        <input
                          type="text"
                          max="10000000"
                          @change="changePrice()"
                          v-model="value1[0]"
                        />
                        <span>{{ $t("category_page.from") }}</span>
                      </div>
                      <div class="position-relative ml-3">
                        <input
                          type="text"
                          max="10000000"
                          @change="changePrice()"
                          v-model="value1[1]"
                        />
                        <span>{{ $t("category_page.to") }}</span>
                      </div>
                    </div>
                    <!-- d-flex -->
                  </div>
                  <!-- price_filter -->
                </vs-collapse-item>
                <vs-collapse-item
                  v-for="filter in catData.category.characters"
                  :key="filter.id"
                >
                  <div slot="header">
                    <h5>{{ filter.title }}</h5>
                  </div>
                  <div class="">
                    <label
                      class="control control--checkbox"
                      v-for="option in filter.options"
                      :key="option.id"
                    >
                      <input
                        type="checkbox"
                        @change="changeFilter"
                        :value="option.id"
                        required
                        v-model="checkedOptions"
                      />
                      <div class="control__indicator"></div>
                      {{ option.value }}
                    </label>
                  </div>
                  <!-- price_filter -->
                </vs-collapse-item>
              </vs-collapse>
            </div>
            <!-- category_sidebar_filter -->
          </div>
          <!-- w-26 -->

          <div class="w-74 position-relative">
            <div class="mb-3 d-flex">
              <vs-select
                class="selectExample category_select"
                v-model="select1"
                @change="sortBy"
              >
                <vs-select-item
                  v-for="(item, index) in sortOptions"
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                />
              </vs-select>
            </div>

            <div class="grid-container loading_div grid-template-4 grid-gap-10">
              <CardBase
                v-for="post in catData.posts"
                :key="post.id"
                :post="post"
              />
            </div>

            <div class="mt-5 d-flex justify-content-center">
              <vs-pagination v-show="catData.posts.length >= 60 || currentPage === pagesCount" :total="pagesCount" :color="colorx" v-model="currentPage" ></vs-pagination>
            </div>

            <div id="div-with-loading" class="vs-con-loading__container">
            </div> <!-- loading_block -->

            <!--  <button class="mainbtn see_more_btn mt-4 d-block ml-auto mr-auto">
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
          <!-- w-74 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
  </div>
</template>

<script>
import CardBase from "@/components/lite/desktop/Cards/CardBase";
import axios from "axios";

export default {
  name: "CategoryPage",
  components: {
    CardBase
  },
  props: {
    id: {},
    lang: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      catData: [],
      checkedOptions: [],
      select1Normal: "",
      select1: 0,
      value1: [0, 999999999],
      colorx: "var(--main-color)",
      colorLoading: "var(--main-color)",
      currentPage: 1,
      pagesCount: null,
      postsC: 0,
      limit: true
    };
  },
  computed: {
    sortOptions() {
      return [
        { text: this.$i18n.t("category_page.sort.sort1"), value: 0 },
        { text: this.$i18n.t("category_page.sort.sort2"), value: 1 },
        { text: this.$i18n.t("category_page.sort.sort3"), value: 2 },
        { text: this.$i18n.t("category_page.sort.sort4"), value: 3 },
      ];
    }
  },
  watch: {
    currentPage() {
      this.postsC = 0
      this.getCategory();
    },
    lang() {
      this.getCategory();
    },
    id() {
      this.getCategory();
    }
  },
  beforeMount() {
    this.getCategory();
  },
  methods: {
    async getCategory () {
      window.scrollTo(0,0);

      const form = new FormData();
      form.append("params[from]", this.value1[0]);
      form.append("params[to]", this.value1[1]);
      form.append("params[sort]", this.select1);

      const response = await axios.get("categories/" + this.id + '?page=' + this.currentPage + '&paginate=' + 0, form, {
        headers: {
          "Accept-Language": `${this.$i18n.locale}`
        }
      })
      this.catData = response.data
      this.pagesCount = response.data.pagesCount
    },
    scroll() {
        const form = new FormData();
        form.append("params[from]", this.value1[0]);
        form.append("params[to]", this.value1[1]);
        form.append("params[sort]", this.select1);
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
            if(this.postsC < 48) {
              this.$vs.loading({
                container: "#div-with-loading",
                scale: 0.8,
                color: this.colorLoading
              });
              this.postsC += 12
              axios.get("categories/" + this.id + '?page=' + this.currentPage + '&paginate=' + this.postsC, form, {
                headers: {
                  "Accept-Language": `${this.$i18n.locale}`
                }
              })
              .then(response => {
                for(var i = 0; i < response.data.posts.length; i++) {
                  this.catData.posts.push(response.data.posts[i]);
                }
                this.pagesCount = response.data.pagesCount
                console.log(this.catData.posts);
              })
              .finally(() => this.$vs.loading.close("#div-with-loading > .con-vs-loading"));
            }
            this.limit = false
            setTimeout(() => {
              this.limit = true
            }, 100);
          }
      };
    },
    /* async paginationChange() {
      const response = await axios.get('categories/' + this.catData.category.id + '?page=' + this.currentPage)
      this.catData = response.data
    }, */
    async changePrice() {
      this.catData.posts = [];
      this.$vs.loading({
        container: "#div-with-loading",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("params[from]", this.value1[0]);
      form.append("params[to]", this.value1[1]);
      form.append("params[sort]", this.select1);

      const response = await axios
        .post("categories/" + this.id, form)
        .finally(() => this.$vs.loading.close("#div-with-loading > .con-vs-loading"));
      this.catData = response.data;
    },
    async changeFilter() {
      this.catData.posts = [];
      this.$vs.loading({
        container: "#div-with-loading",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("params[from]", this.value1[0]);
      form.append("params[to]", this.value1[1]);
      form.append("params[sort]", this.select1);
      
      for (var i = 0; i < this.checkedOptions.length; i++) {
        form.append("params[characters][option_id][]", this.checkedOptions[i])
      }
      const response = await axios
        .post("categories/" + this.id, form)
        .finally(() => this.$vs.loading.close("#div-with-loading > .con-vs-loading"));
      this.catData = response.data;
    },
    async sortBy() {
      this.catData.posts = [];
      this.$vs.loading({
        container: "#div-with-loading",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("params[from]", this.value1[0]);
      form.append("params[to]", this.value1[1]);
      form.append("params[sort]", this.select1);

      const response = await axios
        .post("categories/" + this.id, form)
        .finally(() => this.$vs.loading.close("#div-with-loading > .con-vs-loading"));
      this.catData = response.data;
    }
  },
  mounted() {
    this.scroll();
  },
};
</script>

<style lang="scss" scoped>
.loading_div {
  max-height: 100%;
  max-width: 100%;
}
#div-with-loading {
  width: 200px;
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: bottom;
}
.control {
  font-weight: 500;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin: 5px 0;
}
.control__indicator {
  top: 3px !important;
}
.price_filter input {
  border: 2px solid #d6dbe0;
  border-radius: 3px;
  color: #444;
  transition: all 0.2s;
  width: 100%;
  padding: 6px 10px 6px 35px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}
.price_filter input:hover {
  border-color: rgba(250, 169, 93, 0.603);
}
.price_filter span {
  color: #b1b9c2;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  position: absolute;
  top: 50%;
  left: 10px;
  font-weight: 500;
  transform: translate(0, -50%);
}
.cateogires_links a {
  display: block;
  color: #555;
  font-weight: 500;
  padding: 5px 8px;
  transition: all 0.2s;
  font-family: "Inter", sans-serif;
  border-radius: 3px;
  width: 100%;
  font-size: 15px;
}
.cateogires_links a:hover {
  background: rgba(0, 0, 0, 0.041);
  color: #000;
}
.category_sidebar_categories .title {
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  color: #000;
  font-family: "Inter", sans-serif;
  background: rgba(255, 201, 150, 0.377);
  padding: 8px 12px;
  width: 100%;
  display: block;
}
.category_sidebar {
  border-radius: 6px;
  background: #fff;
  padding: 25px 20px;
}
.category_sidebar_filter {
  border-radius: 6px;
  background: #fff;
  padding: 15px 20px;
}
.con-select {
  width: 220px !important;
}
.w-26 {
  width: 26%;
  padding: 0 15px;
}
.w-74 {
  width: 74%;
  padding: 0 15px;
}
.category_section h2 {
  font-family: "Inter", sans-serif;
  color: #000;
}
.category_section h2 span {
  font-size: 15px;
  font-weight: 500;
  color: rgb(107, 107, 107);
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
</style>
