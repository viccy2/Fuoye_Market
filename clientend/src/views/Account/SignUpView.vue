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
                      <img class="img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/n60.jpg" style="width:100%; margin-top:-50px;">
                  </center>
                    </v-flex>

                    <v-flex lg6 md6 sm12 xs12>
                        <v-card flat>
                           <v-card-title class="pa-5" style="color:#673AB7;">Create New Account </v-card-title>
                                <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.message">
                                    Account created successfully, check email for activation link
                                </v-alert>
                            <v-form ref="form" @submit.prevent="createAccount" class="pa-5" style="margin-top:-10px" enctype="multi-part/form-data">
                                <v-text-field 
                                :rules="[rules.required]" 
                                v-model="post.username"
                                label="Username" type="text" color="#673AB7"  clearalble
                                prepend-icon="mdi-account" class="small">
                                </v-text-field>

                                <v-text-field 
                                :rules="[rules.required]"
                                v-model="post.email" 
                                label="Email" type="email" color="#673AB7"  clearalble
                                prepend-icon="mdi-gmail" class="small">
                                </v-text-field>

                                <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"
                                v-model="post.password" 
                                name="input-10-2" label="Password"  hint="At least 8 characters"  clearalble
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-eye"> 
                                </v-text-field>

                                <v-select prepend-icon="mdi-account-group-outline" class="small" clearalble
                                :rules="rules"
                                v-model="post.accountType" 
                                label="Account type" :items="account">
                                </v-select>

                                <v-checkbox color="#673AB7" class="small"
                                label="I agree to the terms and conditions">
                                </v-checkbox>

                                <br>

                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7;font-size:13px;">
                                Create Account
                                </v-btn>

                            </v-form>

                             <p class="container pa-5" style="font-size:11px">Already have an account ? <a href="/sign-in">Here</a></p>

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
                      <img class="img1 animate__animated animate__zoomIn animate__slower"  src="../../assets/images/17.jpg" style="width:90%;">
                  </center>
                    </v-flex>

                    <v-flex sm12 xs12>
                        <v-card flat><br>
                           <!-- <v-card-title class="pa-5" style="color:#673AB7;font-size:16px;">Create New Account </v-card-title> -->
                                <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.message">
                                    Account created successfully, check email for activation link
                                </v-alert>
                                <v-form ref="form" @submit.prevent="createAccount" class="pa-5" style="margin-top:-10px" enctype="multi-part/form-data">
                                <v-text-field 
                                :rules="[rules.required]" 
                                v-model="post.username"
                                label="Username" type="text" color="#673AB7"  clearalble
                                prepend-icon="mdi-account" class="small">
                                </v-text-field>

                                <v-text-field 
                                :rules="[rules.required]"
                                v-model="post.email" 
                                label="Email" type="email" color="#673AB7"  clearalble
                                prepend-icon="mdi-gmail" class="small">
                                </v-text-field>

                                <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"
                                v-model="post.password" color="#673AB7"  clearalble
                                name="input-10-2" label="Password"  hint="At least 8 characters" 
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-icon="mdi-eye"> 
                                </v-text-field>

                                <v-select prepend-icon="mdi-account-group-outline" class="small"
                                :rules="rules" color="#673AB7"  clearalble
                                v-model="post.accountType" 
                                label="Account type" :items="account">
                                </v-select>

                                <v-checkbox color="#673AB7" class="small"
                                label="I agree to the terms and conditions">
                                </v-checkbox>

                                <br>

                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7;font-size:13px;">
                                Create Account
                                </v-btn>

                            </v-form>

                             <p class="container pa-5" style="font-size:11px">Already have an account ? <a href="/sign-in">Here</a></p>

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
// import API from '.../api'
export default {
    name : 'new-account',
    components: {HomeNavbar, Footers},
    data(){
        return {
            account : [
                'Buyer',
                'Seller'
            ],
            rules: {
            required: value => !!value || 'This field is required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            },
            post : {
                name : "",
                username : "",
                email : "",
                password : "",
                accountType : "",
                location : "",
                image : "",
                code : "",
                status : ""
            },
            image : "",
            message : false,
        }
    },
    methods : {
       selectFile(file){
            this.image = file[0];
       },
       async createAccount(){
            try {
                this.code = 2000 + Math.random() * 5000;
                this.status = 0;
                const Form = new FormData();
                Form.append("username", this.post.username);
                Form.append("email", this.post.email);
                Form.append("password", this.post.password);
                Form.append("accountType", this.post.accountType);
               
                if(this.$refs.form.validate()){
                    const response = await API.newUser(Form);
                    this.message = true;
                     setTimeout(function(){
                     window.location.href = '/activate-account';
                    },5000);
                }
            }
            catch(err){
                console.log(err)
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