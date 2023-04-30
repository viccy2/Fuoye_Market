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
                            <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                                         {{this.successMessage}}
                            </v-alert>
                            <v-alert border="left" close-text="Close Alert" color="red accent-4" dark dismissible v-if="this.errorMessage">
                            {{this.errorMessage}}
                        </v-alert>
                            <v-card-title class="pa-5" style="color:#673AB7">New Password </v-card-title>
                             <v-form ref="form" @submit.prevent="newPWD" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field
                                    class="small"
                                    v-model="post.email" 
                                    :rules="[rules.required]" 
                                    label="Email address"
                                    prepend-icon="mdi-email-outline"
                                    color="#673AB7"
                                ></v-text-field>
                                <v-text-field
                                    class="small"
                                    v-model="post.code" 
                                    :rules="[rules.required]" 
                                    label="Verification code"
                                    prepend-icon="mdi-key-star"
                                    color="#673AB7"
                                ></v-text-field> 

                                <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"
                                density="compact"
                                placeholder="Enter your password"
                                variant="outlined"
                                v-model="post.password" color="#673AB7"  
                                name="input-10-2" label="New password"  hint="At least 8 characters" 
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-inner-icon="mdi-lock-outline"> 
                                </v-text-field>
                                <br>
                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7">
                                Update password
                                </v-btn>

                             </v-form>
                            

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
                        
                    <v-form ref="form" @submit.prevent="newPWD" class="pa-5" style="" enctype="multi-part/form-data" >
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
                    <v-text-field
                                    class="small"
                                    v-model="post.code" 
                                    :rules="[rules.required]" 
                                    label="Verification code"
                                    prepend-icon="mdi-key-star"
                                    color="#673AB7"
                      ></v-text-field> 
                     <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                :rules="[rules.required, rules.min]" :type="show2 ? 'text' : 'password'"
                                density="compact"
                                placeholder="Enter your password"
                                variant="outlined"
                                v-model="post.password" color="#673AB7"  
                                name="input-10-2" label="New password"  hint="At least 8 characters" 
                                class="input-group--focused small" @click:append="show2 = !show2" prepend-inner-icon="mdi-lock-outline"> 
                     </v-text-field>

                    <v-card
                        class="mb-12"
                        color="surface-variant"
                        variant="tonal"
                    >
                      
                    </v-card>
                    <v-btn type="submit" class="text-capitalize"  variant="tonal"
                                rounded outlined style="width:100%;color:#673AB7;font-size:13px;">
                                Update password
                    </v-btn>
                
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
            show2: true,
            rules: {
            required: value => !!value || 'This field is required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            },
            post : {
                email : "",
                password : "",
                code : "",
            },
          
        }
    },
    methods : {
        async newPWD(){

            const data = {
                    email    : this.post.email,
                    password : this.post.password,
                    code : this.post.code
            };

            if(this.$refs.form.validate()){
                try {
                    const response = await API.newPWD(data);
                    this.successMessage = response.msg;
                    // console.log(response);
                } catch (error) {
                    this.errorMessage ='Password reset failed';
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