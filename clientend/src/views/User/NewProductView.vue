<template>
    <div class="new-product">
      <AppPagesNavbar /><br>
      <v-container>
        <v-card flat>
                    <v-card-title style="color:#673AB7;font-size:16px;" class="font-weight-bold">New Product</v-card-title>
                    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.successMessage">
                          {{this.successMessage}}
                    </v-alert>
                    <v-divider></v-divider>

                    <!-- Create New Product -->
                    <v-form ref="form" @submit.prevent="createProduct" class="pa-5" enctype="multi-part/form-data">
                   
                    <v-text-field class="small" label="Product's name" prepend-icon="mdi-package-variant" :rules="rules" v-model="newProduct.name" color="#673AB7"></v-text-field><br>
                    <v-text-field class="small" label="Product's price" type="number" prepend-icon="mdi-currency-ngn" :rules="rules" v-model="newProduct.price" color="#673AB7"></v-text-field><br>
                    <v-text-field class="small" label="Quantity available" type="number" prepend-icon="mdi-warehouse" :rules="rules" v-model="newProduct.quantity" color="#673AB7"></v-text-field><br>
                    <!-- SELECT CATEGORY  -->
                    <v-row>
                    <v-col cols="12" md="12">
                      <v-select
                        class="small" 
                        prepend-icon="mdi-cart-variant" 
                        v-model="selectedProduct"
                        :items="products"
                        item-text="name"
                        item-value="id"
                        label="Select product category"
                      ></v-select>
                    </v-col>

                  </v-row><br>
                    <v-text-field class="small" label="Location" prepend-icon="mdi-map-marker" :rules="rules" v-model="newProduct.location" color="#673AB7"></v-text-field><br>
                    <v-file-input
                        class="small"
                        label="Select product image"
                        accept="image/*"
                        v-model="selectedFile"
                        
                    ></v-file-input>
                    <v-btn type="submit" class="mt-3" color="#673AB7" width="100%" rounded outlined>Create Product</v-btn>
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
    name: 'new-product',
    components: {AppPagesNavbar },
    data() {
      return {
        selectedFile: null,
        successMessage:"",
        rules : [(value) => !! value || 'This field is reuired'],
        newProduct: {
          token       : '',
          name        : '',
          price       : '',
          quantity    : '',
          location    : '',
          image       : '',
          category_id : '',
          type        : '',
        },
        products: [],
        selectedProduct: null
      }
    },

    //fetching the seller token
    async created(){
        const response = await API.getSeller();
        this.seller = response.msg;
        const response2 = await API.getCategory();
        this.products = response2.data.filter(product => product.type === 'Product');
    },
   
    methods: {
      async createProduct() {
        try {
          const formData = new FormData();
          formData.append('image',    this.selectedFile);
          formData.append("name",     this.newProduct.name);
          formData.append("price",    this.newProduct.price);
          formData.append("quantity", this.newProduct.quantity);
          formData.append("location", this.newProduct.location);
          formData.append("category_id", this.selectedProduct);
          formData.append("type", 'Product');
          formData.append("token", this.seller.token);

                if(this.$refs.form.validate()){
                    const response =  await API.createProduct(formData);
                    this.successMessage = response.msg;
                    console.log(response);
                
                }
      }
      catch(err){
                console.log(err)
            }
      },
   
  },
}
  </script>
  