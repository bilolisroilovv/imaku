<template>
  <div>
     <section class="product_review_section pb-5 pt-4" id="reviews">
      <div class="container">
        <h2 class="section_title pb-4">
          Комментарии
        </h2>
        <!-- section_title -->

        <div class="row">
          <div class="col-md-8">
            <div class="product_reviews_section">
              <div class="d-flex justify-content-between align-items-center">
                <!-- <div class="d-flex align-items-center product_review_filter">
                  <span class="mr-3">Сортировать по:</span>

                  <div class="product_review_sort">
                    <vs-select
                      class="selectExample mr-3 comments_select"
                      v-model="select1"
                      @change="sortBy"
                    >
                      <vs-select-item
                        v-for="(item, index) in options1"
                        :key="index"
                        :value="item.value"
                        :text="item.text"
                      />
                    </vs-select>
                  </div>

                  <label class="control control--checkbox">
                    <input type="checkbox" checked="checked" />
                    <div class="control__indicator"></div>
                    С фото (9)
                  </label>
                </div> -->
                <!-- product_review_filter -->
                <div class="">
                  <p v-if="reviewCount === 0" class="mb-0">
                    К этому объявлению еще не оставили комментарий, будьте первыми!
                  </p>
                </div>

                <button
                  class="write_review_btn mainbtn"
                  v-if="!currentUser"
                  @click.prevent
                  v-b-modal.signModal>
                  Написать комментарий
                </button>
                <button v-if="currentUser" class="write_review_btn mainbtn" v-b-modal.postCommentModal>
                  Написать комментарий
                </button>
              </div>
              <!-- d-flex -->

              <div class="reviews">
                <div
                  class="review"
                  v-for="review in reviews"
                  :key="review.key"
                >
                  <div class="d-flex">
                    <a
                      href="#"
                      class="review_avatar"
                      :style="{
                        'background-image': 'url(' + review.author.avatar + ')'
                      }"
                    >
                    </a>
                    <!-- review_avatar -->
                    <div class="review_content w-100">
                      <div class="d-flex mb-1">
                        <a href="#" class="review_name">{{review.author.username}}</a>
                        <span class="review_time">{{review.createdAt}}</span>
                      </div>
                      <!-- d-flex -->
                      <div
                        class="d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <star-rating
                            border-color="#fc8301"
                            :border-width="2"
                            :star-points="[
                              23,
                              2,
                              14,
                              17,
                              0,
                              19,
                              10,
                              34,
                              7,
                              50,
                              23,
                              43,
                              38,
                              50,
                              36,
                              34,
                              46,
                              19,
                              31,
                              17
                            ]"
                            :star-size="12"
                            inactive-color="transparent"
                            active-color="#fc8301"
                            :show-rating="false"
                            :rating="review.rating"
                            text-class="custom-text"
                            :read-only="true"
                            :increment="0.5"
                          ></star-rating>
                          <h3 class="review_title">
                            {{ review.title }}
                          </h3>
                        </div>
  <!-- MESSAGE LIKE/DISLIKE BUTTONS -->
                        <!-- <div class="d-flex">
                          <button
                            class="review_btn d-flex align-items-center review_like"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 16 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.2222 6.52344H1.2382C0.964286 6.52344 0.742188 6.7858 0.742188 7.10944V16.4853C0.742188 16.8089 0.964253 17.0713 1.2382 17.0713H3.22217C3.49608 17.0713 3.71817 16.8089 3.71817 16.4853V7.10941C3.71817 6.7858 3.49614 6.52344 3.2222 6.52344Z"
                                fill="#D6D9DC"
                              />
                              <path
                                d="M15.6109 8.07726C15.5234 7.16823 14.8046 6.52394 14.0303 6.52394H10.1634C10.492 5.82873 10.6684 3.8624 10.6606 3.05915C10.6476 1.72955 9.71564 0.664062 8.59022 0.664062H8.18094C7.9068 0.664062 7.68494 0.926146 7.68494 1.25007C7.68494 2.60513 7.23834 5.05098 6.39605 6.04613C5.82913 6.71592 5.34448 6.95863 4.70898 7.33386V16.1266C5.68195 16.5097 6.9173 17.0717 8.80023 17.0717H12.0447C13.1138 17.0717 13.9464 15.9019 13.5322 14.666C14.1633 14.4629 14.6287 13.779 14.6287 12.9698C14.6287 12.7415 14.5915 12.5229 14.5241 12.322C15.5877 11.9797 15.9792 10.4281 15.241 9.45388C15.5122 9.09592 15.6618 8.6063 15.6109 8.07726Z"
                                fill="#D6D9DC"
                              />
                            </svg>
                            <span class="ml-1">87</span>
                          </button>
                          <button
                            class="review_btn d-flex align-items-center review_dislike ml-3"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 16 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.29935 11.3018H1.31534C1.04143 11.3018 0.819336 11.0394 0.819336 10.7158V1.33994C0.819336 1.01633 1.0414 0.753933 1.31534 0.753933H3.29931C3.57322 0.753933 3.79532 1.01629 3.79532 1.33994V10.7158C3.79532 11.0394 3.57329 11.3018 3.29935 11.3018Z"
                                fill="#D6D9DC"
                              />
                              <path
                                d="M15.688 9.74794C15.6005 10.657 14.8818 11.3013 14.1074 11.3013H10.2405C10.5692 11.9965 10.7456 13.9628 10.7377 14.766C10.7248 16.0956 9.79279 17.1611 8.66736 17.1611H8.25809C7.98395 17.1611 7.76208 16.899 7.76208 16.5751C7.76208 15.2201 7.31548 12.7742 6.4732 11.7791C5.90628 11.1093 5.42163 10.8666 4.78613 10.4913V1.69864C5.7591 1.31549 6.99445 0.753468 8.87738 0.753468H12.1219C13.191 0.753468 14.0236 1.92325 13.6093 3.1592C14.2405 3.36233 14.7059 4.0462 14.7059 4.85537C14.7059 5.08373 14.6686 5.3023 14.6013 5.50317C15.6649 5.84554 16.0564 7.3971 15.3182 8.37132C15.5894 8.72927 15.7389 9.2189 15.688 9.74794Z"
                                fill="#D6D9DC"
                              />
                            </svg>

                            <span class="ml-1">4</span>
                          </button>
                        </div> -->
                      </div>
                      <!-- d-flex -->
                      <div class="review_text">
                        <p class="mb-0">
                          {{ review.body }}
                        </p>
                        <div class="review_photos lightgallery" v-if="review.images">
                          <div
                            class="zoom-imgs item"
                            v-for="image in review.images"
                            :key="image.id"
                            :data-src="image"
                          >
                            <img :src="image" />
                          </div>
                        </div>
                        <!-- review_photos -->
  <!-- REPLY MESSAGE BUTTONS -->
                        <!-- <div class="d-flex mt-2 position-relative">
                          <a href="#" class="complain_review_btn mr-4">
                            Пожаловаться
                          </a>

                          <a
                            href="#"
                            class="complain_review_btn review_reply_btn d-block"
                          >
                            Ответить
                          </a>
                        </div> -->
  <!-- REPLY MESSAGE FORM -->
                        <!-- <form action="" class="reply_form">
                          <textarea
                            name=""
                            id=""
                            rows="4"
                            placeholder="Напишите сообщение"
                          ></textarea>
                          <div
                            class="d-flex align-items-center justify-content-end mt-2"
                          >
                            <span class="reply_form_cancelbtn mr-4"
                              >Отменить</span
                            >
                            <button class="mainbtn reply_form_sendbtn">
                              Отправить
                            </button>
                          </div>
                        </form> -->
                      </div>
                    </div>
                    <!-- review_content -->
                  </div>
                  <!-- d-flex -->
