<template>
    <div class="market-product">
        <AppPagesNavbar />
      
          <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
         
          <v-container fluid>
      <div class="service1 hidden-sm-and-down" style="margin-top:0px">
    
          <template>
        
                <v-card height="" style=" overflow-y : auto; width:100%;" flat>
                    <v-card-title style="font-weight:bold;font-size:12px;"> Uploaded products : </v-card-title><br>

                <!-- itemS CARD -->
  
                <v-container fluid
                >
                  <v-row class="pa-2">
                    <v-col 
                        v-for="item in products" :key="item.id"
                      class = "d-flex child-flex"
                      cols="3"
                  
                    >
  
                    <template >                                    
                      <v-card
                        class="mx-auto grey lighten-4"
                        :to="{ name: 'market-product-details', params: { id: item.id }}"
                        
                      >
                        <v-img
                          :src="`https://fuoyemarket.intellicsolutions.org/images/${item.image_link}`"
                         
                          :lazy-src="`https://fuoyemarket.intellicsolutions.org/images/${item.image_link}`"
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
                        {{ item.name }}
                      </v-card-subtitle>
  
                      <v-card-text style="font-size:10px;">
                        <v-row>
                          <v-col cols="6">
                            <v-icon small class="" id="icon">mdi-currency-ngn</v-icon>&nbsp;<span style="color:#673AB7">{{item.price}}</span>
                          </v-col>
                          
                          <v-col cols="6">
                            <v-icon small class="" id="icon">mdi-map-marker</v-icon>&nbsp; {{item.location}}.
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
                    <v-card-title style="font-weight:bold;font-size:12px;"> Uploaded products : </v-card-title><br>

                  <!-- item Data -->
                  <v-row class="" style="margin-top:-30px;">
                    <v-col 
                    v-for="item in products" :key="item.id"
                      class = "d-flex child-flex"
                      cols="6"
                  
                    >
  
                    <template >                                    
                      <v-card
                       
                        class="mx-auto grey lighten-4"
                        :to="{ name: 'market-product-details', params: { id: item.id }}"
                        style="width:100%"
                      >
                        <v-img
                          :src="`https://fuoyemarket.intellicsolutions.org/images/${item.image_link}`"
                          x
                          :lazy-src="`https://fuoyemarket.intellicsolutions.org/images/${item.image_link}`"
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
                           {{item.name}}
                          </v-card-subtitle>
                        
                          <v-card-text style="font-size:10px;">
                            <v-icon small class="" id="icon">mdi-currency-ngn</v-icon>&nbsp;<span style="color:#673AB7" > {{item.price}}.</span><br>
                            
                            <v-icon small class="" id="icon">mdi-map-marker</v-icon>&nbsp; {{item.location}}.
                          </v-card-text>
  
                      </v-card>
                  </template><br><br><br>
  
                </v-col>
              </v-row>
              <br>
  
            </v-card><br><br>
    
          </template>
       
      </div>
      </v-container>
      <Footers />
  </div>
  </template>
  
  
  
  <script>
  import API from '../../api'
  import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
  import Footers from '../../components/Footers.vue'
  export default {
      name : 'market-product',
      components:{AppPagesNavbar, Footers},
      data(){
        return {
            post     : {},
            username : '',
            id       : '',
            products : [],
           
    }
    },
    async created(){
            try{
                const response2 = await API.getUser();
                this.id = response2.msg.id;
                // console.log(this.id);
                const response = await API.sellerDetails(this.id);
                // console.log(this.$route.params.id);
                // console.log( response)
                this.post = response.other_details;
                this.username = response.profile.username;
                this.products = response.products;
              
            }
            catch(err){
                console.log(err)
            }
    },
  
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