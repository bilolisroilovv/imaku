<template>
  <li class="mymenu_li">
    <a href="categories.html" class="mymenu_li_a">
      <div class="d-flex">
        <div class="mymenu_li_a_img">
        <svg width="20" height="50" class="img-width" viewBox="0 0 13 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
              d="M12.3922 5.4018V3.72794C12.3922 3.4751 12.1869 3.2702 11.9336 3.2702H9.56908V2.61109C9.56908 2.49515 9.48241 2.40037 9.37034 2.38536V0.711402C9.37034 0.458564 9.16511 0.253658 8.91187 0.253658H2.49952V0.230801C2.49952 0.10443 2.39686 0.00195312 2.27026 0.00195312H1.33786C1.21127 0.00195312 1.10861 0.10443 1.10861 0.230801V0.253658H0.565886C0.312692 0.253658 0.107422 0.458611 0.107422 0.711402V15.8032C0.107422 16.056 0.31274 16.261 0.565886 16.261H3.12924V18.8197C3.12924 19.0726 3.33456 19.2775 3.5877 19.2775H11.9336C12.1869 19.2775 12.3922 19.0725 12.3922 18.8197V7.92858C12.5042 7.91351 12.5908 7.81864 12.5908 7.70275V5.62767C12.5908 5.51174 12.5042 5.41687 12.3922 5.4018ZM8.86589 3.93015V4.44896H6.2742V3.93015H8.86589ZM3.25238 0.913616H6.22542V1.43242H3.25238V0.913616ZM1.52894 13.6518V2.1762H7.94882V3.2702H5.52143V3.24734C5.52143 3.12097 5.41877 3.01849 5.29208 3.01849H4.35968C4.23308 3.01849 4.13042 3.12097 4.13042 3.24734V3.2702H3.58766C3.33451 3.2702 3.12919 3.47515 3.12919 3.72794V13.6518H1.52894ZM7.76072 18.4306C7.48212 18.4306 7.25632 18.2052 7.25632 17.9271C7.25632 17.649 7.48212 17.4236 7.76072 17.4236C8.03932 17.4236 8.26512 17.649 8.26512 17.9271C8.26512 18.2052 8.03932 18.4306 7.76072 18.4306ZM10.9706 16.6683H4.55076V5.19274H10.9706V16.6683Z"
              fill="url(#paint0_linear)" />
            <path
              d="M12.3922 5.4018V3.72794C12.3922 3.4751 12.1869 3.2702 11.9336 3.2702H9.56908V2.61109C9.56908 2.49515 9.48241 2.40037 9.37034 2.38536V0.711402C9.37034 0.458564 9.16511 0.253658 8.91187 0.253658H2.49952V0.230801C2.49952 0.10443 2.39686 0.00195312 2.27026 0.00195312H1.33786C1.21127 0.00195312 1.10861 0.10443 1.10861 0.230801V0.253658H0.565886C0.312692 0.253658 0.107422 0.458611 0.107422 0.711402V15.8032C0.107422 16.056 0.31274 16.261 0.565886 16.261H3.12924V18.8197C3.12924 19.0726 3.33456 19.2775 3.5877 19.2775H11.9336C12.1869 19.2775 12.3922 19.0725 12.3922 18.8197V7.92858C12.5042 7.91351 12.5908 7.81864 12.5908 7.70275V5.62767C12.5908 5.51174 12.5042 5.41687 12.3922 5.4018ZM8.86589 3.93015V4.44896H6.2742V3.93015H8.86589ZM3.25238 0.913616H6.22542V1.43242H3.25238V0.913616ZM1.52894 13.6518V2.1762H7.94882V3.2702H5.52143V3.24734C5.52143 3.12097 5.41877 3.01849 5.29208 3.01849H4.35968C4.23308 3.01849 4.13042 3.12097 4.13042 3.24734V3.2702H3.58766C3.33451 3.2702 3.12919 3.47515 3.12919 3.72794V13.6518H1.52894ZM7.76072 18.4306C7.48212 18.4306 7.25632 18.2052 7.25632 17.9271C7.25632 17.649 7.48212 17.4236 7.76072 17.4236C8.03932 17.4236 8.26512 17.649 8.26512 17.9271C8.26512 18.2052 8.03932 18.4306 7.76072 18.4306ZM10.9706 16.6683H4.55076V5.19274H10.9706V16.6683Z"
              fill="#E1E1E8" />
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="18.3032" y1="22.8917" x2="-2.52434" y2="12.8971"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.245118" stop-color="#C3DEFA" />
              <stop offset="1" stop-color="#7BAAE1" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="12.6513" height="19.2756" fill="white"
                transform="translate(0.0234375 0.00195312)" />
            </clipPath>
          </defs>
        </svg>
      </div> <!-- mymenu_li_a_img -->
        {{category.name}}
      </div>
      <i class="fas fa-angle-right"></i>
    </a> <!-- mymenu_li_a -->

    <ul class="submenu">
      <div class="submenu_content">
        <HeaderCategoriesItemPart
        v-for="category in category.subCategories"
        :key="category.id"
        :category="category"
        />
      </div> <!-- submenu_content -->
    </ul> <!-- submenu -->

  </li> <!-- mymenu_li -->
</template>

<script>
import HeaderCategoriesItemPart from '@/components/lite/desktop/headerCategories/HeaderCategoriesItemPart'

export default {
  name: 'HeaderCategoriesItem',
  components: {
    HeaderCategoriesItemPart
  },
  data () {
    return {
    }
  },
  props: {
    category: {
      type: Object
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.mymenu_li_a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 12px 11px 10px;
  font-weight: 500;
  font-size: 14px;

  color: #444;
  transition: all 0.2s;
}
.mymenu_li_a i {
  font-size: 16px;
  color: #d4d4d4;
  transition: all 0s;
}
.mymenu_li_a_img {
  width: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  transition: all 0.2s;
}
.mymenu_li:hover .mymenu_li_a i {
  color: #444;
}
.mymenu_li_a_img svg {
  width: 21px!important;
  height: 21px!important;
}
.mymenu_li .mymenu_li_a_img svg path {
  fill: #666;
}
.mymenu_li:hover .mymenu_li_a  {
  color: #444;
}
.submenu {
  width: 1025px;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%);
  padding: 15px 35px;
}
.submenu:before {
  content: '';
  display: block;
  background: transparent;
  position: absolute;
  width: 50px;
  height: 90%;
  left: -2%;
}
.mymenu_li:hover .submenu {
  display: block;
  z-index: 2!important;
}
.submenu_content {
  display: flex;
  flex-flow: column wrap;
  -webkit-box-pack: start;
  place-content: flex-start;
  height: 100%;
}
.mymenu_li:hover .submenu {
  display: block;
  z-index: 2!important;
}

</style>
