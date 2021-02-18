<template>
  <!-- The modal -->
  <b-modal id="signModal" centered title="BootstrapVue">
    <div class="loading_div">
      <div class="mymodal-header justify-content-center">
        <button type="button" @click="$bvModal.hide('signModal')" class="close">
          <img src="@/assets/lite/close.png" class="img-width" alt="" />
        </button>
        <h5 class="modal-title pb-4" id="exampleModalLabel">
          {{ $t("modal.login") }}
        </h5>
      </div>
      <!-- mymodal-header -->
      <form
        v-show="step === 1"
        @submit.prevent="nextStep"
        action=""
        class="sign_modal_form"
      >
        <div class="step1">
          <input
            id="modal_phone"
            v-model="phone"
            type="text"
            v-mask="'+998 (##) ###-##-##'"
            :placeholder="$t('modal.phone')"
            required
          />
          <span class="mt-1">
            {{ $t("modal.title") }}
          </span>
          <div>
            <button class="mt-3 mainbtn w-100" type="submit">
              {{ $t("modal.next") }}
            </button>
          </div>
        </div>
        <!-- step1 -->
        <!-- step2 -->

        <!-- <div class="mt-3 sign_modal_terms_link">
          <label class="control control--checkbox">
            <input type="checkbox" checked="checked" required />
            <div class="control__indicator"></div>
            Я согласен с
            <a href="#" class="complain_review_btn">правилами и условиями</a>
          </label>
          <label class="control control--checkbox mt-1">
            <input type="checkbox" checked="checked" required />
            <div class="control__indicator"></div>
            Я хочу получать новости и акции
          </label>
        </div> -->
      </form>

      <form
        v-show="step === 2"
        @submit.prevent="handleSubmit"
        action=""
        class="sign_modal_form"
      >
        <div class="step2">
          <input
            id="code_phone"
            type="text"
            v-mask="'######'"
            :placeholder="$t('modal.password')"
            required
            v-model="code"
          />
          <span v-if="error" class="mt-1 error_message"
            >Введен неправильной код, попробуйте заново!</span
          >
          <span class="mt-1">{{ $t("modal.title2") }}</span>
          <span v-if="!showSendCode">
            Выслать повторно код можно будет через 0:{{ currentTime }}
          </span>
          <a v-if="showSendCode" class="send_code" href="" @click.prevent="nextStep">Выслать код повторно</a>
          <div>
            <button class="mt-3 mainbtn w-100" type="submit">
              {{ $t("modal.next") }}
            </button>
          </div>
        </div>
        <!-- step2 -->

        <!-- <div class="mt-3 sign_modal_terms_link">
          <label class="control control--checkbox">
            <input type="checkbox" checked="checked" required />
            <div class="control__indicator"></div>
            Я согласен с
            <a href="#" class="complain_review_btn">правилами и условиями</a>
          </label>
          <label class="control control--checkbox mt-1">
            <input type="checkbox" checked="checked" required />
            <div class="control__indicator"></div>
            Я хочу получать новости и акции
          </label>
        </div> -->
      </form>

      <!-- <div class="mt-3 sign_modal_terms_link">
          <label class="control control--checkbox">
            <input type="checkbox" checked="checked" required />
            <div class="control__indicator"></div>
            Я согласен с
            <a href="#" class="complain_review_btn">правилами и условиями</a>
          </label>
          <label class="control control--checkbox mt-1">
            <input type="checkbox" checked="checked" required />
            <div class="control__indicator"></div>
            Я хочу получать новости и акции
          </label>
        </div> -->

      <!-- <div class="product_sidebar_socials mt-4">
          <span>Войти с помощью :</span>
          <div class="d-flex pt-1">
            <a href="#" target="_blank">
              <img src="@/assets/lite/instagram.png" class="img-width" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="@/assets/lite/twitter.png" class="img-width" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="@/assets/lite/vk.png" class="img-width" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="@/assets/lite/facebook.png" class="img-width" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="@/assets/lite/tik-tok.png" class="img-width" alt="" />
            </a>
          </div>
        </div> -->
    </div>
    <!-- loading_div -->
  </b-modal>
</template>

<script>
import axios from "axios";

export default {
  name: "AuthModal",
  data() {
    return {
      step: 1,
      phone: "",
      code: "",
      error: false,
      currentTime: 59,
      timer: null,
      showSendCode: false,
      colorLoading: "var(--main-color)"
    }
  },
  mounted() {
  },
  destroyed() {
    this.stopTimer()
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer()
        this.showSendCode = true
      }
    }
  },
  methods: {
    startTimer() {
      this.showSendCode = false
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    },
    async nextStep() {
      this.$vs.loading({
        container: "",
        scale: 0.6,
        color: this.colorLoading
      });

      const response = await axios
        .post("authorize", {
          phone: this.phone
        })
        .finally(() => this.$vs.loading.close(".con-vs-loading"));

      if (response.status === 200) {
        this.step = 2
        this.currentTime = 59
        this.startTimer()
      }
    },
    async handleSubmit() {
      this.error = false
      this.$vs.loading({
        container: "",
        scale: 0.6,
        color: this.colorLoading
      });
      try {
        const response = await axios
        .post("verify", {
          phone: this.phone,
          code: this.code
        })
        .finally(() => this.$vs.loading.close(".con-vs-loading"));
      localStorage.setItem("token", response.data.token);
      this.$router.go(this.$router.currentRoute);
      this.$router.push("/");
      } catch (error) {
        this.error = true
      }
      /* if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        console.log(response.data.token)
      } else {
        console.log(response.status)
      } */
    }
  }
};
</script>

<style lang="scss" scoped>
.loading_div {
  max-height: 100%;
}
.error_message {
  color: red !important;
}
.send_code {
  color: var(--main-color);
  font-family: "Inter";
  font-size: 15px;
}
</style>
