<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="post_add_block mt-4">
            <h2 class="pb-4 mb-3">Редактировать магазин</h2>
            <div>
              <div class="d-flex align-items-center myinput_group pb-4">
                <label for=""
                  >Название магазина<span>*</span></label
                >
                <input type="text" placeholder="" required v-model="name" />
              </div>
              <!-- d-flex -->

              <div class="d-flex align-items-center myinput_group pb-4">
                <label for=""
                  >Лого магазина</label
                >
                <input type="file" ref="files" @change="onLogoChange($event)" />
              </div>
              <div id="logoPreview" class="d-flex justify-content-center">
                <img v-if="logoUrl" class="" :src="logoUrl" />
              </div>

              <div class="d-flex align-items-center myinput_group pb-4">
                <label for=""
                  >Баннер магазина</label
                >
                <input type="file" ref="files" @change="onBannerChange($event)" />
              </div>
              <div id="bannerPreview" class="d-flex justify-content-center">
                <img v-if="bannerUrl" class="" :src="bannerUrl" />
              </div>

              <div class="d-flex myinput_group pb-4">
                <label for=""
                  >{{ $t("post_create.desc") }} <span>*</span></label
                >
                <textarea id="" rows="7" v-model="description"></textarea>
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
                  >Сохранить</a
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
  name: "ShopEdit",
  props: {
    id: {}
  },
  data() {
    return {
      name: "",
      logoUrl: null,
      logoFile: null,
      bannerUrl: null,
      bannerFile: null,
      description: "",
      location: "",
      phone: Number,
      files: [],
      selectValue: 1,
      value: [],
      priceType: [
        { text: "сум", value: 1 },
        { text: "y.e.", value: 2 }
      ],
      selectedItems: [],
      colorLoading: "var(--main-color)"
    };
  },
  methods: {
    onLogoChange(event) {
      const file = event.target.files[0];
      this.logoUrl = URL.createObjectURL(file);
      this.logoFile = file;
      console.log(this.logoFile);
    },
    onBannerChange(event) {
      const file = event.target.files[0];
      this.bannerUrl = URL.createObjectURL(file);
      this.bannerFile = file;
      console.log(this.logoFile);
    },
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
    handleFilesUpload(event) {
      this.files = event.target.files;
    },
    async handleSubmit() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("name", this.name);
      form.append("description", this.description);
      form.append("phone", this.phone);
      form.append("location", this.location);
      if (this.logoFile) {
        form.append("avatar", this.logoFile);
      }
      if (this.bannerFile) {
        form.append("banner", this.bannerFile);
      }

      /* for (var screens = 0; screens < this.files.length; screens++) {
        form.append("gallery[" + screens + "]", this.files[screens].file);
      } */

      await axios
        .post("shops/update/" + this.id, form, {
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
      this.$router.push({ name: 'ProfileShops' })
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
    .get("shops/update/" + this.id)
    .finally(() =>
      this.$vs.loading.close(".post_add_block > .con-vs-loading")
    );
    console.log(response.data);
    this.name = response.data.name;
    this.phone = response.data.phone;
    this.description = response.data.description;
    this.location = response.data.location;
    this.price = response.data.price;
    this.logoUrl = response.data.avatar;
    this.bannerUrl = response.data.banner;
  }
};
</script>

<style lang="scss" scoped>
#logoPreview {
  margin-left: 252px;
  width: 170px;
  height: 170px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 30px;
  border: 3px solid #b8b8b8;
  img {
    object-fit: cover;
    width: 100%;
    object-position: center;
  }
}
#bannerPreview {
  width: 495px;
  height: 200px;
  margin-left: 252px;
  margin-bottom: 30px;
  border: 3px solid #b8b8b8;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    object-position: center;
  }
}
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
