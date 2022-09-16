<template>
    <div class="home-navbar">
    <!-- DISPLAY ONLY ON ALL DEVICES -->
    <div class="hidden-sm-and-down">
        <v-app-bar fixed flat elevation=''>
            <v-app-bar-nav-icon class="ma-1"><v-btn icon>
                <img class="rounded-xl "  src="../assets/images/Fm.png" height="45"  @click="Go">
              </v-btn>
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name">FuoyeMarket</v-toolbar-title>          
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <div >
            <v-btn text class="text-capitalize" style="color:#673AB7;">
               Sign In
            </v-btn>
            <v-btn rounded id="btn" class="text-capitalize" style="background-color:#673AB7;color:white">
               Create Account
            </v-btn>
            </div>

         
        </v-app-bar>
    </div>
    <div class="hidden-md-and-up">
        <v-app-bar fixed flat elevation='' height="70">
            <v-app-bar-nav-icon><v-btn icon>
                <img class="rounded-xl"  src="../assets/images/Fm.png" height="45"  @click="Go">
              </v-btn>
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name">FuoyeMarket</v-toolbar-title>          
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <div >
            <v-btn rounded id="btn" class="text-capitalize" style="background-color:#673AB7;color:white">
               Sign In
            </v-btn>
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
      color:#673AB7;font-size:18px;font-weight:bolder;  
    }
    #btn{
        color:#673AB7;
    }
</style>