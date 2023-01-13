<template>
    <div class="navbar">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
    <div>
        <v-app-bar fixed flat  class="white" height="55" >          
            <v-text-field flat solo label="Enter your search ..." clearable style="margin-top:-25px;height:20px;"></v-text-field>
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