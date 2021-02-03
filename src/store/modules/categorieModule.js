import axios from "axios";

export default {
  state: {
    categories: []
  },
  getters: {
    allCategories(state) {
      return state.categories;
    }
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    async fetchCategories(ctx) {
      const response = await axios.get("categories");
      ctx.commit("updateCategories", response.data);
    }
  }
};
