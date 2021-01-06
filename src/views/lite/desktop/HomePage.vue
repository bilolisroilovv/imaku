<template>
  <div class="home">
    <div id="top"></div>
    <a href="#top" class="top_btn flex-center anim d-flex">
      <svg
        class="svg-inline--fa fa-chevron-left fa-w-10"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        data-fa-i2svg=""
      >
        <path
          fill="#fff"
          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        ></path>
      </svg>
    </a><!-- top_btn -->

    <Header />

    <section class="section pt-5 pb-0">
      <div class="container">
        <h2 class="section_title pb-4">
          Отдам даром
        </h2> <!-- section_title -->
        <SimilarGoodsSlider />
      </div> <!-- container -->
    </section>

    <SelectionSection />

    <section class="section pt-0">
      <div class="container">
        <h2 class="section_title pb-4">
          Новые объявления
        </h2> <!-- section_title -->
        <GoodsSection/>
      </div> <!-- container -->
    </section>
  </div>
</template>

<script>
import Header from '@/components/lite/desktop/Header'
import SelectionSection from '@/components/lite/desktop/SelectionSection/SelectionSection'
import GoodsSection from '@/components/lite/desktop/goodsSection/GoodsSection'
import SimilarGoodsSlider from '@/components/lite/desktop/Sliders/SimilarGoodsSlider'

export default {
  name: 'HomePage',
  components: {
    Header,
    SelectionSection,
    GoodsSection,
    SimilarGoodsSlider
  }
}
</script>

<style scoped>
.top_btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.2s;
  background: var(--main-color);
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
  transform: translateY(150px) rotate(90deg);
}
.top_btn svg {
  width: 11px;
}
.top_btn.active {
  transform: translateY(0) rotate(90deg);
}
.top_btn:hover {
  opacity: 1;
}
.flex-center {
  align-items: center;
  justify-content: center;
}

</style>
