<template>
    <div class="home-navbar">
    <!-- DISPLAY ONLY ON ALL DEVICES -->
    <div class="hidden-sm-and-down white">
        <v-app-bar fixed flat class="white"> 
            <v-app-bar-nav-icon>
                <img class="rounded-circle"  src="../assets/images/logo11.png" style="height:60px;"  @click="Go">
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name">FuoyeMarket</v-toolbar-title>            
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <div >
            <v-btn rounded  id="btn" class="text-capitalize" style="background-color:#673AB7;color:white;">
               Sign In
            </v-btn>
            </div>

         
        </v-app-bar>
    </div>
    <div class="hidden-md-and-up white">
        <v-app-bar fixed flat elevation='' height="70" class="white">
            <v-app-bar-nav-icon class="grey lighten-2" elevation='2'>
                <img elevation="2" class="rounded-circle"  src="../assets/images/logo11.png" style="height:40px;"  @click="Go"> 
            </v-app-bar-nav-icon><span style="color:#673AB7;font-weight:bolder;">FuoyeMarket</span>        
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <div >
            <router-link to="/dashboard" style="text-decoration:none"><v-btn rounded id="btn" class="text-capitalize" style="background-color:#673AB7;color:white">
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
