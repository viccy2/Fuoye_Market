<template>
  <v-app>
    <v-main class="white">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
      <div>
         <router-view :userName="userName" />
    </div>
  
      </transition>     
    </v-main>
  </v-app>
</template>

  <script>
  import axios from "axios" ;
  export default {
    name: 'App',
    data(){
      return {
      user : '',
      userName : '',
      userId : '',
      userEmail : '',
    }
  },

    async created(){
      const token = localStorage.getItem('token');
      const response = await axios.get ('https://fuoyemarket.intellicsolutions.org/api/profile', {
        params: {
          token: token
        }
      })

      // passing response into user variable

      const user = response.data.msg;
      this.userName = user.username;
      this.userId = user.id;
      this.userEmail = user.email;
    
      // console.log(this.userName);
      // console.log(this.userId);
      // console.log(this.userEmail);
    
    }

  };
  </script>
<style>

</style>
