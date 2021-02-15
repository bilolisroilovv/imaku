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
          :placeholder="$t('search.title')"
          class="navbar_search_input"
          v-model="searchContent"
          :class="{ active: searchDropdownVisible }"
        />
      </div>
      <img src="@/assets/lite/search_icon.svg" class="search_icon" alt="" />
      <div class="d-flex search_input_icons">
        <button type="reset" class="input_reset_icon mr-2">
          <img src="@/assets/lite/cancel.svg" class="img-width" alt="" />
        </button>
        <span
          class="header_input_icon"
          data-toggle="tooltip"
          data-placement="top"
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
import $ from "jquery";
export default {
  name: "SearchGroup",
  components: {
    /* SearchDropdown */
  },
  props: {
    scrollPosition: Number
  },
  data() {
    return {
      searchDropdownVisible: false,
      searchContent: null
    };
  },
  methods: {
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
        params: { query: this.searchContent }
      });
    }
  },
  computed: {},
  events: {},
  mounted() {
    var $voiceTrigger = $("#voice-trigger");
    var $searchInput = $("#search-field");
    var $result = $("#result"); // eslint-disable-line

    /*  set Web Speech API for Chrome or Firefox */
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    /* Check if browser support Web Speech API, remove the voice trigger if not supported */
    if (window.SpeechRecognition) {
      /* setup Speech Recognition */
      var recognition = new SpeechRecognition(); // eslint-disable-line
      recognition.interimResults = true;
      recognition.lang = "ru-RU";
      recognition.addEventListener("result", _transcriptHandler);

      recognition.onerror = function(event) {
        console.log(event.error);

        /* Revert input and icon CSS if no speech is detected */
        if (event.error == "no-speech") {
          $voiceTrigger.removeClass("active");
          $searchInput.attr("placeholder", "Поиск...");
        }
      };
    } else {
      $voiceTrigger.remove();
    }

    $(document).ready(function() {
      /* Trigger listen event when our trigger is clicked */
      $voiceTrigger.on("click touch", listenStart);
    });

    /* Our listen event */
    function listenStart(e) {
      e.preventDefault();
      /* Update input and icon CSS to show that the browser is listening */
      $searchInput.attr("placeholder", "Говорите...");
      $voiceTrigger.addClass("active");
      /* Start voice recognition */

      recognition.start();
    }

    /* Parse voice input */
    function _parseTranscript(e) {
      return Array.from(e.results)
        .map(function(result) {
          return result[0];
        })
        .map(function(result) {
          return result.transcript;
        })
        .join("");
    }

    /* Convert our voice input into text and submit the form */
    function _transcriptHandler(e) {
      var speechOutput = _parseTranscript(e);
      $searchInput.val(speechOutput);
      //$result.html(speechOutput);
      if (e.results[0].isFinal) {
        this.handleSubmit()
      }
    }
  }
};
</script>

<style scoped>
#voice-trigger.active {
  background: rgb(248, 154, 154);
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
