<template>
  <div>
    <div class="paragraph">
      <h3>PhotoSwipe Gallery</h3>
      <div>
        <v-photoswipe-gallery class="myphoto" :isOpen="isOpenGallery" :options="optionsGallery" :items="items">
          <img slot-scope="props" :src="props.item.src" alt="picture"/>
        </v-photoswipe-gallery>
      </div>
    </div>
    <v-photoswipe :isOpen="isOpen" :items="items" :options="options" @close="hidePhotoSwipe"></v-photoswipe>
  </div>
</template>

<script>
import { PhotoSwipe, PhotoSwipeGallery } from 'v-photoswipe'

export default {
  components: {
    'v-photoswipe': PhotoSwipe,
    'v-photoswipe-gallery': PhotoSwipeGallery
  },
  data () {
    return {
      isOpen: false,
      isOpenGallery: false,
      options: {
        index: 0
      },
      optionsGallery: {},
      items: [
        {
          src: 'https://picsum.photos/500?random=1',
          w: 600,
          h: 600,
          title: 'This is dummy caption.'
        },
        {
          src: 'https://picsum.photos/500?random=2',
          w: 600,
          h: 600,
          title: 'This is dummy caption2.'
        },
        {
          src: 'https://picsum.photos/500?random=3',
          w: 600,
          h: 600,
          title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.'
        }
      ]
    }
  },
  methods: {
    showPhotoSwipe (index) {
      this.isOpen = true
      this.$set(this.options, 'index', index)
    },
    hidePhotoSwipe () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.myphoto {
  width: 500px;
  height: 500px;
}
</style>
