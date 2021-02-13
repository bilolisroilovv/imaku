<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import SecondLayout from "@/layouts/SecondLayout";
import EmptyLayout from "@/layouts/EmptyLayout";
import ProfileLayout from "@/layouts/ProfileLayout.vue";
/* import axios from 'axios' */
/* import {mapGetters} from 'vuex' */

export default {
  data() {
    return {};
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "second") + "-layout";
    }
    /* ...mapGetters(['currentUser']) */
  },
  components: {
    MainLayout,
    SecondLayout,
    EmptyLayout,
    ProfileLayout
  },
  created() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchUser");
  }
};
</script>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: "Roboto", sans-serif !important;
  background: #f8f8fc !important;
}
/*
  font-family: 'Inter', sans-serif;
  font-family: 'Roboto', sans-serif;
*/
::-moz-selection {
  background-color: #ff9029;
  color: #000000;
}
::selection {
  background-color: #ff9029;
  color: #000000;
}
:root {
  --plyr-color-main: #ff9029;
  --plyr-badge-text-color: #000;
  --plyr-video-range-thumb-active-shadow-color: #ff3;
  --plyr-video-control-background-hover: rgba(0, 0, 0, 0);
  --main-color: #ff9029;
}

$color: #ff9029;

canvas {
  width: 100%;
}
body input:focus:required:invalid,
body textarea:focus:required:invalid {
}
body input:required:valid,
body textarea:required:valid {
}
input:active,
input:focus,
button:active,
button:focus {
  outline: none;
}
textarea {
  resize: vertical;
}
ul {
  padding: 0;
  margin: 0;
  margin-bottom: 0 !important;
  list-style: none;
}
a {
  text-decoration: none !important;
}
a:hover {
  color: #fff;
}
button {
  border: none;
  outline: none !important;
}
label {
  margin-bottom: 0 !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0 !important;
}
header {
  width: 100%;
}
hr {
  border-top: 1px solid #e5e5e5;
  margin: 0 !important;
}

body.modal-open {
  overflow: inherit;
  padding-right: 0 !important;
}
.modal {
}
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.complain_review_btn {
  color: #555;
  transition: all 0.2s;
  font-size: 15px;
  border-bottom: 1px dashed #555;
}
.complain_review_btn:hover {
  color: var(--main-color);
  border-bottom: 1px dashed var(--main-color);
}
.modal.fade .modal-dialog {
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
  -webkit-transform: translateY(-10px) !important;
  transform: translateY(-10px) !important;
}
.modal.fade.show .modal-dialog {
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
  -webkit-transform: translateY(0) !important;
  transform: translateY(0) !important;
}
.modal .modal-title {
  font-weight: 900;
  font-size: 25px;
  color: #000000;
  font-family: "Inter", sans-serif;
}
.modal .close {
  position: absolute;
  top: 10px;
  padding: 5px;
  right: 15px;
  width: 25px;
  opacity: 0.7;
  transition: all 0.15s;
}
.modal .close:hover {
  opacity: 1 !important;
}
.modal .modal-content {
  border: none;
  border-radius: 15px;
  overflow: hidden;
}
.modal .modal-content {
  border-radius: 10px;
}
@media (min-width: 576px) {
  .modal .modal-dialog {
    max-width: 600px;
  }
  #signModal .modal-dialog {
    max-width: 380px;
  }
  #followersModal .modal-dialog {
    max-width: 380px;
  }
}
#signModal .modal-header {
  display: none;
}
#signModal .modal-footer {
  display: none;
}
#signModal .modal-body {
  padding: 27px 2rem;
}
#followersModal .modal-header {
  display: none;
}
#followersModal .modal-footer {
  display: none;
}
#followersModal .modal-body {
}
.sign_modal_form {
  display: flex;
  flex-direction: column;
  position: relative;
}
.sign_modal_form span {
  font-size: 12px;
  color: #adadad;
  display: inherit;
}
.sign_modal_form label {
  font-weight: normal;
  font-size: 15px;

  color: #353535;
}
.sign_modal_form button {
  padding: 9px 30px;
  font-family: "Inter", sans-serif;
}
.sign_modal_form input {
  background: #d6dbe027;
  border-radius: 3px;
  padding: 8px 10px;
  border: 2px solid #d6dbe0;
  font-weight: 500;
  width: 100%;
  color: #6b6b6b;
  transition: all 0.2s;
  font-family: "Inter", sans-serif;
  font-size: 15px;
}
.sign_modal_form input::placeholder {
  color: #afb0b1;
  font-family: "Inter", sans-serif;
}
.sign_modal_form input:hover {
  background: #fff;
  border-color: rgba(250, 169, 93, 0.603);
}
.sign_modal_form input:focus {
  background: #fff;
  border-color: rgba(250, 169, 93, 0.603);
  /* box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.05); */
}
.sign_modal_form .product_sidebar_socials a {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
.sign_modal_form .product_sidebar_socials span {
  font-size: 14px;
  color: #808080;
  font-family: "Inter", sans-serif;
}
.sign_modal_terms_link label {
  color: #333333;
  font-size: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}
.myd-flex {
  display: flex;
}
.maincolor_link {
  color: var(--main-color);
}
.maincolor_link:hover {
  color: var(--main-color);
}
.underline {
  text-decoration: underline !important;
}
.section {
  padding: 20px 0;
  position: relative;
}
.mybg_center {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.flex-center {
  align-items: center;
  justify-content: center;
}
.position-bottom-right {
  right: 10px;
  bottom: -11px;
}
.section_title {
  font-weight: bold;
  font-size: 33px;
  color: #000;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  padding: 0 !important;
}
.img-width {
  max-width: 100%;
}
.mycontainer {
  padding: 0 60px;
  margin: 0 auto;
}
.myhover_text {
  transition: all 0.2s;
}
.myhover_text:hover {
  color: var(--main-color) !important;
}
.myhover_bg {
  position: relative;
}
.myhover_bg:before {
  content: "";
  display: block;
  background: #000;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  pointer-events: none;
}
.myhover_bg:hover:before {
  opacity: 0.15;
}
.myhover_bg3 {
  transition: all 0.3s;
}
.myhover_bg3:hover:before {
  opacity: 0.35;
}
.myhover_bg2 .mycard_img {
  position: relative;
}
.myhover_bg2 .mycard_img:before {
  content: "";
  display: block;
  background: #000;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  pointer-events: none;
}
.myhover_bg2:hover .mycard_img:before {
  opacity: 0.2;
}
.text_ellipsis12 {
  display: block !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text_ellipsis1 {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
}
.nowrap {
  white-space: nowrap;
}
.text_ellipsis2 {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
}
@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1350px !important;
  }
}
@media (min-width: 1350px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1300px !important;
  }
}
/* START Btns styles */
.grid-container {
  display: grid;
  max-width: 100%;
}
.grid-gap-10 {
  grid-gap: 10px;
}
.grid-gap-20 {
  grid-gap: 20px;
}
.grid-template-5 {
  grid-template-columns: repeat(5, 1fr);
}

