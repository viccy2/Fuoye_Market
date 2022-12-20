<template>
    <div class="home-navbar">
    <!-- DISPLAY ONLY ON ALL DEVICES -->
    <div class="hidden-sm-and-down white">
        <v-app-bar fixed flat class="white"> 
            <v-toolbar-title id="name"><img class="rounded-xl"  src="../assets/images/logo1.png" height="50"  @click="Go"></v-toolbar-title>          
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
            <v-toolbar-title id="name"><img class="rounded-xl"  src="../assets/images/logo1.png" height="50"  @click="Go"></v-toolbar-title>          
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