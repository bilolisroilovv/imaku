<template>
  <div>
    <ul class="submenu_list">
      <li class="submenu_title">
        <router-link
          :to="{
            name: 'CategoryPage',
            params: { id: category.id, slug: category.slug }
          }"
        >
          {{ category.name }}
        </router-link>
      </li>
      <!-- submenu_title -->
      <li v-for="category in category.subCategories" :key="category.id">
        <router-link
          :to="{
            name: 'CategoryPage',
            params: { id: category.id, slug: category.slug }
          }"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderCategoriesItemTitle",
  components: {},
  data() {
    return {};
  },
  props: {
    category: {
      id: {
        type: Number,
        default: null
      },
      slug: {
        type: String,
        default: ""
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.submenu_list li {
  margin: 4px 0;
}
.submenu_list {
  margin: 10px 10px;
}
.submenu_list a {
  font-weight: normal;
  font-size: 14px;
  padding: 6px 4px;
  color: #515151;
  transition: all 0.2s;
}
.submenu_title a {
  font-weight: bold;
  font-size: 17px;
  padding: 10px 4px;

  color: #000000;
}

.submenu_list a:hover {
  color: var(--main-color);
}

.submenu_list .submenu_title {
  margin-bottom: 7px;
}
</style>
