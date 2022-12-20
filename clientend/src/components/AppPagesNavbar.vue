<template>
    <div class="navbar">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
    <div>
        <v-app-bar fixed flat  class="white" >
            <v-app-bar-nav-icon>
                <v-icon @click="Go" class="">
                    mdi-arrow-left-thick
                </v-icon> 
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name" ></v-toolbar-title>          
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