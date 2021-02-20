<template>
  <div>
    <section class="product_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item">
                    <router-link :to="{ name: 'HomePage' }">{{
                      $t("profile.home")
                    }}</router-link>
                  </li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ shopData.name }}
                  </li>
                </ol>
              </nav>
            </div>
            <!-- d-flex -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- product_section -->
    <ShopInfo :shop="shopData" @removePost="getShop"/>
  </div>
</template>

<script>
import ShopInfo from "@/components/lite/desktop/ShopInfo";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "ProductPage",
  components: {
    ShopInfo
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  data() {
    return {
      shopData: [],
      colorLoading: "var(--main-color)"
    };
  },
  props: {
    id: {}
  },
  watch: {
    id() {
      this.getShop();
    }
  },
  mounted() {
    this.getShop();
    console.log(this.id);
  },
  methods: {
    async getShop() {
      this.$vs.loading({
        container: "",
        scale: 0.8,
        color: this.colorLoading
      });

      const response = await axios
        .get("shops/" + this.id)
        .finally(() => this.$vs.loading.close(".con-vs-loading"));

      this.shopData = response.data;
    }
  }
};
</script>

<style lang="scss" scoped>
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
.breadcrumb {
  background: transparent !important;
  display: flex;
  align-items: center;
}
.breadcrumb-item a {
  color: #555 !important;
  transition: all 0.2s;
  font-size: 15px;
  font-family: "Inter", sans-serif;
}
.breadcrumb-item a:hover {
  color: #000 !important;
}
.breadcrumb-item.active {
  color: #555 !important;
  font-family: "Inter", sans-serif;
  font-size: 15px;
}
.breadcrumb span {
  font-size: 12px;
  color: #777;
}
</style>
