<template>
    <div class="seller-page">
         <AppPagesNavbar /><br>
         <v-container fluid>

         <div class="hidden-sm-and-down" >

            <v-card class="mx-auto mt-1"  flat height="160" >
                <v-list-item three-line >
                    <v-list-item-avatar class="rounded-lg" tile height="70" width="70" color="grey darken-3">
                        <img :src="`https://fuoyemarket.intellicsolutions.org/company_images/${image}`"  >
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-row><br>

                            <v-col  md="10"  lg="10">
                                
                            </v-col>
                            <v-col  md="2"  lg="2">
                                <br>
                                <div class="items text-capitalize font-weight-bold" style="font-size:12px;color:#673AB7;">
                                    {{username}}
                                </div><br>
                                <v-btn class="text-capitalize" small  outlined style="color: #673AB7" :href="`https://wa.me/${post.whatsapp}`">Message</v-btn>
                            </v-col>
                        </v-row>
                        
                    </v-list-item-content>    
                </v-list-item>
                <v-card-text>
                    <v-row>
                        <v-col  lg="3" md="3" >
                            
                        </v-col>
                        <v-col  lg="3" md="3" >
                            <p style="text-decoration:none;font-size:10px;font-weight:bold;">Category<br><span>Mobile Devices</span>
                            </p>
                        </v-col>
                        <v-col  lg="3" md="3" >
                            <p style="text-decoration:none;font-size:10px;font-weight:bold;">Location<br><span>Ikole-Ekiti</span>
                            </p>
                        </v-col>
                        <v-col  lg="3" md="3" >
                            <p style="text-decoration:none;font-size:10px;font-weight:bold;">Status<br><span><v-icon color="success">mdi-check-circle</v-icon></span>
                            </p>
                        </v-col>
                    </v-row>             
                </v-card-text>
                </v-card>
                <div class="container"><br>
                    <v-row >
                            <v-col md="3">  
                                <a :href="`https://wa.me/${post.whatsapp}`"  style="text-decoration:none">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-whatsapp </v-icon>
                                </v-btn></a>
                            </v-col>
                            <v-col md="3">
                                    <a :href="`https://www.facebook.com/profile.php?id=${post.facebook}`"  style="text-decoration:none">
                                    <v-btn fab  small color='grey lighten-5 ma-2'>
                                        <v-icon small class="pa-3" id="icon" > mdi-facebook</v-icon>
                                    </v-btn></a>
                            </v-col>
                            <v-col md="3">      
                                <a :href="`https://www.instagram.com/${post.instagram}`" style="text-decoration:none">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                                </v-btn></a>
                            </v-col>
                            <v-col md="3">  
                                <a :href="`https://twitter.com/${post.twitter}`" style="text-decoration:none">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-twitter</v-icon>
                                </v-btn></a>
                            </v-col>
                        </v-row>
                </div>
         </div>

         <div class="hidden-md-and-up">
        
                <v-card class="mx-auto  mt-1"  flat height="160" >

                    <v-list-item three-line >
                        <v-list-item-avatar  height="60" width="60" >
                            <img :src="`https://fuoyemarket.intellicsolutions.org/company_images/${image}`"  >
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-row><br>
                    
                                <v-col  md="2"  lg="2">
                                    
                                </v-col>
                                <v-col  md="10"  lg="10">
                                    <br>
                                    <div class="items text-capitalize font-weight-bold" style="font-size:12px;color:#673AB7;">
                                        {{username}}
                                    </div><br>
                                    <v-btn class="text-capitalize" small  outlined style="color: #673AB7" :href="`https://wa.me/${post.whatsapp}`">Message</v-btn>
                                </v-col>
                            </v-row>
                            
                            
                        </v-list-item-content>    
                    </v-list-item>
                    <v-card-text>
                        <v-row>
                            <v-col  sm="4" >
                                <p style="text-decoration:none;font-size:10px;font-weight:bold;">Category<br><span>Mobile Devices</span>
                                </p>
                            </v-col>
                            <v-col  sm="4" >
                                <p style="text-decoration:none;font-size:10px;font-weight:bold;">Location<br><span>Ikole-Ekiti</span>
                                </p>
                            </v-col>
                            <v-col  sm="4" >
                                <p style="text-decoration:none;font-size:10px;font-weight:bold;">Status<br><span><v-icon color="success">mdi-check-circle</v-icon></span>
                                </p>
                            </v-col>
                        </v-row>
                       
                       
                    </v-card-text>
                    
                </v-card>
                <div><br>
                    <v-row>
                            <v-col sm="3">  
                                <a :href="`https://wa.me/${post.whatsapp}`"  style="text-decoration:none">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-whatsapp </v-icon>
                                </v-btn></a>
                            </v-col>
                            <v-col sm="3">
                                    <a :href="`https://www.facebook.com/profile.php?id=${post.facebook}`"  style="text-decoration:none">
                                    <v-btn fab  small color='grey lighten-5 ma-2'>
                                        <v-icon small class="pa-3" id="icon" > mdi-facebook</v-icon>
                                    </v-btn></a>
                            </v-col>
                            <v-col sm="3">      
                                <a :href="`https://www.instagram.com/${post.instagram}`" style="text-decoration:none">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                                </v-btn></a>
                            </v-col>
                            <v-col sm="3">  
                                <a :href="`https://twitter.com/${post.twitter}`" style="text-decoration:none">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-twitter</v-icon>
                                </v-btn></a>
                            </v-col>
                        </v-row>
                </div>
         </div><br>

        <!-- OTHER PRODUCTS SECTION -->
        <section>
            
              <div class="featured-products">
                <v-card flat elevation=''>
                    <v-container fluid>
                    <v-card-title style="font-weight:bold;font-size:12px;"> Other available products : </v-card-title><br>
                

                    <!-- DISPLAY ON LARGE DEVICE -->
                    <div class="hidden-sm-and-down">
                        
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
                                :to="{ name: 'product-details', params: { id: item.id }}"
                                
                                >
                                <v-img
                                    :src="`https://fuoyemarket.intellicsolutions.org/images/${item.image_link}`"
                                    height="300px"
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

                            </v-card><br><br>
                            </template><br><br><br>

                        </v-col>
                        </v-row>
                        </v-container>
                 
                </div>
                <!-- END DISPLAY ON LARGE DEVICE -->

                <!-- DISPLAY ON SMALL DEVICE -->
                <div class="hidden-md-and-up">

                <!-- Product Data -->
                <v-row class="" style="margin-top:-30px;">
                  <v-col 
                    v-for="item in products" :key="item.id"
                    class = "d-flex child-flex"
                    cols="6"
                
                  >

                  <template >                                    
                    <v-card
                     
                      class="mx-auto grey lighten-4"
                      :to="{ name: 'product-details', params: { id: item.id }}"
                      style="width:100%"
                    >
                      <v-img
                        :src="`https://fuoyemarket.intellicsolutions.org/images/${item.image_link}`"
                        height="200px"
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
                </div>
                <!-- END DISPLAY ON SMALL DEVICE -->
               
                </v-container>
                </v-card>
            </div>
          
         </section>
        <!-- END OTHER PRODUCTS SECTION -->


        
        <!-- OTHER SERVICE SECTION -->
        <section>
            
            <div class="featured-products">
              <v-card flat elevation=''>
                  <v-container fluid>
                  <v-card-title style="font-weight:bold;font-size:12px;"> Other available Services : </v-card-title><br>
              

                  <!-- DISPLAY ON LARGE DEVICE -->
                  <div class="hidden-sm-and-down">
                      
                      <v-container fluid
                      >
                          <v-row class="pa-2">
                          <v-col 
                           v-for="item in services" :key="item.id"
                              class = "d-flex child-flex"
                              cols="3"
                          
                          >

                          <template >                                    
                              <v-card
                              class="mx-auto grey lighten-4"
                              :to="{ name: 'product-details', params: { id: item.id }}"
                              
                              >
                              <v-img
                                  :src="`https://fuoyemarket.intellicsolutions.org/images/${item.image_link}`"
                                  height="300px"
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
   
                                  <v-col cols="12">
                                  <v-icon small class="" id="icon">mdi-map-marker</v-icon>&nbsp; {{item.location}}.
                                  </v-col>
                              </v-row>
                              </v-card-text>

                          </v-card><br><br>
                          </template><br><br><br>

                      </v-col>
                      </v-row>
                      </v-container>
               
              </div>
              <!-- END DISPLAY ON LARGE DEVICE -->

              <!-- DISPLAY ON SMALL DEVICE -->
              <div class="hidden-md-and-up">

              <!-- Product Data -->
              <v-row class="" style="margin-top:-30px;">
                <v-col 
                  v-for="item in services" :key="item.id"
                  class = "d-flex child-flex"
                  cols="6"
              
                >

                <template >                                    
                  <v-card
                   
                    class="mx-auto grey lighten-4"
                    :to="{ name: 'product-details', params: { id: item.id }}"
                    style="width:100%"
                  >
                    <v-img
                      :src="`https://fuoyemarket.intellicsolutions.org/images/${item.image_link}`"
                      height="200px"
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
                        <v-icon small class="" id="icon">mdi-map-marker</v-icon>&nbsp; {{item.location}}.
                      </v-card-text>

                  </v-card><br><br>
              </template><br><br><br>

            </v-col>
          </v-row>
              </div>
              <!-- END DISPLAY ON SMALL DEVICE -->
             
              </v-container>
              </v-card><br><br>
          </div>
        
       </section>
      <!-- END OTHER SERVICE SECTION -->

         </v-container>
         <Footers />
    </div>
</template>
<script>
import API from '../../api'
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
import Footers from '../../components/Footers.vue'
export default {
   name : 'seller-page',
   components:{AppPagesNavbar, Footers},
   data(){
    return {
        post : {},
        username : '',
        image : '',
        products : [],
        services : [],
    }
   },
   async created(){
        try{
            const response = await API.sellerDetails(this.$route.params.id);
            // console.log(this.$route.params.id);
            // console.log( response)
            this.post = response.other_details;
            this.username = response.profile.company_name;
            this.image = response.profile.company_logo;
            this.products = response.products;
            this.services = response.services;
        }
        catch(err){
            console.log(err)
        }
   },

}
</script>