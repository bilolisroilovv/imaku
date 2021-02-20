import axios from "axios";
import i18n from "@/i18n";

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
      const response = await axios.get("categories", {
        headers: {
          "Accept-Language": `${i18n.locale}`
        }
      });
      ctx.commit("updateCategories", response.data);
    }
  }
};
