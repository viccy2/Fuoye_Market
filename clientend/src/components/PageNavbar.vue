<template>
    <div class="navbar">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
    <div>
        <v-app-bar fixed flat  class="white" height="55" >
            <v-app-bar-nav-icon>
                <v-icon @click="Go" class="">
                    mdi-arrow-left-thick
                </v-icon> 
            </v-app-bar-nav-icon>  
            <v-toolbar-title id="name" ></v-toolbar-title>          
            <v-spacer></v-spacer><br><br>
            <!-- <v-text-field solo label="Search here" clearable ></v-text-field> -->
            <v-spacer></v-spacer>
            <!-- NAVBAR ICONS -->
            <v-app-bar-nav-icon>
                <v-icon class="">
                    mdi-search
                </v-icon> 
            </v-app-bar-nav-icon>  
        </v-app-bar>
    </div><br>
    

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