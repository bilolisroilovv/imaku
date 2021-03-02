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
import axios from "axios";
// import Echo from "laravel-echo";
import Pusher from "pusher-js";

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
      userId: null,
      colorLoading: "var(--main-color)"
    };
  },
  methods: {
    async Chats() {
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
    async CurrentUserId() {
      const response = await axios.get("/me");
      this.userId = response.data;
      // console.log(this.userId.id);
    },
    startConversationWith(contact) {
      this.updateUnreadCount(contact, true);
      axios.get(`/chat/${contact.chatID}`).then(response => {
        this.messages = response.data;
        this.selectedContact = contact;
      });

      // this.selected();
    },
    saveNewMessage(message) {
      this.messages.messages.push(message);
    },

    hanleIncoming(message) {
      if (
        this.selectedContact &&
        message.user.id == this.selectedContact.chatID
      ) {
        this.saveNewMessage(message);
        return;
      }
      this.updateUnreadCount(message.chatID, false);
    },
    updateUnreadCount(contact, reset) {
      this.contacts = this.contacts.map(single => {
        if (single.id !== contact.chatID) {
          return single;
        }
        if (reset) single.newMessagesCount = 0;
        else single.newMessagesCount += 1;
        return single;
      });
    }
    // selected() {
    //   Pusher.logToConsole = true;

    //   const pusher = new Pusher("01bf1bff746b7b43db62", {
    //     cluster: "ap2",
    //     encrypted: true
    //   });
    //   const channel = pusher.subscribe(
    //     "message-channel-" + this.selectedContact.chatID
    //   );
    //   channel.bind("send-message", function(data) {
    //     // this.messages.messages.push(data.message);
    //     this.hanleIncoming(data.message);
    //   });
    // }
  },

  mounted() {
    // this.CurrentUserId();
    // this.Chats();
    Pusher.logToConsole = true;

    // window.Echo.channel(`message-channel-${this.userId.id}`).listen(
    //   ".send-message",
    //   e => {
    //     this.hanleIncoming(e.message);
    //     console.lgo(e);
    //   }
    // );
  },
  created() {
    // this.selected();
    // console.log(this.currentUser);
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
