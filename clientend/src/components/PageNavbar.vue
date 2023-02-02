<template>
    <div class="navbar">
    <!-- DISPLAY ONLY ON MOBILE DEVICES -->
    <div>
        <v-app-bar fixed flat  class="white" height="55" >          
          
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