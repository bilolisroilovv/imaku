import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/lite/desktop/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: () => import('../views/lite/desktop/ProductPage.vue')
  },
  {
    path: '/seller',
    name: 'SellerPage',
    component: () => import('../views/lite/desktop/SellerPage.vue')
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('../views/lite/desktop/ProfilePage.vue')
  },
  {
    path: '/shop',
    name: 'ShopPage',
    component: () => import('../views/lite/desktop/ShopPage.vue')
  },
  {
    path: '/post-add',
    name: 'PostAddPage',
    component: () => import('../views/lite/desktop/PostAddPage.vue')
  },
  {
    path: '/category',
    name: 'CategoryPage',
    component: () => import('../views/lite/desktop/CategoryPage.vue')
  },
  {
    path: '/profile-posts',
    name: 'ProfilePosts',
    component: () => import('../views/lite/desktop/ProfilePosts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
