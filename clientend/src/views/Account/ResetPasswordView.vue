<template>
    <div class="reset-password">

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
                            <v-card-title class="pa-5" style="color:#673AB7">Reset Password</v-card-title>
                             <v-form ref="form" @submit.prevent="resetPwd" class="pa-5" style="" enctype="multi-part/form-data" >
                                <v-text-field 
                                v-model="post.email" 
                                :rules="[rules.required]" 
                                label="Enter registered email" type="email" color="#673AB7" clearable
                                prepend-icon="mdi-gmail" class="small">
                                </v-text-field>

                             
                                <br>
                                <v-btn type="submit" class="text-capitalize" 
                                rounded outlined style="width:100%;color:#673AB7">
                                Get Link
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
                        
                    <v-form ref="form" @submit.prevent="resetPwd" class="pa-5" style="" enctype="multi-part/form-data" >
                        <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                            {{this.successMessage}}
                        </v-alert>
                        <v-alert border="left" close-text="Close Alert" color="red accent-4" dark dismissible v-if="this.errorMessage">
                            {{this.errorMessage}}
                        </v-alert>
                    <v-text-field
                        v-model="post.email" 
                        class="small"
                        :rules="[rules.required]" 
                        label="Enter registered email"
                        prepend-icon="mdi-email-outline"
                        color="#673AB7"
                    ></v-text-field>

                    <v-card
                        class="mb-12"
                        color="surface-variant"
                        variant="tonal"
                    >
                        <v-card-text class="text-medium-emphasis text-caption">
                            Note : "If entered registered email you will recieve a link to set new password in your inbox."
                        </v-card-text>
                    </v-card>
                    <v-btn type="submit" class="text-capitalize"  variant="tonal"
                                rounded outlined style="width:100%;color:#673AB7;font-size:13px;">
                                Get reset link
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
    name : 'reset-password',
    components: {HomeNavbar, Footers},
    data(){
        return {
            successMessage:"",
            errorMessage:"",
            rules: {
            required: value => !!value || 'This field is required.',
            },
            post : {
                email : "",
            },
          
        }
    },
    methods : {
        async resetPwd(){

            const data = {
                    email : this.post.email,
            };

            if(this.$refs.form.validate()){
                try {
                    const response = await API.forgotPWD(data);
                    this.successMessage = response.msg;
                    console.log(response);
                } catch (error) {
                    this.errorMessage ='User not found';
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