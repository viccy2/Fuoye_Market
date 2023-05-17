<template>
    <div class="content-view" >
     
        <!-- SAVED SELLER SECTION -->
            <div class="new-sellers" style="margin-top:-20px;">
             <v-card flat class="rounded-lg " elevation=''>
           
            <v-col sm="12" xs="12" >
              <v-card height="600px" style="width:100%;" flat>
                <v-row align="center" justify="center">

                  <!-- INPUT SEARCH -->

                  <v-col class="hidden-sm-and-down" md="12" sm="12" xs="12" lg="12" style="margin-top:20px;">
                    <v-text-field
                      color="#673AB7"
                      v-model="search"
                      label="Search all sellers..."
                      outlined
                      append-icon="mdi-magnify"
                    
                    ></v-text-field>
                  </v-col>
                  <v-col class="hidden-md-and-up" md="12" sm="12" xs="12" lg="12" style="margin-top:20px;">
                    <v-text-field
                      color="#673AB7"
                      v-model="search"
                      label="Search all sellers..."
                      outlined
                      append-icon="mdi-magnify"
                      style="width:100%"
                    ></v-text-field>
                  </v-col>


                </v-row>

              <v-card-title style="font-weight:bold;margin-top:0px;font-size:12px;margin-top:-40px;"> Saved Sellers For You : </v-card-title>

                <v-row class="" >
                  <v-col 
                    v-for="(product, index) in filteredProducts" :key="index"
                    class = "d-flex child-flex"
                    cols="12"
                
                  >

                    <v-card flat class="ma-1" height="50">
                        <v-layout row wrap>
                                        <v-flex lg2 md2 sm2 xs2>
                                            <v-list-item three-line style="margin-top:-10px">
                                                <v-list-item-avatar  color="grey">
                                                    <img  :src="`https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`" >
                                                    </v-list-item-avatar>
                                                    
                                            </v-list-item>
                                        </v-flex>
                                        <v-flex lg6 md6 sm4 xs6>
                                            <v-card-text>
                                                        <center>
                                                        <div class="items text-capitalize" style="font-size:10px;line-height: 1.0;">
                                                            {{product.username}}
                                                        </div></center>
                                                    </v-card-text>
                                        </v-flex>
                                        <v-flex lg4 md4 sm4 xs4>
                                            <v-card-text>
                                                <v-btn small :to="{name : 'seller-page', params : { id : product.id }}"  color='#673AB7' tile  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">Connect</span></v-btn>
                                            </v-card-text>
                                        </v-flex>
                          </v-layout>
                      </v-card>
                
              </v-col>
            </v-row>

          </v-card> 
          </v-col>
 
   
    </v-card>
 </div>
            <!-- END NEW SELLER SECTION -->
  
    </div>
</template>


<script>
import API from '../../api'
export default {
    name : 'product-content',
    data: () => ({
      data : [],
      search: ''
    }),

    async created(){
      const response = await API.allSellers();
      this.data = response.data;
      // console.log(response.data);
    },

  computed: {
    filteredProducts() {
      return this.data.filter(item => {
        const nameMatch = item.username.toLowerCase().includes(this.search.toLowerCase());
        return nameMatch;
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