<template>
  <div>
    <Header2/>
    <section class="product_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item"><a href="/">Главная</a></li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item active" aria-current="page">Смартфоны и телефоны</li>
                </ol>
              </nav>

            </div> <!-- d-flex -->

          </div> <!-- col-md-12 -->
        </div> <!-- row -->

      </div> <!-- container -->
    </section> <!-- product_section -->

    <section class="category_section">
      <div class="container">
        <h2 class="section_title pb-4">Смартфоны и телефоны <span>102 200 результатов</span></h2>
        <div class="row">
          <div class="w-26 pr-0">
            <div class="category_sidebar bg-white">
              <div class="category_sidebar_categories">
                <a href="#" class="title">Смартфоны и телефоны</a>
                <div class="ml-3 pt-1 cateogires_links">
                  <a href="#">Гарнитуры и наушники</a>
                  <a href="#">Смартфоны</a>
                  <a href="#">Держатели</a>
                  <a href="#">Планшеты</a>
                  <a href="#">Моноподы и штативы</a>
                  <a href="#">Кабели и адаптеры</a>
                  <a href="#">Стан</a>
                  <a href="#">Моноподы и штативы</a>
                  <a href="#">Планшеты</a>
                  <a href="#">Стекла и пленки</a>
                  <a href="#">Чехлы</a>
                  <a href="#">Чехлы-аккумуляторы</a>
                  <a href="#">Flash-накопители</a>
                  <a href="#">SIM-карты</a>
                  <a href="#">Запчасти для устройств</a>
                  <a href="#">Аксессуары для съемки</a>

                </div>
              </div> <!-- category_sidebar_categories -->
            </div> <!-- category_sidebar -->
            <div class="category_sidebar_filter mt-4">
              <vs-collapse class="filter_collapse">
                <vs-collapse-item open>
                  <div slot="header">
                    <h5>Цена</h5>
                  </div>
                  <div class="price_filter d-flex">
                      <div class="position-relative">
                        <input type="text" v-mask="['#', '##', '###', '####', '# ###', '## ###', '### ###', '#### ###', '# ### ###', '## ### ###', '### ### ###', '#### ### ###', '# ### ### ###', '## ### ### ###', '### ### ### ###', '#### ### ### ###', '# ### ### ### ###', '## ### ### ### ###', '### ### ### ### ###']">
                        <span>От</span>
                      </div>
                      <div class="position-relative">
                        <input type="text" v-mask="['#', '##', '###', '####', '# ###', '## ###', '### ###', '#### ###', '# ### ###', '## ### ###', '### ### ###', '#### ### ###', '# ### ### ###', '## ### ### ###', '### ### ### ###', '#### ### ### ###', '# ### ### ### ###', '## ### ### ### ###', '### ### ### ### ###']">
                        <span>До</span>
                      </div>
                  </div> <!-- price_filter -->
                  </vs-collapse-item>
                  <vs-collapse-item>
                  <div slot="header">
                    <h5>Бренд</h5>
                  </div>
                  <div class="">
                    <label class="control control--checkbox">
                      <input type="checkbox" checked="checked" required />
                      <div class="control__indicator"></div>
                      Apple
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Samsung
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Xiaomi
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Oppo
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Oneplus
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Lg
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Sony
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Artel
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Redmi
                    </label>
                  </div> <!-- price_filter -->
                  </vs-collapse-item>
                  <vs-collapse-item>
                  <div slot="header">
                    <h5>Состояние</h5>
                  </div>
                  <div>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Новый
                    </label>
                    <label class="control control--checkbox">
                      <input type="checkbox" required />
                      <div class="control__indicator"></div>
                      Б/У
                    </label>
                  </div> <!-- price_filter -->
                  </vs-collapse-item>
                </vs-collapse>
            </div> <!-- category_sidebar_filter -->
          </div> <!-- w-26 -->

          <div class="w-74">
            <div class="mb-3 d-flex">
              <vs-select
                class="selectExample category_select"
                v-model="select1"
                >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
              </vs-select>
            </div>

            <div class="grid-container grid-template-4 grid-gap-10">

              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />

            </div> <!-- grid-container -->
            <button class="mainbtn see_more_btn mt-4 d-block ml-auto mr-auto">
              <svg width="12" height="12" viewBox="0 0 341.333 341.333"
                style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve">
                <g>
                  <g>
                    <polygon points="311.253,140.587 192,259.627 192,0 149.333,0 149.333,259.627 30.293,140.373 0,170.667 170.667,341.333 341.333,170.667" />
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
              Показать еще
            </button>

          </div> <!-- w-74 -->
        </div> <!-- row -->
      </div> <!-- container -->
    </section>
  </div>
