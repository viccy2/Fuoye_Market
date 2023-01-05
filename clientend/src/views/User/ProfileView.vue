<template>
<div class="profile">
    <AppPagesNavbar />
   <v-container style="margin-top:20px;">
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="">
                    <v-card-title style="color:#673AB7;font-size:16px;">My Profile</v-card-title>
                    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.message">
                        {{this.$route.params.message}}
                    </v-alert>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multi-part/form-data" >
                   <center> <v-img class="image-rounded" :src="`/${post.image}`" rounded width="120"></v-img></center>
                    <v-text-field label="Name" prepend-icon="mdi-account" :rules="rules" v-model="post.name" color="#673AB7"></v-text-field>
                    <v-text-field label="Username" prepend-icon="mdi-view-list" :rules="rules" v-model="post.username" color="#673AB7"></v-text-field>
                    <v-text-field label="Email" disabled prepend-icon="mdi-view-list" :rules="rules" v-model="post.email" color="#673AB7"></v-text-field>
                    <v-text-field label="Account" disabled prepend-icon="mdi-view-list" :rules="rules" v-model="post.accountType" color="#673AB7"></v-text-field>

                    <v-select class="ma-5" prepend-inner-icon="mdi-eye" :rules="rules" v-model="post.location" label="Select location" :items="location"></v-select>
                    <v-file-input  @change="selectFile" show-size counter multiple label="Profile picture"></v-file-input>
                    
                    <v-btn type="submit" class="mt-3" color="#673AB7" width="100%" rounded outlined> Update Profile</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container><br><br><br>
</div>
  
</template>
<script>
import API from '../../api'
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
export default {
    name : 'profile',
    components:{AppPagesNavbar},
    data(){
        return {
            rules : [(value) => !! value || 'This field is reuired'],
            post : {
                name : '',
                username : '',
                email : '',
                accountType : '',
                location : '',
                image : ''
            },
            location : [
                'Ikole',
                'Oye',
            ],
            message : false,
                
            
        }
    },

    async created(){
        const response = await API.getUsersById('62f145600a6ca01206000826');
        this.post = response;
    },
    methods:{
        selectFile(file){
            this.image = file[0];
        },
        async updateForm(){
            try{
                const Form = new FormData();
                Form.append('image', this.image);
                Form.append('name', this.post.name);
                Form.append('username', this.post.username);
                Form.append('location', this.post.location);
                Form.append('old_image', this.post.image);
                
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