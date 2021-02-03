<template>
  <div>
    <ul class="submenu_list">
      <li class="submenu_title">
        <a href="categories.html">{{ category.name }}</a>
      </li>
      <!-- submenu_title -->
      <li v-for="category in category.subCategories" :key="category.id">
        <a href="categories.html">{{ category.name }}</a>
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
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.submenu_list li {
  margin: 4px 0;
}
.submenu_list {
  margin: 25px 10px;
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
