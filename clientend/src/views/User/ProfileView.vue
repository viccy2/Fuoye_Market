<template>
<div class="profile">
    <AppPagesNavbar /><br>
   <v-container>
        
                <v-card flat>
                    <v-card-title style="color:#673AB7;font-size:16px;" class="font-weight-bold">My Profile</v-card-title>
         
                    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                                        {{this.successMessage}}
                    </v-alert>
                    <v-divider></v-divider>

                    <!-- Profile Form for Buyers -->
                    <v-form ref="form"  class="pa-5" enctype="multi-part/form-data" v-if="this.user.type=='Buyer'">
                   <!-- <center> <v-img class="image-rounded" :src="`/${seller.image}`" rounded width="120"></v-img></center> -->
                    <v-text-field class="small" label="Username" disabled prepend-icon="mdi-account-edit" :rules="rules" v-model="user.username" color="#673AB7"></v-text-field><br>
                    <v-text-field class="small" label="Email" disabled prepend-icon="mdi-email-edit-outline" :rules="rules" v-model="user.email" color="#673AB7"></v-text-field><br>
                    <v-text-field class="small" label="Password" disabled prepend-icon="mdi-lock-outline" :rules="rules" value="secured" color="#673AB7"></v-text-field><br>
                    <v-text-field class="small" label="Phone Number" disabled prepend-icon="mdi-phone" :rules="rules" v-model="user.phone_number" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Account type" disabled prepend-icon="mdi-account-group" :rules="rules" v-model="user.type" color="#673AB7"></v-text-field><br>
                    <v-select class="small" disabled prepend-icon="mdi-map-marker" :rules="rules" label="Nigeria" ></v-select>  
                    </v-form>

                    <!-- Profile for Sellers -->
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multi-part/form-data" v-if="this.seller.type=='Seller'">
                   <!-- <center> <v-img class="image-rounded" :src="`/${seller.image}`" rounded width="120"></v-img></center> -->
                    <h4>Account Info :</h4>
                    <v-text-field class="small" label="Firstame" prepend-icon="mdi-account-edit" :rules="rules" v-model="sellerDetails.first_name" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Lastname" prepend-icon="mdi-account-edit" :rules="rules" v-model="sellerDetails.last_name" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Username" disabled prepend-icon="mdi-account-edit" :rules="rules" v-model="seller.username" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Email" disabled prepend-icon="mdi-email-edit-outline" :rules="rules" v-model="seller.email" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Account" disabled prepend-icon="mdi-account-group" :rules="rules" v-model="seller.type" color="#673AB7"></v-text-field>
                    <v-select class="small" disabled prepend-icon="mdi-map-marker" :rules="rules" label="Nigeria" ></v-select> 
                    <v-text-field class="small" label="Phone Number" prepend-icon="mdi-phone" :rules="rules" v-model="sellerDetails.phone_number" color="#673AB7"></v-text-field>
                   
                    <h4>Social Accounts :</h4>
                    <v-text-field class="small" label="Whatsapp" prepend-icon="mdi-whatsapp" :rules="rules" v-model="sellerDetails.whatsapp" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Instagram" prepend-icon="mdi-instagram" :rules="rules" v-model="sellerDetails.instagram" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Facebook" prepend-icon="mdi-facebook" :rules="rules" v-model="sellerDetails.facebook" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Twitter" prepend-icon="mdi-twitter" :rules="rules" v-model="sellerDetails.twitter" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Tiktok" prepend-icon="mdi-tiktok-outlined" :rules="rules" v-model="sellerDetails.tiktok" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Snapchat" prepend-icon="mdi-snapchat" :rules="rules" v-model="sellerDetails.snapchat" color="#673AB7"></v-text-field>

                    <v-btn type="submit" class="mt-3" color="#673AB7" width="100%" rounded outlined> Update Profile</v-btn>
                    </v-form>
                </v-card>
            
    </v-container><br>
</div>
  
</template>
<script>
import API from '../../api'
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
export default {
    name : 'profile',
    components:{AppPagesNavbar},
    props: {
    userName : String
  },
    data(){
        return {
            successMessage:"",
            rules : [(value) => !! value || 'This field is reuired'],
            user : {
                username        : '',
                email           : '',
                type            : '',
                token           : ''
            },

            seller : {
                username        : '',
                email           : '',
                type            : '',
                token           : ''
            },

            sellerDetails : {
                first_name      : '',
                last_name       : '',
                whatsapp        :  '',
                phone_number    : '',
                facebook        : '',
                tiktok          : '',
                twitter         : '',
                instagram       : '',
                snapchat        : ''
                
  
            },
            location : [
                'Ikole',
                'Oye',
            ],
            message : false,
                
            
        }
    },

    async created(){
        const response = await API.getUser();
        const response2 = await API.getSeller();
        this.user = response.msg;
        this.seller = response2.msg;
        this.sellerDetails = response2.other_details;
        
    },

    methods:{
       
        async updateForm(){
            try{
                const data = {
                    first_name  : this.sellerDetails.first_name,
                    last_name   : this.sellerDetails.last_name,
                    whatsapp    : this.sellerDetails.whatsapp,
                    phone_number: this.sellerDetails.phone_number,
                    facebook    : this.sellerDetails.facebook,
                    tiktok      : this.sellerDetails.tiktok,
                    twitter     : this.sellerDetails.twitter,
                    instagram   : this.sellerDetails.instagram,
                    snapchat    : this.sellerDetails.snapchat ,
                    token       : this.seller.token 
                };
                // const Form = new FormData();
                // // Form.append('image', this.image);
                // Form.append('first_name', this.seller.first_name);
                
         
                if(this.$refs.form.validate()){
                    const response =  await API.updateUser(data);
                    this.successMessage = response.msg;
                
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