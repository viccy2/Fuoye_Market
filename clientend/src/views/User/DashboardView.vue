<template>
  <div class="dashboard white">

    <!-- DISPLAY ON LARGE DEVICES  -->
    <div class="hidden-sm-and-down">
      <v-app>
        <v-navigation-drawer app v-model="drawer" :clipped="clipped" :mini-variant="miniVariant" :width="drawerWidth" enable-resize-watcher>
          <v-list app v-if="user == 'Buyer'">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list app v-if="user == 'Seller'">
            <div>
            <v-list-item v-for="(item, j) in items" :key="j" :to="item.to" router>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </div>
            <div>
            <v-list-item v-for="(item, k) in items2" :key="k" :to="item.to" router>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
          </v-list>
          <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logOut" class="grey lighten-3" style="color:#673AB7;">
              Logout
            </v-btn>
          </div>
        </template>
        </v-navigation-drawer>

        <v-app-bar app :clipped-left="clipped" height="55" class="white" flat dark>
          <v-app-bar-nav-icon color="#673AB7" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title style="color:#673AB7;font-size:17px;font-weight:bold;">FuoyeMarket.</v-toolbar-title>
          <v-spacer></v-spacer>
                    <!-- NAVBAR ICONS -->
                <div class="text-center">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on" style="background:#673AB7"  width="40" height="40">
                            <span style="color:white;font-size:12px;">{{firstLetter}}</span>
                            </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title style="font-size:13px;cursor:pointer" @click="logOut"> <span >Log-out</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
        </v-app-bar>

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
        <v-navigation-drawer app v-model="drawer" :clipped="clipped" :mini-variant="miniVariant" :width="drawerWidth" enable-resize-watcher>
          <v-list nav v-if="user == 'Buyer'">
            <br>
              <p style="font-size:13px;color:#673AB7;">Dashboard : </p>
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list nav v-if="user == 'Seller'">   
            <div><br>
              <p style="font-size:13px;color:#673AB7;">  Dashboard : </p>
            <v-list-item v-for="(item, j) in items" :key="j" :to="item.to" router>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </div><br>
            <div>
              <p style="font-size:13px;color:#673AB7;"> Market : </p>
            <v-list-item v-for="(item, k) in items2" :key="k" :to="item.to" router>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
          </v-list>
          <template v-slot:append>
          <div class="">
            <v-btn block @click="logOut" class="grey lighten-3" style="color:#673AB7;">
              Logout
            </v-btn>
          </div>
        </template>
        </v-navigation-drawer>

        <v-app-bar app :clipped-left="clipped"  class="white" flat dark>
          <v-app-bar-nav-icon color="#673AB7" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title style="color:#673AB7;font-size:15px;font-weight:bold;">FuoyeMarket.</v-toolbar-title>
          <v-spacer></v-spacer>
                    <!-- NAVBAR ICONS -->
                <div class="text-center">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on" style="background:#673AB7"  width="40" height="40">
                            <span style="color:white;font-size:12px;">{{firstLetter}}</span>
                            </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title style="font-size:13px;cursor:pointer" @click="logOut"> <span >Log-out</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
        </v-app-bar>

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

    <!-- DISPLAY ON MOBILE -->
    <!-- <div class="hidden-md-and-up">
      <AppNavbar  v-show="appnav"/> 
    <div style="max-height:infinity;min-height:infinity">
      <DashboardContentView v-show="dashboard"/>
      <ProductView  v-show="product"/>
      <ServiceView v-show="service"/>
      <SellerView  v-show="seller" />
      
    </div>
  
    <v-bottom-navigation grow color="#673AB7" fixed height="" >
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
    END -->

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
export default {
  name: 'dashboard',
  components: {AppNavbar,  DashboardContentView, ProductView, ServiceView, SellerView, Footers},
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
     
      // home(){
      //   this.dashboard = true
      //   this.product = false,
      //   this.service = false,
      //   this.seller = false,
      //   this.appnav = true
      // },
      // products(){
      //   this.product = true,
      //   this.dashboard = false,
      //   this.service = false,
      //   this.seller = false,
      //   this.appnav = true
      // },
      // services(){
      //   this.service = true,
      //   this.dashboard = false,
      //   this.product = false,
      //   this.seller = false,
      //   this.appnav = true
      // },
      //  sellers(){
      //   this.seller = true,
      //   this.dashboard = false,
      //   this.product = false,
      //   this.service = false,
      //   this.appnav = true
      // },
      logOut(){
        localStorage.removeItem('token');
        this.$router.push('/sign-in');
    },
  }
 
  }
</script>

