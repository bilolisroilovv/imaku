<template>
  <div class="search_group">
    <form action="" class="navbar_form position-relative">
      <div
        class="border-radius-100"
        ref="button"
        @click="searchDropdownVisible = true"
      >
        <input
          type="text"
          :placeholder="$t('search.title')"
          class="navbar_search_input"
          :class="{ active: searchDropdownVisible }"
        />
      </div>
      <img src="@/assets/lite/search_icon.svg" class="search_icon" alt="" />
      <div class="d-flex search_input_icons">
        <button type="reset" class="input_reset_icon mr-2">
          <img src="@/assets/lite/cancel.svg" class="img-width" alt="" />
        </button>
        <a
          href="#"
          class="header_input_icon"
          data-toggle="tooltip"
          data-placement="top"
          :title="$t('search.voice_search')"
        >
          <img src="@/assets/lite/microphone.svg" class="img-width" alt="" />
        </a>
        <!-- header_input_icon -->
        <a
          href="#"
          class="header_input_icon"
          data-toggle="tooltip"
          data-placement="top"
          :title="$t('search.photo_search')"
        >
          <img src="@/assets/lite/camera.svg" class="img-width" alt="" />
        </a>
        <!-- header_input_icon -->
      </div>
      <!-- search_input_icons -->
      <SearchDropdown
        v-show="searchDropdownVisible"
        v-closable="{
          exclude: ['button'],
          handler: 'onClose'
        }"
      />
    </form>
    <!-- navbar_form -->
  </div>
  <!-- w-100 -->
</template>

<script>
import SearchDropdown from "@/components/lite/desktop/SearchDropdown";

export default {
  name: "SearchGroup",
  components: {
    SearchDropdown
  },
  props: {
    scrollPosition: Number
  },
  data() {
    return {
      searchDropdownVisible: false
    };
  },
  methods: {
    searchDropdowntoggle() {
      this.searchDropdownVisible = !this.searchDropdownVisible;
    },
    onClose() {
      this.searchDropdownVisible = false;
    }
  },
  computed: {},
  events: {}
};
</script>

<style scoped>
.border-radius-100 {
  border-radius: 100px;
}
.navbar_form {
  width: 100%;
  border-radius: 111px;
}
.navbar_search_input {
  background: #ececf5;
  border-radius: 111px;
  padding: 14px 25px 14px 53px;
  border: none;
  width: 650px;
  font-size: 15px;
  color: #505050;
  transition: all 0.2s;
  font-family: "Inter", sans-serif;
}
.navbar_search_input:hover {
  background: #e3e3ed;
}
.navbar_search_input:focus {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: #fff;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
}
.search_icon {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(0, -50%);
  width: 17px;
}
.search_input_icons {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(0, -50%);
}
.input_reset_icon {
  width: 12px;
  background: transparent;
  display: none;
}
.input_reset_icon.active {
  display: block;
}
.header_input_icon {
  width: 30px;
  height: 30px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 6px;
}
.header_input_icon:hover {
  background: #dddde6;
}
.header_input_icon:active {
  background: #d1d1d6;
}
.header_input_icon:focus {
  background: #d1d1d6;
}
.header_input_icon svg path {
  transition: all 0.2s;
  fill: #555;
}
.search_prompts span {
  font-size: 13px;
}
.search_prompts a {
  font-weight: normal;
  font-size: 13px;
  padding: 0 12px;
  color: #555555;
}
</style>
