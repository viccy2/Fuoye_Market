<template>
  <v-app>
    <v-main class="white">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
      <div>
         <router-view/>
    </div>
  
      </transition>     
    </v-main>
  </v-app>
</template>

  <script>
  export default {
    name: 'App',
    data(){
      return {
   
    }
  },

  };
  </script>
<style>

</style>
