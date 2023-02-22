<template>
  <div class="dashboard white">
    <AppNavbar  v-show="appnav"/>
    <PageNavbar v-show="pagesnav"/> 
    <div style="max-height:infinity;min-height:infinity">
      <DashboardContentView v-show="dashboard"/>
      <ProductView  v-show="product"/>
      <ServiceView v-show="service"/>
      <SellerView  v-show="seller" />
      
    </div>
    
    <v-bottom-navigation grow color="#673AB7" fixed height="55" >
      <v-btn @click="home" active style="margin-top:10px;">
        <span style="font-size:10px;">Home</span>
        <v-icon >mdi-home-account</v-icon>
      </v-btn>

      <v-btn @click="products" style="margin-top:10px;"> 
        <span style="font-size:10px">Products</span>
        <v-icon >mdi-cart-variant</v-icon>
      </v-btn>

      <v-btn @click="services" style="margin-top:10px;">
        <span style="font-size:10px">Services</span>
        <v-icon>mdi-list-box-outline</v-icon>
      </v-btn>

      <v-btn @click="sellers" style="margin-top:10px;">
        <span style="font-size:10px">Sellers</span>
        <v-icon >mdi-account-group-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </div>
</template>

<script>
import AppNavbar from '../../components/AppNavbar.vue'
import PageNavbar from '../../components/PageNavbar.vue'
import DashboardContentView from './DashboardContentView.vue'
import ProductView from './ProductView.vue'
import ServiceView from './ServiceView.vue'
import SellerView from './SellerView.vue'
export default {
  name: 'dashboard',
  components: {AppNavbar, PageNavbar, DashboardContentView, ProductView, ServiceView, SellerView,},
  data(){
      return{
        dashboard : true,
        product : false,
        service : false,
        seller : false,
        appnav : true,
        pagesnav : false
        
       }
    },
    methods: {
     
      home(){
        this.dashboard = true
        this.product = false,
        this.service = false,
        this.seller = false,
        this.appnav = true,
        this.pagesnav = false
      },
      products(){
        this.product = true,
        this.dashboard = false,
        this.service = false,
        this.seller = false,
        this.appnav = true,
        this.pagesnav = false
      },
      services(){
        this.service = true,
        this.dashboard = false,
        this.product = false,
        this.seller = false,
        this.appnav = true,
        this.pagesnav = false
      },
       sellers(){
        this.seller = true,
        this.dashboard = false,
        this.product = false,
        this.service = false,
        this.appnav = true,
        this.pagesnav = false
      },
    },
 
  }
</script>

