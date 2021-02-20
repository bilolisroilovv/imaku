<template>
  <div ref="feed" v-if="contact" class="chat-content-body">
    <div class="chat-user__product">
      <!-- <div class="product">
        <div class="product-img">
          <img src="https://picsum.photos/id/1/120/80" alt="" />
        </div>
        <div class="product-info">
          <h3 class="product-title">
            {{ messages.post.name }}
          </h3>
          <p class="product-price">{{ messages.post.price }}</p>
          <div class="product-footer">
            <div class="product-links">
              <a href="#">Ko‘rib chiqish</a>
              <span>ID: {{ messages.post.id }}</span>
            </div>
            <a class="phone" :href="'tel:' + messages.post.phone"
              ><img src="@/assets/lite/chat/tel.svg" alt="" />{{
                messages.post.phone
              }}</a
            >
          </div>
        </div>
      </div> -->
    </div>
    <div class="chat-content">
      <div
        class="chat-item"
        v-for="message in messages.messages"
        :class="
          `${
            message.user.id == contact.id
              ? 'chat-item-received'
              : 'chat-item-sent'
          }`
        "
        :key="message.id"
      >
        <div class="chat-user__img" v-if="message.user.id == contact.id">
          <img :src="message.user.avatar" alt="" />
        </div>
        <div class="chat-item__title">
          {{ message.content }}
          <div class="chat-send_date">{{ message.createdAt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object
    },
    messages: {
      post: {
        name: "",
        id: "",
        avatar: "",
        price: ""
      }
    }
  },
  methods: {
    scrollToBottom() {
      setTimeout(() => {
        this.$refs.feed.scrollTop =
          this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
      }, 50);
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    contact(contact) {
      this.scrollToBottom();
    },
    // eslint-disable-next-line no-unused-vars
    messages(messages) {
      this.scrollToBottom();
    }
  }
};
</script>

<style lang="scss" scoped>
.chat {
  &-content-body {
    max-height: 460px;
    overflow-y: auto;

    /* width */
    &::-webkit-scrollbar {
      width: 8px;
      height: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background-color: rgba(#b5bdcc, 0.329);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgba(#b5bdcc, 0.9);
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #b5bdcc;
    }
  }
  &-user {
    &__img {
      img {
        border-radius: 50%;
        width: 48px;
        height: 48px;
        object-fit: cover;
        overflow: hidden;
      }
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

  &-content {
    padding: 24px;
    background: #fafcfe;

    .chat-user__img {
      img {
        width: 42px;
        height: 42px;
      }
    }
  }

  &-item {
    display: flex;
    align-items: flex-end;
    padding: 10px 0;
    margin-bottom: 25px;

    &__title {
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.5px;
      position: relative;
      padding: 10px 15px;
      margin-left: 20px;

      .chat-send_date {
        position: absolute;
        bottom: -20px;
        font-weight: normal;
        font-size: 10px;
        line-height: 16px;
        letter-spacing: 0.5px;
        color: #97a0c3;
        opacity: 0.9;
        min-width: 65px;
      }
    }

    &-received {
      margin-bottom: 25px;
      .chat-item {
        &__title {
          background: #eff2f7;
          border-radius: 40px 40px 40px 0;

          color: #242f57;

          .chat-send_date {
            left: 0;
          }
        }
      }
    }

    &-sent {
      justify-content: flex-end;
      .chat-item {
        &__title {
          background: #ff9029;
          border-radius: 40px 40px 0px 40px;

          color: #fff;

          .chat-send_date {
            right: 0;
          }
        }
      }
    }
  }
}
</style>
