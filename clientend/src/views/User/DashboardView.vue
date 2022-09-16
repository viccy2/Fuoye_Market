<template>
  <div class="dashboard">
    <AppNavbar />
    <div style="max-height:infinity;min-height:infinity">
      <DashboardContentView v-show="dashboard"/>
      <ProductView  v-show="product"/>
      <ServiceView v-show="service"/>
      <SellerView  v-show="seller" /> 
    </div>
    
    <v-bottom-navigation grow color="#673AB7" fixed>
      <v-btn @click="home" active>
        <span>Home</span>
        <v-icon>mdi-home-account</v-icon>
      </v-btn>

      <v-btn @click="products"> 
        <span>Products</span>
        <v-icon>mdi-cart-variant</v-icon>
      </v-btn>

      <v-btn @click="services">
        <span>Services</span>
        <v-icon>mdi-list-box-outline</v-icon>
      </v-btn>

      <v-btn @click="sellers">
        <span>Sellers</span>
        <v-icon>mdi-account-group-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </div>
</template>

<script>
import AppNavbar from '../../components/AppNavbar.vue'
import DashboardContentView from './DashboardContentView.vue'
import ProductView from './ProductView.vue'
import ServiceView from './ServiceView.vue'
import SellerView from './SellerView.vue'
export default {
  name: 'dashboard',
  components: {AppNavbar, DashboardContentView, ProductView, ServiceView, SellerView,},
  data(){
      return{
        dashboard : true,
        product : false,
        service : false,
        seller : false
       }
    },
    methods: {
     
      home(){
        this.dashboard = true
        this.product = false,
        this.service = false,
        this.seller = false
      },
      products(){
        this.product = true,
       this.dashboard = false,
        this.service = false,
        this.seller = false
      },
      services(){
        this.service = true,
        this.dashboard = false,
        this.product = false,
        this.seller = false
      },
       sellers(){
        this.seller = true,
        this.dashboard = false,
        this.product = false,
        this.service = false
      },
    },
 
  }
</script>

