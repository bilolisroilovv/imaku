<template>
  <form class="form">
    <button class="file" type="button">
      <img src="@/assets/lite/chat/file.svg" alt="" />
    </button>
    <div class="text-form">
      <input
        type="text"
        v-model="message"
        @keyup.enter="send"
        :placeholder="$t('chat_placeholder')"
      />
      <button type="button" class="emoji">
        <img src="@/assets/lite/chat/emoji.svg" alt="" />
      </button>
      <button type="submit" class="send" @click="send">
        <img src="@/assets/lite/chat/send.svg" alt="" />
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    send(e) {
      e.preventDefault();

      if (this.message == "") {
        return;
      }
      this.$emit("send", this.message);
      this.message = "";
    }
  },
  mounted () {
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
      padding: 24px;
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
      max-height: 705px;
      overflow-y: auto;
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

  .online {
    margin-left: 5px;
  }

  &-left,
  &-right {
    background: #ffffff;
    border: 1px solid #eaedf7;
    box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.0367952);
    border-radius: 10px;

    height: 100%;
  }

  &-content {
    padding: 24px;
    background: #fafcfe;

    max-height: 475px;
    overflow-y: auto;

    .chat-user__img {
      img {
        width: 42px;
        height: 42px;
      }
    }
  }

  &-client {
    display: flex;
    align-items: flex-end;
    padding: 10px 0;
    margin-bottom: 25px;

    &__title {
      background: #eff2f7;
      padding: 20px;
      border-radius: 40px 40px 40px 0;
      margin-left: 20px;

      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.5px;
      color: #242f57;

      position: relative;

      .chat-send_date {
        position: absolute;
        bottom: -30px;
        left: 0;
        font-weight: normal;
        font-size: 10px;
        line-height: 16px;
        letter-spacing: 0.5px;
        color: #97a0c3;
        mix-blend-mode: normal;
        opacity: 0.9;
      }
    }
  }

  &-me {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px 0;
    margin-bottom: 25px;

    &__title {
      background: #ff9029;
      padding: 20px;
      border-radius: 40px 40px 0px 40px;
      margin-left: 20px;

      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.5px;
      color: #fff;

      position: relative;

      .chat-send_date {
        position: absolute;
        bottom: -30px;
        right: 0;
        font-weight: normal;
        font-size: 10px;
        line-height: 16px;
        letter-spacing: 0.5px;
        color: #97a0c3;
        mix-blend-mode: normal;
        opacity: 0.9;
      }
    }
  }

  &-right {
    position: relative;
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

      height: 100px;
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
