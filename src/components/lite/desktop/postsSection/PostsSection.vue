<template>
  <div>
    <div class="grid-container grid-gap-20 grid-template-5">
      <CardBase v-for="post in posts" :key="post.id" :post="post" />
    </div> <!-- grid-container -->

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
</template>

<script>
import CardBase from "@/components/lite/desktop/Cards/CardBase";

export default {
  name: "PostsSection",
  components: {
    CardBase
  },
  props: {
    posts: {
      type: Array
    },
    showBtn: {
    }
  },
  watch: {
    posts() {
    }
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    showMore() {
      this.$emit('showMore')
    }
  },
};
</script>

<style lang="scss" scoped>
#div-with-loading {
  width: 200px;
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: bottom;
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