<!-- SUBREVIEW -->
                  <!-- <div class="subreview review">
                    <div class="d-flex">
                      <a
                        href="#"
                        class="review_avatar"
                        :style="{
                          'background-image': 'url(' + this.avatarImage + ')'
                        }"
                      >
                      </a>
                      <div class="review_content w-100">
                        <div
                          class="d-flex align-items-center justify-content-between"
                        >
                          <div class="d-flex mb-1">
                            <a href="#" class="review_name">Шухрат Тамзаев</a>
                            <span class="review_time">Вчера, 19:17</span>
                          </div>
                          <div class="d-flex">
                            <button
                              class="review_btn d-flex align-items-center review_like"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 16 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.2222 6.52344H1.2382C0.964286 6.52344 0.742188 6.7858 0.742188 7.10944V16.4853C0.742188 16.8089 0.964253 17.0713 1.2382 17.0713H3.22217C3.49608 17.0713 3.71817 16.8089 3.71817 16.4853V7.10941C3.71817 6.7858 3.49614 6.52344 3.2222 6.52344Z"
                                  fill="#D6D9DC"
                                />
                                <path
                                  d="M15.6109 8.07726C15.5234 7.16823 14.8046 6.52394 14.0303 6.52394H10.1634C10.492 5.82873 10.6684 3.8624 10.6606 3.05915C10.6476 1.72955 9.71564 0.664062 8.59022 0.664062H8.18094C7.9068 0.664062 7.68494 0.926146 7.68494 1.25007C7.68494 2.60513 7.23834 5.05098 6.39605 6.04613C5.82913 6.71592 5.34448 6.95863 4.70898 7.33386V16.1266C5.68195 16.5097 6.9173 17.0717 8.80023 17.0717H12.0447C13.1138 17.0717 13.9464 15.9019 13.5322 14.666C14.1633 14.4629 14.6287 13.779 14.6287 12.9698C14.6287 12.7415 14.5915 12.5229 14.5241 12.322C15.5877 11.9797 15.9792 10.4281 15.241 9.45388C15.5122 9.09592 15.6618 8.6063 15.6109 8.07726Z"
                                  fill="#D6D9DC"
                                />
                              </svg>
                              <span class="ml-1">87</span>
                            </button>
                            <button
                              class="review_btn d-flex align-items-center review_dislike ml-3"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 16 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.29935 11.3018H1.31534C1.04143 11.3018 0.819336 11.0394 0.819336 10.7158V1.33994C0.819336 1.01633 1.0414 0.753933 1.31534 0.753933H3.29931C3.57322 0.753933 3.79532 1.01629 3.79532 1.33994V10.7158C3.79532 11.0394 3.57329 11.3018 3.29935 11.3018Z"
                                  fill="#D6D9DC"
                                />
                                <path
                                  d="M15.688 9.74794C15.6005 10.657 14.8818 11.3013 14.1074 11.3013H10.2405C10.5692 11.9965 10.7456 13.9628 10.7377 14.766C10.7248 16.0956 9.79279 17.1611 8.66736 17.1611H8.25809C7.98395 17.1611 7.76208 16.899 7.76208 16.5751C7.76208 15.2201 7.31548 12.7742 6.4732 11.7791C5.90628 11.1093 5.42163 10.8666 4.78613 10.4913V1.69864C5.7591 1.31549 6.99445 0.753468 8.87738 0.753468H12.1219C13.191 0.753468 14.0236 1.92325 13.6093 3.1592C14.2405 3.36233 14.7059 4.0462 14.7059 4.85537C14.7059 5.08373 14.6686 5.3023 14.6013 5.50317C15.6649 5.84554 16.0564 7.3971 15.3182 8.37132C15.5894 8.72927 15.7389 9.2189 15.688 9.74794Z"
                                  fill="#D6D9DC"
                                />
                              </svg>

                              <span class="ml-1">4</span>
                            </button>
                          </div>
                        </div>
                        <p class="review_text pt-0 mt-0">
                          Далеко-далеко за словесными горами, в стране гласных и
                          согласных живут рыбные тексты. Своего прямо силуэт.
                        </p>
                        <div class="d-flex mt-2">
                          <a href="#" class="complain_review_btn mr-4">
                            Пожаловаться
                          </a>

                          <a
                            href="#"
                            class="complain_review_btn review_reply_btn"
                          >
                            Ответить
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div> <!-- review -->

              </div>
              <!-- reviews -->
