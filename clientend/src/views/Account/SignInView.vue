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
                      <img class="img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/a2.png" style="width:100%;margin-top:30px;">
                  </center>
                    </v-flex>

                    <v-flex lg6 md6 >
                        <v-card flat style="margin-top:40px;">
                            <v-card-title class="pa-5" style="color:#673AB7">Sign In</v-card-title>
                             <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field 
                                :rules="[rules.required]" 
                                label="Email" type="email" color="#673AB7" clearable
                                prepend-icon="mdi-gmail" class="small">
                                </v-text-field>

                                <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required]" :type="show2 ? 'text' : 'password'" clearable color="#673AB7"
                                name="input-10-2" label="Password" 
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-lock"> 
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
            <template>
                <div class="">
                    <v-img
                        class="mx-auto "
                        max-width="228"
                        src="../../assets/images/a2.png"
                    ></v-img>
                    <v-card
                        class="mx-auto pa-10 pb-8"
                        flat
                        max-width="448"
                      
                    >
                    <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
     
                    <v-text-field
                        :rules="[rules.required]" 
                        density="compact"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                        color="#673AB7"
                    ></v-text-field>

                    <v-text-field
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                        :rules="[rules.required]" :type="show2 ? 'text' : 'password'" 
                        name="input-10-2" label="Password" color="#673AB7"
                        class="input-group--focused small" @click:append="show2 = !show2" prepend-inner-icon="mdi-lock-outline"
                        density="compact"
                        placeholder="Enter your password"
                        variant="outlined"
                        @click:append-inner="visible = !visible"
                    ></v-text-field>

                    <v-card
                        class="mb-12"
                        color="surface-variant"
                        variant="tonal"
                    >
                        <v-card-text class="text-medium-emphasis text-caption">
                            Note : After consecutive failed login attempts, you can also click "Forgot login password?" below to reset the login password.
                        </v-card-text>
                    </v-card>
                    <v-btn type="submit" class="text-capitalize"  variant="tonal"
                                rounded outlined style="width:100%;color:#673AB7;font-size:13px;">
                                sign in
                    </v-btn>
                
            </v-form>
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        <a
                        class="text-caption text-decoration-none small"
                        href="#"
                        style="color:#673AB7"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Forgot login password?
                        </a>
                </div>
                <v-card-text class="text-center">
                    <a
                    class="text-blue text-decoration-none small"
                    href="new-account"
                    rel="noopener noreferrer"
                    target="new-account"
                    style="color:#673AB7"
                    >
                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                    </a>
                </v-card-text>
        </v-card><br><br>
    </div>
    </template>
            
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
            visible: false,
            show2: true,
            password: 'Password',
            rules: {
            required: value => !!value || 'This field is required.',
            // min: v => v.length >= 8 || 'Min 8 characters',
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