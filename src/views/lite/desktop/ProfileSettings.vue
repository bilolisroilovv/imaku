<template>
  <div class="w-71">
    <div class="post_add_block">
      <h2 class="pb-4 mb-3">{{ $t("profile.settings") }}</h2>
      <div>

        <div class="d-flex align-items-center myinput_group pb-4">
          <label for="">{{ $t('profile_settings.fullname') }} <span>*</span></label>
          <input type="text" placeholder="" v-model="name" />
        </div>
        <!-- d-flex -->
        <div class="d-flex align-items-center myinput_group pb-4">
          <label for="">{{ $t('profile_settings.nickname') }}</label>
          <input type="text" placeholder="" v-model="username" />
        </div>
        <!-- d-flex -->

        <div class="d-flex myinput_group pb-4">
          <label for="">{{ $t('profile_settings.desc') }}</label>
          <textarea id="" rows="7" v-model="description"></textarea>
        </div>
        <div class="d-flex myinput_group pb-4">
          <label for="">{{ $t('profile_settings.phone') }} <span>*</span></label>
          <div class="w-100">
            <input
              type="tel"
              v-mask="'+998 (##) ###-##-##'"
              v-model="phone"
              :placeholder="$t('modal.login')"
              required
              value="+998 (90) 478-21-42"
            />
          </div>
        </div>
        <!-- d-flex -->
        <div class="d-flex justify-content-end myinput_group pt-4">
          <a
            href="#"
            @click.prevent="handleSubmit()"
            class="mainbtn inter_font text-bold"
            >{{ $t('profile_settings.save') }}</a
          >
        </div>
        <!-- d-flex -->
      </div>
      <!-- v-if="isCharactersShow" -->
    </div><!-- post_add_block -->
  </div>
</template>

<script>
/* import axios from 'axios' */

export default {
  name: 'ProfileSettings',
  data() {
    return {
      phone: 998901112233
    }
  },
  async mounted () {
    /* const response = await axios.get('profile/settings/' + author.id);
    this.name = response.data.name
    this.username = response.data.username
    this.description = response.data.description
    this.phone = response.data.phone */
  },
};
</script>

<style lang="scss" scoped>
.w-71 {
  width: 71%;
  padding: 0 15px;
}
.post_add_block {
  background: #fff;
  padding: 45px;
  border-radius: 8px;
}
.post_add_block h2 {
  color: #000;
  font-size: 32px;
  font-weight: 900;
  font-family: "Inter", sans-serif;
}
.myinput_group label {
  letter-spacing: 0.3px;
  color: #242424;
  font-weight: 500;
  min-width: 250px;
  font-family: "Inter", sans-serif;
}
.myinput_group label span {
  font-size: 17px;
  color: #e00000;
  font-family: "Roboto", sans-serif;
  margin-left: 3px;
}
.myinput_group input {
  min-width: 65%;
  background: #f8f8fc;
  border-radius: 4px;
  border: none;
  padding: 10px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #000;
}
.myinput_group .price_input {
  min-width: 15%;
  max-width: 25%;
}
.myinput_group textarea {
  min-width: 68.7%;
  background: #f8f8fc;
  border-radius: 4px;
  border: none;
  padding: 20px;
  font-family: "Inter", sans-serif;
  color: #000;
  outline: none;
}
</style>
