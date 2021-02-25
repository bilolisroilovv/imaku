<template>
  <!-- The modal -->
  <b-modal id="selectLangModal" @shown="setLang" centered title="BootstrapVue">
    <div class="loading_div">
      <div class="mymodal-header justify-content-center">
        <button type="button" @click="$bvModal.hide('selectLangModal')" class="close">
          <img src="@/assets/lite/close.png" class="img-width" alt="" />
        </button>
      </div>
      <h5 class="modal-title pb-0 pr-4" id="exampleModalLabel">
        {{ $t("langModal.title") }}
      </h5>
      <div class="mt-4">
        <div class="d-flex align-items-center">
          <vs-radio @change="setLocale('ru')" :color="colorLoading" class="mr-3" v-model="lang" vs-value="ru">Русский</vs-radio>
          <vs-radio @change="setLocale('uz')" :color="colorLoading" v-model="lang" vs-value="uz">O'zbekcha</vs-radio>
        </div> <!-- d-flex -->
        <p class="mb-0 pt-2 mytext">{{ $t("langModal.text") }}</p>
      </div>
      <div class="d-flex justify-content-end">
        <button class="mainbtn mt-4 save_btn" @click="$bvModal.hide('selectLangModal')">{{ $t("langModal.button") }}</button>
      </div> <!-- d-flex -->
    </div>
    <!-- loading_div -->
  </b-modal>
</template>

<script>
export default {
  name: "SelectLangModal",
  data() {
    return {
      colorLoading: "var(--main-color)",
      lang: "ru"
    }
  },
  props: {
  },
  methods: {
    setLang() {
      localStorage.lang = "ru";
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
      localStorage.lang = locale;
      this.$store.dispatch("fetchCategories");
    }
  }
};
</script>

<style lang="scss" scoped>
.mytext {
  color: grey;
  font-size: 13px;
  font-family: "Inter";
}
.save_btn {
  padding: 4px 15px;
}
.cancelBtn {
  font-size: 16px;
  padding: 8px 15px;
  font-family: "Inter";
  color: var(--main-color);
  font-weight: 500;
  background: transparent!important;
  border: none!important;
}
.cancelBtn:hover {
  background: rgb(117, 114, 114);
}
.removeBtn {
  padding: 5px 20px!important;
}
.removeBtn:hover {
}
.modal-title {
  font-size: 18px;
}
.loading_div {
  max-height: 100%;
}
.error_message {
  color: red !important;
}
</style>
