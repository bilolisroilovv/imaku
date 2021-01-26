import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/authModule'
import categorieModule from './modules/categorieModule'
import mainPageModule from './modules/mainPageModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authModule,
    categorieModule,
    mainPageModule
  }
})
