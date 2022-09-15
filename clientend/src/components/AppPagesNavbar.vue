<template>
    <div class="navbar">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
    <div>
        <v-app-bar fixed  class="" >
            <v-app-bar-nav-icon>
             <v-icon @click="Go">
                mdi-account
            </v-icon> 
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name" >FuoyeMarket</v-toolbar-title>          
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <div class="icons">
            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
            </div>
         
        </v-app-bar>
    </div><br>
    

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods : {
        Go(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#name{
     color:#673AB7;font-size:18px;font-weight:bolder;  
}
</style>