<!-- SEE MORE BTN -->
              <!-- <button class="mainbtn see_more_btn ml-5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 341.333 341.333"
                  style="enable-background:new 0 0 341.333 341.333;"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <polygon
                        points="311.253,140.587 192,259.627 192,0 149.333,0 149.333,259.627 30.293,140.373 0,170.667 170.667,341.333 341.333,170.667"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                Показать еще
              </button> -->
            </div>
            <!-- product_reviews_section -->
          </div>
          <!-- col-md-8 -->

          <div class="col-md-4">
            <div class="product_review_stats d-flex justify-content-between">
              <div class="d-flex flex-column align-items-center">
                <h4>{{ rating }}</h4>
                <h6 class="py-2">{{reviewCount}} отзывов</h6>
                <star-rating
                  border-color="#fc8301"
                  :border-width="2"
                  :star-points="[
                    23,
                    2,
                    14,
                    17,
                    0,
                    19,
                    10,
                    34,
                    7,
                    50,
                    23,
                    43,
                    38,
                    50,
                    36,
                    34,
                    46,
                    19,
                    31,
                    17
                  ]"
                  :star-size="19"
                  inactive-color="transparent"
                  active-color="#fc8301"
                  :show-rating="false"
                  :rating="rating"
                  text-class="custom-text"
                  :read-only="true"
                  :increment="0.5"
                ></star-rating>
              </div>
              <!-- d-flex -->

              <div class="progressbar_part">
                <div class="progress_star">
                  <span>5 звезд</span>
                  <b-progress :value="stars.five" :max="100" variant="warning" class="progress myprogress"></b-progress>
                  <span>{{ stars.five }}%</span>
                </div>
                <!-- progress_star -->
                <div class="progress_star">
                  <span>4 звезд</span>
                  <b-progress :value="stars.four" :max="100" variant="warning" class="progress myprogress"></b-progress>
                  <span>{{ stars.four }}%</span>
                </div>
                <!-- progress_star -->
                <div class="progress_star">
                  <span>3 звезд</span>
                  <b-progress :value="stars.three" :max="100" variant="warning" class="progress myprogress"></b-progress>
                  <span>{{ stars.three }}%</span>
                </div>
                <!-- progress_star -->
                <div class="progress_star">
                  <span>2 звезд</span>
                  <b-progress :value="stars.two" :max="100" variant="warning" class="progress myprogress"></b-progress>
                  <span>{{ stars.two }}%</span>
                </div>
                <!-- progress_star -->
                <div class="progress_star">
                  <span>1 звезд</span>
                   <b-progress :value="stars.one" :max="100" variant="warning" class="progress myprogress"></b-progress>
                  <span>{{ stars.one }}%</span>
                </div>
                <!-- progress_star -->
              </div>
              <!-- progressbar_part -->
            </div>
            <!-- product_review_stats -->
          </div>
          <!-- col-md-4 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- product_review_section -->
    <PostCommentModal :postId="postId" />
  </div>
