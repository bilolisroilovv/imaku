<template>
  <button class="d-block mt-1 subscribe_btn" :class="{ active: subscribed }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "SubscribeBtn",
  props: {
    isSubscribed: {},
  },
  watch: {
    isSubscribed() {
      this.changeSub();
    },
  },
  data() {
    return {
      text: "Подписаться",
      subscribed: false,
    };
  },
  methods: {
    changeSub() {
      if (this.isSubscribed === true) {
        this.subscribed = true;
        this.text = "Отписаться";
      } else {
        this.subscribed = false;
        this.text = "Подписаться";
      }
    },
  },
  mounted() {
    this.changeSub();
  },
};
</script>

<style lang="scss" scoped>
.subscribe_btn.active {
  background: transparent;
  transition: all 0.15s;
  border: 1px solid #ff902948;
}
.subscribe_btn.active:hover {
  border-color: #ff90297e !important;
}
</style>