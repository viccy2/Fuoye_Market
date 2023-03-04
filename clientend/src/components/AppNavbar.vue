<template>
  <div class="home-navbar">
  <!-- DISPLAY ONLY ON LARGE DEVICES -->

  <div class="hidden-sm-and-down white">
      <v-app-bar fixed flat elevation='' height="55" class="white">
          <v-container>
          <v-toolbar-title  id="name" class="font-weight-bold"><v-container>FuoyeMarket.</v-container></v-toolbar-title>     
          </v-container>
          <v-spacer></v-spacer>
          <!-- NAVBAR ICONS -->   
          <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" style="background:#673AB7" width="40" height="40">
                      <span style="color:whitesmoke;font-size:12px;">{{firstLetter}}</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <router-link to="/market" style="text-decoration:none;color:black"><v-list-item-title style="font-size:13px;cursor:pointer"> <span >Market</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title></router-link>
                    </v-list-item>
                    <v-list-item>
                     <v-list-item-title style="font-size:13px;cursor:pointer"  @click="logOut"> <span >Log-out</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
          </div>

      </v-app-bar>
  </div>

<!-- DISPLAY ONLY ON SMALL DEVICES -->
  <div class="hidden-md-and-up white">
      <v-app-bar fixed flat elevation='' height="55" class="white">
        <router-link to="/dashboard" style="text-decoration:none;color:black"><v-toolbar-title id="names" class="font-weight-bold">FuoyeMarket.</v-toolbar-title></router-link>       
          <v-spacer></v-spacer>
          <!-- NAVBAR ICONS -->   
          <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" style="background:#673AB7" width="40" height="40">
                      <span style="color:whitesmoke;font-size:12px;">{{firstLetter}}</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <router-link to="/market" style="text-decoration:none;color:black"><v-list-item-title style="font-size:13px;cursor:pointer"> <span >Market</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title></router-link>
                    </v-list-item>
                    <v-list-item>
                     <v-list-item-title style="font-size:13px;cursor:pointer" @click="logOut"> <span >Log-out</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
          </div>
      </v-app-bar>
  </div>
  

  </div>
</template>

<script>
import API from '../api'
export default {
  name : 'navbar',
    data(){
        return{
           firstLetter : '',
        }
    },
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
 #name{
      color:#673AB7;font-size:18px;
    }
    #names{
      color:#673AB7;font-size:15px;
    }
</style>



