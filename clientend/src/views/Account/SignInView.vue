<template>
    <div class="sign-in grey lighten-5">

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
                            <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                                         {{this.successMessage}}
                            </v-alert>
                            <v-alert border="left" close-text="Close Alert" color="red accent-4" dark dismissible v-if="this.errorMessage">
                                    {{this.errorMessage}}
                            </v-alert>
                            <v-card-title class="pa-5" style="color:#673AB7">Sign In</v-card-title>
                             <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field 
                                v-model="post.email" 
                                :rules="[rules.required]" 
                                label="Email" type="email" color="#673AB7" clearable
                                prepend-icon="mdi-gmail" class="small">
                                </v-text-field>

                                <v-text-field  v-model="post.password"  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required]" :type="show2 ? 'text' : 'password'"  color="#673AB7"
                                name="input-10-2" label="Password" 
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-lock"> 
                                </v-text-field>  
                                <br>
                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7">
                                Sign In
                                </v-btn>

                             </v-form>
                             <p class="container pa-5" style="font-size:11px">Forgot Password ? <a href="/reset-password">Here</a></p>

                        </v-card>
                    </v-flex>
            
              </v-layout>
            </v-container>
        </div>
        
        <div class="hidden-md-and-up" style="margin-top:80px">
            <v-container fluid>
                
            <template>
                <div class="">
                    <v-img
                        class="mx-auto "
                        max-width="228"
                        src="../../assets/images/a2.png"
                    ></v-img>
                    
                    <v-card  flat >
                        
                    <v-form ref="form" @submit.prevent="signIn" class="pa-5" style="" enctype="multi-part/form-data" >
                        <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                            {{this.successMessage}}
                        </v-alert>
                        <v-alert border="left" close-text="Close Alert" color="red accent-4" dark dismissible v-if="this.errorMessage">
                            {{this.errorMessage}}
                        </v-alert>
                    <v-text-field
                        class="small"
                        v-model="post.email" 
                        :rules="[rules.required]" 
                        label="Email address"
                        prepend-icon="mdi-email-outline"
                        color="#673AB7"
                    ></v-text-field>

                    <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"
                                label="Password"
                                v-model="post.password" color="#673AB7"  
                                name="input-10-2" hint="At least 8 characters" 
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-lock-outline"> 
                     </v-text-field>

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
            <v-container fluid>
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        <a
                        class="text-caption text-decoration-none small"
                        href="reset-password"
                        style="color:#673AB7"
                        rel="noopener noreferrer"
                        target="reset-password"
                        >
                        Forgot login password?
                        </a>
                </div>
            </v-container> 
            </v-form>
                
        </v-card><br><br>
    </div>
    </template>
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
import API from '../../api'

export default {
    name : 'sign-in',
    components: {HomeNavbar, Footers},
    data(){
        return {
            password: 'Password',
            successMessage:"",
            errorMessage:"",
            visible: false,
            show2: false,
            rules: {
            required: value => !!value || 'This field is required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            },
            post : {
                email : "",
                password : "",
            },
          
        }
    },
    methods : {
        async signIn(){

            const data = {
                    email    : this.post.email,
                    password : this.post.password
            };

            if(this.$refs.form.validate()){

             const response = await API.loginUser(data);
            //  console.log(response);
                if(response.msg=='login successful'){
                    this.successMessage = response.msg;
                    localStorage.setItem('token', response.data.token);
                    setTimeout(function(){
                    window.location.href = '/dashboard';
                    },3000);
                }
                
                else{
                    this.errorMessage = response;
                }

                };
            
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