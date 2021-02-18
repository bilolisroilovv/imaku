<template>
  <div class="w-71">
    <div class="post_add_block">
      <h2 class="pb-4 mb-3">{{ $t("profile.settings") }}</h2>
      <div>

        <div id="logoPreview" class="d-flex justify-content-center">
          <img v-if="logoUrl" class="" :src="logoUrl" />
        </div>

        <div class="d-flex align-items-center myinput_group pb-4">
          <label for=""
            >Аватар</label
          >
          <input type="file" ref="files" @change="onLogoChange($event)" />
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
      location: "",
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
