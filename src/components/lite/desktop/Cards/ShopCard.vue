<template>
  <div class="shop_card mybg_center">
  </div> <!-- shop_card -->
</template>

<script>
export default {
  name: 'ShopCard',
  props: {
    shop: {
      type: Number,
      default: 
    },
  },
}
</script>

<style lang="scss" scoped>
.shop_card {
  width: 100%;
  height: 300px;
  border-radius: 5px;
}
</style>
