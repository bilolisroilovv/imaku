<template>
  <b-modal id="postCommentModal" centered>
    <div class="loading_div">
      <div class="mymodal-header justify-content-center">
        <button
          type="button"
          @click="$bvModal.hide('postCommentModal')"
          class="close"
        >
          <img src="@/assets/lite/close.png" class="img-width" alt="" />
        </button>
        <h5 class="modal-title pb-1" id="exampleModalLabel">
          Оставить комментарий
        </h5>
      </div>
      <!-- mymodal-header -->

      <div class="mymodal_body">
        <form action="" @submit.prevent="handleSubmit" class="post_comment_form">
          <b-form-rating v-model="rating" class="mb-2" :color="mainColor" id="rating-inline" inline no-border size="lg"></b-form-rating>
          <input v-model="title" class="mb-2 title" type="text" placeholder="Заголовок">
          <textarea v-model="text" class="mb-2 text" name="" placeholder="Добавьте комментарий" id="" rows="5"></textarea>
          <VueFileAgent
            ref="files"
            :theme="'default'"
            :multiple="true"
            :deletable="true"
            :meta="true"
            :maxSize="'10MB'"
            :maxFiles="14"
            :helpText="'Добавьте фотографии'"
            required
            :errorText="{
              type: 'Invalid file type. Only images or zip Allowed',
              size: 'Files should not exceed 10MB in size'
            }"
            v-model="files"
            @beforedelete="postImagesDelete($event)"
          ></VueFileAgent>
          <button type="submit" class="mainbtn mt-3">Опубликовать</button>
        </form>
      </div><!-- mymodal_body -->

    </div><!-- loading_div -->
  </b-modal>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostCommentModal',
  data() {
    return {
      rating: 4,
      title: "",
      text: "",
      files: [],
      mainColor: "var(--main-color)"
    }
  },
  props: {
    postId: {}
  },
  methods: {
    async handleSubmit() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const form = new FormData()
      form.append('rating', this.rating)
      form.append('title', this.title)
      form.append('body', this.text)
      if (this.files) {
        for (var screens = 0; screens < this.files.length; screens++) {
          form.append("images[" + screens + "]", this.files[screens].file);
        }
      }

      await axios
        .post("posts/store-comment/" + this.postId, form, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .finally(() => this.$vs.loading.close(".con-vs-loading"));
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Комментарий успешно размещен"
      });
    }
  },
}
</script>

<style lang="scss" scoped>

#rating-inline {
  max-width: 150px;
  padding: 5px 0;
  box-shadow: none!important;
}
.post_comment_form {
  display: flex;
  flex-direction: column;
}
.post_comment_form .text {
  width: 100%;
  background: #f8f8fc;
  border-radius: 4px;
  border: none;
  padding: 10px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #000;
}
.post_comment_form .title,
.post_comment_form .text {
  background: #d6dbe027;
  border-radius: 3px;
  padding: 8px 14px;
  border: 2px solid #d6dbe0;
  font-weight: 500;
  width: 100%;
  color: #6b6b6b;
  transition: all 0.2s;
  font-family: "Inter", sans-serif;
  font-size: 15px;
}
.post_comment_form .title::placeholder,
.post_comment_form .text::placeholder {
  color: #afb0b1;
  font-family: "Inter", sans-serif;
}
.post_comment_form .title:hover,
.post_comment_form .text:hover {
  background: #fff;
  border-color: rgba(250, 169, 93, 0.603);
}
.post_comment_form .title:focus,
.post_comment_form .text:focus {
  background: #fff;
  border-color: rgba(250, 169, 93, 0.603);
  /* box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.05); */
}
.loading_div {
  max-height: 100%;
}
</style>
