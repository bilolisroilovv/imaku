<template>
  <div>
    <div id="top"></div>
    <a href="#top" class="top_btn flex-center anim d-flex">
      <svg
        class="svg-inline--fa fa-chevron-left fa-w-10"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        data-fa-i2svg=""
      >
        <path
          fill="#fff"
          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        ></path>
      </svg>
    </a><!-- top_btn -->
    <Header2 />
    <section class="product_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item"><a href="/">Главная</a></li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item active" aria-current="page">Алексеев Эдуaрд Львович</li>
                </ol>
              </nav>

            </div> <!-- d-flex -->

          </div> <!-- col-md-12 -->
        </div> <!-- row -->

      </div> <!-- container -->
    </section> <!-- product_section -->

    <ShopInfo/>
    <div class="container">
      <GoodsSection class="pt-0" />
    </div> <!-- container -->

  </div>
</template>

<script>
import Header2 from '@/components/lite/desktop/Header2'
import ShopInfo from '@/components/lite/desktop/ShopInfo'
import GoodsSection from '@/components/lite/desktop/goodsSection/GoodsSection'

export default {
  name: 'ProductPage',
  components: {
    Header2,
    ShopInfo,
    GoodsSection
  },
  data () {
    return {
      avatarImage: "'https://picsum.photos/500?random=1'"
    }
  }
}
</script>

<style lang="scss" scoped>
.see_more_btn {
  background: transparent!important;
  border: 2px solid var(--main-color)!important;
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
  background: var(--main-color)!important;
}
.see_more_btn:hover svg g {
  fill: #fff;
}
.breadcrumb {
  background: transparent!important;
  display: flex;
  align-items: center;
}
.breadcrumb-item a {
  color: #555!important;
  transition: all 0.2s;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
}
.breadcrumb-item a:hover {
  color: #000!important;
}
.breadcrumb-item.active {
  color: #555!important;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}
.breadcrumb span {
  font-size: 12px;
  color: #777;
}
</style>