</template>

<script>
import Header2 from '@/components/lite/desktop/Header2'
import Card4 from '@/components/lite/desktop/Card4'

export default {
  name: 'CategoryPage',
  data () {
    return {
      select1Normal: '',
      select1: 1,
      options1: [
        { text: 'Популярные', value: 1 },
        { text: 'Новинки', value: 2 },
        { text: 'Сначала дешевые', value: 3 },
        { text: 'Сначала дорогие', value: 4 },
        { text: 'Высокий рейтинг', value: 5 }
      ]
    }
  },
  components: {
    Header2,
    Card4
  }
}
</script>

<style lang="scss" scoped>
.control {
  font-weight: 500;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin: 5px 0;
}
.control__indicator {
  top: 3px!important;
}
.price_filter input {
  border: 2px solid #d6dbe0;
  border-radius: 3px;
  color: #444;
  transition: all 0.2s;
  width: 95%;
  padding: 6px 10px 6px 35px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}
.price_filter input:hover {
  border-color: rgba(250, 169, 93, 0.603);
}
.price_filter span {
  color: #b1b9c2;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  position: absolute;
  top: 50%;
  left: 10px;
  font-weight: 500;
  transform: translate(0, -50%);
}
.cateogires_links a {
  display: block;
  color: #555;
  font-weight: 500;
  padding: 5px 8px;
  transition: all 0.2s;
  font-family: "Inter", sans-serif;
  border-radius: 3px;
  width: 100%;
  font-size: 15px;
}
.cateogires_links a:hover {
  background: rgba(0, 0, 0, 0.041);
  color: #000;
}
.category_sidebar_categories .title {
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  color: #000;
  font-family: "Inter", sans-serif;
  background: rgba(255, 201, 150, 0.377);
  padding: 8px 12px;
  width: 100%;
  display: block;
}
.category_sidebar {
  border-radius: 6px;
  background: #fff;
  padding: 25px 20px;
}
.category_sidebar_filter {
  border-radius: 6px;
  background: #fff;
  padding: 15px 20px;
}
.con-select {
  width: 220px!important;
}
.w-26 {
  width: 26%;
  padding: 0 15px;
}
.w-74 {
  width: 74%;
  padding: 0 15px;
}
.category_section h2 {
  font-family: "Inter", sans-serif;
  color: #000;
}
.category_section h2 span {
  font-size: 15px;
  font-weight: 500;
  color: rgb(107, 107, 107);
}
.breadcrumb {
  background: transparent!important;
  display: flex;
  align-items: center;
}
.breadcrumb-item a {
  color: #555!important;
  transition: all 0.2s;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
}
.breadcrumb-item a:hover {
  color: #000!important;
}
.breadcrumb-item.active {
  color: #555!important;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}
.breadcrumb span {
  font-size: 12px;
  color: #777;
}
.see_more_btn {
  background: transparent!important;
  border: 2px solid var(--main-color)!important;
  color: var(--main-color);
  font-weight: 500;
  font-size: 14px;
  padding: 10px 25px;
  text-transform: uppercase;
}
.see_more_btn svg {
  margin-right: 7px;
}
.see_more_btn svg g {
  fill: var(--main-color);
}
.see_more_btn:hover {
  color: #fff;
  background: var(--main-color)!important;
}
.see_more_btn:hover svg g {
  fill: #fff;
}
</style>
