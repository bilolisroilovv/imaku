<template>
  <div class="w-71">
    <div class="post_add_block">
      <h2 class="pb-4 mb-3">{{ $t("profile.settings") }}</h2>
      <div>

        <div id="logoPreview" class="d-flex justify-content-center position-relative">
          <img v-if="logoUrl" class="" :src="logoUrl" />
          <label for="avatar_img" class="avatar_label">
          </label>
          <div class="icon pointer-none">
            <div class="camera pointer-none"></div> <!-- camera -->
          </div> <!-- icon -->
        </div>

        <div class="d-none align-items-center myinput_group pb-4">
          <label for=""
            >Аватар</label
          >
          <input type="file" ref="files" id="avatar_img" @change="onLogoChange($event)" />
        </div>

        <div class="d-flex align-items-center myinput_group pb-4">
          <label for=""
            >{{ $t("profile_settings.fullname") }} <span>*</span></label
          >
          <input type="text" placeholder="" v-model="name" />
        </div>
        <!-- d-flex -->
        <div class="d-flex gender_group align-items-center myinput_group pb-4">
          <span for="">Пол</span
          >
          <vs-radio :color="colorLoading" class="mr-3" v-model="gender" vs-value="1">Мужчина</vs-radio>
          <vs-radio :color="colorLoading" v-model="gender" vs-value="0">Женщина</vs-radio>
        </div>
        <div class="d-flex align-items-center myinput_group pb-4">
          <label for="">{{ $t("profile_settings.nickname") }}</label>
          <input type="text" placeholder="" v-model="username" />
        </div>
        <!-- d-flex -->

        <div class="d-flex myinput_group pb-4">
          <label for="">{{ $t("profile_settings.desc") }}</label>
          <textarea id="" rows="7" v-model="description"></textarea>
        </div>
        <div class="d-flex myinput_group pb-4">
          <label for="">Местоположение</label>
          <textarea id="" rows="7" v-model="location"></textarea>
        </div>
        <div class="d-flex myinput_group pb-4">
          <label for=""
            >{{ $t("profile_settings.phone") }} <span>*</span></label
          >
          <div class="w-100">
            <input
              disabled
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
            >{{ $t("profile_settings.save") }}</a
          >
        </div>
        <!-- d-flex -->
      </div>
      <!-- v-if="isCharactersShow" -->
    </div>
    <!-- post_add_block -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios'

export default {
  name: "ProfileSettings",
  data() {
    return {
      logoUrl: null,
      gender: Boolean,
      logoFile: null,
      name: "",
      username: "",
      description: "",
      location: null,
      phone: Number,
      colorLoading: "var(--main-color)"
    };
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    onLogoChange(event) {
      const file = event.target.files[0];
      this.logoUrl = URL.createObjectURL(file);
      this.logoFile = file;
    },
    async handleSubmit() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("name", this.name);
      form.append("user_name", this.username);
      form.append("description", this.description);
      form.append("location", this.location);
      form.append("gender", this.gender);
      if (this.logoFile) {
        form.append("avatar", this.logoFile);
      }

      /* for (var screens = 0; screens < this.files.length; screens++) {
        form.append("gallery[" + screens + "]", this.files[screens].file);
      } */

      await axios
        .post("profile/update" , form, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .finally(() => this.$vs.loading.close(".con-vs-loading"));
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Настройки успешно изменены"
      });
      this.$router.push({ name: 'ProfileSettings' })
      location.reload()
    }
  },
  mounted() {
    this.name = this.currentUser.name
    this.phone = this.currentUser.phone
    this.username = this.currentUser.user_name
    this.gender = this.currentUser.gender
    this.logoUrl = this.currentUser.avatar
    this.location = this.currentUser.location
    this.description = this.currentUser.description
  }
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
.gender_group span {
  letter-spacing: 0.3px;
  color: #242424;
  font-weight: 500;
  min-width: 250px;
  font-family: "Inter", sans-serif;
}
.gender_group input {
  min-width: auto!important;
}
.gender_group label {
  min-width: auto!important;
}
#logoPreview {
  width: 170px;
  height: 170px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 30px;
  border: 2px solid rgba(0,0,0,.15);
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
.w-71 {
  width: 71%;
  padding: 0 15px;
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
</style>