</template>

<script>
import PostCommentModal from "@/components/lite/desktop/Modals/PostCommentModal"
import { mapGetters } from "vuex";
import axios from 'axios'
import "lightgallery.js"
import "lightgallery.js/dist/css/lightgallery.css"

export default {
  name: "PostComments",
  components: {
    PostCommentModal
  },
  data() {
    return {
      colorLoading: "var(--main-color)",
      select1: 0,
      colorx: "var(--main-color)",
      options1: [
        { text: "Популярные", value: 0 },
        { text: "Новинки", value: 1 },
        { text: "Низкая оценка", value: 2 },
        { text: "Высокая оценка", value: 3 }
      ]
    };
  },
  props: {
    reviews: {
      type: Array,
      default: null
    },
    reviewCount: {
      type: Number,
      default: null
    },
    stars: {},
    rating: {
      type: Number,
      default: null
    },
    postId: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    async sortBy() {
      this.catData.posts = null;
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData();
      form.append("params[sort]", this.select1);

      const response = await axios
        .post("categories/" + this.id, form)
        .finally(() => this.$vs.loading.close(".con-vs-loading"));
      this.catData = response.data;
    }
  },
  mounted () {
    const elements = document.getElementsByClassName('lightgallery');
    elements.forEach(item=>{
      window.lightGallery(item, {
        thumbnail: true,
        zoom: true,
        selector: ".item"
      })
    })
  }
};
</script>

<style lang="scss" scoped>
.comments_select {
  width: 200px!important;
}
.product_reviews_section {
  background: #ffffff;
  border-radius: 8px;
  padding: 25px 30px;
}
.write_review_btn {
  border-radius: 3px;
  padding: 9px 15px;
}
.product_review_filter span {
  font-size: 15px;
  line-height: 16px;
  color: #666666;
}
.product_review_filter .control {
  font-weight: 500;
  font-size: 14px;
  color: #222;
}
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
  top: 0;
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

