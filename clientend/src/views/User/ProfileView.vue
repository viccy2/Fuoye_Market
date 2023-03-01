<template>
<div class="profile">
    <AppPagesNavbar /><br>
   <v-container style="margin-top:px;">
        
                <v-card flat>
                    <v-card-title style="color:#673AB7;font-size:16px;" class="font-weight-bold">My Profile</v-card-title>
         
                    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.message">
                        {{this.$route.params.message}}
                    </v-alert>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multi-part/form-data" >
                   <!-- <center> <v-img class="image-rounded" :src="`/${post.image}`" rounded width="120"></v-img></center> -->
                   <v-text-field class="small" label="Name" prepend-icon="mdi-account" :rules="rules" v-model="post.username" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Username" prepend-icon="mdi-account-edit" :rules="rules" v-model="post.username" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Email" disabled prepend-icon="mdi-email-edit-outline" :rules="rules" v-model="post.email" color="#673AB7"></v-text-field>
                    <v-text-field class="small" label="Account" disabled prepend-icon="mdi-account-group" :rules="rules" v-model="post.type" color="#673AB7"></v-text-field>
                    <v-select class="small" prepend-icon="mdi-map-marker" :rules="rules" label="Select location" :items="location"></v-select>                    
                    <v-btn type="submit" class="mt-3" color="#673AB7" width="100%" rounded outlined> Update Profile</v-btn>
                    </v-form>
                </v-card>
            
    </v-container><br><br><br>
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
            rules : [(value) => !! value || 'This field is reuired'],
            post : {
                name : '',
                username : '',
                email : '',
                type : '',
                location : '',
   
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
        this.post = response.msg;
    },

    methods:{
       
        async updateForm(){
            try{
                const Form = new FormData();
                Form.append('image', this.image);
                Form.append('name', this.post.name);
                Form.append('username', this.post.username);
                Form.append('type', this.post.type);
                Form.append('location', 'nill');
                
                
                if(this.$refs.form.validate()){
                    const response =  await API.updateUsersById('62f145600a6ca01206000826', Form);
                    this.$router.push({name: "profile", params : {message : response.message}});
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