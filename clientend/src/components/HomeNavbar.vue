<template>
    <div class="home-navbar">
    <!-- DISPLAY ONLY ON ALL DEVICES -->
    <div class="hidden-sm-and-down white">
        <v-app-bar fixed flat elevation='' height="70" class="grey lighten-3">
            <v-container>
            <v-toolbar-title @click="Go" id="name" class="font-weight-bold"><v-container>FuoyeMarket.</v-container></v-toolbar-title>     
            </v-container>
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->   
            <div >
                
            <router-link to="/dashboard" style="text-decoration:none">
                <v-btn class="mt-1 text-capitalize" outlined color ="#673AB7">
                    <span style="">Sign In</span>
                </v-btn>
            </router-link>
            </div>

         
        </v-app-bar>
    </div>
    <div class="hidden-md-and-up white">
        <v-app-bar fixed flat elevation='' height="65" class="white">
            <v-app-bar-title @click="Go" id="names" class="font-weight-bold">FuoyeMarket.</v-app-bar-title>         
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->   
            <div >
                
            <router-link to="/dashboard" style="text-decoration:none">
                <v-btn class="mt-1 text-capitalize" outlined color ="#673AB7">
                    <span style="">Sign In</span>
                </v-btn>
            </router-link>
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
      color:#673AB7;font-size:20px;
    }
    #names{
      color:#673AB7;font-size:18px;
    }
    #btn{
        color:#673AB7;
    }
</style>