.product_review_sort_text {
  font-weight: 500;
  font-size: 14px;
  color: #222;
}
.product_review_sort_text svg {
  margin-left: 3px;
}
.product_review_sort_text svg path {
}
.product_review_sort_text:hover {
  color: #222;
}

.product_review_sort_text.active {
  color: var(--main-color);
}
.product_review_sort_text.active:hover {
  color: var(--main-color);
}
.product_review_sort_text.active > svg path {
  fill: var(--main-color);
}

.product_review_sort_icon_up {
  transform: rotate(180deg);
}

.reviews {
}

.review {
  border-bottom: 1px solid #eee;
  padding: 20px 0 10px 0;
}

.subreview {
  margin-left: 45px;
}
.review:last-child {
  border-bottom: 0;
}
.review_avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 16px;
}

.review_name {
  font-weight: normal;
  font-size: 15px;
  font-weight: 500;
  color: #000000;
}
.review_name:hover {
  color: #000000;
}
.review_title {
  font-weight: 500;
  font-size: 17px;
  margin-left: 10px;

  color: #000000;
}

.review_time {
  font-weight: normal;
  font-size: 13px;
  margin-left: 6px;
  color: #949494;
}

.review_text {
  font-weight: normal;
  font-size: 15px;
  line-height: 26px;
  margin: 5px 0;
  letter-spacing: 0.3px;

  color: #000;
}

.review_content {
  max-width: 90%;
}
.review_photos {
  display: flex;
  margin-top: 15px;
}

.review_photos .item {
  width: 105px;
  height: 120px;
  overflow: hidden;
  display: block;
  margin-right: 10px;
  position: relative;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
}

.review_photos .item:hover {
  filter: brightness(80%);
  transform: scale(1.05);
}
.review_photos .item img {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.25s;
  filter: brightness(100%);
}

.review_photos .item:hover > div {
}
.review_btn {
  background: transparent;
}
.review_btn span {
  font-size: 14px;
  color: #8f8f8f;
}
.review_like {
  position: relative;
  bottom: 2px;
}
.review_btn.active svg path {
  fill: var(--main-color);
}
.review_btn.active span {
  color: var(--main-color);
}
.reply_btn {
  padding: 5px 20px;
  font-size: 14px;
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
.see_more_btn {
  background: transparent !important;
  border: 2px solid var(--main-color) !important;
  color: var(--main-color);
  font-weight: 500;
  font-size: 14px;
  padding: 10px 25px;
  text-transform: uppercase;
}
.see_more_btn svg {
  margin-right: 7px;
}
.see_more_btn svg g {
  fill: var(--main-color);
}
.see_more_btn:hover {
  color: #fff;
  background: var(--main-color) !important;
}
.see_more_btn:hover svg g {
  fill: #fff;
}
.product_review_stats {
  background: #ffffff;
  border-radius: 8px;
  padding: 22px 17px;
}
.product_review_stats h4 {
  color: var(--main-color);
  font-weight: bold;
  font-size: 55px;
}

.product_review_stats h6 {
  font-weight: 300;
  font-size: 15px;

  color: #666666;
}

.progressbar_part {
  display: flex;
  flex-direction: column;
}

.progress_star {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.progress_star:last-child {
  margin-bottom: 0;
}
.progress_star span {
  font-size: 14px;

  color: #666666;
}

.myprogress {
  width: 150px;
  height: 8px !important;
  margin: 0 10px;
  border-radius: 2px !important;
}

.myprogress .progress-bar {
  background-color: var(--main-color)!important;
  border-radius: 2px;
}

.subreview {
  border: none;
}

.reply_form {
  margin-top: 25px;
  width: 100%;
  display: none;
}
.reply_form.active {
  display: block;
}
.reply_form textarea {
  width: 100%;
  outline: none;
  background: #f8f8fc;
  border-radius: 5px;
  border: none;
  padding: 20px 25px;
  color: #505050;
}
.reply_form_cancelbtn {
  background: transparent;
  color: var(--main-color);
  font-size: 15px;
  cursor: pointer;
}
.reply_form_cancelbtn:hover {
}
.reply_form_sendbtn {
  padding: 8px 30px;
  border-radius: 5px;
  font-size: 15px;
}
</style>
