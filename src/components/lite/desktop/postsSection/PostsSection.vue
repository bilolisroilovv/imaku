<template>
  <div class="grid-container grid-gap-20 grid-template-5">
    <CardBase
    v-for="post in posts"
    :key="post.id"
    :post="post"
    />
  </div><!-- grid-container -->
</template>

<script>
import CardBase from '@/components/lite/desktop/Cards/CardBase'

export default {
  name: 'PostsSection',
  components: {
    CardBase
  },
  props: {
    posts: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
