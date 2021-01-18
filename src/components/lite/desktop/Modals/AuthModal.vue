<template>
  <!-- The modal -->
  <b-modal id="signModal" centered title="BootstrapVue">
    <div class="mymodal-header justify-content-center">
      <button type="button" @click="$bvModal.hide('signModal')" class="close">
        <img src="@/assets/lite/close.png" class="img-width" alt="" />
      </button>
      <h5 class="modal-title pb-4" id="exampleModalLabel">
        Вход и регистрация
      </h5>
    </div>
    <!-- mymodal-header -->
    <div  v-show="step == false" class="step1">
      <form @submit.prevent="" action="" class="sign_modal_form">
        <input
          id="modal_phone"
          v-model="userPhone"
          type="text"
          v-mask="'+998 (##) ###-##-##'"
          placeholder="Ваш номер..."
          required
        />
        <span class="mt-1">
          На этот номер будет высланно смс с кодом подтверждения
        </span>
        <div>
          <button class="mt-3 mainbtn w-100" @click="nextStep">Продолжить</button>
        </div>

        <div class="mt-3 sign_modal_terms_link">
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
        </div>
      </form>
    </div> <!-- step1 -->
    <div v-show="step" class="step2">
      <form @submit.prevent="AuthUser" class="sign_modal_form">
        <input
          id="code_phone"
          type="text"
          v-mask="'###-###'"
          placeholder="Код пароль"
          required
          v-model="verifyCode"
        />
        <span class="mt-1"
          >На ваш номер был отправлен пароль для входа</span
        >
        <div>
          <button class="mt-3 mainbtn w-100" type="submit">Продолжить</button>
        </div>

        <div class="mt-3 sign_modal_terms_link">
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
        </div>
      </form>
    </div> <!-- step2 -->

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
  </b-modal>
</template>

<script>
export default {
  name: 'AuthModal',
  data () {
    return {
      step: false,
      userPhone: '',
      verifyCode: ''
    }
  },
  methods: {
    nextStep () {
      this.step++
      /* this.codeInputShow = true */
    },
    AuthUser () {
      alert('Auth')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
