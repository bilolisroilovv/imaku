<template>
  <div>
    <section class="category_section">
      <div class="container">
        <h2 class="section_title pb-4">
          {{ searchData.query }}
          <span>{{ searchData.count }} {{ $t("category_page.results") }}</span>
        </h2>
        <div class="w-100 position-relative">
          <div class="mb-3 d-flex">
            <vs-select class="selectExample category_select" v-model="select1">
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in options1"
              />
            </vs-select>
          </div>

          <div class="grid-container loading_div grid-template-5 grid-gap-10">
            <CardBase
              v-for="post in searchData.posts"
              :key="post.id"
              :post="post"
            />
          </div>

          <h3 class="text-center" v-if="searchData.count === 0">
            {{ $t("search.no_result") }} (
          </h3>

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
  name: "SearchPage",
  components: {
    CardBase
  },
  props: {
    query: {}
  },
  data() {
    return {
      searchData: [],
      select1Normal: "",
      select1: 1,
      value1: [500000, 2000000],
      colorx: "var(--main-color)",
      options1: [
        { text: "Популярные", value: 1 },
        { text: "Новинки", value: 2 },
        { text: "Сначала дешевые", value: 3 },
        { text: "Сначала дорогие", value: 4 },
        { text: "Высокий рейтинг", value: 5 }
      ],
      colorLoading: "var(--main-color)"
    };
  },
  watch: {
    query() {
      this.getSearch();
    }
  },
  mounted() {
    this.getSearch();
  },
  methods: {
    async changePrice() {
      this.catData.posts = null;
      this.$vs.loading({
        container: ".loading_div",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("params[from]", this.value1[0]);
      form.append("params[to]", this.value1[1]);
      const response = await axios
        .post("search?query=" + this.query, form)
        .finally(() =>
          this.$vs.loading.close(".loading_div > .con-vs-loading")
        );
      this.searchData = response.data;
    },
    async getSearch() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
        .get("search?query=" + this.query)
        .finally(() => this.$vs.loading.close(".con-vs-loading"));
      this.searchData = response.data;
      console.log(this.searchData);
    }
  }
};
</script>

<style lang="scss" scoped>
.loading_div {
  max-height: 100%;
  max-width: 100%;
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
