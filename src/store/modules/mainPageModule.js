import axios from 'axios'

export default {
  state: {
    headerCategories: [],
    headerMainSlider: [],
    posts: []
  },
  getters: {
    allHeaderCategories (state) {
      return state.headerCategories
    },
    allHeaderMainSlider (state) {
      return state.headerMainSlider
    },
    allPosts (state) {
      return state.posts
    }
  },
  mutations: {
    updateHeaderCategories (state, headerCategories) {
      state.headerCategories = headerCategories
    },
    updateHeaderMainSlider (state, headerMainSlider) {
      state.headerMainSlider = headerMainSlider
    },
    updatePosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchHeaderCategories (ctx) {
      const response = await axios.get('')
      ctx.commit('updateHeaderCategories', response.data.categories)
    },
    async fetchHeaderMainSlider (ctx) {
      const response = await axios.get('')
      ctx.commit('updateHeaderMainSlider', response.data.sliders)
    },
    async fetchPosts (ctx) {
      const response = await axios.get('')
      ctx.commit('updatePosts', response.data.posts)
    }
  }
}
