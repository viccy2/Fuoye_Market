<template>
    <div class="dashboard"><br><br>
       
        <!-- PROFILE SECTION -->
      <section>     
        <!-- DISPLAY ON LARGE DEVICE --> 
        <div class="hidden-sm-and-down" ><br>
            <v-layout row wrap justify-space-between class="pa-3">
            <v-container fluid>
                <v-card class="mx-auto" height="140" color="" flat>
                
                <v-list-item >
                    <v-list-item-avatar class="rounded-lg" tile height="70" width="70" color="grey darken-3">
                        <v-img  class="elevation-6 animate__animated animate__zoomIn animate__slower" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>      
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-row>
                            <v-col  sm="9"  xs="9"></v-col>
                            <v-col  sm="3"  xs="3"><br>
                           
                            <div class="items animate__animated animate__bounceIn animate__slower" style="font-size:13px;color:black">
                                Welcome back, <br><span class="font-weight-bold" style="color:#673AB7;font-size:16px;"> Victor David! </span>
                            </div><br>
                            <v-btn @click="goProfile" class="text-capitalize animate__animated animate__bounceIn animate__slower"  outlined style="color:#673AB7;font-size:11px;">My Profile</v-btn>
                            </v-col>
                        </v-row>
                    </v-list-item-content>    
                </v-list-item>
                
                </v-card>
            </v-container>
            </v-layout>
         </div>
         <!-- END DISPLAY ON LARGE DEVICE -->

         <!-- DISPLAY ON SMALL DEVICE -->
         <div class="hidden-md-and-up">
            <v-container>
            <v-card class="mx-auto"  flat  height="145" color="#673AB7" >
                <v-container>
                <v-list-item>
                    <v-list-item-avatar  height="55" width="55" color="grey darken-3">
                        <v-img  class="elevation-6 animate__animated animate__zoomIn animate__slower" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>      
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-row>
                            <v-col  sm="6"  xs="6"></v-col>
                            <v-col  sm="6"  xs="6">
                            <br>
                            <div class="items animate__animated animate__bounceIn animate__slower" style="font-size:10px;color:whitesmoke;">
                                Welcome back, <br><span class="font-weight-bold" style="color:white;font-size:13px;"> Victor David! </span>
                            </div><br>
                            <v-btn @click="goProfile" class="text-capitalize animate__animated animate__bounceIn animate__slower" small  outlined style="color:whitesmoke;font-size:11px;">My Profile</v-btn>
                            </v-col>
                        </v-row>
                    </v-list-item-content>    
                </v-list-item>
            </v-container>
            </v-card>
            </v-container>
        </div>
         <!-- END DISPLAY ON SMALL DEVICE -->
        </section>
        <!-- END PROFILE SECTION  -->

            
            <!-- TOP SELLER SECTION -->

            <div class="top-seller">
                <v-card flat elevation=''>
                 <v-container fluid>
                 <v-card-title style="font-weight:bold;font-size:13px;"> Our top sellers : </v-card-title>        
                    <v-layout row wrap class="pa-3" style="margin-top:-20px">

                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class=" ma-2">
                            <v-img class="" src="../../assets/images/b.jpg" style="height:100px;"></v-img>
                            <v-card-title style="font-size:10px;font-weight:bold;margin-top:-10px;">Clara's Eatery.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}" color='#673AB7' rounded outlined class="text-capitalize" style="width:100%;font-size:11px;">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class="ma-2" >
                            <v-img class="" src="../../assets/images/pel.jpg" style="height:100px;"></v-img>
                            <v-card-title style="font-size:10px;font-weight:bold;margin-top:-10px;">Pelvix Buy'N Sell.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%;font-size:11px;">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class="ma-2" >
                            <v-img class="" src="../../assets/images/about-img-1.jpg" style="height:100px;"></v-img>
                            <v-card-title style="font-size:10px;font-weight:bold;margin-top:-10px;">Dan's Photography.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%;font-size:11px;">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class="ma-2" >
                            <v-img class="" src="../../assets/images/17.jpg" style="height:100px;"></v-img>
                            <v-card-title style="font-size:10px;font-weight:bold;margin-top:-10px;">Bola's Store.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%;font-size:11px;">Connect</v-btn>
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
                    <v-card-title style="font-weight:bold;font-size:13px;"> Featured products : </v-card-title>
                

                    <!-- DISPLAY ON LARGE DEVICE -->
                    <div class="hidden-sm-and-down">
                    <v-layout row wrap>
                    <v-flex lg3 md3 >
                        <center>
                        <v-carousel  height="200" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-15.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-15.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:10px;">Samsung -55" Class LED 2160p Smart</p>
                        </center>
                    </v-flex>

                    <v-flex lg3 md3 >
                        <center>
                        <v-carousel  height="200" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-90.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n33.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Apple Watch Series 4   </p>
                        </center>
                    </v-flex>

                    <v-flex lg3 md3 >
                        <center>
                        <v-carousel  height="180" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/n32.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n50.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Bose - SoundSport wireless headphones </p>
                        </center>
                    </v-flex>

                    <v-flex lg3 md3 >
                        <center>
                        <v-carousel  height="200" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-8a.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-8a.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Microsoft - Refurbish Xbox One S 500GB</p>
                        </center>
                    </v-flex>

                    <v-flex lg3 md3 >
                        <center>
                        <v-carousel  height="200" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/n30.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n30.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Sony - Alpha a5100 Mirrorless Camera </p>
                        </center>
                    </v-flex>

                    <v-flex lg3 md3 >
                        <center>
                        <v-carousel  height="200" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-14-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-14-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Wingback Chair</p>
                        </center>
                    </v-flex>

                    <v-flex lg3 md3 >
                        <center>
                        <v-carousel  height="200" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-41.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-161.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Top</p>
                        </center>
                    </v-flex>

                    <v-flex lg3 md3 >
                        <center>
                        <v-carousel  height="200" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-18.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-21.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center " style="font-size:11px;">Blender</p>
                        </center>
                    </v-flex>
                    
                    </v-layout>
                </div>
                <!-- END DISPLAY ON LARGE DEVICE -->

                <!-- DISPLAY ON SMALL DEVICE -->
                <div class="hidden-md-and-up">
                <v-layout row wrap style="margin-top:-20px">
                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-15.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-15.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>  
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;">Samsung -55" Class LED 2160p Smart</p>
                    </v-flex>

                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-90.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n33.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;">Apple Watch Series 4  </p>

                    </v-flex>

                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/n32.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n50.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;"> Bose - SoundSport wireless headphones </p>
                    </v-flex>

                     <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-8a.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-8a.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;">Microsoft - Refurbish Xbox One S 500GB</p>

                    </v-flex>

                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/n30.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/n30.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;"> Sony - Alpha a5100 Mirrorless Camera </p>
                    </v-flex>

                     <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-17.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-17.jpg" style="width:70%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;">Google - Home Hub with Google Assistant </p>

                    </v-flex>
                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-6-1.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-6-2.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;">Furniture - Elephant Armchair </p>
                    </v-flex>

                     <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-5-1.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-5-2.jpg" style="width:100%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;"> Home / Office -  Petits Table Lamp </p>

                    </v-flex>

                    <v-flex sm4 xs4 >

                        <v-carousel  height="100" cycle hide-delimiters :show-arrows="false">
                            <v-carousel-item >
                                <img src="../../assets/images/product-161.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                            <v-carousel-item >
                                <img src="../../assets/images/product-41.jpg" style="width:80%;height:100%;margin-top:px;" >
                            </v-carousel-item>
                        </v-carousel>
                        <p class="text-center ma-1" style="font-size:9px;">Men / Women - Fashion Tops </p>

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
                        <v-card-title style="font-weight:bold;font-size:13px;"> New sellers for you : </v-card-title>
                        <v-card flat class="ma-1" height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  src="../../assets/images/Fm.png" >
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:10px; margin-top:-15px">
                                                Continental - Contiecocontact 
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
                                            <div class="items text-capitalize" style="font-size:10px; margin-top:-15px">
                                                Continental - Contiecocontact 
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
                                            <div class="items text-capitalize" style="font-size:10px; margin-top:-15px">
                                                Continental - Contiecocontact 
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
import 'animate.css'
export default {
    name : 'dashboard',
    data(){
        return{
            show : false,
            name : true,
        }
    },
    methods:{
        goProfile(){
            this.$router.push({name : 'profile'})
        }
    }
}
</script>

<style scoped>
</style>