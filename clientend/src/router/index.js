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
  path: '/product-details-seller',
  name: 'product-details-seller',
  component: () => import(/* webpackChunkName: "product-details-seller" */ '../views/User/ProductDetails2View.vue')
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
    path: '/service-content-details',
    name: 'service-content-details',
    component: () => import(/* webpackChunkName: "service-content-details" */ '../views/User/ServiceContent2View.vue')
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

  {
    path: '/market',
    name: 'market',
    component: () => import(/* webpackChunkName: "market" */ '../views/User/MarketView.vue')
  },

    // Account routes
  {
    path: '/new-account',
    name: 'new-account',
    component: () => import(/* webpackChunkName: "new-account" */ '../views/Account/SignUpView.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/Account/SignInView.vue')
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
