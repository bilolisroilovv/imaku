<template>
  <div class="col-md-4">
    <div class="chat-left">
      <div class="chat-left__header">
        <div class="title">
          {{ $t("chat") }}
          <span class="chat-count">{{ contacts.length }}</span>
        </div>
        <div class="search">
          <img src="@/assets/lite/chat/search.svg" alt="" />
        </div>
      </div>
      <div class="chat-left__body">
        <div
          class="chat-user"
          v-for="chat in sortedContacts"
          :key="chat.id"
          @click="selectContact(chat)"
          :class="{ 'chat-user-active': chat == selected }"
        >
          <div class="chat-user__img">
            <img :src="chat.avatar" :alt="chat.name" />
          </div>
          <div class="mx-3">
            <h3
              class="chat-user__title"
              :class="chat.newMessagesCount > 0 ? 'active' : ''"
            >
              {{ chat.name }}
              <span class="online"
                ><img
                  v-if="chat.status"
                  src="@/assets/lite/chat/online.svg"
                  alt=""
              /></span>
            </h3>
            <p class="chat-user__subtitle">
              {{ chat.lastMessage }}
            </p>
          </div>
          <div class="ml-auto chat-user__right">
            <div>
              <span v-if="chat.newMessagesCount > 0" class="chat-count">{{
                chat.newMessagesCount
              }}</span>
            </div>
            <p class="chat-user__send-date">{{ chat.lastSeen }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  },
  data() {
    return {
      selected: this.contacts.length ? this.contacts[0] : null
    };
  },
  methods: {
    selectContact(contact) {
      this.selected = contact;
      this.$emit("selected", contact);
    }
  },
  computed: {
    sortedContacts() {
      return this.$_.sortBy(this.contacts, [
        contact => {
          if (contact == this.selected) {
            return Infinity;
          }
          return contact.newMessagesCount;
        }
      ]).reverse();
    }
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
  &-left {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 14px 24px;
    }

    .title {
      display: flex;
      align-items: center;

      font-weight: bold;
      font-size: 22px;
      line-height: 30px;
      letter-spacing: 0.5px;
      color: #242f57;

      span {
        margin-left: 10px;
      }
    }

    &__body {
      max-height: 505px;
      overflow-y: auto;

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

      .chat-user__img {
        img {
          width: 42px;
          height: 42px;
        }
      }
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
    padding: 18px 24px;
    cursor: pointer;
    border-left: 2px solid transparent;

    &-active {
      border-left-color: #ff9029;
      background: #f4faff;
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

  .online {
    margin-left: 5px;
  }

  &-left {
    background: #ffffff;
    border: 1px solid #eaedf7;
    box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.0367952);
    border-radius: 10px;

    height: 100%;
  }
}
</style>
