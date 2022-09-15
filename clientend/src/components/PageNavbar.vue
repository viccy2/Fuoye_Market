<template>
    <div class="navbar">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
    <div class="navbar1 hidden-sm-and-down">
        <v-app-bar fixed>
            <v-app-bar-nav-icon><v-btn icon>
                <img class="rounded-xl"  src="../assets/images/Fm.png" height="35"  @click="Go">
              </v-btn>
            </v-app-bar-nav-icon>  
            <v-toolbar-title style="color:#673AB7;font-size:15px" >FuoyeMarket</v-toolbar-title>          
            <v-spacer></v-spacer>
         
        </v-app-bar>
    </div>
    <div class="navbar2 hidden-md-and-up">
        <v-app-bar fixed>
            <v-app-bar-nav-icon><v-btn icon>
                <img class="rounded-xl"  src="../assets/images/Fm.png" height="35"  @click="Go">
              </v-btn>
            </v-app-bar-nav-icon>  
            <v-toolbar-title style="color:#673AB7;font-size:15px" >FM</v-toolbar-title>          
            <v-spacer></v-spacer>
         
        </v-app-bar>
    </div>
    

    </div>
</template>
<script>
export default {
  name : 'navbar',
    data(){
        return{
            
        }
    },
    methods : {
        Go(){
            this.$router.push({name : 'home'})
        }
    }
}
</script>