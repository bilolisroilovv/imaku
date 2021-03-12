import axios from "axios";

export default {
  state: {
    contacts: [],
    newMessagesCount: null,
    selectedContact: null
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    },
    allMessagesCount(state) {
      return state.newMessagesCount;
    },
    SelectedContact(state) {
      return state.selectedContact;
    }
  },
  mutations: {
    updateContacts(state, contacts) {
      state.contacts = contacts;
    },
    updateNewMessagesCount(state, messagesCount) {
      state.newMessagesCount = messagesCount;
    },
    updateSelectedContact(state, selectedContact) {
      state.selectedContact = selectedContact;
    }
  },
  actions: { 
    async fetchChats(ctx) {
      const response = await axios.get("chat");
      ctx.commit("updateContacts", response.data.chats);
      ctx.commit("updateNewMessagesCount", response.data.newMessagesCount);
    },
    selectContact(ctx, payload) {
      ctx.commit("updateSelectedContact", payload);
    }
  }
};
