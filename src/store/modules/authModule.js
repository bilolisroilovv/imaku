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
    updateUser (state, user) {
      state.user = user
    }
  },
  actions: {
    fetchUser (ctx, user) {
      ctx.commit('updateUser', user)
    }
  }
}
