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
    fetchUser (ctx, user) {
      ctx.commit('setUser', user)
    }
  }
}
