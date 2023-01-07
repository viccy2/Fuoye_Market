<template>
  <div class="home-navbar">
  <!-- DISPLAY ONLY ON LARGE DEVICES -->

  <div class="hidden-sm-and-down white">
      <v-app-bar fixed flat elevation='' height="65" class="grey lighten-3">
          <v-container>
          <v-toolbar-title @click="Go" id="name" class="font-weight-bold"><v-container>FuoyeMarket.</v-container></v-toolbar-title>     
          </v-container>
          <v-spacer></v-spacer>
          <!-- NAVBAR ICONS -->   
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" >
                  <template>
                  <v-row>
                    <v-avatar color="#673AB7">
                      <span class="white--text " style="font-size:13px;">CJ</span>
                    </v-avatar>
                  </v-row>
                  </template>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                        <v-list-item-title style="font-size:13px;cursor:pointer"> <span  @click="goProfile">Profile</span> <v-icon small> mdi-account</v-icon></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title style="font-size:13px;cursor:pointer"> <span >Log-out</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>

      </v-app-bar>
  </div>

<!-- DISPLAY ONLY ON SMALL DEVICES -->
  <div class="hidden-md-and-up white">
      <v-app-bar fixed flat elevation='' height="65" class="white">
          <v-app-bar-title @click="Go" id="names" class="font-weight-bold">FuoyeMarket.</v-app-bar-title>         
          <v-spacer></v-spacer>
          <!-- NAVBAR ICONS -->   
          <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" >
                  <template>
                  <v-row>
                    <v-avatar color="#673AB7">
                      <span class="white--text " style="font-size:13px;">CJ</span>
                    </v-avatar>
                  </v-row>
                  </template>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                        <v-list-item-title style="font-size:13px;cursor:pointer"> <span  @click="goProfile">Profile</span> <v-icon small> mdi-account</v-icon></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title style="font-size:13px;cursor:pointer"> <span >Log-out</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
          </div>
      </v-app-bar>
  </div>
  

  </div>
</template>

<script>
export default {
  name : 'navbar',
    data(){
        return{
            items : [
                {title : 'Log-Out'},
                {title : 'Profile'}
            ]
        }
    },
    methods : {
      Go(){
            this.$router.push({name : 'dashboard'})
        },
        goProfile(){
            this.$router.push({name : 'profile'})
        }
    }
}
</script>


<style scoped>
 #name{
      color:#673AB7;font-size:20px;
    }
    #names{
      color:#673AB7;font-size:18px;
    }
</style>



