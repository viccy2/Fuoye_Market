<template>
    <div class="sign-in">

    <!-- NAVBAR SECTION  -->
        <HomeNavbar />
    <!-- END NAVBAR SECTION  -->
    <div class="hidden-sm-and-down" style="margin-top:100px;">
            <v-container>
               <v-layout row wrap>

                    <v-flex lg6 md6 >
                  <center>
                      <img class="img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/n60.jpg" style="width:100%;margin-top:-50px;">
                  </center>
                    </v-flex>

                    <v-flex lg6 md6 >
                        <v-card flat style="margin-top:80px;">
                            <v-card-title class="pa-5" style="color:#673AB7">Sign In</v-card-title>
                             <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field 
                                :rules="[rules.required]" 
                                label="Email" type="email" color="#673AB7" clearable
                                prepend-icon="mdi-gmail" class="small">
                                </v-text-field>

                                <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'" clearable color="#673AB7"
                                name="input-10-2" label="Password"  hint="At least 8 characters" 
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-eye"> 
                                </v-text-field>  
                                <br>
                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7">
                                Sign In
                                </v-btn>

                             </v-form>
                             <p class="container pa-5" style="font-size:11px">Create new account ? <a href="/new-account">Here</a></p>

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
                      <img class="img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/17.jpg" style="width:90%;">
                  </center>
                    </v-flex>

                    <v-flex sm12 xs12>
                        <v-card flat><br>
                            <!-- <v-card-title class="pa-5" style="color:#673AB7;font-size:16px;">Sign In Here</v-card-title> -->
                             <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field 
                                :rules="[rules.required]" 
                                label="Email" type="email" color="#673AB7" clearable
                                prepend-icon="mdi-gmail" class="small">
                                </v-text-field>

                                <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'" 
                                name="input-10-2" label="Password"  hint="At least 8 characters" color="#673AB7"
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-eye"> 
                                </v-text-field>  
                                <br>
                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7">
                                Sign In
                                </v-btn>
                             </v-form>
                             <p class="container pa-5" style="font-size:11px">Create new account ? <a href="/new-account">Here</a></p>

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
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            password: 'Password',
            rules: {
            required: value => !!value || 'This field is required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            },
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

<style>

    .small {
        font-size : 12px;
    }
    .small .v-label {
        font-size : 12px;
    }
    .small .v-text-field__prepend-inner {
        font-size : 12px;
    }

</style>