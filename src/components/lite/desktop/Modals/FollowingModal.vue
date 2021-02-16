<template>
  <b-modal id="followingModal" centered>
    <div class="loading_div">
      <div class="mymodal-header justify-content-center">
        <button
          type="button"
          @click="$bvModal.hide('followingModal')"
          class="close"
        >
          <img src="@/assets/lite/close.png" class="img-width" alt="" />
        </button>
        <h5 class="modal-title pb-3" id="exampleModalLabel">
          Подписки
        </h5>
      </div>
      <!-- mymodal-header -->

      <div class="mymodal_body">
        <router-link
          class="follower d-flex"
          v-for="follower in following"
          :key="follower.id"
          :to="{
            name: 'SellerPage',
            params: {
              id: follower.id,
              name: follower.name
            }
          }"
        >
          <div class="d-flex align-items-center">
            <div
              class="avatar mr-2 mybg_center"
              :style="{ 'background-image': 'url(' + follower.avatar + ')' }"
            ></div>
            <!-- avatar -->
            <div class="maxw-65 ml-1">
              <h3 class="name text_ellipsis1">
                {{ follower.name }}
              </h3>
              <!-- name -->
              <p class="desc mb-0 text_ellipsis1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                odit voluptas aliquam accusantium iure, fuga est ullam ex
                ratione nemo eligendi provident neque beatae. Aliquid adipisci
                quam nisi mollitia cupiditate?
              </p>
            </div>
          </div>
          <!-- <div>
            <button>
              Удалить
            </button>
          </div> -->
        </router-link>
      </div>
      <!-- mymodal_body -->
    </div>
    <!-- loading_div -->
  </b-modal>
</template>

<script>
export default {
  name: "FollowingModal",
  props: {
    following: {
      type: Array
    }
  },
  data() {
    return {
    };
  },
  watch: {
    followers(val) {
      console.log(this.following, val);
    }
  }
};
</script>

<style lang="scss" scoped>
.mymodal_body {
  max-height: 350px;
  overflow: auto;
}
.follower {
  align-items: center;
  justify-content: space-between;
  padding: 7px 0;
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .maxw-65 {
    max-width: 65%;
  }
  .name {
    font-family: "inter";
    font-size: 17px;
    color: #000;
    font-weight: bold;
  }
  .desc {
    font-family: "inter";
    font-size: 14px;
    color: #000;
  }
}
.loading_div {
  max-height: 100%;
}
</style>
