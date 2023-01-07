<template>
    <div class="navbar">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
    <div class="navbar1 hidden-sm-and-down">
        <v-app-bar fixed flat height="65">
            <v-text-field outlined grey append-icon="mdi-magnify" label="Search..." style="color='#673AB7;margin-top:40px;" >
                </v-text-field>         
        </v-app-bar><br>
    </div>

    <div class="navbar2 hidden-md-and-up" >
        <v-app-bar fixed flat height="65">
            <!-- <v-text-field small  grey append-icon="mdi-magnify" label="Enter your search..." style="color='#673AB7;margin-top:40px;" >
                </v-text-field>          -->
        </v-app-bar><br>
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