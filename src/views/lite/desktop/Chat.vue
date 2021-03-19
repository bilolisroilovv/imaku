<template>
  <div class="w-100">
    <div class="chat">
      <div class="row position-relative">
        <ContactsList :newMessagesCount="newMessagesCount" :contacts="contacts" @selected="startConversationWith" />

        <div class="col-md-9 pl-0">
          <div class="chat-right">
            <div v-if="!selectedContact" class="h-100 d-flex justify-content-center align-items-center">
              <img src="@/assets/lite/chat_image.png" alt="" class="chat-img">
            </div>
            <Conversation
              class="conversation"
              v-if="selectedContact"
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
import { mapGetters } from "vuex";
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
      newMessagesCount: null,
      messages: [],
      chatIdd: 1,
      contacts: [],
      userId: null,
      colorLoading: "var(--main-color)"
    };
  },
  computed: {
    ...mapGetters(["SelectedContact"])
  },
  methods: {
    async Chats() {
      const response = await axios.get("chat")
      this.contacts = response.data.chats;
      this.newMessagesCount = response.data.newMessagesCount;
    },
    async CurrentUserId() {
      const response = await axios.get("me");
      this.userId = response.data.id;
    },
    startConversationWith(contact) {
      this.updateUnreadCount(contact, true);
      axios.get(`chat/${contact.chatID}`).then(response => {
        this.messages = response.data;
        this.selectedContact = contact;
      });
    },
    saveNewMessage(message) {
      this.messages.messages.push(message);
    },
    hanleIncoming(message) {
      if (
        this.selectedContact &&
        message.chatID == this.selectedContact.chatID
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
  async mounted() {
    Pusher.logToConsole = true;
    this.Chats();
    this.startConversationWith(this.SelectedContact);
    const response = await axios.get('me')
    window.Echo.channel('message-channel-' + response.data.id).listen(
      ".send-message",
      e => {
        this.Chats();
        this.hanleIncoming(e.message);
      }
    );

  },
  created() {
    // this.selected();
    // console.log(this.currentUser);
  }
};
</script>

<style lang="scss" scoped>
.chat-img {
  max-width: 500px;
}
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
    overflow: hidden;
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
