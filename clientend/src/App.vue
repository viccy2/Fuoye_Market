<template>
  <v-app>
    <v-main class="white">
      <transition
 mode="out-in"
 enter-active-class="animate__animated animate__fadeIn"
 leave-active-class="animate__animated animate__fadeOut"
>
  <router-view :user="user" />
  
</transition>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios" ;
export default {
  name: 'App',
  data: () => ({
    user : '',
  }),
  // async created(){
  //       const response = await axios.get('https://fuoyemarket.intellicsolutions.org/api/profile/', {
  //           headers : {
  //               Authorization : 'Bearer' + localStorage.getItem('token')
  //           }

  //       });
        
  //       console.log(response);
  //       this.user = response.data;
  //   },
};
</script>
<style>

</style>
