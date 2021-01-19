<template>
  <div class="home">
    <!-------------------------------- START HeaderSlider -------------------------------->
    <div class="container pt-3">
      <HeaderMainSlider />
    </div><!-- container -->

    <div class="container">
      <HeaderCategoriesSlider />
    </div><!-- container -->

    <!-------------------------------- END HeaderSlider -------------------------------->

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
import HeaderMainSlider from '@/components/lite/desktop/Sliders/HeaderMainSlider'
import HeaderCategoriesSlider from '@/components/lite/desktop/Sliders/HeaderCategoriesSlider'

import SelectionSection from '@/components/lite/desktop/SelectionSection/SelectionSection'
import GoodsSection from '@/components/lite/desktop/goodsSection/GoodsSection'
import SimilarGoodsSlider from '@/components/lite/desktop/Sliders/SimilarGoodsSlider'

export default {
  name: 'HomePage',
  components: {
    SelectionSection,
    GoodsSection,
    SimilarGoodsSlider,
    HeaderMainSlider,
    HeaderCategoriesSlider
  }
}
</script>

<style scoped>

</style>
