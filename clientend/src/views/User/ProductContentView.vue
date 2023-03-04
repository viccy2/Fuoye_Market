<template>
  <div class="product-content">
    
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
        
    <div class="service1 hidden-sm-and-down" style="margin-top:0px">
    
      <v-container fluid>
        <template>
          <v-container fluid>
              <v-card height="1000px" style=" overflow-y : auto; width:100%;" flat>
                <v-row align="center" justify="center">

                    <!-- INPUT SEARCH -->

                    <v-col cols="12" md="6">
                      <v-text-field
                        color="#673AB7"
                        v-model="search"
                        label="Search all products..."
                        outlined
                        append-icon="mdi-magnify"
                      
                      ></v-text-field>
                    </v-col>

                    <!-- SELECT CATEGORY  -->

                    <v-col cols="12" md="6">
                      <v-select
                        outlined
                        v-model="selectedCategory"
                        :items="categories"
                        label="Select category"
                      ></v-select>
                    </v-col>

                </v-row>
             

              <!-- PRODUCTS CARD -->

              <v-container fluid
              >
                <v-row class="pa-2">
                  <v-col 
                    v-for="(product, index) in filteredProducts" :key="index"
                    class = "d-flex child-flex"
                    cols="3"
                
                  >

                  <template >                                    
                    <v-card
                      class="mx-auto grey lighten-4"
                      :to="{name : 'product-details'}"
                    >
                      <v-img
                        :src="require(`@/assets/images/${product.images}`)"
                        height="300px"
                        :lazy-src="require(`@/assets/images/${product.images}`)"
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
                        <v-col cols="4">
                          <v-icon small class="" id="icon">mdi-currency-ngn</v-icon><span style="color:#673AB7">350, 000.</span>
                        </v-col>
                        <v-col cols="4">
                          <v-icon small class="" id="icon">mdi-view-grid</v-icon><span>Electronics.</span>
                        </v-col>
                        <v-col cols="4">
                          <v-icon small class="" id="icon">mdi-map-marker</v-icon> Ikole-Ekiti.
                        </v-col>
                      </v-row>
                    </v-card-text>

                  </v-card>
                </template><br><br><br>

              </v-col>
            </v-row>
            </v-container>
          </v-card>
         
          </v-container>
        </template>
      </v-container>
    </div>

        <!-- DISPLAY ONLY ON SMALL AND SMALLER DEVICES -->

    <div class="service2 hidden-md-and-up" style="margin-top:-20px;">
      <v-container>
        <template>
              <v-card height="600px" style="width:100%;" flat><br>
                <v-row align="center" justify="center">
                  
                    <!-- INPUT SEARCH -->

                    <v-col  sm="6" xs="6">
                      <v-text-field
                        color="#673AB7"
                        v-model="search"
                        label="Search all products..."
                        outlined
                        append-icon="mdi-magnify"
                      
                      ></v-text-field>
                    
                    </v-col>

                    <!-- SELECT CATEGORY  -->

                    <v-col  sm="6" xs="6">
                      <v-select
                        outlined
                        v-model="selectedCategory"
                        :items="categories"
                        label="Select category"
                      ></v-select>
                    </v-col>

                </v-row>

                <!-- Product Data -->
                <v-row class="">
                  <v-col 
                    v-for="(product, index) in filteredProducts" :key="index"
                    class = "d-flex child-flex"
                    cols="6"
                
                  >

                  <template >                                    
                    <v-card
                      :disabled="loading"
                      class="mx-auto grey lighten-4"
                      :to="{name : 'product-details'}"
                      style="width:100%"
                    >
                      <v-img
                        :src="require(`@/assets/images/${product.images}`)"
                        height="200px"
                        :lazy-src="require(`@/assets/images/${product.images}`)"
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
                          <v-icon small class="" id="icon">mdi-currency-ngn</v-icon><span style="color:#673AB7">350, 000.</span><br>
                          <v-icon small class="" id="icon">mdi-view-grid</v-icon><span>Electronics.</span><br>
                          <v-icon small class="" id="icon">mdi-map-marker</v-icon> Ikole-Ekiti.
                        </v-card-text>

                    </v-card>
                </template><br><br><br>

              </v-col>
            </v-row>
            <br>

          </v-card>
  
        </template>
      </v-container>
    </div>

</div>
</template>



<script>
export default {
    name : 'product-content',
    data: () => ({
      loading:false,
      products: [
        { name: 'Product 1',  category: 'Fashion' ,          images:'img8.jpg'},
        { name: 'Product 2',  category: 'Automobile' ,       images:'img8.jpg'},
        { name: 'Product 3',  category: 'Automobile' ,       images:'img8.jpg'},
        { name: 'Product 4',  category: 'Health & Beauty' ,  images:'img8.jpg'},
        { name: 'Product 5',  category: 'Phones / Tablets' , images:'img8.jpg'}
      ],
      categories: [
        'Animals & Pets', 'Automobile', 'Baby Products', 'Books & Stationaries', 'Computing', 'Electronics', 
        'Fashion', 'Gaming', 'Grocery', 'Health & Beauty', 'Home & Offices', 'Phones / Tablets', 'Snacks', 'Sporting goods'
      ],
      selectedCategory: null,
      search: ''
    }),

  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const categoryMatch = !this.selectedCategory || product.category === this.selectedCategory;
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