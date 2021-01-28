import axios from 'axios'

export default {
  state: {
    user: null
  },
  getters: {
    currentUser (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    async fetchUser (ctx) {
      const response = await axios.get('me')
      ctx.commit('setUser', response.data)
    }
  }
}
