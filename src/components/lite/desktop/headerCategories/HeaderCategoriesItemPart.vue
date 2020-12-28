<template>
  <div>
    <ul class="submenu_list">
      <li class="submenu_title"><a href="categories.html">Фото и Видео</a></li>
      <li><a href="categories.html">Пленочные фотоаппараты</a></li>
      <li><a href="categories.html">Цифровые фотоаппараты</a></li>
      <li><a href="categories.html">Видеокамеры</a></li>
      <li><a href="categories.html">Объективы</a></li>
      <li><a href="categories.html">Штативы и моноподы</a></li>
      <li><a href="categories.html">Фотовспышки</a></li>
      <li><a href="categories.html">Аксессуары для фото и видеокамер</a></li>
      <li><a href="categories.html">Телескопы и бинокли</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderCategoriesItemTitle',
  data () {
    return {
    }
  }
}
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
