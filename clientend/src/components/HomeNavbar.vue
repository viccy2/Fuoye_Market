<template>
    <div class="home-navbar">
    <!-- DISPLAY ONLY ON ALL DEVICES -->
    <div class="hidden-sm-and-down white">
        <v-app-bar fixed flat class="white">
            <v-app-bar-nav-icon class="ma-1"><v-btn icon>
                <img class="rounded-xl "  src="../assets/images/Fm.png" height="45"  @click="Go">
              </v-btn>
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name">FuoyeMarket</v-toolbar-title>          
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <div >
            <router-link to="/team" style="text-decoration:none"><v-btn text class="text-capitalize" style="color:#673AB7;">
               Team
            </v-btn></router-link>
            <router-link to="/contact-us" style="text-decoration:none"><v-btn text class="text-capitalize" style="color:#673AB7;">
               Contact Us
            </v-btn></router-link>
            <v-btn rounded id="btn" class="text-capitalize" style="background-color:#673AB7;color:white">
               Sign In
            </v-btn>
            </div>

         
        </v-app-bar>
    </div>
    <div class="hidden-md-and-up white">
        <v-app-bar fixed flat elevation='1' height="70" class="white">
            <v-app-bar-nav-icon><v-btn icon>
                <img class="rounded-xl"  src="../assets/images/Fm.png" height="45"  @click="Go">
              </v-btn>
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name">FuoyeMarket</v-toolbar-title>          
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <div >
            <router-link to="/dashboard" style="text-decoration:none"><v-btn text id="btn" class="text-capitalize" style="color:#673AB7;">
               Sign In
            </v-btn></router-link>
            </div>

         
        </v-app-bar>
    </div>
    

    </div>
</template>
<script>
export default {
  name : 'home-navbar',
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
            this.$router.push({name : 'home'})
        }
    }
}
</script>
<style scoped>
    #name{
      color:#673AB7;font-size:16px;font-weight:bolder;  
    }
    #btn{
        color:#673AB7;
    }
</style>