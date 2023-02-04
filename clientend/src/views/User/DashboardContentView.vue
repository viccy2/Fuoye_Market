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
                <!-- DISPLAY ON LARGEDEVICE -->
                <div class="hidden-sm-and-down">
                    <v-card flat elevation=''>
                 <v-container fluid>
                 <v-card-title style="font-weight:bold;font-size:13px;"> Our top sellers : </v-card-title>        
                    <v-layout row wrap class="pa-3" style="margin-top:-20px">

                    <v-flex lg4 md4 class="">
                      
                            <v-card
                                :loading="loading"
                                class="mx-auto my-12"
                                max-width="374" >
                            <template slot="progress">
                                <v-progress-linear
                                    color="deep-purple"
                                    height="10"
                                    indeterminate>
                                </v-progress-linear>
                            </template>
                            <v-img
                                height="250"
                                src="../../assets/images/b.jpg">
                            </v-img>
                            <v-card-title>Adele foods</v-card-title>

                            <v-card-text>
                            <v-row
                            align="center"
                            class="mx-0">
                            <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>

                                <div class="grey--text ms-4">
                                4.5 
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                 • Location : Ikole-Ekiti
                            </div>

                            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                            </v-card-text>

                            <v-divider class="mx-4"></v-divider>

                            <v-card-title>Availability</v-card-title>

                            <v-card-text>
                            <p> Days : </p>
                            <v-chip-group
                                
                                active-class="deep-purple accent-4 white--text"
                                column
                            >
                                
                                <v-chip>Monday</v-chip>
                                <v-chip>Tuesday</v-chip>
                                <v-chip>Wednesday</v-chip>
                                <v-chip>Thursday</v-chip>
                                <v-chip>Friday</v-chip>
                                <v-chip>Saturday</v-chip>
                            </v-chip-group><br>
                            <p> Time : </p>
                            <v-chip-group
                                
                                active-class="deep-purple accent-4 white--text"
                                column
                            >
                               <v-layout row wrap>
                                <v-flex lg6 md6 class="pa-3">
                                    <v-chip>12:00AM</v-chip>
                                </v-flex>
                                <v-flex lg6 md6 class="pa-3">
                                    <v-chip>12:00PM</v-chip>
                                </v-flex>
                               </v-layout>
                            
                            </v-chip-group>
                            </v-card-text>

                        </v-card>

                    </v-flex>

                    
                    <v-flex lg4 md4 class="">
                      
                      <v-card
                          :loading="loading"
                          class="mx-auto my-12"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="250"
                          src="../../assets/images/about-img-1.jpg">
                      </v-img>
                      <v-card-title>Dan Photography</v-card-title>

                      <v-card-text>
                      <v-row
                      align="center"
                      class="mx-0">
                      <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                          ></v-rating>

                          <div class="grey--text ms-4">
                          4.5 
                          </div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">
                           • Location : Oye-Ekiti
                      </div>

                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                      </v-card-text>

                      <v-divider class="mx-4"></v-divider>

                      <v-card-title>Availability</v-card-title>

                      <v-card-text>
                      <p> Days : </p>
                      <v-chip-group
                          
                          active-class="deep-purple accent-4 white--text"
                          column
                      >
                          
                          <v-chip>Monday</v-chip>
                          <v-chip>Tuesday</v-chip>
                          <v-chip>Wednesday</v-chip>
                          <v-chip>Thursday</v-chip>
                          <v-chip>Friday</v-chip>
                          <v-chip>Saturday</v-chip>
                          <v-chip>Sunday</v-chip>
                      </v-chip-group><br>
                      <p> Time : </p>
                      <v-chip-group
                          
                          active-class="deep-purple accent-4 white--text"
                          column
                      >
                         <v-layout row wrap>
                          <v-flex lg6 md6 class="pa-3">
                              <v-chip>08:00AM</v-chip>
                          </v-flex>
                          <v-flex lg6 md6 class="pa-3">
                              <v-chip>10:00PM</v-chip>
                          </v-flex>
                         </v-layout>
                      
                      </v-chip-group>
                      </v-card-text>

                  </v-card>

              </v-flex>


              <v-flex lg4 md4 class="">
                      
                      <v-card
                          :loading="loading"
                          class="mx-auto my-12"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="250"
                          src="../../assets/images/17.jpg">
                      </v-img>
                      <v-card-title>Bola Store</v-card-title>

                      <v-card-text>
                      <v-row
                      align="center"
                      class="mx-0">
                      <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                          ></v-rating>

                          <div class="grey--text ms-4">
                          4.5 
                          </div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">
                           • Location : Oye-Ekiti
                      </div>

                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                      </v-card-text>

                      <v-divider class="mx-4"></v-divider>

                      <v-card-title>Availability</v-card-title>

                      <v-card-text>
                      <p> Days : </p>
                      <v-chip-group
                          
                          active-class="deep-purple accent-4 white--text"
                          column
                      >
                          
                          <v-chip>Monday</v-chip>
                          <v-chip>Tuesday</v-chip>
                          <v-chip>Wednesday</v-chip>
                          <v-chip>Thursday</v-chip>
                          <v-chip>Friday</v-chip>
                         
                      </v-chip-group><br>
                      <p> Time : </p>
                      <v-chip-group
                          
                          active-class="deep-purple accent-4 white--text"
                          column
                      >
                         <v-layout row wrap>
                          <v-flex lg6 md6 class="pa-3">
                              <v-chip>10:00AM</v-chip>
                          </v-flex>
                          <v-flex lg6 md6 class="pa-3">
                              <v-chip>06:00PM</v-chip>
                          </v-flex>
                         </v-layout>
                      
                      </v-chip-group>
                      </v-card-text>

                  </v-card>

              </v-flex>

                    
                    
                </v-layout>
                </v-container>
                </v-card>
                </div>
                <!-- END DISPLAY ON LARGE DEVICE -->


                <!-- DISPLAY ON SMALL DEVICE -->
                <div class="hidden-md-and-up">
                    <v-card flat elevation=''>
                 <v-container fluid>
                 <v-card-title style="font-weight:bold;font-size:13px;"> Our top sellers : </v-card-title>        
                    <v-layout row wrap class="pa-3" style="margin-top:-20px">

                        <v-flex sm6 xs6 class="pa-1">
                      
                      <v-card
                          :loading="loading"
                          class="mx-auto my-12"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="150"
                          src="../../assets/images/17.jpg"
                          lazy-src="../../assets/images/17.jpg"
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
                      <v-card-title>Bola Store</v-card-title>

                      <v-card-text>
                      <v-row
                      align="center"
                      class="mx-0">
                      <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                          ></v-rating>

                          <div class="grey--text ms-4">
                          4.5 
                          </div>
                      </v-row>

                      <div class="my-4 " style="font-size:11px;">
                           • Location : Oye-Ekiti
                      </div>

                      <div style="font-size:10px;">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                      </v-card-text>

                      <v-divider class="mx-4"></v-divider>

                  </v-card>

              </v-flex>

                    
              <v-flex sm6 xs6 class="pa-1">
                      
                      <v-card
                          :loading="loading"
                          class="mx-auto my-12"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="150"
                          src="../../assets/images/pel.jpg"
                          lazy-src="../../assets/images/pel.jpg"
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
                      <v-card-title>Pelvix</v-card-title>

                      <v-card-text>
                      <v-row
                      align="center"
                      class="mx-0">
                      <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                          ></v-rating>

                          <div class="grey--text ms-4">
                          4.5 
                          </div>
                      </v-row>

                      <div class="my-4 " style="font-size:11px;">
                           • Location : Ikole-Ekiti
                      </div>

                      <div style="font-size:10px;">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                      </v-card-text>

                      <v-divider class="mx-4"></v-divider>

                  </v-card>

              </v-flex>


                    
                    
                </v-layout>
                </v-container>
                </v-card>
                </div>
                <!-- END DISPLAY ON SMALL DEVICE -->
                
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
                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-15.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Samsung -55" Class LED 2160p Smart
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 500, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                   
                                </v-card>

                        </center><br>
                        
                    </v-flex>

                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-90.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Apple Smart Watch Series 4
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 150, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center><br>
                        
                    </v-flex>
                    
                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/n32.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Bose - SoundSport wireless headphone.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 150, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center><br>
                        
                    </v-flex>
                  
                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-8a.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Microsoft - Refurbish Xbox One S 500GB.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 150, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center><br>
                        
                    </v-flex>
                   
                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/n30.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Sony - Alpha a5100 Mirrorless Camera.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 150, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center><br>
                        
                    </v-flex>
             
                
                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-17.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Google - Home Hub with Google Assistant.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 150, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center><br><br>
                        
                    </v-flex>
                    

                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-161.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Men / Women - Fashion Tops. 
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 20, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center><br>
                        
                    </v-flex>
                   

                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-5-1.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Home / Office -  Petits Table Lamp.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 15, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>

                    <v-flex lg4 md4 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-16-2.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Home / Office -  Table Lamp.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 15, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>
                    
                    
                    </v-layout>
                </div>
                <!-- END DISPLAY ON LARGE DEVICE -->

                <!-- DISPLAY ON SMALL DEVICE -->
                <div class="hidden-md-and-up">
                <v-layout row wrap style="margin-top:-20px">

                    <v-flex sm6 xs6 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-15.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Samsung -55" Class 
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 150, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>
                    
                    <v-flex sm6 xs6 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-90.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Apple Watch Series 4
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 150, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>
                    
                    <v-flex sm6 xs6 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/n50.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Bose - SoundSport .
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 50, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>
                
                    <v-flex sm6 xs6 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-8a.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Microsoft - Xbox.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 300, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>
                  
                    <v-flex sm6 xs6 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/n30.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Sony - Alpha Camera.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 200, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>
                    
                    
                    <v-flex sm6 xs6 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-17.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Google - Home Hub.
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 150, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>
                    
                     
                        <v-flex sm6 xs6 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-6-1.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Furniture - Elephant 
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 35, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
                    </v-flex>
                  
                    

                    <v-flex sm6 xs6 class="">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto "
                                    max-width="344"
                                >
                                    <v-img
                                    src="../../assets/images/product-5-1.jpg"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title style="font-size:14px;">
                                        Home / Office -Light
                                    </v-card-title>

                                    <v-card-subtitle>
                                    # 15, 000
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn
                                        color="#673AB7 "
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    </v-card-actions>

                                </v-card>

                        </center>
                        
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
            show: false,
            loading: false,
           
        }
    },
    methods:{
        goProfile(){
            this.$router.push({name : 'profile'})
        },
        reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    }
}
</script>

<style scoped>
</style>