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

              <v-card-title style="font-weight:bold;margin-top:0px;font-size:12px;margin-top:-40px;"> Saved Sellers For You : </v-card-title><br>
              <v-row class="" style="margin-top:-30px;">
                    <v-col 
                        v-for="(item, index) in filteredProducts" :key="index"
                        class = "d-flex child-flex"
                        cols="4"
                    
                    >

                    <template >                                    
                        <v-card
                     
                        class="mx-auto grey lighten-4"
                        :to="{ name: 'product-details', params: { id: item.id }}"
                        style="width:100%"
                        >
                        <v-img
                            :src="`https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`"
                            :lazy-src="`https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`"
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

                            <v-card-subtitle style="font-size:7px;color:#673AB7;">
                               <span style="color:#673AB7" > {{item.username}}.</span>                         
                            </v-card-subtitle>
            
                        </v-card>
                    </template>

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