.grid-template-4 {
  grid-template-columns: repeat(4, 1fr);
}
.vue-file-agent .is-deletable .file-preview .file-name {
  display: none !important;
}
.vue-file-agent .file-category-video-playable .file-preview:before,
.vue-file-agent .file-preview-wrapper-image .file-preview:before {
  display: none !important;
}
.vue-file-agent .file-preview .image-dimension {
  display: none !important;
}
.vue-file-agent .file-category-video-playable .file-preview:after,
.vue-file-agent .file-preview-wrapper-image .file-preview:after {
  display: none !important;
}
.grid-template-3 {
  grid-template-columns: repeat(3, 1fr);
}
.grid-template-2 {
  grid-template-columns: repeat(2, 1fr);
}
.grid-gap-15 {
  grid-gap: 15px;
}
.mainbtn {
  border-radius: 3px;
  border: none !important;
  color: var(--main-color);
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  background: var(--main-color) !important;
  color: #fff;
  transition: all 0.2s;
  overflow: hidden;
}
.mainbtn:hover {
  background: #ec8321 !important;
  color: #fff;
}
.mainbtn:hover svg path {
  fill: var(--main-color);
}
.mainbtn.dark {
  background: #343538;
}
.mainbtn2 {
  border-radius: 100px;
  border: 2px solid var(--main-color) !important;
  color: var(--main-color);
  padding: 11px 25px;
  border: none;
  background: transparent;
  transition: all 0.2s;
}
.mainbtn2:hover {
  background: var(--main-color);
  color: #fff;
}

