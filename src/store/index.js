import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/authModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authModule
  }
})
