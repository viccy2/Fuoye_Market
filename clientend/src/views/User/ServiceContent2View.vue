<template>
    <div class="seller-page">
         <AppPagesNavbar />
         <v-container fluid>

         <div class="hidden-sm-and-down" >

            <v-card class="mx-auto mt-3"  flat height="160" >
                <v-list-item three-line >
                    <v-list-item-avatar  height="70" width="70" color="grey darken-3">
                    <img class="" :src="`https://fuoyemarket.intellicsolutions.org/images/${post.image_link}`" >
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-row><br>

                            <v-col  md="10"  lg="10">
                                
                            </v-col>
                            <v-col  md="2"  lg="2">
                                <br>
                                <div class="items text-capitalize font-weight-bold" style="font-size:12px;color:#673AB7;">
                                    {{ post.name }}
                                </div><br>
                                <v-btn :href="`https://wa.me/${contact}`" class="text-capitalize" small  outlined style="color: #673AB7">Message</v-btn>
                            </v-col>
                        </v-row>
                        
                    </v-list-item-content>    
                </v-list-item>
                <v-card-text>
                    <v-row>
                        <v-col  lg="3" md="3" >
                            
                        </v-col>
                        <v-col  lg="3" md="3" >
                            <p style="text-decoration:none;font-size:10px;font-weight:bold;">Category<br><span>{{ post.category.name }}</span>
                            </p>
                        </v-col>
                        <v-col  lg="3" md="3" >
                            <p style="text-decoration:none;font-size:10px;font-weight:bold;">Location<br><span>{{ post.location }} </span>
                            </p>
                        </v-col>
                        <v-col  lg="3" md="3" >
                            <p style="text-decoration:none;font-size:10px;font-weight:bold;">Status<br><span><v-icon color="success">mdi-check-circle</v-icon></span>
                            </p>
                        </v-col>
                    </v-row>             
                </v-card-text>
                </v-card>
                <div><br>
                    <v-row>
                            <v-col sm="3">  
                                <a :href="`https://wa.me/${posts.whatsapp}`"  style="text-decoration:none;color: #673AB7;">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-whatsapp </v-icon>
                                </v-btn></a>
                            </v-col>
                            <v-col sm="3">
                                    <a :href="`https://www.facebook.com/profile.php?id=${posts.facebook}`"  style="text-decoration:none;color: #673AB7;">
                                    <v-btn fab  small color='grey lighten-5 ma-2'>
                                        <v-icon small class="pa-3" id="icon" > mdi-facebook</v-icon>
                                    </v-btn></a>
                            </v-col>
                            <v-col sm="3">      
                                <a :href="`https://www.instagram.com/${posts.instagram}`" style="text-decoration:none;color: #673AB7;">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                                </v-btn></a>
                            </v-col>
                            <v-col sm="3">  
                                <a :href="`https://twitter.com/${posts.twitter}`" style="text-decoration:none;color: #673AB7;">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-twitter</v-icon>
                                </v-btn></a>
                            </v-col>
                        </v-row>
                </div>
         </div>

         <div class="hidden-md-and-up">
        
                <v-card class="mx-auto mt-2"  flat height="160" >

                    <v-list-item three-line >
                        <v-list-item-avatar  height="60" width="60" >
                          <img class="" :src="`https://fuoyemarket.intellicsolutions.org/images/${post.image_link}`" >
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-row><br>
                    
                                <v-col  md="2"  lg="2">
                                    
                                </v-col>
                                <v-col  md="10"  lg="10">
                                    <br>
                                    <div class="items text-capitalize font-weight-bold" style="font-size:12px;color:#673AB7;">
                                        {{ post.name }}
                                    </div><br>
                                    <v-btn :href="`https://wa.me/${contact}`" class="text-capitalize" small outlined style="color: #673AB7">Message</v-btn>
                                </v-col>
                            </v-row>
                            
                        </v-list-item-content>    
                    </v-list-item>
                    <v-card-text>
                        <v-row>
                            <v-col  sm="4" >
                                <p style="text-decoration:none;font-size:10px;font-weight:bold;"> Category<br><span>{{ post.category.name }} </span>
                                </p>
                            </v-col>
                            <v-col  sm="4" >
                                <p style="text-decoration:none;font-size:10px;font-weight:bold;">Location<br><span>{{ post.location }} </span>
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
                                <a :href="`https://wa.me/${posts.whatsapp}`"  style="text-decoration:none;color: #673AB7;">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-whatsapp </v-icon>
                                </v-btn></a>
                            </v-col>
                            <v-col sm="3">
                                    <a :href="`https://www.facebook.com/profile.php?id=${posts.facebook}`"  style="text-decoration:none;color: #673AB7;">
                                    <v-btn fab  small color='grey lighten-5 ma-2'>
                                        <v-icon small class="pa-3" id="icon" > mdi-facebook</v-icon>
                                    </v-btn></a>
                            </v-col>
                            <v-col sm="3">      
                                <a :href="`https://www.instagram.com/${posts.instagram}`" style="text-decoration:none;color: #673AB7;">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                                </v-btn></a>
                            </v-col>
                            <v-col sm="3">  
                                <a :href="`https://twitter.com/${posts.twitter}`" style="text-decoration:none;color: #673AB7;">
                                <v-btn fab  small color='grey lighten-5 ma-2'>
                                    <v-icon small class="pa-3" id="icon"> mdi-twitter</v-icon>
                                </v-btn></a>
                            </v-col>
                        </v-row>
                </div>
         </div><br>

         <!--WHAT WE DO SECTION -->
         <section>
              <!-- DISPLAY ON LARGE DEVICE -->
        <div class="details1 hidden-sm-and-down">
           <v-col sm="12" class="pa- mx-auto"><br>
                <v-card class="pa-2" flat>
                    <v-card-text class="grey--text">
                        <span class="text-color-black font-weight-bold " style="color:black;" >
                          What we do :
                        </span><br>
                        <p>
                            {{ post.describtion }}+ 
                        </p>
                        <p class="font-weight-bold">
                            Happy Clients :{{ post.no_of_clients }}+ 
                        </p>
                    </v-card-text>
            
                </v-card>
            </v-col>
        </div>
         <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
        <div class="details1 hidden-md-and-up">
           
                <v-card class="pa-2" flat>
                    
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="font-size:11px;color:black;" >
                          What we do :
                        </span><br>
                        <p style="font-size:10px;">
                          {{post.describtion}}
                        </p>
                        <p class="font-weight-bold " style="font-size:11px;">
                            Happy clients  : {{ post.no_of_clients }}+ 
                        </p>
                    </v-card-text>
                   
                </v-card>
           
        </div>
         <!-- END DISPLAY ON SMALL DEVICE -->
       
         </section>
        <!-- END WHAT WE DO SECTION -->


        <!-- OUR WORKS SECTION -->
        <section>
            
              <div class="our-works" style="margin-top:-40px;">
                <v-card flat elevation=''>
                    <v-container fluid>
                    <v-card-title class="hidden-sm-and-down text-color-black font-weight-bold " style="font-size:13px;"> Our works : </v-card-title>
                    <v-card-title class="hidden-md-and-up" style="font-weight:bold;font-size:11px;"> Our works : </v-card-title>
                

                    <!-- DISPLAY ON LARGE DEVICE -->
                    <div class="hidden-sm-and-down">
                    <v-layout row wrap>
                    
                    
                    <v-flex lg4 md4 class="">
                        <v-card flat class="ma-2" >
                            <v-img src="../../assets/images/blog-2.jpg" style="height:300px;width:100%" ></v-img>
                            <p class="text-center " style="font-size:11px;"></p>
                        </v-card>
                       
                      
                    </v-flex>

                    <v-flex lg4 md4 class="">
                        <v-card flat class="ma-2" >
                            <v-img src="../../assets/images/17-people.jpg" style="height:300px;width:100%" ></v-img>
                            <p class="text-center " style="font-size:11px;"> </p>
                        </v-card>
                        
                      
                    </v-flex>

                    <v-flex lg4 md4 class="">
                        <v-card flat class="ma-2" >
                            <v-img src="../../assets/images/about-img-1.jpg" style="height:300px;width:100%" ></v-img>
                            <p class="text-center " style="font-size:11px;">  </p>
                        </v-card>
                        
                      
                    </v-flex>
                    

                    
                    
                    </v-layout>
                </div>
                <!-- END DISPLAY ON LARGE DEVICE -->

                <!-- DISPLAY ON SMALL DEVICE -->
                <div class="hidden-md-and-up">
                <v-layout row wrap style="margin-top:-20px">
                
                    <v-flex sm6 xs6 class="">
                        <v-card flat class="ma-2" >
                            <v-img src="../../assets/images/blog-2.jpg" style="height:120px;width:100%" ></v-img>
                            <p class="text-center " style="font-size:11px;"></p>
                        </v-card>
                       
                      
                    </v-flex>

                    <v-flex sm6 xs6 class="">
                        <v-card flat class="ma-2" >
                            <v-img src="../../assets/images/17-people.jpg" style="height:120px;width:100%" ></v-img>
                            <p class="text-center " style="font-size:11px;"> </p>
                        </v-card>
                        
                      
                    </v-flex>

                    <v-flex sm6 xs6 class="">
                        <v-card flat class="ma-2" >
                            <v-img src="../../assets/images/about-img-1.jpg" style="height:120px;width:100%" ></v-img>
                            <p class="text-center " style="font-size:11px;">  </p>
                        </v-card>
                        
                      
                    </v-flex>

                    <v-flex sm6 xs6  class="">
                        <v-card flat class="ma-2" >
                            <v-img src="../../assets/images/14-people.jpg" style="height:120px;width:100%" ></v-img>
                            <p class="text-center " style="font-size:11px;">  </p>
                        </v-card>
                        
                      
                    </v-flex>
                    
                </v-layout><br><br><br><br>
                </div>
                <!-- END DISPLAY ON SMALL DEVICE -->
               
                </v-container>
                </v-card>
            </div>
          
         </section>
        <!-- END OUR WORKS SECTION SECTION -->

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
            posts : {},
            contact : '',
    }
   },
   async created(){
        try{
            const response = await API.serviceDetails(this.$route.params.id);
            // console.log(response);
            this.post = response.data;
            this.contact = response.data.seller_details.whatsapp;
            this.posts = response.data.seller_details;
        }
        catch(err){
            console.log(err)
        }
   },

}
</script>