.mainbtn2.dark {
  background: #343538;
}
.mainbtn2 svg path {
  fill: var(--main-color);
}
.mainbtn2:hover svg path {
  fill: #fff;
}
.subscribe_btn {
  font-size: 13px;
  color: var(--main-color);
  border-radius: 5px;
  font-weight: normal;
  padding: 5px 13px;
  border: none;
  border: 1px solid transparent;
  background: #ff902948;
}
.subscribe_btn.active {
  background: transparent;
  transition: all 0.2s;
  border: 1px solid #ff902948;
}
.subscribe_btn.active:hover {
  border: 1px solid var(--main-color);
}
/* END Btns styles */
.control {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 18px;
}
.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.control__indicator {
  position: absolute;
  top: 1px !important;
  left: 0;
  height: 20px;
  width: 20px;
  background: transparent;
  border: 2px solid #cacaca;
  border-radius: 3px;
}
.control--radio .control__indicator {
  border-radius: 50%;
}
.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: transparent;
}
.control input:checked ~ .control__indicator {
  background: var(--main-color);
  border: 2px solid var(--main-color);
}
.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: var(--main-color);
  border: 2px solid var(--main-color);
}
.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.6;
  pointer-events: none;
}
.control__indicator:after {
  content: "";
  position: absolute;
  display: none;
}
.control input:checked ~ .control__indicator:after {
  display: block;
}
.control--checkbox .control__indicator:after {
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}
.control--radio .control__indicator:after {
  left: 7px;
  top: 7px;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: #fff;
}
.control--radio input:disabled ~ .control__indicator:after {
  background: #7b7b7b;
}
.main_select {
  min-width: 250px;
  background: #f8f8fc;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  padding: 8px 10px;
}
.main_select .vs__dropdown-toggle {
  border: none;
  cursor: pointer !important;
}
.main_select .vs__search {
  cursor: pointer;
  font-size: 15px;
  font-family: "Inter", sans-serif;
}
.main_select .vs__search:focus {
  font-size: 15px;
  font-family: "Inter", sans-serif;
}
.main_select .vs__actions {
  cursor: pointer;
}
.main_select .vs__selected-options {
  cursor: pointer;
}
.main_select .vs__fade-enter-active,
.main_select .vs__fade-leave-active {
  transition: none;
}
.main_select .vs--searchable {
  cursor: pointer;
}
.select_icon {
  font-size: 14px;
  color: #777;
}
.con-select {
  width: 300px !important;
}
.vs-select--input {
  border: none !important;
  border-radius: 3px !important;
  background: #efeff8 !important;
  padding: 11px 25px 11px 10px !important;
  transition: all 0.2s !important;
  font-family: "Inter", sans-serif !important;
  font-size: 15px;
  color: #313131 !important;
  letter-spacing: 0.3px;
}
.vs-select--input:hover {
  /* border-color: rgba(250, 169, 93, 0.603)!important; */
}
.vs-select--icon {
  color: rgb(87, 87, 87) !important;
  right: 10px !important;
}
.inter_font {
  font-family: "Inter", sans-serif !important;
}
.text-bold {
  font-weight: 600;
}
.vs-select--item {
  font-size: 15px;
  color: #313131 !important;
  padding: 5px 7px !important;
}
.vs-select--item.activex {
  background: rgba(255, 201, 150, 0.377) !important;
  color: var(--main-color) !important;
  font-weight: 500 !important;
}
/* .con-vs-loading {
  position: absolute!important;
} */
.con-img-upload {
  padding: 0 !important;
  margin: 0 !important;
  background: transparent !important;
}
.con-input-upload {
  border-radius: 4px !important;
  border: none !important;
  background: #ffffff !important;
  width: 122px !important;
  height: 122px !important;
  margin: 5px !important;
}
.img-upload {
  width: 122px !important;
  height: 122px !important;
}
.con-upload {
  width: auto !important;
  display: inline-block !important;
}
.text-input {
  position: relative;
  top: 25px !important;
  color: #a7a7b6;
  font-size: 14px;
  font-family: "Inter", sans-serif !important;
  font-weight: 500 !important;
}
.con-input-upload input {
  z-index: 2;
}
.text-input:after {
  content: "";
  width: 38px;
  height: 38px;
  display: block;
  background: url(./assets/lite/camera.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  position: absolute;
  left: 50%;
  top: -200%;
  transform: translate(-50%, 0);
}
.category_select .vs-select--input {
  border: 2px solid #fff !important;
  border-radius: 3px !important;
  background: #fff !important;
  padding: 8px 25px 8px 10px !important;
  transition: all 0.2s !important;
  font-family: "Inter", sans-serif !important;
  font-size: 15px !important;
  color: #6b6b6b !important;
  letter-spacing: 0.3px !important;
}
.category_select .vs-select--input:hover {
  background: #fff;
  border-color: #fff !important;
}
.filter_collapse {
  padding: 0 !important;
}
.filter_collapse .vs-collapse-item--header h5 {
  font-weight: bold !important;
  font-size: 19px;
  font-family: "Inter", sans-serif !important;
}
.filter_collapse .con-content--item {
  padding-top: 10px;
  padding-bottom: 20px;
}
.filter_collapse .vs-collapse-item--header {
  padding: 15px 10px !important;
}

.vs-dropdown--menu {
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05) !important;
  border-radius: 5px !important;
  border: none !important;
}
.vs-dropdown--item {
  transition: all 0.2s !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0px 5px !important;
}
.vs-dropdown--item .vs-dropdown--item-link {
  transition: all 0.2s !important;
  color: #313131 !important;
  font-size: 14px;
  padding: 5px 20px 5px 10px !important;
}
.vs-dropdown--item:hover .vs-dropdown--item-link {
  color: #000 !important;
  background: #f5f5f5 !important;
}
.vs-dropdown--item .vs-dropdown--item-link:hover {
  color: #000 !important;
  background: #f5f5f5 !important;
}
.vs-dropdown--menu--after,
.vs-dropdown-right--menu--after {
  display: none !important;
}
.con-vs-slider {
  min-width: 200px !important;
}
.price_filter .vs-slider--circle-text {
  opacity: 0 !important;
}
.header_profile_links a {
  font-size: 15px !important;
}
.wrapper {
  min-height: 100vh;
}
footer {
}
</style>
