<template>
    <div class="navbar">

    <!-- DISPLAY ONLY ON MOBILE DEVICES -->

        <div>
            <v-app-bar fixed flat  class="white" height="60" >
                <v-app-bar-nav-icon>
                    <v-icon @click="Go" class="" large color="#673AB7">
                        mdi-chevron-left
                    </v-icon> 
                </v-app-bar-nav-icon>  
                <v-toolbar-title id="name" ></v-toolbar-title>          
                <v-spacer></v-spacer>
                <!-- NAVBAR ICONS -->
            <div class="text-center">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" style="background:#673AB7" width="40" height="40">
                        <span style="color:whitesmoke;font-size:12px;">{{firstLetter}}</span>
                        </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title style="font-size:13px;cursor:pointer" @click="logOut"> <span >Log-out</span> <v-icon small> mdi-logout-variant</v-icon></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            
            </v-app-bar>
        </div><br>

    </div>
</template>

<script>
import API from '../api'
export default {
    data(){
        return{
            items : [
                {title : 'Log-Out'},
                {title : 'Profile'}
            ],
            firstLetter : '',
        }
    },

    async mounted() {
    const response = await API.getUser();
    const splitText = response.msg.username.split(" "); 
    this.firstLetter = splitText[0][0];  
    },

    methods : {
        Go(){
            this.$router.go(-1);
        },
        goProfile(){
            this.$router.push({name : 'profile'})
        },
        logOut(){
        localStorage.removeItem('token');
        this.$router.push('/sign-in');
      }
    }
}
</script>
<style scoped>
#name{
     color:#673AB7;font-size:15px;font-weight:bolder;  
}
</style>