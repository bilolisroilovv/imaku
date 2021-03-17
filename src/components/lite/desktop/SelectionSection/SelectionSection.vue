<template>
  <div class="bg-white pt-1 pl-4 pr-4 pb-4">
    <div class="row">
      <div class="col-md-6" v-for="postPart in this.posts" :key="postPart.id">
        <div class="d-flex justify-content-between mt-4">
          <router-link
            :to="{
              name: 'CategoryPage',
              params: { id: postPart.id, slug: postPart.slug }
            }"
            class="myhover_text section2_grouptitle"
            >{{ postPart.title }}</router-link
          >
        </div>
        <!-- d-flex -->
        <div
          class="section2_group grid-container grid-template-3 grid-gap-15 mt-2"
        >
          <div
            class="mycard2 myhover_bg2"
            v-for="post in postPart.posts"
            :key="post.id"
          >
            <div class="position-relative">
              <router-link
                :to="{
                  name: 'PostPage',
                  params: { id: post.id, slug: post.slug }
                }"
                class="mycard_img mybg_center d-block"
                :style="{ 'background-image': 'url(' + post.gallery + ')' }"
              >
              </router-link>
              <!-- mycard_img -->
            </div>
            <!-- position-relative -->

            <router-link
              :to="{
                name: 'PostPage',
                params: { id: post.id, slug: post.slug }
              }"
              title="{post.name}"
              class="mycard_title text_ellipsis2 mb-2 pt-2"
            >
              {{ post.name }}
            </router-link>
            <!-- mycard_title -->
            <h4 class="mycard_price text_ellipsis1" v-if="post.price">{{ post.price }} <span v-if="post.priceType == 'сум' ">{{ $t("price_sum") }}</span> <span v-if="post.priceType == 'e.y' ">{{ $t("price_ye") }}</span></h4>
            <h4 class="mycard_price text_ellipsis1" v-if="post.price == null">{{ $t("free") }}</h4>
            <!-- mycard_price -->
          </div>
          <!-- mycard2 -->
        </div>
        <!-- section2_group -->
      </div>
    </div>
    <!-- row -->
  </div>
  <!-- bg-white -->
</template>

<script>
export default {
  name: "SelectionSection",
  props: {
    posts: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      image: "'https://picsum.photos/500?random=1'",
      image2: "'https://picsum.photos/500?random=2'",
      image3: "'https://picsum.photos/500?random=3'",
      image4: "'https://picsum.photos/500?random=4'",
      image5: "'https://picsum.photos/500?random=5'",
      image6: "'https://picsum.photos/500?random=6'",
      image7: "'https://picsum.photos/500?random=7'",
      image8: "'https://picsum.photos/500?random=8'",
      image9: "'https://picsum.photos/500?random=9'",
      image10: "'https://picsum.photos/500?random=10'",
      image11: "'https://picsum.photos/500?random=11'",
      image12: "'https://picsum.photos/500?random=12'"
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.section {
  padding: 50px 0;
}
.section2_grouptitle {
  font-weight: 600;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  color: #000000;
}
.section2_group {
  background: #f4f4f4;
  border-radius: 6px;
  padding: 15px 20px;
}
.mycard2 {
  border-radius: 3px;
  overflow: hidden;
}
.mycard2 .mycard_img {
  border-radius: 3px;
  height: 150px;
  position: relative;
  overflow: hidden;
}
.mycard2 .mycard_title {
  font-weight: 300;
  font-size: 12px;
  color: #19191d;
  height: 42px;
}
.mycard2 .mycard_price {
  font-weight: bold;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.87);
}
.black_label {
  background: #020200;
  border-radius: 1px;
  padding: 5px 10px 5px 10px;
  font-weight: normal;
  font-size: 11px;
  color: #ffffff;
  font-family: "Inter", sans-serif;
}
</style>
