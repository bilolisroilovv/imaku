import axios from 'axios'

export default {
  state: {
    headerCategories: {}
  },
  getters: {
    allHeaderCategories (state) {
      return state.headerCategories
    }
  },
  mutations: {
    updateHeaderCategories (state, headerCategories) {
      state.headerCategories = headerCategories
    }
  },
  actions: {
    async fetchHeaderCategories (ctx) {
      const response = await axios.get('')
      ctx.commit('updateHeaderCategories', response.data.categories)
    }
  }
}
