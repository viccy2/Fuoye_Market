<template>
  <div class="dashboard white">

    <!-- DISPLAY ON LARGE DEVICES  -->
    <div class="hidden-sm-and-down">
      <v-app>

        <SideNavbar />

        <v-main>
            <v-container fluid>
              <!-- Dashboard page Content -->
              <DashboardContentView v-show="dashboard"/>

            </v-container>
            <!-- routes -->
            <router-view></router-view>
            <!-- FOOTER SECTION  -->
            <Footers />
            <!-- END FOOTER SECTION  -->
        </v-main>

    </v-app>

    </div>
    <!-- END -->

        <!-- DISPLAY ON MOBILE DEVICES  -->
        <div class="hidden-md-and-up">
      <v-app>

         <SideNavbar />

        <v-main>
            <v-container fluid>
              <!-- Dashboard page Content -->
              <DashboardContentView v-show="dashboard"/>

            </v-container>
            <!-- routes -->
            <router-view></router-view>
          <!-- FOOTER SECTION  -->
          <Footers />
          <!-- END FOOTER SECTION  -->
        </v-main>

    </v-app>

    </div>
    <!-- END -->


  </div>
</template>

<script>
import 'animate.css'
import API from '../../api'
import AppNavbar from '../../components/AppNavbar.vue'
import DashboardContentView from './DashboardContentView.vue'
import ProductView from './ProductView.vue'
import ServiceView from './ServiceView.vue'
import SellerView from './SellerView.vue'
import Footers from '../../components/Footers.vue'
import SideNavbar from '../../components/SideNavbar.vue'
export default {
  name: 'dashboard',
  components: {AppNavbar,  DashboardContentView, ProductView, ServiceView, SellerView, Footers, SideNavbar},
  data(){
      return{
        firstLetter : '',
        user:'',
        dashboard : true,
        product : false,
        service : false,
        seller : false,
        appnav : true,
        clipped: true,
        drawer: false,
        miniVariant: false,
        drawerWidth: 240,
        items: [
      {
        title: 'Dashboard',
        icon: 'mdi-view-dashboard',
        to: '/dashboard'
      },
      {
        title: 'Products',
        icon: 'mdi-cart-variant',
        to: '/product',
  
      },
      {
        title: 'Services',
        icon: 'mdi-list-box-outline',
        to: '/service'
      },
       {
        title: 'Sellers',
        icon: 'mdi-account-group-outline',
        to: '/seller'
      },
      {
        title: 'Profile',
        icon: 'mdi-account',
        to: '/profile'
      },
    ],
    items2: [
      {
        title: 'Market',
        icon: 'mdi-warehouse',
        to: '/market',
  
      },
    ]
       }
    },
    async mounted() {
    const response = await API.getUser();
    const splitText = response.msg.username.split(" "); 
    this.firstLetter = splitText[0][0]; 
    this.user = response.msg.type;  
    
    },
    methods: {
     
      logOut(){
        localStorage.removeItem('token');
        this.$router.push('/sign-in');
    },
  }
 
  }
</script>

