<template>
  <div>
    <div class="chat-content-top">
      <div class="chat-content-top__img">
        <img
          :src="
            contact ? contact.avatar : '@/assets/lite/desktop/profile_chat.svg'
          "
          :alt="contact ? contact.name : ''"
        />
      </div>
      <div class="mx-3">
        <h3 class="chat-user__title">
          {{ contact ? contact.name : "Select a Contact" }}
          <span class="online" v-if="contact.status"
            ><img src="@/assets/lite/chat/online.svg" alt="online"
          /></span>
        </h3>
      </div>
      <!-- <div class="ml-auto d-flex align-items-center">
        <div class="search mr-3">
          <img src="@/assets/lite/chat/search.svg" alt="" />
        </div>
        <div class="favorite">
          <img src="@/assets/lite/chat/star.svg" alt="" />
        </div>
      </div> -->
    </div>
    <MessagesFeed :contact="contact" :messages="messages.messages" />

    <MessageComposer @send="sendMessage" />
  </div>
</template>

<script>
import axios from "axios";
import MessagesFeed from "./MessagesFeed";
import MessageComposer from "./MessageComposer";

export default {
  components: { MessagesFeed, MessageComposer },
  // props: ["contact", "messages"],
  props: {
    contact: {
      type: Object,
      default: null
    },
    messages: {
      post: {
        type: Object,
        default: null
      },
      messages: {
        type: Array
      }
    }
  },
  methods: {
    sendMessage(text) {
      if (!this.contact) {
        return;
      }
      axios
        .post("chat/sendMessage/" + this.contact.chatID, {
          body: text
        })
        .then(response => {
          console.log(this.contact)
          this.$emit("new", response.data);
        });
    }
  },
  created() {
    /* console.log(this.messages);
    console.log(this.contact); */
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
  .search,
  .favorite {
    cursor: pointer;
  }

  &-count {
    background: #ff9029;
    border-radius: 6px;
    padding: 2px 7px;
    color: white;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #ffffff;
  }

  &-user {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    border-left: 2px solid transparent;

    &-active {
      border-left-color: #ff9029;
      background: #f4faff;
      cursor: default;
    }

    &__img {
      img {
        border-radius: 50%;
        width: 48px;
        height: 48px;
        object-fit: cover;
        overflow: hidden;
      }
    }

    &__title {
      position: relative;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.5px;
      color: #242f57;
      &.active {
        color: #ff9029;
      }
    }

    &__subtitle {
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.5px;
      color: #636e95;
      mix-blend-mode: normal;
      opacity: 0.9;

      margin-top: 5px;
      margin-bottom: 0;

      -webkit-line-clamp: 1;
      height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &__send-date {
      font-weight: normal;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 0.5px;
      color: #97a0c3;
      mix-blend-mode: normal;
      opacity: 0.9;
      margin-top: 5px;
      margin-bottom: 0;
    }

    &__right {
      min-width: 70px;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: flex-end;
      height: 48px;
      padding-bottom: 4px;
    }

    &__product {
      margin: 0 24px 20px;

      .product {
        background: rgba(236, 236, 245, 0.47);
        border: 0.851828px solid #ffffff;
        border-radius: 9px;
        padding: 15px;

        display: flex;

        &-img {
          margin-right: 15px;
          img {
            height: 75px;
            width: 100px;
            object-fit: cover;
            border-radius: 6px;
          }
        }

        &-title {
          font-weight: normal;
          font-size: 16px;
          letter-spacing: 0.0275em;
          color: #19191d;
        }

        &-price {
          margin-top: 5px;
          font-weight: bold;
          font-size: 18px;
          display: flex;
          align-items: center;
          color: rgba(0, 0, 0, 0.87);
          margin-bottom: 0;
        }

        &-footer {
          display: flex;
          justify-content: space-between;
        }

        &-links {
          a,
          span {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 150%;
            letter-spacing: 0.0275em;
            color: #517092;
            display: inline-block;
            margin-right: 20px;
          }

          a {
            position: relative;

            &::after {
              position: absolute;
              content: "|";
              right: -13px;
              top: 0;
              height: 120%;
            }
          }
        }

        &-info {
          width: 100%;
        }

        .phone {
          background: #343538;
          border-radius: 18px;
          padding: 10px 15px;

          font-weight: normal;
          font-size: 12px;
          line-height: 13px;
          letter-spacing: 0.168007px;
          color: #ffffff;

          img {
            margin-right: 5px;
          }
        }
      }
    }
  }
  .chat-content-top {
    padding: 14px 24px;
    min-height: 63px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    border-left: 2px solid transparent;
    &__img {
      img {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        object-fit: cover;
        overflow: hidden;
      }
    }
  }

  .online {
    margin-left: 5px;
  }

  &-right {
    .form {
      background-color: #fff;
      padding: 24px;
      .file,
      .emoji,
      .send {
        background-color: transparent;
        width: 40px;
        display: flex;
        justify-content: flex-start;
        padding: 0;
      }

      height: 80px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0;

      .text-form {
        width: 100%;
        position: relative;
        input {
          background: #fafcfe;
          border: 1px solid #d2d5e1;
          border-radius: 10px;
          padding: 10px 45px 10px 20px;
          display: block;
          width: 100%;

          font-weight: normal;
          font-size: 16px;
          letter-spacing: 0.5px;

          &::placeholder {
            color: #bfc7e0;
          }
        }

        .emoji {
          position: absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 12;
        }

        .send {
          position: absolute;
          right: 0px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 12;
        }
      }
    }
  }
}
</style>
