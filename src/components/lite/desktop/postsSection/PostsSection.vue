<template>
  <div class="grid-container grid-gap-20 grid-template-5">
    <CardBase
    v-for="post in allPosts"
    :key="post.id"
    :post="post"
    />
  </div><!-- grid-container -->
</template>

<script>
import CardBase from '@/components/lite/desktop/Cards/CardBase'
import { mapGetters } from 'vuex'

export default {
  name: 'PostsSection',
  components: {
    CardBase
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['allPosts'])
  }
}
</script>

<style lang="scss" scoped>

</style>
