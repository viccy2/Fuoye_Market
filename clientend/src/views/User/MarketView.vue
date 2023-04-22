<template>
  <div>
    <v-app>
    <v-navigation-drawer app v-model="drawer" :clipped="clipped" :mini-variant="miniVariant" :width="drawerWidth" enable-resize-watcher>
      <v-list nav>
  
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logOut" size="large" class="grey lighten-3" style="color:#673AB7;">
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar flat app :clipped-left="clipped" color="white" height="60" >
      <v-app-bar-nav-icon color="#673AB7" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="color:#673AB7;font-size:15px;font-weight:bold">MyStore.</v-toolbar-title>
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
        <v-container>
          <!-- Market page Content -->
          <MarketContentView  v-show="marketContent" />

        </v-container>
        <!-- Market routes -->
        <router-view></router-view>
      
    </v-main>

    
    <Footers />
  </v-app>
  </div>
</template>

<script>
import 'animate.css'
import API from '../../api'
import Footers from '../../components/Footers.vue'
import NewProductView from './NewProductView.vue'
import MarketContentView from './MarketContentView.vue'
export default {
  name: 'market',
  components : {Footers, NewProductView, MarketContentView},
  data: () => ({
    firstLetter : '',
    marketContent : true,
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
        title: 'New product',
        icon: 'mdi-plus-circle-outline',
        to: '/new-product',
  
      },
      {
        title: 'New service',
        icon: 'mdi-clipboard-plus-outline',
        to: '/new-service'
      },
      {
        title: 'View product',
        icon: 'mdi-cart-variant',
        to: '/new-product',
  
      },
      {
        title: 'View service',
        icon: 'mdi-list-box-outline',
        to: '/new-service'
      }
    ]
  }),
  async mounted() {
    const response = await API.getUser();
    const splitText = response.msg.username.split(" "); 
    this.firstLetter = splitText[0][0];  
    },
  methods:{
    logOut(){
        localStorage.removeItem('token');
        this.$router.push('/sign-in');
      }
  }
}
</script>


<style scoped>
.product-card {
  max-width: 300px;
}
</style>