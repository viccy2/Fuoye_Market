import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/User/DashboardView.vue')
  },
  {
    path: '/dashboard-content',
    name: 'dashboard-content',
    component: () => import(/* webpackChunkName: "dashboard-content" */ '../views/User/DashboardContentView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/User/ProfileView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/User/ProductView.vue')
  },
  {
    path: '/product-details',
    name: 'product-details',
    component: () => import(/* webpackChunkName: "product-details" */ '../views/User/ProductDetailsView.vue')
  },
  {
    path: '/product-content',
    name: 'product-content',
    component: () => import(/* webpackChunkName: "product-content" */ '../views/User/ProductContentView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ '../views/User/ServiceView.vue')
  },
  {
    path: '/service-content',
    name: 'service-content',
    component: () => import(/* webpackChunkName: "service-content" */ '../views/User/ServiceContentView.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import(/* webpackChunkName: "seller" */ '../views/User/SellerView.vue')
  },
  {
    path: '/seller-content',
    name: 'seller-content',
    component: () => import(/* webpackChunkName: "seller-content" */ '../views/User/SellerContentView.vue')
  },
  {
    path: '/seller-page',
    name: 'seller-page',
    component: () => import(/* webpackChunkName: "seller-page" */ '../views/User/SellerPageView.vue')
  },

    // Account routes
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account/AccountView.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/Account/SignView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404-page',
    component: () => import(/* webpackChunkName: "404-page" */ '../views/404View.vue')
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
