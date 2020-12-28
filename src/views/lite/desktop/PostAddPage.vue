<template>
  <div>
    <Header2/>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="post_add_block mt-4">
            <h2 class="pb-4 mb-3">Подать объявление на IMAKU</h2>
            <div class="d-flex align-items-center myinput_group pb-4">
              <label for="">Категория <span>*</span></label>
              <vs-select
              class="selectExample"
              v-model="select1"
              >
              <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
            </vs-select>
            </div> <!-- d-flex -->
            <div class="d-flex align-items-center myinput_group pb-4">
              <label for="">Тип</label>
              <vs-select
              class="selectExample"
              v-model="select2"
              >
              <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />
            </vs-select>

            </div> <!-- d-flex -->
            <div class="d-flex align-items-center myinput_group pb-4">
              <label for="">Размер</label>
              <vs-select
              class="selectExample"
              v-model="select3"
              >
              <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options3" />
            </vs-select>
            </div> <!-- d-flex -->
            <div class="d-flex align-items-center myinput_group pb-4">
              <label for="">Состояние товара</label>
              <vs-select
                class="selectExample"
                v-model="select4"
                >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options4" />
              </vs-select>
            </div> <!-- d-flex -->
            <div class="d-flex align-items-center myinput_group pb-4">
              <label for="">Тип объявления <span>*</span></label>
              <vs-select
                class="selectExample"
                v-model="select5"
                >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options5" />
              </vs-select>
            </div> <!-- d-flex -->
            <div class="d-flex align-items-center myinput_group pb-4">
              <label for="">Название товара <span>*</span></label>
              <input type="text" placeholder="">
            </div> <!-- d-flex -->
            <div class="d-flex align-items-center price_input_group myinput_group pb-4">
              <label for="">Цена <span>*</span></label>
              <input type="tel" v-mask="['#', '##', '###', '####', '# ###', '## ###', '### ###', '#### ###', '# ### ###', '## ### ###', '### ### ###', '#### ### ###', '# ### ### ###', '## ### ### ###', '### ### ### ###', '#### ### ### ###', '# ### ### ### ###', '## ### ### ### ###', '### ### ### ### ###']" placeholder="" class="price_input mr-2 ">
              <vs-select
                class="selectExample"
                v-model="select6"
                >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options6" />
              </vs-select>
            </div> <!-- d-flex -->
            <div class="d-flex myinput_group pb-4">
              <label for="">Описание <span>*</span></label>
              <textarea id="" rows="7"></textarea>
            </div> <!-- d-flex -->
            <div class="d-flex myinput_group pb-4">
              <label for="">Фотографии</label>
              <div class="w-100">
                <div class="photos_block">
                  <vs-upload :single-upload="true" :text="'Добавить'" :show-upload-button="false" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload">
                  </vs-upload>
                </div> <!-- photos_block -->
                <p class="photos_p pt-2">
                  Первое фото будет отображаться в результатах поиска, выберите наиболее удачное. <br>
                  Вы можете загрузить до 12 фотографий в формате JPG или PNG. <br>
                  Максимальный размер фото — 25MB.
                </p>
              </div>
            </div> <!-- d-flex -->
            <div class="d-flex myinput_group pb-4">
              <label for="">Местоположение <span>*</span></label>
              <div class="w-100">
                <div class="map">
                  <div class="position-relative mb-3">
                    <input type="text" class="" value="Узбекистан, Ташкент">
                    <img src="@/assets/lite/search_icon.svg" class="search_icon" alt="">
                  </div> <!-- position-relative -->
                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abba8008a5450056cb02076d704d37f7a73e78cb7fb71ec31993b722f7295c93a&amp;source=constructor" width="100%" height="250" frameborder="0"></iframe>
                </div> <!-- map -->
              </div>
            </div> <!-- d-flex -->
            <div class="d-flex myinput_group pb-4">
              <label for="">Телефон <span>*</span></label>
              <div class="w-100">
                <input type="tel" v-mask="'+998 (##) ###-##-##'" placeholder="Ваш номер..." required value="+998 (90) 478-21-42">
              </div>
            </div> <!-- d-flex -->
            <div class="d-flex justify-content-end myinput_group pt-4">
              <a href="#" class="mainbtn inter_font text-bold">Опубликовать</a>
            </div> <!-- d-flex -->
          </div> <!-- post_add_block -->
        </div> <!-- col-md-8 -->
        <div class="col-md-4">
          <a href="#" class="right_block mt-4" :style="{ 'background-image': 'url(' + this.adImage + ')' }">
          </a> <!-- ad_block -->
        </div> <!-- col-md-4 -->
      </div> <!-- row -->
    </div> <!-- container -->
  </div>
