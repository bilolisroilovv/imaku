import axios from "axios";

export default {
  state: {
    post: []
  },
  getters: {
    allPost(state) {
      return state.posts;
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async fetchPosts(ctx) {
      const response = await axios.get("");
      ctx.commit("updatePost", response.data.posts);
    }
  }
};
