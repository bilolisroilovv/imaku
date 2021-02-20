<template>
  <div class="search_group">
    <form
      action=""
      id="search"
      @submit.prevent="handleSubmit"
      class="navbar_form position-relative"
    >
      <div
        class="border-radius-100"
        ref="button"
        @click="searchDropdownVisible = true"
      >
        <input
          type="text"
          id="search-field"
          :placeholder="inputPlaceholder"
          class="navbar_search_input"
          v-model="runtimeTranscription"
          :class="{ active: searchDropdownVisible }"
        />
      </div>
      <img src="@/assets/lite/search_icon.svg" class="search_icon" alt="" />
      <div class="d-flex search_input_icons">
        <button type="reset" class="input_reset_icon mr-2">
          <img src="@/assets/lite/cancel.svg" class="img-width" alt="" />
        </button>
        <span
          class="header_input_icon microphone_button"
          :class="{active: speaking}"
          data-toggle="tooltip"
          data-placement="top"
          @click="startSpeechToTxt"
          id="voice-trigger"
          :title="$t('search.voice_search')"
        >
          <img src="@/assets/lite/microphone.svg" class="img-width" alt="" />
        </span>
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
      <!-- <SearchDropdown
        v-show="searchDropdownVisible"
        v-closable="{
          exclude: ['button'],
          handler: 'onClose'
        }"
      /> -->
    </form>
    <!-- navbar_form -->
    <!-- <div
      class="px-2 pt-2 search_prompts"
      :class="{ 'd-none': scrollPosition > 220 }"
      v-if="$route.path === '/ru/' || $route.path === '/uz/' || $route.path === '/ru' || $route.path === '/uz' || $route.path === '/'"
    >
      <a href="#" class="myhover_text">Худи</a>
      <span>|</span>
      <a href="#" class="myhover_text">Iphone 12</a>
      <span>|</span>
      <a href="#" class="myhover_text">Chevrolet Cobalt</a>
      <span>|</span>
      <a href="#" class="myhover_text">Ноутбук 8gb</a>
      <span>|</span>
      <a href="#" class="myhover_text">Дача Аренда</a>
    </div> -->
    <!-- d-flex -->
  </div>
  <!-- w-100 -->
</template>

<script>
/* import SearchDropdown from "@/components/lite/desktop/SearchDropdown"; */
/* import axios from 'axios' */
/* import $ from "jquery"; */
export default {
  name: "SearchGroup",
  components: {
    /* SearchDropdown */
  },
  props: {
    scrollPosition: Number,
  },
  data() {
    return {
      searchDropdownVisible: false,
      inputPlaceholder: "Поиск объявлений, магазинов, аккаунтов",
      runtimeTranscription: "",
      transcription: [],
      lang: "ru-RU",
      searchContent: null,
      error: false,
      speaking: false,
      toggle: false,
    };
  },
  mounted() {},
  methods: {
    startSpeechToTxt() {
      // initialisation of voicereco

      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang;
      recognition.interimResults = true;

      // event current voice reco word
      recognition.addEventListener("result", (event) => {
        var text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        this.runtimeTranscription = text;
      });
      // end of transcription
      recognition.addEventListener("end", () => {
        this.transcription.push(this.runtimeTranscription);
        /* this.runtimeTranscription = ""; */
        recognition.stop();
        this.speaking = false
        this.handleSubmit()
      });
      recognition.start();
      this.runtimeTranscription = ""
      this.speaking = true
      this.inputPlaceholder = "Говорите..."
    },
    searchDropdowntoggle() {
      this.searchDropdownVisible = !this.searchDropdownVisible;
    },
    onClose() {
      this.searchDropdownVisible = false;
    },
    handleSubmit() {
      /* axios.get('search?query=' + this.searchContent) */
      this.$router.push({
        name: "SearchPage",
        params: { query: this.runtimeTranscription },
      });
    },
  },
  /*  beforeCreate() {
    try {
      let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition(); // eslint-disable-line
    } catch(error) {
      console.error(error);
    }
  }, */
  computed: {},
  events: {},
};
</script>

<style scoped>
#voice-trigger.active {
  /* background: rgb(248, 154, 154); */
}
.microphone_button.active {
  background: transparent;
  animation-name: microphoneAnim;
  animation-duration: 0.7s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.microphone_button.active:hover {
  background: transparent!important;
}
@keyframes microphoneAnim {
  0%   {transform: scale(1);}
  100% {transform: scale(1.2);}
}
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
@media screen and (max-width: 1400px) {
  .navbar_search_input {
    width: 600px !important;
  }
}
.navbar_search_input:hover {
  background: #e3e3ed;
}
/* .navbar_search_input:focus {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: #fff;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
} */
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
  cursor: pointer;
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
  font-family: "Inter", sans-serif;
}
</style>
