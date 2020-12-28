<template>
    <a href="#" class="mybg_center d-block h-100 w-100">
      <img :src="require('@/assets/lite/' + mainSliderSlide.img )" alt="mainSliderSlide.img">
    </a>
</template>

<script>
export default {
  name: 'swipeSlide',
  props: {
    mainSliderSlide: Object
  }
}
</script>
