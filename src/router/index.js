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
        path: "posts/:slug:id",
        name: "PostPage",
        meta: { layout: "second" },
        props: true,
        component: () => import("../views/lite/desktop/PostPage.vue")
      },
      {
        path: "seller:id",
        name: "SellerPage",
        meta: { layout: "second" },
        props: true,
        component: () => import("../views/lite/desktop/SellerPage.vue")
      },
      {
        path: "profile",
        name: "ProfilePage",
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/ProfilePage.vue")
      },
      {
        path: "shop",
        name: "ShopPage",
        props: true,
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/ShopPage.vue")
      },
      {
        path: "post-add",
        name: "PostAddPage",
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/PostAddPage.vue")
      },
      {
        path: "category/:id:slug",
        name: "CategoryPage",
        props: true,
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/CategoryPage.vue")
      },
      {
        path: "profile-posts",
        name: "ProfilePosts",
        meta: { layout: "second" },
        component: () => import("../views/lite/desktop/ProfilePosts.vue")
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
