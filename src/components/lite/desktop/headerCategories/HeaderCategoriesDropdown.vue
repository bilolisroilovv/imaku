<template>
  <div>
    <ul class="submenu first_submenu">
      <div class="submenu_content">
        <div>
          <ul class="submenu_list">
            <li class="submenu_title"><a href="categories.html">Телефоны</a></li>
            <li><a href="categories.html">Аксессуары</a></li>
            <li><a href="categories.html">Мобильные телефоны</a></li>
            <li><a href="categories.html">Сим-карты / тарифы / номера</a></li>
            <li><a href="categories.html">Стационарные телефоны</a></li>
            <li><a href="categories.html">Прочие телефоны</a></li>
          </ul>
        </div>
        <div>
          <ul class="submenu_list">
            <li class="submenu_title"><a href="categories.html">Компьютеры</a></li>
            <li><a href="categories.html">Настольные</a></li>
            <li><a href="categories.html">Ноутбуки</a></li>
            <li><a href="categories.html">Планшетные компьютеры</a></li>
            <li><a href="categories.html">Аксессуары</a></li>
            <li><a href="categories.html">Комплектующие</a></li>
            <li><a href="categories.html">Перифирийные устройства</a></li>
            <li><a href="categories.html">Мониторы</a></li>
            <li><a href="categories.html">Внешние накопители</a></li>
          </ul>
        </div>
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
        <div>
          <ul class="submenu_list">
            <li class="submenu_title"><a href="categories.html">Техника для дома</a></li>
            <li><a href="categories.html">Пылесосы</a></li>
            <li><a href="categories.html">Утюги</a></li>
            <li><a href="categories.html">Стиральные машины</a></li>
            <li><a href="categories.html">Швейные машины</a></li>
            <li><a href="categories.html">Вязальные машины</a></li>
            <li><a href="categories.html">Фильтры для воды</a></li>
            <li><a href="categories.html">Прочая техника для дома</a></li>
          </ul>
        </div>
        <div>
          <ul class="submenu_list">
            <li class="submenu_title"><a href="categories.html">Техника для дома</a></li>
            <li><a href="categories.html">Кондиционеры</a></li>
            <li><a href="categories.html">Водонагреватели</a></li>
            <li><a href="categories.html">Увлажнители воздуха</a></li>
            <li><a href="categories.html">Вентиляторы</a></li>
            <li><a href="categories.html">Обогреватели и тепловые завесы</a></li>
          </ul>
        </div>
        <div>
          <ul class="submenu_list">
            <li class="submenu_title"><a href="categories.html">Техника для дома</a></li>
            <li><a href="categories.html">Кондиционеры</a></li>
            <li><a href="categories.html">Водонагреватели</a></li>
            <li><a href="categories.html">Увлажнители воздуха</a></li>
            <li><a href="categories.html">Вентиляторы</a></li>
            <li><a href="categories.html">Обогреватели и тепловые завесы</a></li>
          </ul>
        </div>

      </div> <!-- submenu_content -->
    </ul> <!-- submenu -->

    <ul class="mymenu">
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
      <HeaderCategoriesItem
      />
    </ul> <!-- mymenu -->
  </div> <!-- header_categories_dropdown -->
</template>

<script>
import HeaderCategoriesItem from '@/components/lite/desktop/headerCategories/HeaderCategoriesItem.vue'

export default {
  name: 'HeaderCategoriesDropdown',
  components: {
    HeaderCategoriesItem
  },
  pros: {
    scrollPosition: Number
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.mymenu {
  background: #FFFFFF;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px 13px;
  display: inline-block;
  min-height: 100%;
  min-width: 300px;
  position: relative;
}
.mymenu_li {
  transition: all 0s;
  border-radius: 4px;
  min-width: 250px;
}
.mymenu_li:hover {
  background: rgb(255, 234, 197);
}

.submenu {
  width: 1025px;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%);
  padding: 15px 35px;
}
.submenu:before {
  content: '';
  display: block;
  background: transparent;
  position: absolute;
  width: 50px;
  height: 90%;
  left: -2%;
}
.submenu_content {
  display: flex;
  flex-flow: column wrap;
  -webkit-box-pack: start;
  place-content: flex-start;
  height: 100%;
}
.mymenu_li:hover .submenu {
  display: block;
  z-index: 2!important;
}
.mymenu .submenu_content {
  display: flex;
  flex-flow: column wrap;
  -webkit-box-pack: start;
  place-content: flex-start;
  height: 100%;
}
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
.submenu_list .submenu_title a {
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
.first_submenu {
  height: 100%;
  display: block;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 325px;
  padding: 15px 35px;
}
</style>
