<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="post_add_block mt-4">
            <h2 class="pb-4 mb-3">{{ $t("post_create.title") }}</h2>
            <div class="d-flex align-items-center myinput_group pb-4">
              <label for=""
                >{{ $t("post_create.category") }} <span>*</span></label
              >
              <vs-select
                class="selectExample"
                v-model="select1"
                :placeholder="$t('post_create.select')"
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
              v-if="isSubcategoryShow"
            >
              <label for=""
                >{{ $t("post_create.subcategoory") }} <span>*</span></label
              >
              <vs-select
                class="selectExample"
                v-model="select2"
                :placeholder="$t('post_create.select')"
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
            <div v-if="isCharactersShow">
              <div
                class="d-flex align-items-center myinput_group pb-4"
                v-for="(character, index) in this.characters"
                :key="character.id"
              >
                <label for="">{{ character.title }}</label>
                <vs-select
                  class="selectExample"
                  :placeholder="$t('post_create.select')"
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
                <label for=""
                  >{{ $t("post_create.product_name") }} <span>*</span></label
                >
                <input type="text" placeholder="" required v-model="name" />
              </div>
              <!-- d-flex -->
              <div
                class="d-flex align-items-center price_input_group myinput_group pb-4"
              >
                <label for=""
                  >{{ $t("post_create.price") }} <span>*</span></label
                >
                <input
                  type="tel"
                  v-model="price"
                  required
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
                    '### ### ### ### ###'
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
                <label for=""
                  >{{ $t("post_create.desc") }} <span>*</span></label
                >
                <textarea id="" rows="7" v-model="description"></textarea>
              </div>
              <!-- d-flex -->
              <div class="d-flex myinput_group pb-4">
                <label for="">{{ $t("post_create.photo") }}</label>
                <div class="w-100">
                  <div class="photos_block">
                    <!-- <vs-upload :text="'Добавить'" id="files" ref="files" @change="handleFilesUpload($event)" :show-upload-button="false" @on-success="successUpload">
                    </vs-upload> -->
                    <!-- <input
                      type="file"
                      id="files"
                      ref="files"
                      multiple
                      @change="handleFilesUpload($event)"
                    /> -->
                    <VueFileAgent
                      ref="vueFileAgent"
                      :theme="'default'"
                      :accept="'image/*,video/*'"
                      :multiple="true"
                      :deletable="true"
                      :meta="true"
                      :sortable="'handle'"
                      :maxSize="'25MB'"
                      :maxFiles="12"
                      :helpText="'Добавьте фотографии'"
                      required
                      :errorText="{
                        type: 'Invalid file type. Only images or zip Allowed',
                        size: 'Files should not exceed 10MB in size'
                      }"
                      v-model="fileRecords"
                      @select="filesSelected($event)"
                      @beforedelete="onBeforeDelete($event)"
                      @delete="fileDeleted($event)"
                    ></VueFileAgent>
                  </div>
                  <!-- photos_block -->
                  <p class="photos_p pt-2">
                    {{ $t("post_create.photo_required") }}
                    <br />
                    {{ $t("post_create.photo_mb") }} — 25{{
                      $t("post_create.mb")
                    }}.
                  </p>
                </div>
              </div>
              <!-- d-flex -->
              <!-- <div class="d-flex myinput_group pb-4">
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
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3Abba8008a5450056cb02076d704d37f7a73e78cb7fb71ec31993b722f7295c93a&amp;source=constructor"
                      width="100%"
                      height="250"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div> -->
              <div class="d-flex myinput_group pb-4">
                <label for=""
                  >{{ $t("post_create.address") }} <span>*</span></label
                >
                <textarea required id="" rows="7" v-model="location"></textarea>
              </div>
              <!-- d-flex -->
              <div class="d-flex myinput_group pb-4">
                <label for=""
                  >{{ $t("post_create.phone") }} <span>*</span></label
                >
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
                  >{{ $t("post_create.post") }}</a
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
                'url(' + require('@/assets/lite/post-add-banner.jpg') + ')'
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

export default {
  name: "PostCreatePage",
  props: {
    id: []
  },
  data() {
    return {
      name: "",
      price: Number,
      description: "",
      location: "",
      isSubcategoryShow: false,
      isCharactersShow: false,
      priceTypeSelect: "сум",
      phone: Number,
      fileRecords: [],
      fileRecordsForUpload: [],
      characters: [],
      characteristics: [],
      select1Normal: "",
      select1: "Выберите",
      select2: "Выберите",
      userCharacters: [],
      selectValue: 1,
      mainCategories: [],
      mainSubcategories: [],
      value: [],
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" }
      ],
      priceType: [
        { text: "сум", value: 1 },
        { text: "y.e.", value: 2 }
      ],
      selectedItems: [],
      colorLoading: "var(--main-color)"
    };
  },
  methods: {
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Загрузка успешно выполнена",
        text: "Загрузка успешно выполнена"
      });
    },
    checkLogin() {
      if (!this.currentUser) {
        this.$router.push("/");
      }
    },
    async handleSelectCategory() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
        .get("categories/subcategories/" + this.select1)
        .finally(() => this.$vs.loading.close(".con-vs-loading"));
      this.mainSubcategories = response.data;
      this.isSubcategoryShow = true;
      this.isCharactersShow = false;
    },
    async handleSelectSubcategory() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
        .get("characters/" + this.select2)
        .finally(() => this.$vs.loading.close(".con-vs-loading"));
      const userKharacters = response.data.map(char => {
        return {
          characterId: char.id,
          option_id: null
        };
      });

      this.isCharactersShow = true;
      this.characters = response.data;
      this.userCharacters = userKharacters;
    },
    deleteUploadedFile: function (fileRecord) {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.deleteUpload(fileRecord);
    },
    filesSelected: function (fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
    },
    onBeforeDelete: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
      // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      } else {
        if (confirm('Are you sure you want to delete?')) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        }
      }
    },
    fileDeleted: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },
    handleFilesUpload(event) {
      this.fileRecordsForUpload = event.target.fileRecordsForUpload;
    },
    async handleSubmit() {
      this.$vs.loading({
        container: "",
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
      form.append("location", this.location);
      if (this.id) {
        form.append("shop_id", this.id);
      }
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
      for (var screens = 0; screens < this.fileRecords.length; screens++) {
        form.append("gallery[" + screens + "]", this.fileRecords[screens].file);
      }
      await axios
        .post("posts/store", form, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .finally(() => this.$vs.loading.close(".con-vs-loading"));
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Объявлено успешно размещено"
      });
      if (this.id) {
        this.$router.push({ name: 'ShopPage', params: {id: this.id} })
      } else {
        this.$router.push({ name: 'ProfilePosts' })
      }
      /* this.$router.push({ name: 'ProfilePosts' }) */
      
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
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
  }
};
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
  min-width: 69%;
  background: #efeff8;
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
  background: #efeff8;
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
