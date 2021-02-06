<template>
  <div>
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
                placeholder="Выберите"
                @change="handleSelectCategory"
              >
                <vs-select-item
                  :key="index"
                  :value="item.id"
                  :text="item.title"
                  v-for="(item, index) in this.mainCategories"
                />
              </vs-select>
            </div>
            <!-- d-flex -->

            <div
              class="d-flex align-items-center myinput_group pb-4"
            >
              <label for="">Подкатегории <span>*</span></label>
              <vs-select
                class="selectExample"
                v-model="select2"
                placeholder="Выберите"
                @change="handleSelectSubcategory"
              >
                <vs-select-item
                  :key="index"
                  :value="item.id"
                  :text="item.title"
                  v-for="(item, index) in this.mainSubcategories"
                />
              </vs-select>
            </div>
            <!-- d-flex -->
            <div>
              <div
                class="d-flex align-items-center myinput_group pb-4"
                v-for="(character, index) in this.characters"
                :key="character.id"
              >
                <label for="">{{ character.title }}</label>
                <vs-select
                  class="selectExample"
                  placeholder="Выберите"
                  v-model="userCharacters[index].option_id"
                >
                  <vs-select-item
                    :key="item.id"
                    :value="item.id"
                    :text="item.value"
                    v-for="item in character.options"
                  />
                </vs-select>
              </div>
              <!-- d-flex -->

              <div class="d-flex align-items-center myinput_group pb-4">
                <label for="">Название товара <span>*</span></label>
                <input type="text" placeholder="" v-model="name" />
              </div>
              <!-- d-flex -->
              <div
                class="d-flex align-items-center price_input_group myinput_group pb-4"
              >
                <label for="">Цена <span>*</span></label>
                <input
                  type="tel"
                  v-model="price"
                  v-mask="[
                    '#',
                    '##',
                    '###',
                    '####',
                    '# ###',
                    '## ###',
                    '### ###',
                    '#### ###',
                    '# ### ###',
                    '## ### ###',
                    '### ### ###',
                    '#### ### ###',
                    '# ### ### ###',
                    '## ### ### ###',
                    '### ### ### ###',
                    '#### ### ### ###',
                    '# ### ### ### ###',
                    '## ### ### ### ###',
                    '### ### ### ### ###',
                  ]"
                  placeholder=""
                  class="price_input mr-2"
                />
                <vs-select class="selectExample" v-model="priceTypeSelect">
                  <vs-select-item
                    :key="index"
                    :value="item.text"
                    :text="item.text"
                    v-for="(item, index) in priceType"
                  />
                </vs-select>
              </div>
              <!-- d-flex -->
              <div class="d-flex myinput_group pb-4">
                <label for="">Описание <span>*</span></label>
                <textarea id="" rows="7" v-model="description"></textarea>
              </div>
              <!-- d-flex -->
              <div class="d-flex myinput_group pb-4">
                <label for="">Хештеги</label>
                <multiselect v-model="value" tag-placeholder="Добавьте здесь хештег" placeholder="Поиск или добавить хештег" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
              </div>
              <!-- d-flex -->
              <div class="d-flex myinput_group pb-4">
                <label for="">Фотографии</label>
                <div class="w-100">
                  <div class="photos_block">
                    <!-- <vs-upload :text="'Добавить'" id="files" ref="files" @change="handleFilesUpload($event)" :show-upload-button="false" @on-success="successUpload">
                    </vs-upload> -->
                    <input
                      type="file"
                      id="files"
                      ref="files"
                      multiple
                      @change="handleFilesUpload($event)"
                    />
                    <!-- <VueFileAgent
                      ref="files"
                      @change="handleFilesUpload($event)"
                      :theme="'default'"
                      :multiple="true"
                      :deletable="true"
                      :meta="true"
                      :maxSize="'10MB'"
                      :maxFiles="14"
                      :helpText="'Choose images or zip files'"
                      :errorText="{
                        type: 'Invalid file type. Only images or zip Allowed',
                        size: 'Files should not exceed 10MB in size',
                      }"
                    ></VueFileAgent> -->
                  </div>
                  <!-- photos_block -->
                  <p class="photos_p pt-2">
                    Первое фото будет отображаться в результатах поиска,
                    выберите наиболее удачное. <br />
                    Вы можете загрузить до 12 фотографий в формате JPG или PNG.
                    <br />
                    Максимальный размер фото — 25MB.
                  </p>
                </div>
              </div>
              <!-- d-flex -->
              <div class="d-flex myinput_group pb-4">
                <label for="">Местоположение <span>*</span></label>
                <div class="w-100">
                  <div class="map">
                    <div class="position-relative mb-3">
                      <input type="text" class="" value="Узбекистан, Ташкент" />
                      <img
                        src="@/assets/lite/search_icon.svg"
                        class="search_icon"
                        alt=""
                      />
                    </div>
                    <!-- position-relative -->
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3Abba8008a5450056cb02076d704d37f7a73e78cb7fb71ec31993b722f7295c93a&amp;source=constructor"
                      width="100%"
                      height="250"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <!-- map -->
                </div>
              </div>
              <!-- d-flex -->
              <div class="d-flex myinput_group pb-4">
                <label for="">Телефон <span>*</span></label>
                <div class="w-100">
                  <input
                    type="tel"
                    v-mask="'+998 (##) ###-##-##'"
                    v-model="phone"
                    :placeholder="$t('modal.login')"
                    required
                    value="+998 (90) 478-21-42"
                  />
                </div>
              </div>
              <!-- d-flex -->
              <div class="d-flex justify-content-end myinput_group pt-4">
                <a
                  href="#"
                  @click.prevent="handleSubmit()"
                  class="mainbtn inter_font text-bold"
                  >Опубликовать</a
                >
              </div>
              <!-- d-flex -->
            </div>
            <!-- v-if="isCharactersShow" -->
          </div>
          <!-- post_add_block -->
        </div>
        <!-- col-md-8 -->
        <div class="col-md-4">
          <a
            href="#"
            class="right_block mt-4"
            :style="{
              'background-image':
                'url(' + require('@/assets/lite/post-add-banner.jpg') + ')',
            }"
          >
          </a>
          <!-- ad_block -->
        </div>
        <!-- col-md-4 -->
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Multiselect from 'vue-multiselect'

