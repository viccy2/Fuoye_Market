import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  if (!localStorage.getItem('token')) {
    next({
      path: '/sign-in',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    props: true
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/User/DashboardView.vue'),
 
  },
  {
    path: '/dashboard-content',
    name: 'dashboard-content',
    component: () => import(/* webpackChunkName: "dashboard-content" */ '../views/User/DashboardContentView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/User/ProfileView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/User/ProductView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/product-details',
    name: 'product-details',
    component: () => import(/* webpackChunkName: "product-details" */ '../views/User/ProductDetailsView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
  path: '/product-details-seller',
  name: 'product-details-seller',
  component: () => import(/* webpackChunkName: "product-details-seller" */ '../views/User/ProductDetails2View.vue'),
  props: true,
  beforeEnter: requireAuth
  },
  {
    path: '/product-content',
    name: 'product-content',
    component: () => import(/* webpackChunkName: "product-content" */ '../views/User/ProductContentView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ '../views/User/ServiceView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/service-content',
    name: 'service-content',
    component: () => import(/* webpackChunkName: "service-content" */ '../views/User/ServiceContentView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/service-content-details',
    name: 'service-content-details',
    component: () => import(/* webpackChunkName: "service-content-details" */ '../views/User/ServiceContent2View.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import(/* webpackChunkName: "seller" */ '../views/User/SellerView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/seller-content',
    name: 'seller-content',
    component: () => import(/* webpackChunkName: "seller-content" */ '../views/User/SellerContentView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/seller-page',
    name: 'seller-page',
    component: () => import(/* webpackChunkName: "seller-page" */ '../views/User/SellerPageView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  
  {
    path: '/new-product',
    name: 'new-product',
    component: () => import(/* webpackChunkName: "new-product" */ '../views/User/NewProductView.vue'),
    props: true,
    beforeEnter: requireAuth
  },

  {
    path: '/new-service',
    name: 'new-service',
    component: () => import(/* webpackChunkName: "new-service" */ '../views/User/NewServiceView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/edit-product',
    name: 'edit-product',
    component: () => import(/* webpackChunkName: "edit-product" */ '../views/User/EditProductView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
    {
    path: '/edit-service',
    name: 'edit-service',
    component: () => import(/* webpackChunkName: "edit-service" */ '../views/User/EditServiceView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/market-product',
    name: 'market-product',
    component: () => import(/* webpackChunkName: "market-product" */ '../views/User/MarketProductView.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  
{
  path: '/market-service',
  name: 'market-service',
  component: () => import(/* webpackChunkName: "market-service */ '../views/User/MarketServiceView.vue'),
  props: true,
  beforeEnter: requireAuth
},
{
  path: '/market-product-details',
  name: 'market-product-details',
  component: () => import(/* webpackChunkName: "market-product-details" */ '../views/User/MarketProductDetailsView.vue'),
  props: true,
  beforeEnter: requireAuth
},
{
  path: '/market-service-details',
  name: 'market-service-details',
  component: () => import(/* webpackChunkName: "market-service-details" */ '../views/User/MarketServiceDetailsView.vue'),
  props: true,
  beforeEnter: requireAuth
},
    // Account routes
  {
    path: '/new-account',
    name: 'new-account',
    component: () => import(/* webpackChunkName: "new-account" */ '../views/Account/SignUpView.vue'),
    props: true
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/Account/SignInView.vue'),
    props: true
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import(/* webpackChunkName: "reset-password" */ '../views/Account/ResetPasswordView.vue'),
    props: true
  },
  {
    path: '/new-password',
    name: 'new-password',
    component: () => import(/* webpackChunkName: "new-password" */ '../views/Account/NewPasswordView.vue'),
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: '404-page',
    component: () => import(/* webpackChunkName: "404-page" */ '../views/404View.vue'),
    props: true
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})



export default router
