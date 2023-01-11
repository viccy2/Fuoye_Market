<template>
    <div class="seller-page">
         <AppPagesNavbar />
         <v-container fluid><br><br>
         <div class="hidden-sm-and-down" >
             <v-layout row wrap justify-space-between class="pa-3">
                <v-flex md12 lg12 >
                <v-card class="mx-auto grey lighten-2"  flat outlined >
                  
                    <v-list-item three-line style="">

                        <v-list-item-avatar flat  height="60" width="60" >
                          <img class="" src="../../assets/images/pel.jpg" >
                        </v-list-item-avatar>
                        
                        <v-list-item-content>
                            <v-list-item-title class="text-h5">
                               <v-row><br>
                                <v-col  md="1"  lg="1"></v-col>
                                <v-col  md="2"  lg="2">
                                    <div style="text-decoration:none;font-size:12px;">Company<br><br><span class="font-weight-bold" style="color:#673AB7;">Pelvix Buy'N Sell </span>
                                    </div>
                                </v-col>
                                 <v-col  md="1"  lg="1"></v-col>
                                <v-col  md="2" lg="2">
                                  <div  style="text-decoration:none;font-size:12px;">Category <br><br><span>10k</span>
                                  </div>
                                </v-col>
                                <v-col  md="2" lg="2">
                                 <div style="text-decoration:none;font-size:12px;">Location <br><br> <span> 340</span>
                                 </div>
                                </v-col>
                                <v-col  md="2" lg="2">
                                  <div  style="text-decoration:none;font-size:12px;">Status <br><br><span><v-icon color="success">mdi-check-circle</v-icon></span>
                                  </div>
                                </v-col>
                                <v-col  md="2" lg="2">
                                  <div  style="text-decoration:none;font-size:12px;">Status <br><br><span><v-icon color="success">mdi-check-circle</v-icon></span>
                                  </div>
                                </v-col>
                               </v-row>
                            </v-list-item-title>
                        </v-list-item-content> 

                    </v-list-item>

                </v-card>
            </v-flex>
             </v-layout>
         </div>

         <div class="hidden-md-and-up">
             <v-layout row wrap justify-space-between class="pa-3">
                <v-flex  sm12 xs12>
                <v-card class="mx-auto grey lighten-2"  flat outlined  >

                    <v-list-item three-line >
                        <v-list-item-avatar  height="70" width="70" >
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
            </v-flex>
             </v-layout>
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

                    <v-flex lg2 md2 >
                        <img src="../../assets/images/product-15.jpg" style="height:30%;" >
                        <p class="text-center " style="font-size:11px;">TVs </p>
                    </v-flex>

                    <v-flex lg2 md2 >
                        <img src="../../assets/images/n34.jpg" style="height:30%;" >
                        <p class="text-center " style="font-size:11px;">TVs </p>
                    </v-flex>
                    <v-flex lg2 md2 >
                        <img src="../../assets/images/product-14.jpg" style="height:30%;" >
                        <p class="text-center " style="font-size:11px;">TVs </p>
                    </v-flex>

                    <v-flex lg2 md2 >
                        <img src="../../assets/images/product-16-1.jpg" style="height:30%;" >
                        <p class=" " style="font-size:11px;">TVs </p>
                    </v-flex>

                    <v-flex lg2 md2 >
                        <img src="../../assets/images/product-11-1.jpg" style="height:30%;" >
                        <p class="text-center " style="font-size:11px;">TVs </p>
                    </v-flex>

                    <v-flex lg2 md2 >
                        <img src="../../assets/images/product-120.jpg" style="height:30%;" >
                        <p class="text-center " style="font-size:11px;">TVs </p>
                    </v-flex>
                    
                    </v-layout>
                </div>
                <!-- END DISPLAY ON LARGE DEVICE -->

                <!-- DISPLAY ON SMALL DEVICE -->
                <div class="hidden-md-and-up">
                <v-layout row wrap style="margin-top:-20px">
                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-15.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-10.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> TVs </p>
                    </v-flex>

                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/n33.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n34.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Smart watch </p>

                    </v-flex>

                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-14-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-14-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Wingback Chair </p>
                    </v-flex>

                     <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-16-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-16-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Cushion Set</p>

                    </v-flex>

                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/n1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Bag </p>
                    </v-flex>

                     <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-11-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n35.jpg" style="width:70%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Hooded Top </p>

                    </v-flex>
                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-12.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-4.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Footwear</p>
                    </v-flex>

                     <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-8a.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-8a.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Gaming </p>

                    </v-flex>

                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/n50.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n32.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Head set</p>

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