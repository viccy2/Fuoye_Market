<template>
  <div>
    <v-app>
    <v-navigation-drawer app v-model="drawer" :clipped="clipped" :mini-variant="miniVariant" :width="drawerWidth" enable-resize-watcher>
      <v-list dense>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :clipped-left="clipped" color="white" dark>
      <v-app-bar-nav-icon color="#673AB7" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="color:#673AB7;font-size:15px;">FuoyeMarket.</v-toolbar-title>
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
        <div class="hidden-sm-and-down">
          <v-layout row wrap>
            <v-flex lg3>
              <v-card class="product-card ma-2">
                  <v-img
                    src="https://placehold.it/300x200"
                    height="200px"
                  />
                  <v-card-title>
                    <h3 class="headline"></h3>
                  </v-card-title>
                  <v-card-text>
                    <p></p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">Add to Cart</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
          <v-flex lg3>
              <v-card class="product-card ma-2">
                  <v-img
                    src="https://placehold.it/300x200"
                    height="200px"
                  />
                  <v-card-title>
                    <h3 class="headline"></h3>
                  </v-card-title>
                  <v-card-text>
                    <p></p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">Add to Cart</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
          <v-flex lg3>
              <v-card class="product-card ma-2">
                  <v-img
                    src="https://placehold.it/300x200"
                    height="200px"
                  />
                  <v-card-title>
                    <h3 class="headline"></h3>
                  </v-card-title>
                  <v-card-text>
                    <p></p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">Add to Cart</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
          <v-flex lg3>
              <v-card class="product-card ma-2">
                  <v-img
                    src="https://placehold.it/300x200"
                    height="200px"
                  />
                  <v-card-title>
                    <h3 class="headline"></h3>
                  </v-card-title>
                  <v-card-text>
                    <p></p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">Add to Cart</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
          </v-layout>
        </div>

        <div class="hidden-md-and-up">
          <v-layout row wrap>
            <v-flex sm6 xs6 class="pa-2">
              <v-card class="product-cards">
                  <v-img
                    src="../../assets/images/lv.jpg"
                    height="100px"
                    style="width:100%"
                  />
                  <v-card-title>
                    <h3 class="headline"></h3>
                  </v-card-title>
                  <v-card-text>
                    <p></p>
                  </v-card-text>
                  <v-card-actions>
                    
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
          <v-flex sm6 xs6 class="pa-2">
              <v-card class="product-cards">
                  <v-img
                    src="../../assets/images/lv.jpg"
                    height="100px"
                    style="width:100%"
                  />
                  <v-card-title>
                    <h3 class="headline"></h3>
                  </v-card-title>
                  <v-card-text>
                    <p></p>
                  </v-card-text>
                  <v-card-actions>
                    
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
        </v-layout>
        </div>



        </v-container>
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
export default {
  name: 'market',
  components : {Footers},
  data: () => ({
    firstLetter : '',
    clipped: true,
    drawer: true,
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
        to: '/profile'
      },
      {
        title: 'New service',
        icon: 'mdi-clipboard-plus-outline',
        to: '/settings'
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