<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="post_add_block mt-4">
            <h2 class="pb-4 mb-3">{{ $t("shop_create.title") }}</h2>
            <div>
              <div id="logoPreview" class="d-flex justify-content-center position-relative">
                <img v-if="logoUrl" class="" :src="logoUrl" />
                <label for="avatar_img" class="avatar_label">
                </label>
                <div class="icon pointer-none">
                  <div class="camera pointer-none"></div> <!-- camera -->
                </div> <!-- icon -->
              </div>
              <div class="d-flex align-items-center myinput_group pb-4">
                <label for=""
                  >{{ $t("shop_create.name") }} <span>*</span></label
                >
                <input type="text" placeholder="" v-model="name" />
              </div>
              <!-- d-flex -->

              <div class="d-flex myinput_group pb-4">
                <label for=""
                  >{{ $t("post_create.desc") }} <span>*</span></label
                >
                <textarea id="" rows="7" v-model="description"></textarea>
              </div>
              <!-- d-flex -->
              <div class="d-none myinput_group pb-4">
                <label for="">{{ $t("shop_create.logo") }}</label>
                <div class="w-100">
                  <div class="photos_block">
                    <!-- <vs-upload :text="'Добавить'" id="files" ref="files" @change="handleFilesUpload($event)" :show-upload-button="false" @on-success="successUpload">
                    </vs-upload> -->
                    <!-- <input
                      type="file"
                      id="files2"
                      ref="files2"
                      @change="handleFilesUpload2($event)"
                    /> -->
                     <input type="file" id="avatar_img" ref="files" @change="onLogoChange($event)" />
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
                  <p class="photos_p pt-2">Лого для вашего магазина</p>
                  <div v-if="logoUrl" id="logoPreview" class="d-flex justify-content-center">
                    <img class="" :src="logoUrl" />
                  </div>
                </div>
              </div>
              <!-- d-flex -->
              <div class="d-flex myinput_group pb-4">
                <label for="">{{ $t("shop_create.banner") }}</label>
                <div class="w-100">
                  <div class="photos_block">
                    <!-- <vs-upload :text="'Добавить'" id="files" ref="files" @change="handleFilesUpload($event)" :show-upload-button="false" @on-success="successUpload">
                    </vs-upload> -->
                    <!-- <input
                      type="file"
                      id="files"
                      ref="files"
                      @change="handleFilesUpload($event)"
                    /> -->
                    <input type="file" ref="files" @change="onBannerChange($event)" />
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
                    {{ $t("shop_create.photo_banner") }}
                  </p>

                  <div v-if="bannerUrl" id="bannerPreview" class="d-flex justify-content-center">
                    <img class="" :src="bannerUrl" />
                  </div>
                </div>
              </div>
              <!-- d-flex -->

              <div class="d-flex myinput_group pb-4">
                <label for=""
                  >{{ $t("post_create.address") }} <span>*</span></label
                >
                <textarea id="" rows="7" v-model="location"></textarea>
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
                  >{{ $t("shop_create.create_btn") }}</a
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
import notFound from "@/assets/lite/not-found.png"
export default {
  name: "ShopCreatePage",
  data() {
    return {
      logoUrl: notFound,
      logoFile: null,
      bannerUrl: null,
      bannerFile: null,
      name: "",
      description: "",
      location: "",
      phone: Number,
      files: null,
      files2: null,
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
    handleFilesUpload2(event) {
      this.files2 = event.target.files;
    },
    async handleSubmit() {
      this.$vs.loading({
        container: ".post_add_block",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("name", this.name);
      form.append("description", this.description);
      form.append("location", this.location);
      form.append("phone", this.phone);

      if (this.logoFile) {
        form.append("avatar", this.logoFile);
      }
      if (this.bannerFile) {
        form.append("banner", this.bannerFile);
      }

      /* for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i];
        console.log(file);
        form.append("banner", file);
      }

      for (let i = 0; i < this.files2.length; i++) {
        const file = this.files2[i];
        console.log(file);
        form.append("avatar", file);
      } */

      await axios
        .post("shops/store", form, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .finally(() =>
          this.$vs.loading.close(".post_add_block > .con-vs-loading")
        );
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Объявлено успешно размещена"
      });
      /* this.$router.push("/"); */
      this.$router.push({ name: 'ProfileShops' })
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  async mounted() {
    this.checkLogin();
    this.phone = this.currentUser.phone;
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.avatar_label {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  border-radius: 50%;
}
#logoPreview {
  width: 170px;
  height: 170px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 30px;
  margin-left: 15.5rem;
  border: 2px solid rgba(0, 0, 0, 0.15);
  img {
    object-fit: cover;
    width: 100%;
    object-position: center;
  }
}
#logoPreview .icon {
  content: '';
  display: block;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: rgba(0,0,0,.5);
  position: absolute;
  bottom: 5px;
  transition: all .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
#logoPreview .icon .camera {
  transition: all .5s;
  width: 23px;
  height: 23px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg%20height=%2746%27%20viewBox=%270%200%2052%2046%27%20width=%2752%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27m0%2014.625c0-2.6923975%202.18261225-4.875%204.875-4.875h4.4914025c1.2310025%200%202.3563475-.6955%202.906865-1.7965675l2.629315-5.2585975c.8257925-1.651585%202.51381-2.694835%204.36033-2.694835h13.4740125c1.84665%200%203.5347%201.04325%204.360525%202.694835l2.62925%205.2585975c.55055%201.1010675%201.676025%201.7965675%202.9068%201.7965675h4.4915c2.6923%200%204.875%202.1826025%204.875%204.875v26c0%202.6923-2.1827%204.875-4.875%204.875h-42.25c-2.69238775%200-4.875-2.1827-4.875-4.875zm26%2024.375c7.179575%200%2013-5.820425%2013-13%200-7.179705-5.820425-13-13-13-7.179705%200-13%205.820295-13%2013%200%207.179575%205.820295%2013%2013%2013zm7.475-13c0%204.128475-3.346655%207.475-7.475%207.475s-7.475-3.346525-7.475-7.475c0-4.128345%203.346655-7.475%207.475-7.475s7.475%203.346655%207.475%207.475z%27%20fill=%27%23fff%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E");
}
#logoPreview:hover .icon {
  width: 100%;
  height: 100%;
  bottom: 0;
}
#logoPreview:hover .icon .camera {
  width: 35px;
  height: 35px;
}
#bannerPreview {
  width: 100%;
  height: 200px;
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
  background: #efeff8;
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
