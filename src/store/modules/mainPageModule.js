import axios from "axios";

export default {
  state: {
    posts: []
  },
  getters: {
    allIndexInfo(state) {
      return state.posts;
    }
  },
  mutations: {
    updateInfo(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    /* async fetchHeaderCategories(ctx) {
      const response = await axios.get("");
      ctx.commit("updateHeaderCategories", response.data.categories);
    },
    async fetchHeaderMainSlider(ctx) {
      const response = await axios.get("");
      ctx.commit("updateHeaderMainSlider", response.data.sliders);
    }, */
    async fetchInfo(ctx) {
      const response = await axios.get("");
      ctx.commit("updateInfo", response.data);
    }
  }
};
