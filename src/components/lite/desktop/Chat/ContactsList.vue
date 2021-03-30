<template>
  <div class="col-md-3">
    <div class="chat-left">
      <div class="chat-left__header position-relative">
        <input
          type="text"
          placeholder="Поиск"
          :class="{ w100: searchVisible }"
          class="search_contacts_input"
          v-model="search"
          ref="search"
        />
        <div class="title po">
          {{ $t("chat") }}
          <span class="chat-count" v-if="newMessagesCount">{{
            newMessagesCount
          }}</span>
        </div>
        <div class="search" :class="{ active: searchVisible }" @click.prevent="searchVisible = !searchVisible">
        </div>
      </div>
      <div class="chat-left__body">
        <div
          class="chat-user"
          v-for="chat in filteredContacts"
          :key="chat.id"
          @click="selectContact(chat)"
          :class="{ 'chat-user-active': chat == SelectedContact }"
        >
          <div class="chat-user__img">
            <img :src="chat.avatar" :alt="chat.name" />
          </div>
          <div class="mx-3">
            <h3
              class="chat-user__title text_ellipsis12"
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
import { mapGetters } from "vuex";

export default {
  props: {
    contacts: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
    newMessagesCount: {},
  },
  data() {
    return {
      searchVisible: false,
      search: "",
      selected: this.contacts.length ? this.contacts[0] : null,
    };
  },
  watch: {
    searchVisible() {
      if(this.searchVisible == true) {
        this.$refs.search.focus();
      } else {
        this.search = ""
      }
    }
  },
  methods: {
    selectContact(contact) {
      this.selected = contact;
      this.$store.dispatch("selectContact", contact);
      this.$emit("selected", contact);
    },
  },
  computed: {
    ...mapGetters(["SelectedContact"]),
    filteredContacts() {
      return this.contacts.filter(
        (item) =>
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      );
    },
    sortedContacts() {
      return this.$_.sortBy(this.contacts, [
        (contact) => {
          if (contact == this.selected) {
            return Infinity;
          }
          return contact.newMessagesCount;
        },
      ]).reverse();
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  width: 37px;
  height: 37px;
  transition: all 1s;
  z-index: 4;
  // box-shadow: 0 0 25px 0 crimson;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    margin: auto;
    top: 22px;
    right: -1px;
    bottom: 9px;
    left: 21px;
    width: 6px;
    height: 2px;
    background: #7c88b1;
    transform: rotate(45deg);
    transition: all 0.2s;
  }
  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: -15px;
    right: 0;
    bottom: -12px;
    left: 9px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #7c88b1;
    transition: all 0.05s;
  }
}
.search.active {
  z-index: 6;
  &::before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 17px;
  }
  &::after {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 17px;
    height: 2px;
    border: none;
    background: #7c88b1;
    border-radius: 0%;
    transform: rotate(-45deg);
  }
}
.search_contacts_input {
  width: 0;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);

  background: #f9f9fa;
  border-radius: 3px;
  font-weight: 500;
  color: #6b6b6b;
  transition: all 0.2s;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  border: none;
}
.search_contacts_input::placeholder {
  color: #afb0b1;
  font-family: "Inter", sans-serif;
}
.search_contacts_input:hover {
  background: #fff;
  border-color: rgba(250, 169, 93, 0.603) !important;
}
.search_contacts_input:focus {
  background: #fff;
  border-color: rgba(250, 169, 93, 0.603) !important;
  /* box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.05); */
}
.search_contacts_input.w100 {
  width: 283px;
  padding: 7px 10px;
  border: 2px solid #d6dbe0;
}
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
      min-height: 63px;
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
      max-height: 535px;
      max-height: 535px;
      overflow-y: auto;
      margin-right: 3px;

      &::-webkit-scrollbar {
        width: 5px;
        height: 4px;
      }
      /* Track */
      &::-webkit-scrollbar-track {
        background: rgba(#b5bdcc8e, 0.2);
        border-radius: 100px;
      }

      &::-webkit-scrollbar-track:hover {
        background: rgba(#b5bdcc8e, 0.3);
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: rgba(#b5bdcc8e, 0.7);
        border-radius: 100px;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: rgba(#b5bdcc8e, 1);
      }

      .chat-user__img {
        img {
          width: 48px;
          height: 48px;
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
    border-bottom: 1px solid #eaedf7;
    position: relative;

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

      position: absolute;
      right: 15px;
      bottom: 10px;
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
