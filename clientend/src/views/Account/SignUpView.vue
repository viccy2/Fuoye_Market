<template>
    <div class="account">
        <!-- NAVBAR SECTION  -->
        <HomeNavbar />
        <!-- END NAVBAR SECTION  -->

        <div class="hidden-sm-and-down" style="margin-top:100px">
            <v-container>
               <v-layout row wrap>

                    <v-flex lg6 md6 sm12 xs12>
                  <center>
                      <img class="img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/a1.png" style="width:100%; margin-top:30px;">
                  </center>
                    </v-flex>

                    <v-flex lg6 md6 sm12 xs12>
                        <v-card flat>
                           <v-card-title class="pa-5" style="color:#673AB7;">Welcome, create an account. </v-card-title>
                                <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                                    {{this.successMessage}}
                                </v-alert>
                                <v-alert border="left" close-text="Close Alert" color="red accent-4" dark dismissible v-if="this.errorMessage">
                                    {{this.errorMessage}}
                                </v-alert>
                            <v-form ref="form" @submit.prevent="createAccount" class="pa-5" style="margin-top:-10px" enctype="multi-part/form-data">
                                <v-text-field 
                                :rules="[rules.required]" 
                                v-model="post.username"
                                label="Username" type="text" color="#673AB7"  clearable
                                prepend-icon="mdi-account" class="small">
                                </v-text-field>

                                <v-text-field 
                                :rules="[rules.required]"
                                v-model="post.email" 
                                label="Email" type="email" color="#673AB7"  clearable
                                prepend-icon="mdi-gmail" class="small">
                                </v-text-field>

                                <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"
                                v-model="post.password" 
                                name="input-10-2" label="Password"  hint="At least 8 characters"  
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-lock"> 
                                </v-text-field>

                                <v-select prepend-icon="mdi-account-group-outline" class="small"
                                :rules="[rules.required]"
                                v-model="post.type" 
                                label="Account type" :items="account">
                                </v-select>

                                <v-checkbox color="#673AB7" class="small"
                                label="I agree to the terms and conditions">
                                </v-checkbox>

                                <br>

                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7;font-size:13px;">
                                create account
                                </v-btn>

                            </v-form>


                        </v-card><br><br>
                    </v-flex>
            
              </v-layout>
            </v-container>
        </div>

        <div class="hidden-md-and-up" style="margin-top:80px">
            <v-container>
               <v-layout row wrap>
                    <v-flex sm12 xs12>
                  <center>
                      <img class="img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/a1.png" style="width:50%;">
                  </center>
                    </v-flex>

                    <v-flex sm12 xs12>
                        <v-card class="ma-2" flat><br>
                           <!-- <v-card-title class="pa-5" style="color:#673AB7;font-size:20px;">Create New Account </v-card-title> -->
                                
                                <v-form ref="form" @submit.prevent="createAccount" class="pa-5" style="margin-top:-10px" enctype="multi-part/form-data">
                                    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                                        {{this.successMessage}}
                                    </v-alert>
                                    <v-alert border="left" close-text="Close Alert" color="red accent-4" dark dismissible v-if="this.errorMessage">
                                        {{this.errorMessage}}
                                    </v-alert>
                                <v-text-field 
                                :rules="[rules.required]" 
                                v-model="post.username"
                                label="Username" type="text" color="#673AB7"  clearable
                                prepend-icon="mdi-account-outline" class="small">
                                </v-text-field>

                                <v-text-field 
                                :rules="[rules.required]" 
                                v-model="post.email"
                                label="Email address" type="text" color="#673AB7"  clearable
                                prepend-icon="mdi-email-outline" class="small">
                                </v-text-field>

                                <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"
                                v-model="post.password" color="#673AB7"  
                                name="input-10-2" label="Password"  hint="At least 8 characters" 
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-lock-outline"> 
                                </v-text-field>

                                <v-select prepend-icon="mdi-account-group-outline" class="small"
                                :rules="[rules.required]" color="#673AB7"  
                                v-model="post.type" 
                                label="Account type" :items="account">
                                </v-select>

                                <v-checkbox color="#673AB7" class="small"
                                label="I agree to the terms and conditions">
                                </v-checkbox>

                                <br>

                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7;font-size:13px;">
                                sign up
                                </v-btn>

                            </v-form>

                   
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
import API from '../../api'

export default {
    name : 'new-account',
    components: {HomeNavbar, Footers},
    data(){
        return {
            successMessage:"",
            errorMessage:"",
            account : [
                'Buyer',
                'Seller'
            ],
            show2: true,
            password: 'Password',
            rules: {
            required: value => !!value || 'This field is required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            },
            post : {
                username : "",
                email : "",
                password : "",
                accountType : "",
            },
        }
    },
    methods : {
       async createAccount(){

                const data = {
                    username : this.post.username,
                    email    : this.post.email,
                    password : this.post.password,
                    type     : this.post.type
                };
                if(this.$refs.form.validate()){

                const response = await API.createUser(data);
                if(response.msg=='user successfully registered'){
                    this.successMessage = response.msg;
                     setTimeout(function(){
                     window.location.href = '/sign-in';
                    },5000);
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