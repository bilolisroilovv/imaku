<template>
  <div
    class="chat-user"
    @click="chat_active"
    :class="{ 'chat-user-active': isActive }"
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
          ><img v-if="chat.status" src="@/assets/lite/chat/online.svg" alt=""
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
</template>

<script>
export default {
  props: {
    chat: {
      default: null,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
