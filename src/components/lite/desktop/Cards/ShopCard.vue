<template>
  <div class="shop_card mybg_center">
    <router-link
      :to="{ name: 'ShopPage', params: { id: shop.id, slug: shop.slug } }"
      class="media p-2"
    >
      <img :src="shop.banner" alt="" />
      <div class="d-flex align-items-center">
        <div
          class="shop_logo mybg_center"
          :style="{ 'background-image': 'url(' + shop.avatar + ')' }"
        ></div>
        <!-- shop_logo -->
        <p class="mb-0 text-white ml-2">{{ shop.name }}</p>
      </div>
    </router-link>
    <div class="mycard_edit_btns p-2 d-flex justify-content-center">
      <button @click.prevent="removePost" class="post_remove_btn mainbtn">
        <i class="far fa-trash-alt mr-1"></i> {{ $t("card_base.delete") }}
      </button>
      <router-link
      :to="{
        name: 'ShopEdit',
        params: { id: this.shop.id, slug: this.shop.slug }
      }"
      class="post_edit_btn ml-2">
        <i class="far fa-edit mr-1"></i> {{ $t("card_base.edit") }}
      </router-link>
    </div>
  </div>
  <!-- shop_card -->
</template>

<script>
import axios from "axios";
export default {
  name: "ShopCard",
  data() {
    return {
      colorLoading: "var(--main-color)"
    };
  },
  props: {
    shop: {
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
  methods: {
    async removePost() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
        .get("shops/delete/" + this.shop.id)
        .finally(() =>
          setTimeout(() => {
            this.$vs.loading.close(".con-vs-loading");
          }, 10)
        );
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Магазин успешно удален"
      });
      this.$emit("removePost", response);
    }
  }
};
</script>

<style lang="scss" scoped>
.shop_card {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: none;

  position: relative;
  .media {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    border: none;
    &::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.24) 10%,
        transparent
      );
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.25s;
    }

    & > div {
      position: relative;
      z-index: 22;
    }

    &:hover {
      & > img {
        transform: scale(1.05);
      }
    }
  }
  .mycard_edit_btns {
    position: absolute;
    bottom: -5px;
    width: 100%;
    transition: all 0.25s;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    .mycard_edit_btns {
      opacity: 1;
      bottom: 5px;
      pointer-events: inherit;
    }
  }
}
.shop_logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.post_edit_btn {
  border: 1px solid var(--main-color);
  color: white;
  background: var(--main-color);
  border-radius: 3px;
  padding: 7px 12px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
}
.post_remove_btn {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  padding: 8px 12px !important;
  font-size: 14px;
  background: #f44643 !important;
  color: #ffffff;
}
</style>
