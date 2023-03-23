<template>
    <div class="new-service">
      <AppPagesNavbar /><br>
      <v-container>
        <v-card flat>
                    <v-card-title style="color:#673AB7;font-size:16px;" class="font-weight-bold">New Service</v-card-title>
                    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                          {{this.successMessage}}
                    </v-alert>
                    <v-divider></v-divider>

                    <!-- Create New Product -->
                    <v-form ref="form" @submit.prevent="createProduct" class="pa-5" enctype="multi-part/form-data">
                   
                    <v-text-field class="small" label="Company's name" prepend-icon="mdi-briefcase" :rules="rules" v-model="newService.name" color="#673AB7"></v-text-field><br>
                    <v-textarea
                        class="small"
                        v-model="newService.describtion"
                        prepend-icon="mdi-information" 
                        :rules="rules" 
                        label="About company"
                        rows="5"
                        :counter="500"
                        color="#673AB7"
                    ></v-textarea>
                    <v-text-field class="small" label="Number of happy clients" type="number" prepend-icon="mdi-account-group" :rules="rules" v-model="newService.no_of_clients" color="#673AB7"></v-text-field><br>
                    <v-text-field class="small" label="Location" prepend-icon="mdi-map-marker" :rules="rules" v-model="newService.location" color="#673AB7"></v-text-field><br>
                    <v-file-input
                        label="Company logo"
                        accept="image/*"
                        v-model="selectedFile"
                        
                    ></v-file-input>
                    <v-btn type="submit" class="mt-3" color="#673AB7" width="100%" rounded outlined>Create Service</v-btn>
                    </v-form>
        </v-card>
      </v-container>
    
    </div>
  </template>
  
  <script>

  import API from '../../api'
  import 'animate.css'
  import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
  export default {
    name: 'new-service',
    components: {AppPagesNavbar },
    data() {
      return {
        selectedFile: null,
        successMessage:"",
        rules : [(value) => !! value || 'This field is reuired'],
        newService: {
          token             : '',
          name              : '',
          describtion       : '',
          no_of_clients     : '',
          location          : '',
          image             : '',
          category_id       : '',
          type              : '',
        },
      }
    },

    //fetching the seller token
    async created(){
        const response = await API.getSeller();
        this.seller = response.msg;
        
    },
    methods: {
     
      async createProduct() {
        try {
          const formData = new FormData();
          formData.append('image',          this.selectedFile);
          formData.append("name",           this.newService.name);
          formData.append("describtion",    this.newService.describtion);
          formData.append("no_of_clients",  this.newService.no_of_clients);
          formData.append("location",       this.newService.location);
          formData.append("category_id",    1);
          formData.append("type",           'Service');
          formData.append("token",          this.seller.token);

                if(this.$refs.form.validate()){
                    const response =  await API.createService(formData);
                    this.successMessage = response.msg;
                
                }
      }
      catch(err){
                console.log(err)
            }
      },
   
  }
}
  </script>
  