<template>
  <!-- The modal -->
  <b-modal id="confirmModal" centered title="BootstrapVue">
    <div class="loading_div">
      <div class="mymodal-header justify-content-center">
        <button type="button" @click="$bvModal.hide('confirmModal')" class="close">
          <img src="@/assets/lite/close.png" class="img-width" alt="" />
        </button>
      </div>
      <h5 class="modal-title pb-0 pr-4" id="exampleModalLabel">
        Вы уверены что хотите удалить это объявление?
      </h5>
      <div class="mt-3 d-flex justify-content-end align-items-center">
        <button class="cancelBtn" @click="hideModal">Отменить</button>
        <button class="mainbtn removeBtn" @click="removePost">Удалить</button>
      </div>
    </div>
    <!-- loading_div -->
  </b-modal>
</template>

<script>
import axios from "axios"
export default {
  name: "ConfirmModal",
  data() {
    return {
      colorLoading: "var(--main-color)"
    }
  },
  props: {
    postId: {
      type: Number,
      default: null,
    }
  },
  methods: {
    hideModal() {
      this.$bvModal.hide("confirmModal")
    },
    async removePost() {
      this.$bvModal.hide("confirmModal")
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });
      const response = await axios
        .get("posts/delete/" + this.postId)
        .finally(() =>
          setTimeout(() => {
            this.$vs.loading.close(".con-vs-loading");
          }, 10)
        );
      this.$vs.notify({
        color: "success",
        title: "Успех",
        text: "Объявление успешно удалено"
      });
      this.$emit("removePost", response);
    }
  }
};
</script>

<style lang="scss" scoped>
.cancelBtn {
  font-size: 16px;
  padding: 8px 15px;
  font-family: "Inter";
  color: var(--main-color);
  font-weight: 500;
  background: transparent!important;
  border: none!important;
}
.cancelBtn:hover {
  background: rgb(117, 114, 114);
}
.removeBtn {
  padding: 5px 20px!important;
}
.removeBtn:hover {
}
.modal-title {
  font-size: 18px;
}
.loading_div {
  max-height: 100%;
}
.error_message {
  color: red !important;
}
</style>
