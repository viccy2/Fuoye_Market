<template>
    <div class="navbar">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
    <div>
        <v-app-bar fixed  class="white" >
            <v-app-bar-nav-icon>
                <v-icon @click="Go" class="rounded-circle grey lighten-2">
                    mdi-arrow-left
                </v-icon> 
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name" ></v-toolbar-title>          
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
           <div class="text-center">
                 <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" >
                            <v-icon class="rounded-circle grey lighten-2" color='#673AB7'>mdi-account-tie</v-icon>
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
    </div><br>
    

    </div>
</template>
<script>
export default {
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
            this.$router.go(-1);
        },
        goProfile(){
            this.$router.push({name : 'profile'})
        }
    }
}
</script>
<style scoped>
#name{
     color:#673AB7;font-size:18px;font-weight:bolder;  
}
</style>