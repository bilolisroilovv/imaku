export default {
  state: {
    user: null
  },
  getters: {
    user: (state) => {
      return state.user
    }
  },
  actions: {
    user (ctx, user) {
      ctx.commit('user', user)
    }
  },
  mutations: {
    user (state, user) {
      state.user = user
    }
  }
}
