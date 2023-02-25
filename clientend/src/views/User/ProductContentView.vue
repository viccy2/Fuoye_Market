<template>
  <div class="product-content">
    
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
        
    <div class="service1 hidden-sm-and-down" style="margin-top:0px">
    
      <v-container fluid>
        <template>
          <v-container fluid>
              <v-card height="500px" style=" overflow-y : auto; width:100%;" flat>
              <v-row
                align="center"
                justify="start"
              >
                <v-col
                  lg="1"
                >
                </v-col>

                <v-col
                  lg="7"
                >
                <template>
                    <v-card
                      class="mx-auto"
                      color="grey-lighten-3"
                      flat>
                      <v-card-text>
                        <v-text-field
                          color="#673AB7"
                          v-model="search"
                          solo
                          density="compact"
                          variant="solo"
                          label="Search all products..."
                          append-inner-icon="mdi-magnify"
                          single-line
                          hide-details
                         
                        >
                        </v-text-field>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-col>
               
                <v-col
                  lg="4"
                >
                  <v-select
                    v-model="selectedCategory"
                    :items="categories"
                    label="Select a category"
                  ></v-select>
                </v-col>

              <v-col
                  lg="1"
              ></v-col>

              </v-row><br>

              <!-- PRODUCTS CARD -->

              <v-container>
                <v-row class="pa-2">
                  <v-col 
                    v-for="(product, index) in filteredProducts" :key="index"
                    class = "d-flex child-flex"
                    cols="3"
                
                  >

                  <template >                                    
                    <v-card
                      class="mx-auto grey lighten-4"
                      max-width="344"
                      :to="{name : 'product-details'}"
                    >
                      <v-img
                        :src="product.name"
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
                        <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
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
      <v-container fluid>
        <template>
          <v-container fluid>
            
              <v-card height="600px" style=" overflow-y : auto; width:100%;" flat>
              <v-row
                align="center"
                justify="start"
              >
                <v-col
                  sm="12"
                >
              
                  <template>
                     <v-card
                      class="mx-auto"
                      color="grey-lighten-3"
                      flat
                    >
                      <v-card-text>
                        <v-text-field
                          class="small"
                          color="#673AB7"
                          v-model="search"
                          solo
                          density="compact"
                          variant="solo"
                          label="Search all products..."
                          append-inner-icon="mdi-magnify"
                          single-line
                          hide-details
                         
                        ></v-text-field>
                      </v-card-text>

                    </v-card>
                  </template>
                </v-col>
                <v-col
                  sm="12"
                >
                  <v-select
                    class="small"
                    v-model="selectedCategory"
                    :items="categories"
                    label="Select a category"
                  ></v-select>
              </v-col>
      
          </v-row>

              <v-container fluid>
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
                      max-width="344"
                      :to="{name : 'product-details'}"
                    >
                      <v-img
                        :src="`${product.name}`"
                        height="200px"
                        :lazy-src="product.name"
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
                            <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
                        </v-card-text>

                    </v-card>
                </template><br><br><br>
              </v-col>
            </v-row>
            </v-container><br>

          </v-card>
          
          </v-container>
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
        { name: 'Product 1', category: 'Category A' },
        { name: 'Product 2', category: 'Category B' },
        { name: 'Product 3', category: 'Category A' },
        { name: 'Product 4', category: 'Category C' },
        { name: 'Product 5', category: 'Category B' }
      ],
      categories: ['Category A', 'Category B', 'Category C'],
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