export default {
  name: "PostEditPage",
  data() {
    return {
      name: "",
      price: Number,
      description: "",
      isSubcategoryShow: false,
      isCharactersShow: false,
      priceTypeSelect: "сум",
      phone: Number,
      files: null,
      characters: [],
      characteristics: [],
      select1Normal: "",
      select1: "Выберите",
      select2: "Выберите",
      userCharacters: [],
      selectValue: 1,
      mainCategories: [],
      mainSubcategories: [],
      value: [
      ],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ],
      priceType: [
        { text: "сум", value: 1 },
        { text: "y.e.", value: 2 },
      ],
      selectedItems: [],
      colorLoading: "var(--main-color)"
    };
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Загрузка успешно выполнена",
        text: "Загрузка успешно выполнена",
      });
    },
    checkLogin() {
      if (!this.currentUser) {
        this.$router.push("/");
      }
    },
    async handleSelectCategory() {
      this.$vs.loading({
        container: ".post_add_block",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios.get(
        "categories/subcategories/" + this.select1
      ).finally(() =>
        this.$vs.loading.close(".post_add_block > .con-vs-loading")
      );
      this.mainSubcategories = response.data;
      this.isSubcategoryShow = true;
      this.isCharactersShow = false;
    },
    async handleSelectSubcategory() {
      this.$vs.loading({
        container: ".post_add_block",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
      .get("characters/" + this.select2)
      .finally(() =>
        this.$vs.loading.close(".post_add_block > .con-vs-loading")
      );
      const userKharacters = response.data.map((char) => {
        return {
          characterId: char.id,
          option_id: null,
        };
      });

      this.isCharactersShow = true;
      this.characters = response.data;
      this.userCharacters = userKharacters;
    },
    handleFilesUpload(event) {
      this.files = event.target.files;
    },
    async handleSubmit() {
      this.$vs.loading({
        container: ".post_add_block",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("cat_id", this.select1);
      form.append("subcategory_id", this.select2);
      form.append("name", this.name);
      form.append("price", this.price);
      form.append("price_type", this.priceTypeSelect);
      form.append("description", this.description);
      form.append("phone", this.phone);
      form.append("description", this.description);
      /* form.append('gallery', this.files) */
      for (var i = 0; i < this.userCharacters.length; i++) {
        form.append(
          "characters[" + i + "][character_id]",
          this.userCharacters[i].characterId
        );
        form.append(
          "characters[" + i + "][option_id]",
          this.userCharacters[i].option_id
        );
      }
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i];
        console.log(file);
        form.append("gallery[" + i + "]", file);
      }

      await axios.post("posts/store", form, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).finally(() =>
        this.$vs.loading.close(".post_add_block > .con-vs-loading")
      );
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Объявлено успешно размещена",
      });
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  async mounted() {
    this.$vs.loading({
      container: ".post_add_block",
      scale: 0.8,
      color: this.colorLoading
    });
    this.checkLogin();
    const response = await axios
    .get("posts/create")
    .finally(() =>
      this.$vs.loading.close(".post_add_block > .con-vs-loading")
    );
    this.mainCategories = response.data.categories;
    this.phone = response.data.phone;
  },
  components: {
    Multiselect 
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

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
  background: #f8f8fc;
  width: 100%;
  border-radius: 4px;
  border: none;
}
.map input {
  background: #ffffff !important;
  border-radius: 4px !important;
  width: 100%;
  font-size: 15px;
  padding: 10px 25px 10px 42px !important;
}
.photos_p {
  font-size: 12px;
  color: #8a8a8a;
  font-family: "Inter", sans-serif;
}
.photos_block {
  padding: 10px 10px 5px 10px;
  background: #f8f8fc;
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
  background: #f8f8fc;
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
  background: #f8f8fc;
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
  height: 500px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.price_input_group .con-select {
  width: 120px !important;
}
</style>
