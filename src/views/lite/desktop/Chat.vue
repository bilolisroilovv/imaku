<template>
  <div class="w-100">
    <div class="chat">
      <div class="row position-relative">
        <div class="col-md-5">
          <div class="chat-left">
            <div class="chat-left__header">
              <div class="title">
                {{ $t("chat") }}
                <span class="chat-count">{{ chatData.length }}</span>
              </div>
              <div class="search">
                <img src="@/assets/lite/chat/search.svg" alt="" />
              </div>
            </div>
            <div class="chat-left__body">
              <!-- <div class="chat-user">
                <div class="chat-user__img">
                  <img src="https://picsum.photos/id/323/120/96" alt="" />
                </div>
                <div class="mx-3">
                  <h3 class="chat-user__title active">Alexander Xabi</h3>
                  <p class="chat-user__subtitle">
                    Can you explain how to make Lorem ipsum dolor sit amet.
                    sdvsdv sdvsdv
                  </p>
                </div>
                <div class="ml-auto chat-user__right">
                  <div>
                    <span class="chat-count">3</span>
                  </div>
                  <p class="chat-user__send-date">1 min ago</p>
                </div>
              </div>
              <div class="chat-user chat-user-active">
                <div class="chat-user__img">
                  <img src="https://picsum.photos/id/12/120/96" alt="" />
                </div>
                <div class="mx-3">
                  <h3 class="chat-user__title">
                    Carina Putri
                    <span class="online"
                      ><img src="@/assets/lite/chat/online.svg" alt=""
                    /></span>
                  </h3>
                  <p class="chat-user__subtitle">
                    Can you explain how to make Lorem ipsum dolor sit amet.
                    sdvsdv sdvsdv
                  </p>
                </div>
                <div class="ml-auto chat-user__right">
                  <div></div>
                  <p class="chat-user__send-date">4 min ago</p>
                </div>
              </div>
              <div class="chat-user">
                <div class="chat-user__img">
                  <img src="https://picsum.photos/id/45/120/96" alt="" />
                </div>
                <div class="mx-3">
                  <h3 class="chat-user__title">Donal Trunk</h3>
                  <p class="chat-user__subtitle">
                    Can you explain how to make Lorem ipsum dolor sit amet.
                    sdvsdv sdvsdv
                  </p>
                </div>
                <div class="ml-auto chat-user__right">
                  <div></div>
                  <p class="chat-user__send-date">14.30</p>
                </div>
              </div>
              <div class="chat-user">
                <div class="chat-user__img">
                  <img src="https://picsum.photos/id/65/120/96" alt="" />
                </div>
                <div class="mx-3">
                  <h3 class="chat-user__title">Albert Mustang</h3>
                  <p class="chat-user__subtitle">
                    Can you explain how to make Lorem ipsum dolor sit amet.
                    sdvsdv sdvsdv
                  </p>
                </div>
                <div class="ml-auto chat-user__right">
                  <div></div>
                  <p class="chat-user__send-date">4 min ago</p>
                </div>
              </div>
              <div class="chat-user">
                <div class="chat-user__img">
                  <img src="https://picsum.photos/id/11/120/96" alt="" />
                </div>
                <div class="mx-3">
                  <h3 class="chat-user__title">
                    Njonja Meneer Kinasih
                    <span class="online"
                      ><img src="@/assets/lite/chat/online.svg" alt=""
                    /></span>
                  </h3>
                  <p class="chat-user__subtitle">
                    Can you explain how to make Lorem ipsum dolor sit amet.
                    sdvsdv sdvsdv
                  </p>
                </div>
                <div class="ml-auto chat-user__right">
                  <div></div>
                  <p class="chat-user__send-date">14.30</p>
                </div>
              </div> -->
              <div v-for="(chat, index) in chatData" :key="index">
                <div class="chat-user">
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
                      <span
                        v-if="chat.newMessagesCount > 0"
                        class="chat-count"
                        >{{ chat.newMessagesCount }}</span
                      >
                    </div>
                    <p class="chat-user__send-date">{{ chat.lastSeen }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="chat-right">
            <div class="chat-user">
              <div class="chat-user__img">
                <img src="https://picsum.photos/id/12/120/96" alt="" />
              </div>
              <div class="mx-3">
                <h3 class="chat-user__title">
                  Carina Putri
                  <span class="online"
                    ><img src="@/assets/lite/chat/online.svg" alt=""
                  /></span>
                </h3>
              </div>
              <div class="ml-auto d-flex align-items-center">
                <div class="search mr-3">
                  <img src="@/assets/lite/chat/search.svg" alt="" />
                </div>
                <div class="favorite">
                  <img src="@/assets/lite/chat/star.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="chat-user__product">
              <div class="product">
                <div class="product-img">
                  <img src="https://picsum.photos/id/1/120/80" alt="" />
                </div>
                <div class="product-info">
                  <h3 class="product-title">
                    Спортивное питание ON creatine Powder 300gr.Энг арзон ва
                    сифатли(7М)
                  </h3>
                  <p class="product-price">1 500 000 сум</p>
                  <div class="product-footer">
                    <div class="product-links">
                      <a href="#">Ko‘rib chiqish</a>
                      <a href="#">Tahrirlash</a>
                      <span>ID: 30868370</span>
                    </div>
                    <a class="phone" href="tel:+99890 345-67-89"
                      ><img src="@/assets/lite/chat/tel.svg" alt="" /> +99890
                      345-67-89</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="chat-content">
              <div class="chat-client">
                <div class="chat-user__img">
                  <img src="https://picsum.photos/id/1/120/96" alt="" />
                </div>
                <div class="chat-client__title">
                  He make me hurt so much 😭

                  <div class="chat-send_date">4 min ago</div>
                </div>
              </div>
              <div class="chat-me">
                <div class="chat-me__title">
                  Just leave him!!

                  <div class="chat-send_date">21.31</div>
                </div>
              </div>
              <div class="chat-client">
                <div class="chat-user__img">
                  <img src="https://picsum.photos/id/1/120/96" alt="" />
                </div>
                <div class="chat-client__title">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sunt, magni quam ullam doloribus, tempora asperiores facilis
                  repellendus architecto in ab fugit mollitia itaque fuga id
                  temporibus labore nihil? Impedit, sed?

                  <div class="chat-send_date">4 min ago</div>
                </div>
              </div>
              <div class="chat-client">
                <div class="chat-user__img">
                  <img src="https://picsum.photos/id/1/120/96" alt="" />
                </div>
                <div class="chat-client__title">
                  He make me hurt so much Lorem ipsum dolor sit amet consectetur

                  <div class="chat-send_date">4 min ago</div>
                </div>
              </div>
              <div class="chat-me">
                <div class="chat-me__title">
                  Lorem ipsum dolor sit.

                  <div class="chat-send_date">1 min ago</div>
                </div>
              </div>
            </div>
            <form action="">
              <button class="file" type="button">
                <img src="@/assets/lite/chat/file.svg" alt="" />
              </button>
              <div class="text-form">
                <input type="text" :placeholder="$t('chat_placeholder')" />
                <button type="button" class="emoji">
                  <img src="@/assets/lite/chat/emoji.svg" alt="" />
                </button>
                <button type="submit" class="send">
                  <img src="@/assets/lite/chat/send.svg" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "@/components/lite/desktop/Chat/Chat.vue";
import axios from "axios";
export default {
  name: "Chat",
  comments: {
    Chat
  },
  data() {
    return {
      chatData: [],
      colorLoading: "var(--main-color)",
      isActive: false
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
      this.chatData = response.data;
      console.log(this.chatData);
    },
    chat_active() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  mounted() {
    this.getPost2();
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
    form {
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

.w-100 {
  width: 100%;
  padding: 0 15px;
  position: absolute;
  left: 0;
  top: 0;
  height: 800px;
  background: #f8f8fc;
}
</style>
