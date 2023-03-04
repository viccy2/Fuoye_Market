<template>
  <div class="dashboard white">
    <AppNavbar  v-show="appnav"/> 
    
    <template>
  <v-app>
    <v-main>
      <v-container>
      <div style="max-height:infinity;min-height:infinity">
      <DashboardContentView />
      <!-- <ProductView />
      <ServiceView />
      <SellerView  /> -->
      
    </div>
      </v-container>
    </v-main>
    <v-footer app>
      <v-bottom-navigation fixed>
        <v-btn text icon exact to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn text icon to="/product">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn text icon to="/service">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn text icon to="/">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>


    <!-- <v-bottom-navigation grow color="#673AB7" fixed height="55" >
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
    </v-bottom-navigation> -->

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
  components: {AppNavbar,  DashboardContentView, ProductView, ServiceView, SellerView,},
  data(){
      return{
        dashboard : true,
        product : false,
        service : false,
        seller : false,
        appnav : true,
        
       }
    },
    methods: {
     
      home(){
        this.dashboard = true
        this.product = false,
        this.service = false,
        this.seller = false,
        this.appnav = true
      },
      products(){
        this.product = true,
        this.dashboard = false,
        this.service = false,
        this.seller = false,
        this.appnav = true
      },
      services(){
        this.service = true,
        this.dashboard = false,
        this.product = false,
        this.seller = false,
        this.appnav = true
      },
       sellers(){
        this.seller = true,
        this.dashboard = false,
        this.product = false,
        this.service = false,
        this.appnav = true
      },
    },
 
  }
</script>

