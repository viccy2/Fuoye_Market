<template>
  <div class="navbar white">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
        <v-app-bar fixed flat class="white">
          
            <v-toolbar-title id="name"><img class="rounded-xl"  src="../assets/images/logo1.png" height="50"  @click="Go"></v-toolbar-title>         
                  
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <div class="icons">
            </div>
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
    

  </div>
</template>
<script>
export default {
  name : 'navbar',
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
            this.$router.push({name : 'dashboard'})
        },
        goProfile(){
            this.$router.push({name : 'profile'})
        }
    }
}
</script>
<style scoped>
#name{
      color:#673AB7;font-size:16px;font-weight:bolder;  
    }
</style>