<template>
    <div class="seller-page">
         <AppPagesNavbar />
         <v-container fluid>

         <div class="hidden-sm-and-down" >

            <v-card class="mx-auto mt-1"  flat height="160" >
                <v-list-item three-line >
                    <v-list-item-avatar class="rounded-lg" tile height="70" width="70" color="grey darken-3">
                    <img class="" src="../../assets/images/pel.jpg" >
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-row><br>

                            <v-col  md="10"  lg="10">
                                
                            </v-col>
                            <v-col  md="2"  lg="2">
                                <br>
                                <div class="items text-capitalize font-weight-bold" style="font-size:12px;color:#673AB7;">
                                    Pelvix Buy'N Sell 
                                </div><br>
                                <v-btn class="text-capitalize" small  outlined style="color: #673AB7">Message</v-btn>
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
         </div>

         <div class="hidden-md-and-up">
        
                <v-card class="mx-auto  mt-1"  flat height="160" >

                    <v-list-item three-line >
                        <v-list-item-avatar  height="60" width="60" >
                          <img class="" src="../../assets/images/pel.jpg" >
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-row><br>
                    
                                <v-col  md="2"  lg="2">
                                    
                                </v-col>
                                <v-col  md="10"  lg="10">
                                    <br>
                                    <div class="items text-capitalize font-weight-bold" style="font-size:12px;color:#673AB7;">
                                        Pelvix Buy'N Sell 
                                    </div><br>
                                    <v-btn class="text-capitalize" small  outlined style="color: #673AB7">Message</v-btn>
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
         </div>

        <!-- OTHER PRODUCTS SECTION -->
        <section>
            
              <div class="featured-products">
                <v-card flat elevation=''>
                    <v-container fluid>
                    <v-card-title style="font-weight:bold;font-size:12px;"> Other available products : </v-card-title>
                

                    <!-- DISPLAY ON LARGE DEVICE -->
                    <div class="hidden-sm-and-down">
                    <v-layout row wrap>
                    
                    
                    <v-flex lg4 md4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-15.jpg" style="height:100%;" >
                        
                        </v-card>
                    </v-flex>

                    <v-flex lg4 md4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-15.jpg" style="height:100%;" >
                        
                        </v-card>
                    </v-flex>

                    <v-flex lg4 md4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-15.jpg" style="height:100%;" >
                        
                        </v-card>
                    </v-flex>
                
                    
                    </v-layout>
                </div>
                <!-- END DISPLAY ON LARGE DEVICE -->

                <!-- DISPLAY ON SMALL DEVICE -->
                <div class="hidden-md-and-up">
                <v-layout row wrap style="margin-top:-20px">
                    
                    <v-flex sm4 xs4>
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-15.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;"> TVs </p>
                        </v-card>
                    </v-flex>
                   
                    <v-flex sm4 xs4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/n33.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;">Smart watch</p>
                        </v-card>
                    </v-flex>

                    <v-flex sm4 xs4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-14-1.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;"> Wingback chair </p>
                        </v-card>
                    </v-flex>

                    <v-flex sm4 xs4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-16-1.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;"> Cushion set </p>
                        </v-card>
                    </v-flex>

                    <v-flex sm4 xs4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/n1.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;"> Bag </p>
                        </v-card>
                    </v-flex>

                    <v-flex sm4 xs4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-11-1.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;">Hooded top</p>
                        </v-card>
                    </v-flex>

                    <v-flex sm4 xs4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-12.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;">Footwear </p>
                        </v-card>
                    </v-flex>

                    <v-flex sm4 xs4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/product-8a.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;"> Gaming</p>
                        </v-card>
                    </v-flex>

                    <v-flex sm4 xs4 >
                        <v-card :to="{name : 'product-details-seller'}" flat>
                        <img src="../../assets/images/n50.jpg" style="width:80%;height:70%;margin-top:px;" >
                        <p class="text-center " style="font-size:11px;"> Heaadset </p>
                        </v-card>
                    </v-flex>
                    
                </v-layout>
                </div>
                <!-- END DISPLAY ON SMALL DEVICE -->
               
                </v-container>
                </v-card>
            </div>
          
         </section>
        <!-- END OTHER PRODUCTS SECTION -->

         </v-container>
         <Footers />
    </div>
</template>
<script>
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
import Footers from '../../components/Footers.vue'
export default {
   name : 'seller-page',
   components:{AppPagesNavbar, Footers},
   data(){
    return {

    }
   }
}
</script>