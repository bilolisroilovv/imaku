import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import StarRating from "vue-star-rating";
import VueTheMask from "vue-the-mask";
import vSelect from "vue-select";
import InputMask from "vue-input-mask";
import i18n from "./i18n";
import VueFileAgent from "vue-file-agent";
import VueFileAgentStyles from "vue-file-agent/dist/vue-file-agent.css";
import Vuesax from 'vuesax'
import { SlickList, SlickItem } from 'vue-slicksort';
import "./axios";
import 'vuesax/dist/vuesax.css'
import "material-icons/iconfont/material-icons.css";
import "vue-select/dist/vue-select.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./registerServiceWorker";

import _ from "lodash";
Object.defineProperty(Vue.prototype, "$_", { value: _ });

// import Echo from "laravel-echo";
// window.Pusher = require("pusher-js");

// window.Echo = new Echo({
//   broadcaster: "pusher",
//   key: "01bf1bff746b7b43db62",
//   cluster: "ap2",
//   encrypted: true
//   // authEndpoint: "http://192.168.5.56:8000/broadcasting/auth"
// });

Vue.component("vfa-sortable-list", SlickList);
Vue.component("vfa-sortable-item", SlickItem);

Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);
Vue.use(VueTheMask);
// Vue.use(VueAwesomeSwiper)
Vue.use(BootstrapVue);
Vue.use(Vuesax);
Vue.component('vfa-sortable-list', SlickList);
Vue.component('vfa-sortable-item', SlickItem);
Vue.component("input-mask", InputMask);
Vue.component("v-select", vSelect);
Vue.component("star-rating", StarRating);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "ru";
  }

  i18n.locale = language;
  next();
});

/* let handleOutsideClick;
Vue.directive("closable", {
  bind(el, binding, vnode) {
    handleOutsideClick = e => {
      e.stopPropagation();
      const { handler, exclude } = binding.value;
      let clickedOnExcludedEl = false;
      exclude.forEach(refName => {
        if (!clickedOnExcludedEl) {
          const excludedEl = vnode.context.$refs[refName];
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },

  unbind() {
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  }
}); */

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
