<template>
  <section class="section pt-0">
    <div class="container">
      <h2 class="section_title pb-4">Новые объявления</h2>
      <div class="grid-container grid-gap-20 grid-template-5">
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
        <CardBase />
      </div><!-- grid-container -->
    </div> <!-- container -->
  </section>
</template>

<script>
import CardBase from '@/components/lite/desktop/Cards/CardBase'

export default {
  name: 'GoodsSection',
  components: {
    CardBase
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