</template>

<script>
import Header2 from '@/components/lite/desktop/Header2'
export default {
  name: 'PostAddPage',
  data () {
    return {
      adImage: "'https://picsum.photos/430/700?random=1'",
      select1Normal: '',
      select1: 1,
      select2: 1,
      select3: 1,
      select4: 1,
      select5: 1,
      select6: 1,
      options1: [
        { text: 'Женский гардероб', value: 1 },
        { text: 'Мужской гардероб', value: 2 },
        { text: 'Детский гардероб', value: 3 },
        { text: 'Детские товары', value: 4 },
        { text: 'Хундмейд', value: 5 },
        { text: 'Телефон и планшеты', value: 6 },
        { text: 'Фото и видеокамеры', value: 7 },
        { text: 'Компьютерная техника', value: 8 },
        { text: 'Бытовая техника', value: 9 },
        { text: 'Электроника', value: 10 },
        { text: 'Красота и здоровье', value: 11 }
      ],
      options2: [
        { text: 'Продаю свое', value: 1 },
        { text: 'Приобрел на продажу', value: 2 },
        { text: 'Магазин', value: 3 },
        { text: 'Договорная цена', value: 4 },
        { text: 'Продаю чужое', value: 5 }
      ],
      options3: [
        { text: 'Red', value: 1 },
        { text: 'Green', value: 2 },
        { text: 'Blue', value: 3 },
        { text: 'Purple', value: 4 }
      ],
      options4: [
        { text: '2 гб и менее', value: 1 },
        { text: '4', value: 2 },
        { text: '8', value: 3 },
        { text: '16', value: 4 },
        { text: '32', value: 5 },
        { text: '64', value: 6 },
        { text: '128 и более', value: 7 }
      ],
      options5: [
        { text: 'Нет', value: 1 },
        { text: 'Есть', value: 2 }
      ],
      options6: [
        { text: 'сум', value: 1 },
        { text: 'y.e.', value: 2 }
      ]
    }
  },
  methods: {
    successUpload () {
      this.$vs.notify({ color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur' })
    }
  },
  components: {
    Header2
  }
}
</script>

<style lang="scss" scoped>
.search_icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(0, -50%);
  width: 15px;
}
.map {
  padding: 15px;
  background: #F8F8FC;
  width: 100%;
  border-radius: 4px;
  border: none;
}
.map input {
  background: #FFFFFF!important;
  border-radius: 4px!important;
  width: 100%;
  font-size: 15px;
  padding: 10px 25px 10px 42px!important;
}
.photos_p {
  font-size: 12px;
  color: #8A8A8A;
  font-family: "Inter", sans-serif;
}
.photos_block {
  padding: 10px 10px 5px 10px;
  background: #F8F8FC;
  width: 100%;
  border-radius: 4px;
  border: none;
}
.post_add_block {
  background: #fff;
  padding: 45px;
  border-radius: 8px;
}
.post_add_block h2 {
  color: #000;
  font-size: 32px;
  font-weight: 900;
  font-family: "Inter", sans-serif;
}
.myinput_group label {
  letter-spacing: 0.3px;
  color: #242424;
  font-weight: 500;
  min-width: 250px;
  font-family: "Inter", sans-serif;
}
.myinput_group label span {
  font-size: 17px;
  color: #e00000;
  font-family: "Roboto", sans-serif;
  margin-left: 3px;
}
.myinput_group input {
  min-width: 65%;
  background: #F8F8FC;
  border-radius: 4px;
  border: none;
  padding: 10px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #000;
}
.myinput_group .price_input {
  min-width: 15%;
  max-width: 25%;
}
.myinput_group textarea {
  min-width: 68.7%;
  background: #F8F8FC;
  border-radius: 4px;
  border: none;
  padding: 20px;
  font-family: "Inter", sans-serif;
  color: #000;
  outline: none;
}
.right_block {
  border-radius: 8px;
  width: 100%;
  height: 700px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.price_input_group .con-select {
  width: 120px!important;
}
</style>
