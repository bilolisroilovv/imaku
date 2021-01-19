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
      <form @submit.prevent="handleSubmit" action="" class="sign_modal_form">
        <div v-show="step === 1" class="step1">
          <input
            id="modal_phone"
            v-model="phone"
            type="text"
            v-mask="'+998 (##) ###-##-##'"
            placeholder="Ваш номер..."
            required
          />
          <span class="mt-1">
            На этот номер будет высланно смс с кодом подтверждения
          </span>
          <div>
            <button class="mt-3 mainbtn w-100" @click.prevent="nextStep">Продолжить</button>
          </div>
        </div> <!-- step1 -->

        <div v-show="step === 2" class="step2">
          <input
            id="code_phone"
            type="text"
            v-mask="'######'"
            placeholder="Код пароль"
            required
            v-model="code"
          />
          <span class="mt-1"
            >На ваш номер был отправлен пароль для входа</span
          >
          <div>
            <button class="mt-3 mainbtn w-100" type="submit">Продолжить</button>
          </div>
        </div> <!-- step2 -->

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
  </b-modal>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AuthModal',
  data () {
    return {
      step: 1,
      phone: '',
      code: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  methods: {
    async nextStep () {
      var formData = new FormData()

      formData.append('phone', this.phone)
      await axios.post('authorize', formData).then(res => {
        console.log(res.data)
        if (res.status === 200) {
          this.step++
        }
        /* localStorage.setItem('token', res.data.token) */
      }).catch(function (err) {
        console.log(err)
      })
      // console.log(response)
      /* this.codeInputShow = true */
    },
    async handleSubmit () {
      var formData = new FormData()

      formData.append('phone', this.phone)
      formData.append('code', this.code)
      await axios.post('verify', formData).then(res => {
        console.log('Success')
        localStorage.setItem('token', res.data.token)
      }).catch(function (err) {
        console.log(err)
      })
      /* this.$router.go(this.$router.currentRoute) */
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
