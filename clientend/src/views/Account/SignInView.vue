<template>
    <div class="sign-in">

    <!-- NAVBAR SECTION  -->
        <HomeNavbar />
    <!-- END NAVBAR SECTION  -->

         <v-container>
                <v-row no-gutters>
                    <v-col sm="10" class=" mx-auto">
                        <v-card class="" flat style="margin-top:50px;">
                           <v-card-title class="pa-5" style="color:#673AB7">Sign In</v-card-title>
                             <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field :rules="rules" label="Email" type="email" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-gmail"></v-text-field>
                                <v-text-field :rules="rules" label="Password" type="password" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-account" ></v-text-field>
                                <v-btn type="submit" rounded outlined style="width:100%;color:#673AB7">Sign In</v-btn>
                             </v-form>
                             <p class="container" style="font-size:15px">Create new account ? <a href="/new-account">Here</a></p>
      
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

     <!-- FOOTER SECTION  -->
  <Footers />
  <!-- END FOOTER SECTION  -->

    </div>
</template>
<script>
import HomeNavbar from '../../components/HomeNavbar.vue'
import Footers from '../../components/Footers.vue'
export default {
    name : 'sign-in',
    components: {HomeNavbar, Footers},
    data(){
        return {
            rules : [(value) => !! value || '*required'],
        }
    },
    methods : {
        async signIn(){
            if(this.$refs.form.validate()){
                console.log('ready')
            }
        }
    }
}
</script>