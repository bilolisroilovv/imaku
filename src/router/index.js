import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/lite/desktop/HomePage.vue";
import i18n from "@/i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "",
        name: "HomePage",
        meta: { layout: "main" },
        component: HomePage
      },
      {
        path: "posts/:id:slug",
        name: "PostPage",
        meta: { layout: "second" },
        props: true,
        component: () => import("../views/lite/desktop/PostPage.vue")
      },
      {
        path: "seller/:id:name",
        name: "SellerPage",
        meta: { layout: "second" },
        props: true,
        component: () => import("../views/lite/desktop/SellerPage.vue")
      },
      {
        path: "profile",
        name: "ProfilePage",
        meta: { layout: "profile" },
        component: () => import("../views/lite/desktop/ProfilePage.vue"),
        props: true
      },
      {
        path: "shop:id:slug",
        name: "ShopPage",
        props: true,
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/ShopPage.vue")
      },
      {
        path: "post-create",
        name: "PostCreatePage",
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/PostCreatePage.vue")
      },
      {
        path: "shop-create",
        name: "ShopCreatePage",
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/ShopCreatePage.vue")
      },
      {
        path: "category/:id:slug",
        name: "CategoryPage",
        props: true,
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/CategoryPage.vue")
      },
      {
        path: "search/:query",
        name: "SearchPage",
        props: true,
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/SearchPage.vue")
      },
      {
        path: "profile-posts",
        name: "ProfilePosts",
        meta: { layout: "profile" },
        component: () => import("../views/lite/desktop/ProfilePosts.vue"),
        props: true
      },
      {
        path: "profile-settings",
        name: "ProfileSettings",
        meta: { layout: "profile" },
        component: () => import("../views/lite/desktop/ProfileSettings.vue"),
        props: true
      },
      {
        path: "profile-shops",
        name: "ProfileShops",
        meta: { layout: "profile" },
        component: () => import("../views/lite/desktop/ProfileShops.vue"),
        props: true
      },
      { path: "*", redirect: "/" }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
