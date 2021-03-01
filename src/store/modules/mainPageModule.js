import axios from "axios";

export default {
  state: {
    info: []
  },
  getters: {
    allIndexInfo(state) {
      return state.info;
    }
  },
  mutations: {
    updateInfo(state, info) {
      state.info = info;
    }
  },
  actions: {
    async fetchInfo(ctx) {
      const response = await axios.get("");
      ctx.commit("updateInfo", response.data);
    }
  }
};
