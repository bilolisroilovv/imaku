<template>
  <div class="mycard3">
    <div class="position-relative">
      <router-link :to="{ name: 'ProductPage', params: {id: propducts.id } }"
        class="mycard_img mybg_center position-relative d-block">
        <div class="mycard_img_list">
          <div class="slide_item"></div>
          <!-- slide_item -->
          <div class="mybg_center myimg"
               :style="{ 'background-image': 'url(' + this.image + ')' }"
          >
          </div>
          <div class="slide_item"></div>
          <!-- slide_item -->
          <div class="mybg_center myimg"
               :style="{ 'background-image': 'url(' + this.image2 + ')' }"
          >
          </div>
          <div class="slide_item"></div>
          <!-- slide_item -->
          <div class="mybg_center myimg"
               :style="{ 'background-image': 'url(' + this.image3 + ')' }"
          ></div>
        </div>
        <!-- mycard_img_list -->
      </router-link>
      <!-- mycard_img -->
      <div class="product_favourite flex-center d-flex">
        <ToggleFavorite
          title="Добавить в избранное"
          class="position-bottom-right mycard_favorite2 flex-center d-flex"
        />
      </div>

      <!-- mycard_favorite -->
    </div> <!-- position-relative -->

    <router-link to="/product" title="Стиральная машина LG TW-4V7RW9T 10.5 кг"
      class="mycard_title text_ellipsis2 mb-2 pt-2">
      Стиральная машина LG TW-4V7RW9T 10.5 кг
    </router-link>
    <!-- mycard_title -->
    <h4 class="mycard_price text_ellipsis1">15 000 000 сум</h4>
    <!-- mycard_price -->
  </div> <!-- mycard3 -->
</template>

<script>
import ToggleFavorite from '@/components/lite/desktop/ToggleFavorite'

export default {
  name: 'CardBase',
  components: {
    ToggleFavorite
  },
  data () {
    return {
      image: "'https://picsum.photos/500?random=1'",
      image2: "'https://picsum.photos/500?random=2'",
      image3: "'https://picsum.photos/500?random=3'",
      image4: "'https://picsum.photos/500?random=4'",
      products: []
    }
  }
}
</script>

<style lang="scss" scoped>
.mycard3 {
  border-radius: 3px;
  overflow: hidden;
}
.mycard3 .mycard_img {
  border-radius: 4px;
  height: 150px;
  position: relative;
  overflow: hidden;
}
.mycard3 .mycard_title {
  font-weight: 400;
  font-size: 14px;
  color: #19191D;
  height: 50px;
}
.mycard3 .mycard_price {
  font-weight: bold;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: inherit;
  font-family: "Inter", sans-serif;
}
.mycard3 .mycard_favorite {
  position: inherit;
  bottom: 4px;
  right: 4px;
  width: 15px;
  height: 15px;
}
.mycard3 .mycard_favorite_bg {
  background: #fff;
  padding: 3px;
  position: absolute;
  width: 23px;
  height: 23px;
  z-index: 9999;
  display: block;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 3px;
}
.mycard_img_list {
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
}
.mycard_img_list .slide_item {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 7;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
  transition: all 0.15s;
}
.mycard_img_list .slide_item:after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.mycard_img_list:hover .slide_item:after {
  border-bottom: 2px solid #ccc;
}
.mycard_img_list .slide_item:before {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
}
.mycard_img_list .slide_item:hover:before {
  border-bottom: 2px solid var(--main-color);
}
.mycard_img_list .myimg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.mycard_img_list .slide_item:hover + .myimg {
  display: block;
  z-index: 4;
}
.product_favourite {
  background: #fff;
}
.mycard_favorite2 {
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.13);
  padding: 4px;
  z-index: 7;
  transition: all 0.2s;
}
.position-bottom-right {
  right: 8px;
  bottom: 8px;
}
</style>
