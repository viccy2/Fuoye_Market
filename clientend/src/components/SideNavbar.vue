<template>
    <div class="side-nav">
        <v-navigation-drawer app v-model="drawer" :clipped="clipped" :mini-variant="miniVariant" :width="drawerWidth" enable-resize-watcher>
          <v-list app v-if="user == 'Buyer'">
            <v-list-item three-line >
                <center>             
                  <v-list-item-avatar class="rounded-circle"  height="" width="" color="grey">
                      <img  :src="`https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`" 
                            :lazy-src="`https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`">
                  </v-list-item-avatar>
                  <v-card-text>
                      <div class="items text-capitalize" style="font-size:12px; margin-top:-15px">
                          Buyer's Dashboard Page : 
                      </div>
                  </v-card-text>
                </center>
              </v-list-item>
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
              <v-list-item three-line >
                <center>             
                  <v-list-item-avatar class="rounded-circle"  height="" width="" color="grey">
                      <img  :src="`https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`" 
                            :lazy-src="`https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`">
                  </v-list-item-avatar>
                  <v-card-text>
                      <div class="items text-capitalize" style="font-size:12px; margin-top:-15px">
                          Seller's Dashboard Page : 
                      </div>
                  </v-card-text>
                </center>
              </v-list-item>
            <v-list-item v-for="(item, j) in items" :key="j" :to="item.to" router>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item><br>
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
          
        </v-navigation-drawer>

        <v-app-bar app :clipped-left="clipped" flat height="60" class="white" dark>
          <v-app-bar-nav-icon color="#673AB7" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="hidden-sm-and-down" style="color:#673AB7;font-size:17px;font-weight:bold;">FuoyeMarket.</v-toolbar-title>
          <v-toolbar-title class="hidden-md-and-up" style="color:#673AB7;font-size:15px;font-weight:bold;">FuoyeMarket.</v-toolbar-title>
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
        </v-app-bar><br>

    </div>
    
</template>

<script>
import API from '../api'
export default {
    name : 'side-navbar',
    data() {
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