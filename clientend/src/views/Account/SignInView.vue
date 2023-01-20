<template>
    <div class="sign-in">

    <!-- NAVBAR SECTION  -->
        <HomeNavbar />
    <!-- END NAVBAR SECTION  -->
    <div class="hidden-sm-and-down" style="margin-top:100px">
            <v-container>
               <v-layout row wrap>

                    <v-flex lg6 md6 sm12 xs12>
                  <center>
                      <img class="rounded-circle img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/n60.jpg" style="width:100%;height
                      :100%;margin-top:-50px;">
                  </center>
                    </v-flex>

                    <v-flex lg6 md6 sm12 xs12>
                        <v-card flat style="margin-top:80px;">
                            <v-card-title class="pa-5" style="color:#673AB7">Sign In</v-card-title>
                             <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field :rules="rules" label="Email" type="email" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-gmail"></v-text-field>
                                <v-text-field :rules="rules" label="Password" type="password" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-eye" ></v-text-field>
                                <v-btn type="submit" class="text-capitalize" rounded outlined style="width:100%;color:#673AB7">Sign In</v-btn>
                             </v-form>
                             <p class="container" style="font-size:15px">Create new account ? <a href="/new-account">Here</a></p>

                        </v-card>
                    </v-flex>
            
              </v-layout>
            </v-container>
        </div>
        
        <div class="hidden-md-and-up" style="margin-top:80px">
            <v-container>
               <v-layout row wrap>
                    <v-flex sm12 xs12>
                  <center>
                      <img class="rounded-circle img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/n60.jpg" style="width:100%;">
                  </center>
                    </v-flex>

                    <v-flex sm12 xs12>
                        <v-card flat>
                            <v-card-title class="pa-5" style="color:#673AB7">Sign In</v-card-title>
                             <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field :rules="rules" label="Email" type="email" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-gmail"></v-text-field>
                                <v-text-field :rules="rules" label="Password" type="password" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-eye" ></v-text-field>
                                <v-btn type="submit" class="text-capitalize" rounded outlined style="width:100%;color:#673AB7">Sign In</v-btn>
                             </v-form>
                             <p class="container" style="font-size:15px">Create new account ? <a href="/new-account">Here</a></p>

                        </v-card><br><br>
                    </v-flex>
              </v-layout>
            </v-container>
        </div>

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
            rules : [(value) => !! value || '*This field is required'],
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