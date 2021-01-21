import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  ru: {
    message: {
      city: 'Ташкент'
    }
  },
  uz: {
    message: {
      city: 'Toshkent'
    }
  }
}

// Создание экземпляра VueI18n с настройками
const i18n = new VueI18n({
  locale: 'ru', // установка локализации по умолчанию
  messages // установка сообщений локализаций
})

new Vue({ i18n }).$mount('#app')
