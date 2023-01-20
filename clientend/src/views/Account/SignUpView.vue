<template>
    <div class="account">
        <!-- NAVBAR SECTION  -->
        <HomeNavbar />
        <!-- END NAVBAR SECTION  -->

        <div class="sign-up" style="margin-top:50px">
            <v-container>
               
                <v-row no-gutters>
                    <v-col sm="10" class=" mx-auto">
                        <v-card class="" flat>
                           <v-card-title class="pa-5" style="color:#673AB7;font-size:12px;">Create new account </v-card-title>
                                <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.message">
                                    Account created successfully, check email for activation link
                                </v-alert>
                             <v-form ref="form" @submit.prevent="createAccount" class="pa-5" style="margin-top:-10px" enctype="multi-part/form-data">
                                <v-text-field label="Username" :rules="rules" v-model="post.username" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-magnify" ></v-text-field>
                                <v-text-field label="Email" :rules="rules" v-model="post.email" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-gmail"></v-text-field>
                                <v-text-field type="password" :rules="rules" v-model="post.password" label="Password" color="#673AB7" flat solo rounded prepend-inner-icon="mdi-eye" ></v-text-field>
                                <v-select prepend-inner-icon="mdi-eye" :rules="rules" v-model="post.accountType" solo flat rounded label="Account type" :items="account"></v-select>
                                <v-btn type="submit" rounded outlined style="width:100%;color:#673AB7">Create Account</v-btn>
                             </v-form>
                             <p class="container" style="font-size:15px">Already have an account ? <a href="/sign-in">Here</a></p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="sign-in">

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
                'User',
                'Seller'
            ],
            location : [
                'Ikole',
                'Oye'
            ],
            rules : [(value) => !! value || '*required'],
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