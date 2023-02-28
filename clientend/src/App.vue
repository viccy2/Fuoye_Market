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
  created(){
    const token = localStorage.getItem('token');
    // Make API call with token as a query parameter
axios.get('https://fuoyemarket.intellicsolutions.org/api/profile', {
  params: {
    token: token
  }
}).then(response => {
  // Handle successful API response
  console.log(response.data);
}).catch(error => {
  // Handle API error
  console.error(error);
});
  }
  // async created(){
  //      const token = localStorage.getItem('token');
  //      const response = await axios.get('https://fuoyemarket.intellicsolutions.org/api/profile', { headers: { Authorization: `Bearer ${token}` } });
        
  //       console.log(response);
  //       this.user = response.data;
  //   },
};
</script>
<style>

</style>
