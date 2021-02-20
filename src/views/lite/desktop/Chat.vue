<template>
  <div class="w-100">
    <div class="chat">
      <div class="row position-relative">
        <ContactsList :contacts="contacts" @selected="startConversationWith" />

        <div class="col-md-8 pl-0">
          <div class="chat-right">
            <Conversation
              :contact="selectedContact"
              :messages="messages"
              @new="saveNewMessage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactsList from "@/components/lite/desktop/Chat/ContactsList.vue";
import Conversation from "@/components/lite/desktop/Chat/Conversation.vue";
import Pusher from "pusher-js";

import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Chat",
  components: {
    ContactsList,
    Conversation
  },
  data() {
    return {
      selectedContact: null,
      messages: [],
      contacts: [],
      colorLoading: "var(--main-color)"
    };
  },
  methods: {
    async getPost2() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios.get("chat").finally(() =>
        setTimeout(() => {
          this.$vs.loading.close(".con-vs-loading");
        }, 10)
      );
      this.contacts = response.data;
    },
    startConversationWith(contact) {
      this.updateUnreadCount(contact, true);
      axios.get(`/chat/${contact.chatID}`).then(response => {
        this.messages = response.data;
        this.selectedContact = contact;
      });
    },
    saveNewMessage(message) {
      this.messages.messages.push(message);
    },

    hanleIncoming(message) {
      // if (this.selectedContact && message.user_id == this.selectedContact.id) {
      this.saveNewMessage(message);
      // return;
      // }
      this.updateUnreadCount(message.user_id, false);
      console.log(this.message.user_id);
    },
    updateUnreadCount(contact, reset) {
      this.contacts = this.contacts.map(single => {
        if (single.id !== contact.chatID) {
          return single;
        }
        if (reset) single.unread = 0;
        else single.unread += 1;
        return single;
      });
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  mounted() {
    this.getPost2();
    // Pusher.logToConsole = true;
    // const pusher = new Pusher("01bf1bff746b7b43db62", {
    //   cluster: "ap2",
    //   authEndpoint: "/broadcasting/auth",
    //   httpHost: "http://192.168.5.56:8000"
    // });

    // const channel = pusher.subscribe(
    //   "private-message-channel-" + this.currentUser.id
    // );

    // channel.bind("send-message", function(data) {
    //   alert(JSON.stringify(data));
    // });

    // channel.bind("send-message", e => {
    //   this.hanleIncoming(e.message);
    //   console.log(e.message);
    // });
  },
  created() {
    Pusher.logToConsole = true;
    const pusher = new Pusher("01bf1bff746b7b43db62", {
      cluster: "ap2",
      authEndpoint: "http://192.168.5.56:8000/broadcasting/auth"
      // httpHost: "http://192.168.5.56:8000"
    });

    const channel = pusher.subscribe(
      "private-message-channel-" + this.currentUser.id,
      function(data) {
        console.log(data);
      }
    );

    channel.bind("send-message", function(data) {
      alert(JSON.stringify(data));
    });

    channel.bind("send-message", e => {
      this.hanleIncoming(e.message);
      console.log(e.message);
    });
  }
};
</script>

<style lang="scss" scoped>
.chat {
  height: 100%;
  .row {
    height: 100%;
    & > div {
      height: 100%;
    }
  }
  &-right {
    background: #ffffff;
    border: 1px solid #eaedf7;
    box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.0367952);
    border-radius: 10px;
    height: 100%;
    position: relative;
  }
}

.w-100 {
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  position: relative;
  left: 0;
  top: 0;
  height: 600px;
  background: #f8f8fc;
}
</style>
