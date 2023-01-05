<template>
    <div class="dashboard" style="margin-top:50px;">
       
            
            <!-- DISPLAY ON LARGE AND MEDIUM DEVICES -->

            <div class="sliders hidden-sm-and-down" style="margin-top:20px;">
                <v-container>
                 
                </v-container>

            </div>

            <!-- DISPLAY ON MEDIUM AND SMALL DEVICES -->

            <div class="sliders hidden-md-and-up">
                <v-container>
                 
                </v-container>
                 
            </div>

            
            <!-- TOP SELLER SECTION -->

            <div class="top-seller">
                <v-card flat elevation=''>
                    <v-container fluid>
                    <v-card-title style="font-weight:bold;font-size:13px;"> Top Sellers : </v-card-title>
                <v-layout row wrap class="pa-3" style="margin-top:-20px">

                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class=" ma-2">
                            <v-img src="../../assets/images/b.jpg" style="height:80px;"></v-img>
                            <v-card-title style="font-size:12px;font-weight:bold;margin-top:-10px;">Adele Store.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}" color='#673AB7' rounded outlined class="text-capitalize" style="width:100%">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class="ma-2">
                            <v-img src="../../assets/images/pel.jpg" style="height:80px;"></v-img>
                            <v-card-title style="font-size:12px;font-weight:bold;margin-top:-10px;">Pelvix.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class=" ma-1">
                            <v-img src="../../assets/images/a.jpg" style="height:80px;"></v-img>
                            <v-card-title style="font-size:12px;font-weight:bold;margin-top:-10px;">Zeus.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class="ma-1">
                            <v-img src="../../assets/images/17.jpg" style="height:80px;"></v-img>
                            <v-card-title style="font-size:12px;font-weight:bold;margin-top:-10px;">Clara .</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>
                    
                </v-layout>
                </v-container>
                </v-card>
            </div>
            <!-- END TOP SELLER SECTION -->


            <!-- FEATURED PRODUCTS SECTION -->

            <div class="featured-products">
                <v-card flat elevation=''>
                    <v-container fluid>
                    <v-card-title style="font-weight:bold;font-size:13px;"> Featured Products : </v-card-title>
                

                    <!-- DISPLAY ON LARGE DEVICE -->
                    <div class="hidden-sm-and-down">
                    <v-layout row wrap>
                    <v-flex lg2 md2 >

                        <v-carousel  height="180" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-15.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-10.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">TVs </p>

                    </v-flex>

                    <v-flex lg2 md2 >

                        <v-carousel  height="180" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/n33.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n34.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Smart watch </p>

                    </v-flex>

                    <v-flex lg2 md2 >

                        <v-carousel  height="180" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-14-1.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-14-2.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Wingback Chair</p>

                    </v-flex>

                    <v-flex lg2 md2 >

                        <v-carousel  height="180" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-16-1.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-16-2.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Cushion Set</p>

                    </v-flex>

                    <v-flex lg2 md2 >

                        <v-carousel  height="180" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-11-1.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-11-2.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Hooded Top</p>

                    </v-flex>

                    <v-flex lg2 md2 >

                        <v-carousel  height="180" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-120.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-140.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Gaming</p>

                    </v-flex>
                    
                    </v-layout>
                </div>
                <!-- END DISPLAY ON LARGE DEVICE -->

                <!-- DISPLAY ON SMALL DEVICE -->
                <div class="hidden-md-and-up">
                <v-layout row wrap style="margin-top:-20px">
                    <v-flex sm6 xs6 >

                        <v-carousel  height="120" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-15.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-10.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">TVs </p>
                    </v-flex>

                    <v-flex sm6 xs6 >

                        <v-carousel  height="120" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/n33.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n34.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Smart watch </p>

                    </v-flex>

                    <v-flex sm6 xs6 >

                        <v-carousel  height="120" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-14-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-14-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Wingback Chair </p>
                    </v-flex>

                     <v-flex sm6 xs6 >

                        <v-carousel  height="120" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-16-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-16-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Cushion Set</p>

                    </v-flex>

                    <v-flex sm6 xs6 >

                        <v-carousel  height="120" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/n1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-7-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Bag </p>
                    </v-flex>

                     <v-flex sm6 xs6 >

                        <v-carousel  height="120" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-11-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-11-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Hooded Top </p>

                    </v-flex>
                    <v-flex sm6 xs6 >

                        <v-carousel  height="120" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-12.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-4.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Footwear</p>
                    </v-flex>

                     <v-flex sm6 xs6 >

                        <v-carousel  height="120" cycle hide-delimiters show-arrows-on-hover>
                            <v-carousel-item >
                                <img src="../../assets/images/product-120.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-140.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;"> Gaming </p>

                    </v-flex>
                    
                </v-layout>
                </div>
                <!-- END DISPLAY ON SMALL DEVICE -->
               
                </v-container>
                </v-card>
            </div>
            <!-- END TOP FEATURED PRODUCTS SECTION -->

            


            
            <!-- NEW SELLER SECTION -->
            <div class="new-sellers">
                <v-card flat class="rounded-lg" elevation=''>
                    <v-container fluid>
                        <v-card-title style="font-weight:bold;font-size:13px;"> New Sellers For You : </v-card-title>
                        <v-card flat class="ma-1 grey lighten-3" height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  src="../../assets/images/Fm.png" >
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:11px; margin-top:-15px">
                                                Continental - Contiecocontact 5
                                            </div>
                                        </v-card-text>
                                    </v-list-item>
                                </v-flex>
    
                                <v-flex lg4 md4 sm4 xs4>
                                    <v-card-text>
                                        <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white;font-size:12px;">Connect</span></v-btn>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card><br>
                        <v-card flat class="ma-1 " height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  src="../../assets/images/Fm.png" >
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:11px; margin-top:-15px">
                                                Continental - Contiecocontact 5
                                            </div>
                                        </v-card-text>
                                    </v-list-item>
                                </v-flex>
    
                                <v-flex lg4 md4 sm4 xs4>
                                    <v-card-text>
                                        <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">Connect</span></v-btn>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card><br>
                        <v-card flat class="ma-1 " height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  src="../../assets/images/Fm.png" >
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:11px; margin-top:-15px">
                                                Continental - Contiecocontact 5
                                            </div>
                                        </v-card-text>
                                    </v-list-item>
                                </v-flex>
    
                                <v-flex lg4 md4 sm4 xs4>
                                    <v-card-text>
                                        <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">Connect</span></v-btn>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card><br>

                    </v-container>
                </v-card>
            </div><br><br>
            <!-- END NEW SELLER SECTION -->
    
    </div>
</template>

<script>
export default {
    name : 'dashboard',
    data(){
        return{
            show : false,
            name : true,
          
         
        }
    }
}
</script>

<style scoped>
</style>