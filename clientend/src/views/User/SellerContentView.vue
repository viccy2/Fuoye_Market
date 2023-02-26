<template>
    <div class="content-view" >
        <!-- SAVED SELLER SECTION -->
            <div class="new-sellers" style="margin-top:-20px;">
             <v-card flat class="rounded-lg " elevation=''>
             <v-container fluid>

            <template>
            <v-container fluid>
            <v-col sm="12" xs="12" >
              <v-card height="600px" style=" overflow-y : auto; width:100%;" flat><br>
                <v-row align="center" justify="center">

                  <!-- INPUT SEARCH -->

                  <v-col md="11" sm="10" xs="10" lg="11">
                    <v-text-field
                      color="#673AB7"
                      v-model="search"
                      label="Search all sellers..."
                      outlined
                      append-icon="mdi-magnify"
                    
                    ></v-text-field>
                  </v-col>


                </v-row>

              <v-card-title style="font-weight:bold;margin-top:0px;font-size:12px;"> Saved Sellers For You : </v-card-title>
              <v-container fluid>
                <v-row class="">
                  <v-col 
                    v-for="(product, index) in filteredProducts" :key="index"
                    class = "d-flex child-flex"
                    cols="12"
                
                  >

                  <template >                                   
                    <v-card flat class="ma-1 " height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  :src="require(`@/assets/images/${product.images}`)" 
                                                  :lazy-src="require(`@/assets/images/${product.images}`)">
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:10px; margin-top:-15px">
                                                {{product.name}}
                                            </div>
                                        </v-card-text>
                                    </v-list-item>
                                </v-flex>
    
                                <v-flex lg4 md4 sm4 xs4>
                                    <v-card-text>
                                        <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">View</span></v-btn>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card>
                </template><br>
              </v-col>
            </v-row>
            </v-container>

          </v-card>
          </v-col>
          </v-container>
        </template>


    </v-container>
    </v-card>
 </div>
            <!-- END NEW SELLER SECTION -->
    </div>
</template>
<script>
export default {
    name : 'product-content',
    data: () => ({
      products: [
        { name: 'Product 1', category: 'Category A' , images:'Fm.png'},
        { name: 'Product 2', category: 'Category B' , images:'Fm.png'},
        { name: 'Product 3', category: 'Category A' , images:'Fm.png'},
        { name: 'Product 4', category: 'Category C' , images:'Fm.png'},
        { name: 'Product 5', category: 'Category B' , images:'Fm.png'}
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