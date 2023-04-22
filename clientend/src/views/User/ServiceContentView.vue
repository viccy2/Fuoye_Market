<template>
    <div class="service-content">

        
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
            
        <div class="service1 hidden-sm-and-down" style="margin-top:0px">
          
              <template>

              <v-card height="" style=" overflow-y : auto; width:100%;" flat>
                <v-row align="center" justify="center">

                  <!-- INPUT SEARCH -->

                  <v-col cols="12" md="6">
                    <v-text-field
                      color="#673AB7"
                      v-model="search"
                      label="Search all services..."
                      outlined
                      append-icon="mdi-magnify"
                    
                    ></v-text-field>
                  </v-col>

                  <!-- SELECT CATEGORY  -->

                  <v-col cols="12" md="6">
                    <v-select
                      color="#673AB7"
                      outlined
                      v-model="selectedCategory"
                      :items="categories"
                      label="Select category"
                    ></v-select>
                  </v-col>

                  </v-row>

              <!-- PRODUCTS CARD -->

              <v-container fluid>
                <v-row class="pa-2">
                  <v-col 
                    v-for="(product, index) in filteredProducts" :key="index"
                    class = "d-flex child-flex"
                    cols="3"
                
                  >

                  <template >                                    
                    <v-card
                      class="mx-auto grey lighten-4"
                      :to="{name : 'service-content-details'}"
                    >
                      <v-img
                        :src="`${product.image_link}`"
                        :lazy-src="`${product.image_link}`"
                        height="200px"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>

                      </v-img>

                    <v-card-title style="font-size:12px;">
                    </v-card-title>

                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                      {{ product.name }}
                    </v-card-subtitle>

                    <v-card-text style="font-size:10px;">
                      <v-row>
                        <v-col cols="12">
                          <v-icon small class="" id="icon">mdi-map-marker</v-icon>&nbsp; {{product.location}}.
                        </v-col>
                      </v-row>
                    </v-card-text>

                  </v-card>
                </template><br><br><br>

              </v-col>
            </v-row>
            </v-container>
          </v-card><br><br>
     
        </template>
     
   </div>

        <!-- DISPLAY ONLY ON SMALL AND SMALLER DEVICES -->

          <div class="service2 hidden-md-and-up" style="margin-top:0px;">
   
              <template>
   
              <v-card height="" style="width:100%;" flat>
                <v-row align="center" justify="center">
                  
                  <!-- INPUT SEARCH -->

                  <v-col  sm="6" xs="6">
                    <v-text-field
                      color="#673AB7"
                      v-model="search"
                      label="Search all services..."
                      outlined
                      append-icon="mdi-magnify"
                    ></v-text-field>
                  
                  </v-col>

                  <!-- SELECT CATEGORY  -->

                  <v-col  sm="6" xs="6">
                    <v-select
                      color="#673AB7"
                      outlined
                      v-model="selectedCategory"
                      :items="categories"
                      label="Select category"
                    ></v-select>
                  </v-col>

                </v-row>

                <v-row class="" style="margin-top:-30px;">
                  <v-col 
                    v-for="(product, index) in filteredProducts" :key="index"
                    class = "d-flex child-flex"
                    cols="6"
                  >

                  <template >                                    
                    <v-card
                      :disabled="loading"
                      class="mx-auto grey lighten-4"
                      :to="{name : 'service-content-details'}"
                    >
                      <v-img
                        :src="`${product.image_link}`"
                        height="200px"
                        :lazy-src="`${product.image_link}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                      </v-img>

                        <v-card-title style="font-size:12px;" >
                        </v-card-title>

                        <v-card-subtitle style="font-size:11px;color:#673AB7;">
                         {{product.name}}
                        </v-card-subtitle>
                        <v-card-text style="font-size:10px;">
                          <v-icon small class="" id="icon">mdi-map-marker</v-icon>&nbsp; {{product.location}}.
                        </v-card-text>
                        

                    </v-card>
                </template><br><br><br>
              </v-col>
            </v-row>
            <br>

          </v-card><br><br>
  
        </template>
 
      </div>
    </div>
</template>
<script>
import API from '../../api'
export default {
    name : 'service-content',
    data: () => ({
      loading:false,
      products: [],
      categories : [],
      // categories: [
      //   'Arts & Entertainment', 'Beauty', 'Catering', 'Cleaning / Housekeeping', 'Computing / IT', 'Construction / Agent', 'Cryptocurrency', 'Engineering / Manufacturing',
      //   'Farming / Veterinary', 'Fashion Designing', 'Furniture', 'Hair / Barbing', 'Healthcare / Nursing', 'Vehicle / Automobile'
      // ],
      selectedCategory: null,
      search: ''
    }),

    //fetching the categories
    async created(){
      const response = await API.getCategory();
      const response2 = await API.allServices();
     
      //returning value names for only when category type is Service
      const products = response.data.filter(item => item.type === "Service");
      const productNames = products.map(item => item.name);
      this.categories = productNames;
      this.products = response2.data;
    },

  computed: {
    filteredProducts() {
        return this.products.filter(product => {
          const categoryMatch = !this.selectedCategory || product.id === this.selectedCategory;
          const nameMatch = product.name.toLowerCase().includes(this.search.toLowerCase());
          return categoryMatch && nameMatch;
        });
    }
 }

  }
</script>



<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: white;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>