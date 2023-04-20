<template>
    <div class="home-navbar">
    <!-- DISPLAY ONLY ON ALL DEVICES -->
    <div class="hidden-sm-and-down white">
        <v-app-bar flat fixed elevation='' height="65" class="white">
            <v-container>
            <v-toolbar-title @click="Go" id="name" class="font-weight-bold"><v-container>FuoyeMarket.</v-container></v-toolbar-title>     
            </v-container>
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->   
            <div >
                
            <router-link to="/sign-in" style="text-decoration:none">
                <v-btn class="mt-1 text-capitalize" outlined color ="#673AB7">
                    <span style="font-size:12px;">Sign In</span>
                </v-btn>
            </router-link>
            </div>

         
        </v-app-bar>
    </div>
    <div class="hidden-md-and-up white">
        <v-app-bar flat fixed  elevation='' height="60" class="grey lighten-4">
            <v-toolbar-title @click="Go" id="names" class="font-weight-bold">FuoyeMarket.</v-toolbar-title>         
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->   
            <div >
                
            <router-link to="/sign-in" style="text-decoration:none">
                <v-btn class="mt-1 text-capitalize" outlined color ="#673AB7">
                    <span style="font-size:12px;">Sign In</span>
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
      color:#673AB7;font-size:17px;
    }
    #names{
      color:#673AB7;font-size:15px;
    }
    #btn{
        color:#673AB7;
    }
</style>
