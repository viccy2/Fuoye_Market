<template>
  <!-- Landing Page Start  -->
  <div class="home white" style="width:100%">

    <!-- NAVBAR SECTION  -->
    <HomeNavbar />
    <!-- END NAVBAR SECTION  -->

      <v-container>

        <!-- HEADER SECTION  -->
        <section class="header">

          <!-- DISPLAY ON LARGER DEVICES  -->
          <div class="head1 hidden-sm-and-down" style="margin-top:200px">
            <v-container>
              <v-layout row wrap>
                <v-flex md4 lg4 >
                  <h2 id="h21" class="animate__animated animate__bounceIn animate__slower"><span style="color:#673AB7">Connect</span> with your choice <span style="color:#673AB7">Sellers & Buyers.</span></h2><br>
                  <p class="font-weight-bold text--black" style="font-size:12px;"> We're here to help you <span style="color:#673AB7">connect</span> with your choice <span style="color:#673AB7">Sellers & Buyers</span> around You. Welcome to FuoyeMarket!</p>
                  <router-link to="/new-account" style="text-decoration:none">
                  <v-btn class="mt-1 text-capitalize" outlined color ="#673AB7">
                    <span style="font-size:12px;">Get Started </span>
                    <v-icon small class="pa-1" id="icon" right style="color:#673AB7">mdi-arrow-right-thick</v-icon>
                  </v-btn>
                  </router-link>
                </v-flex>
                <v-flex md2 lg2>
                </v-flex>
                <v-flex md6 lg6>
                  <center>
                      <img class="rounded-circle img1 animate__animated animate__zoomIn animate__slower"  src="../assets/images/n62.jpg">
                  </center>
                </v-flex>
              </v-layout>
            </v-container><br><br>
          </div>
          <!-- END DISPLAY ON LARGER DEVICES -->

          <!-- DISPLAY ON SMALL DEVICES  -->
          <div class="head2 hidden-md-and-up">
            <v-layout row wrap>
              <center>
                <v-flex sm12 class="ma-3 text-center">
                  <h2 class="text-center txt1 animate__animated animate__bounceIn animate__slower">Connect <span style="color:black">with your choice</span> Sellers & Buyers.</h2>
                </v-flex>

                <v-flex sm12>
                  <p class="ma-3 text-center txt2 text--black">
                    We're here to <span style="color:#673AB7">connect</span> You with your choice <span style="color:#673AB7">Sellers & Buyers</span> around You. 
                  </p>
                <center >
                  <router-link to="/new-account" style="text-decoration:none">
                  <v-btn class="mt-1 text-capitalize" outlined color ="#673AB7">
                    <span style="font-size:12px;">Get Started </span>
                    <v-icon small class="pa-1" id="icon" right style="color:#673AB7">mdi-arrow-right-thick</v-icon>
                  </v-btn>
                  </router-link>
                </center>
              </v-flex><br>

              <center>
                      <img class=" img2 animate__animated animate__zoomIn animate__slower"  src="../assets/images/n62.jpg">
              </center>

            </center>
            </v-layout>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES -->

        </section><br><br><br>
      <!-- END HEADER SECTION  -->

    <!--  BODY -->

      <!-- AIM SECTION  -->
      <section class="aim">
        <v-container>

          <!-- DISPLAY ON LARGE DEVICES -->
          <div class="body1 hidden-sm-and-down">
            <v-layout row wrap>
              <v-flex md4 lg4 sm12 xs12>
                <v-card tile flat height='100' class="ma-5" >
                  <center>
                    <v-btn fab small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-account-group-outline</v-icon>
                    </v-btn>
                    <br><br><br>
                    <v-card-text class="py-0">
                      <div class="items " id="txt3">
                        Create account, get access to top sellers around you.
                        </div>
                    </v-card-text>
                  </center>
                </v-card>
              </v-flex>

              <v-flex md4 lg4 sm12 xs12>
                <v-card tile flat height='100' class="ma-5" >
                  <center>
                    <v-btn fab  small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-account-key-outline</v-icon>
                    </v-btn>
                    <br><br><br>
                    <v-card-text class="py-0">
                      <div class="items " id="txt3">
                        Get access to unlimited choice products & services.
                      </div>
                    </v-card-text>
                  </center>
                </v-card>
              </v-flex>

              <v-flex md4 lg4 sm12 xs12>
                <v-card tile flat height='100' class="ma-5" >
                  <center>
                  <v-btn fab  small color='grey lighten-2'>
                    <v-icon small class="pa-3" id="icon"> mdi-cart-check</v-icon>
                  </v-btn>
                  <br><br><br>
                  <v-card-text class="py-0">
                    <div class="items " id="txt3">
                     Create seller's account, get access to showcase your products.
                    </div>
                  </v-card-text>
                  </center>
                </v-card>
              </v-flex>

        </v-layout><br><br><br><br>
      </div>
      <!-- END DISPLAY ON LARGE DEVICE  -->

        <!-- DISPLAY ON SMALL MOBILE DEVICES -->
      <div class="body2 hidden-md-and-up">
        <v-layout row wrap>
          <v-flex sm12 xs12>
            <v-card tile flat height='' class="ma-5">
              <v-layout>
                <v-flex sm12>
                  <center>
                    <v-btn fab  small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-account-group-outline</v-icon>
                    </v-btn><br><br>
                    <v-card-text class="py-0">
                      <div class="item pa-3 animate__animated animate__bounceIn" id="txt4">
                        Create account, get access to top sellers around you.
                      </div>
                    </v-card-text>
                    </center>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout><br><br>

          <v-layout row wrap>
            <v-flex sm12 xs12 id="con">
              <v-card tile flat height='' class="ma-5" >
                <v-layout>
                  <v-flex sm12>
                    <center>
                      <v-btn fab small color='grey lighten-2'>
                        <v-icon small class="pa-3" id="icon"> mdi-account-key-outline</v-icon>
                      </v-btn><br><br>
                      <v-card-text class="py-0">
                        <div class="item pa-3 animate__animated animate__bounceIn" id="txt4">
                          Get access to unlimited choice products & services.
                        </div>
                      </v-card-text>
                    </center>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            </v-layout><br><br>

            <v-layout row wrap>
              <v-flex sm12 xs12 id="con">
                <v-card tile flat height='' class="ma-5" >
                  <v-layout>
                    <v-flex sm12>
                      <center>
                        <v-btn fab  small color='grey lighten-2'>
                          <v-icon small class="pa-3" id="icon"> mdi-cart-check</v-icon>
                        </v-btn><br><br>
                        <v-card-text class="py-0">
                          <div class="item pa-3 animate__animated animate__bounceIn" id="txt4">
                            Create seller's account, get access to showcase your products.
                        </div>
                        </v-card-text>
                      </center>
                    </v-flex>
                  </v-layout><br><br>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES  -->

        </v-container>
      </section><br><br><br><br><br>
      <!-- END AIM SECTION  -->


      <!-- GROW SECTION  -->
      <section>
        <v-container>

        <!-- DISPLAY ON LARGE DEVICES  -->
          <div class="hidden-sm-and-down">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex md4 lg4 >
                  <h2 id="h22"><span style="color:black">Grow </span>= Connect + <span style="color:black">Sell</span>.</h2><br>
                  <p id="txt5">
                    We designed a platform for the main pupose of connecting campus students to the sellers around them and sellers with their potential buyers.<br>
                    We give the opportunity for sellers based on variety of services, products and goods to render or sell to create sellers account and upload their products to potential buyers. 
                    Also, for users to create account and have medium to add their products and connect with the sellers.
                  </p>
                  <router-link to="/dashboard" style="text-decoration:none"><p id="txt6">Create account with us ></p></router-link>
                </v-flex>
                <v-flex md2 lg2>

                </v-flex>
                <v-flex md6 lg6>
                  <center>
                    <img class="img3 animate__animated animate__zoomIn animate__slower"  src="../assets/images/n61.jpg">
                  </center>
                </v-flex>

              </v-layout>
            </v-container><br><br><br>
          </div>
          <!-- END DISPLAY ON LARGE DEVICES  -->

          <!-- DISPLAY ON SMALL DEVICES -->
          <div class="hidden-md-and-up">
            <v-flex sm12 xs12 id="con1">
              <h2 id="h23" class="animate__animated animate__fadeIn"><span style="color:black">Grow = </span><br><br> Connect + <br><br> <span style="color:black">Sell.</span></h2><br>
              <center>
              <p id="txt7" class="animate__animated animate__fadeIn">
                We designed a platform for the main pupose of connecting campus students to the sellers around them and sellers with their potential buyers.
              </p>
              <p id="txt7" class="animate__animated animate__fadeIn">
                We give the opportunity for sellers based on variety of services, products and goods to render or sell to create sellers account and upload their products to potential buyers. 
              </p>
              <p id="txt7" class="animate__animated animate__fadeIn">
                Also, for users to create account and have medium to add their products and connect with the sellers.
              </p>
              </center>
              <router-link to="/dashboard" style="text-decoration:none"><p id="txt8">Create account with us ></p></router-link>
            </v-flex>

            <v-flex sm12 xs12>
              <center>
                  <img class="img4 animate__animated animate__zoomIn animate__slower" src="../assets/images/n61.jpg">
              </center>
            </v-flex>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES -->

        </v-container>
      </section><br><br><br><br>
    <!-- END GROWTH SECTION  -->


    <!-- ACCESS SECTION  -->
      <section>
        <v-container>

          <!-- DISPLAY ON LARGE DEVICES -->
          <div class="hidden-sm-and-down" >
            <v-layout row wrap>
              <v-flex md5 lg5>
                  <center>
                    <img class="img6  animate__animated animate__zoomIn animate__slower"  src="../assets/images/n63.jpg">
                  </center>
              </v-flex>
              <v-flex md2 lg2>

              </v-flex>
              <v-flex md5 lg5 >
                  <h2 id="h22"><span style="color:black">Get access to the</span> Best Sellers <span style="color:black">in the business</span>.</h2><br>
                  <p id="txt5">
                    Search for the best sellers on FuoyeMarket, get the access to sellers around you for your needed products...
                  </p>
                  <router-link to="/dashboard" style="text-decoration:none"><p id="txt6">Create account with us ></p></router-link>
              </v-flex>
      
              </v-layout><br><br><br><br><br><br>
          </div>
          <!-- END DISPLAY ON LARGE DEVICES -->

          <!-- DISPLAY ON SMALL DEVICES  -->
          <div class="hidden-md-and-up"><br><br>
            <v-flex sm12 xs12 id="con3">
              <h2 id="h24"><span style="color:black">Get access to the</span> Best Sellers <span style="color:black">in the business.</span></h2><br>
              <p id="txt7">
                Search for the best sellers on FuoyeMarket, get the access to sellers around you for your needed products...
              </p>
            </v-flex>

            <v-flex sm12 xs12>
              <center>
                  <img class="img4 animate__animated animate__zoomIn animate__slower" src="../assets/images/n63.jpg" style="margin-top:-10px;">
              </center>
            </v-flex><br><br>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES  -->

        </v-container>
      </section><br><br><br><br>

      <!-- END ACCESS SECTION  -->


      <!-- CATEGORIES SECTION  -->
      <section>
        <v-container>

          <!-- DISPLAY ON LARGE DEVICE -->
          <div class="hidden-sm-and-down" style="margin-top:-100px">
            <h2 id="h25" >Explore <span style="color:#673AB7">Popular Categories</span></h2><br><br><br><br>

          <div>
            <v-layout row wrap>
              <v-flex md3 lg3>
                <center>
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/product-3b.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/n212.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;"> Computing. </h2>
                </center> <br><br><br><br>
              </v-flex>

              <v-flex md3 lg3>
                <center>
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/img8.jpg" style="height:70%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img10.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;"> Electronics. </h2>
                </center><br><br><br><br>
              </v-flex>

              <v-flex md3 lg3>
                <center>
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/product-41.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-161.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Fashion.</h2>
                </center> <br><br><br><br>
              </v-flex>

              <v-flex md3 lg3>
                <center>
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/img1.jpg" style="height:70%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img2.jpg" style="height:70%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Gaming.</h2>
                </center> <br><br><br><br>
              </v-flex>

              <v-flex md3 lg3>
                <center>
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/product-3.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-14-1.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Home & Offices.</h2>
                </center> 
              </v-flex>

              <v-flex md3 lg3>
                <center>
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/n33.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img6.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Phones / Smart watches.  </h2>
                </center>  
              </v-flex>

              <v-flex md3 lg3>
                <center>
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/img3.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img9.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Appliances.  </h2>
                </center>  
              </v-flex>

              <v-flex md3 lg3>
                <center>
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/img4.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img5.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Grocery.  </h2>
                </center>  
              </v-flex>

            </v-layout><br><br><br><br>
          </div>
          </div>
          <!-- END DISPLAY ON LARGE DEVICE -->

          <!-- DISPLAY ON SMALL DEVICE -->
          <div class="hidden-md-and-up" id="con4">
            <h2 id="h26">Explore <span style="color:#673AB7">Popular Categories.</span></h2><br>
            <div>

              <v-container class="animate__animated animate__zoomIn animate__slower">

                  <v-layout row wrap>
                    <!-- <v-flex sm4 xs4>
                    <center>
                      <v-card flat class=" ma-1">
                        <v-carousel :show-arrows="false" height="" cycle hide-delimiters >
                          <v-carousel-item >
                            <img src="../assets/images/product-3b.jpg" style="width:100%;height:80%;" >
                          </v-carousel-item>
                          <v-carousel-item >
                            <img src="../assets/images/n212.jpg" style="width:100%;height:80%;" >
                          </v-carousel-item>
                        </v-carousel>
                        <v-card-title style="font-size:11px;font-weight:bold;margin-top:-26px;">Computing.</v-card-title>
                      </v-card>
                    </center> 
                    </v-flex> -->
                    
                    <v-flex sm6 xs6>
                    <center>
                      <v-card flat class=" ma-3" >
                        <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                          <v-carousel-item >
                            <img src="../assets/images/product-10.jpg" style="width:100%;" >
                          </v-carousel-item>
                          
                        </v-carousel>
                        <v-card-text style="font-size:11px;font-weight:bold;">Electronics.</v-card-text>
                      </v-card>
                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6>
                    <center>
                      <v-card flat class=" ma-3">
                        <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                          <v-carousel-item >
                            <img src="../assets/images/product-8a.jpg" style="width:100%;" >
                          </v-carousel-item>
                          
                        </v-carousel>
                        <v-card-text style="font-size:11px;font-weight:bold;">Gaming.</v-card-text>
                      </v-card>
                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6>
                    <center>
                      <v-card flat class=" ma-3">
                        <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                          <v-carousel-item >
                            <img src="../assets/images/product-41.jpg" style="width:100%;" >
                          </v-carousel-item>
                          <v-carousel-item >
                            <img src="../assets/images/product-161.jpg" style="width:100%;" >
                          </v-carousel-item>
                        </v-carousel><br>
                        <v-card-text style="font-size:11px;font-weight:bold;margin-top:-15px;">Fashion.</v-card-text>
                      </v-card>
                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6>
                    <center>
                      <v-card flat class=" ma-3">
                        <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                          <v-carousel-item >
                            <img src="../assets/images/product-14-2.jpg" style="width:100%;" >
                          </v-carousel-item>
                          <v-carousel-item >
                            <img src="../assets/images/product-14-1.jpg" style="width:100%;" >
                          </v-carousel-item>
                        </v-carousel><br>
                        <v-card-text style="font-size:11px;font-weight:bold;margin-top:-26px;">Furniture.</v-card-text>
                      </v-card>
                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6>
                    <center>
                      <v-card flat class=" ma-3">
                        <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                          <v-carousel-item >
                            <img src="../assets/images/n36.jpg" style="width:100%;" >
                          </v-carousel-item>
                          <v-carousel-item >
                            <img src="../assets/images/product-3-21.jpg" style="width:100%;" >
                          </v-carousel-item>
                        </v-carousel><br>
                        <v-card-text style="font-size:11px;font-weight:bold;">Sporting.</v-card-text>
                      </v-card>
                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6>
                    <center>
                      <v-card flat class=" ma-3">
                        <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                          <v-carousel-item >
                            <img src="../assets/images/img7.jpg" style="width:100%;" >
                          </v-carousel-item>
                          <v-carousel-item >
                            <img src="../assets/images/product-90.jpg" style="width:100%;" >
                          </v-carousel-item>
                        </v-carousel><br>
                        <v-card-text style="font-size:11px;font-weight:bold;">Device</v-card-text>
                      </v-card>
                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6>
                    <center>
                      <v-card flat class=" ma-3">
                        <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                          <v-carousel-item >
                            <img src="../assets/images/img9.jpg" style="width:100%;" >
                          </v-carousel-item>
                        </v-carousel><br>
                        <v-card-text style="font-size:11px;font-weight:bold;">Appliance.</v-card-text>
                      </v-card>
                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6>
                    <center>
                      <v-card flat class=" ma-3">
                        <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                          <v-carousel-item >
                            <img src="../assets/images/img4.jpg" style="width:100%;" >
                          </v-carousel-item>
                          <v-carousel-item >
                            <img src="../assets/images/img5.jpg" style="width:100%;" >
                          </v-carousel-item>
                        </v-carousel><br>
                        <v-card-text style="font-size:11px;font-weight:bold;">Grocery</v-card-text>
                      </v-card>
                    </center> 
                    </v-flex>

                  </v-layout>
                

              </v-container>

            </div><br><br>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES -->
        </v-container>
      </section><br><br><br><br>
     

      <!-- TESTIMOLIAL  SECTION  -->
      <section>
        <v-container>

          <!-- DISPLAY ON LARGE DEVICES  -->
          <div class="hidden-sm-and-down">
            <h2 id="h25">Don’t just take <span style="color:#673AB7"> Our Words</span> for it! </h2><br><br><br>
            <div>
              <v-layout row wrap>
              <v-flex md4 lg4>
                <v-card class="ma-3 animate__animated animate__fadeIn" color="" height="310" flat>
                  <v-card-text class="font-weight-bold font-italic" style="font-size:13px;color:black">
                    "<span class="font-italic" style="color:#673AB7">FuoyeMarket</span> is an awesome platform, I love using it because all <span style="color:#673AB7">sellers</span> on the platform are trusted <span style="color:#673AB7">sellers,</span> a good platform to <span style="color:#673AB7">connect</span> with my choice <span style="color:#673AB7">sellers.</span>"
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:#673AB7;font-size:11px">Ayomide (Buyer)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex md4 lg4>
                <v-card class="ma-3 animate__animated animate__fadeIn" flat height="310">
                  <v-card-text class="font-weight-bold font-italic" style="font-size:13px;color:black">
                    <span class="font-italic" style="color:#673AB7">"FuoyeMarket</span> is a great platform, easy to use and very awesome. It allows me to have audience for my goods. Indeed a great platform."
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:#673AB7;font-size:11px">Mide (Seller)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex md4 lg4>
                <v-card class="ma-3 animate__animated animate__fadeIn" flat height="310">
                  <v-card-text class="font-weight-bold font-italic" style="font-size:13px;color:black">
                    "<span class="font-italic" style="color:#673AB7">FuoyeMarket</span> is an awesome platform, <span style="color:#673AB7">very easy to use, </span> a good platform to <span style="color:#673AB7">connect</span> with my choice <span style="color:#673AB7">sellers.</span>"
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:#673AB7;font-size:11px">Ayomide (Buyer)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </div><br><br>
        </div> 
        <!-- END DISPLAY ON LARGE DEVICE  --> 

        <!-- DISPLAY ON SMALL DEVICE --> 
        <div class="hidden-md-and-up" id="con4">
          <h2 id="h26">Don’t just take <span style="color:#673AB7"> Our Words</span> for it! </h2><br>
            <div>
              <v-layout row wrap>
              <v-flex sm12 xs12>
                <v-card class="ma-3 animate__animated animate__fadeIn" flat >
                  <v-card-text class="font-weight-bold font-italic" style="font-size:12px;color:black">
                    "<span class="font-italic" style="color:#673AB7">FuoyeMarket</span> is an awesome platform, I love using it because all <span style="color:#673AB7">sellers</span> on the platform are trusted <span style="color:#673AB7">sellers,</span> a good platform to <span style="color:#673AB7">connect</span> with my choice <span style="color:#673AB7">sellers.</span>"
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:#673AB7;font-size:11px;">Dan (Buyer)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex sm12 xs12>
                <v-card class="ma-3 animate__animated animate__fadeIn" flat >
                  <v-card-text class="font-weight-bold font-italic" style="font-size:12px;color:black">
                    <span class="font-italic" style="color:#673AB7">"FuoyeMarket</span> is a great platform, easy to use and very awesome. It allows me to have audience for my goods. Indeed a great platform."
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:#673AB7;font-size:11px">Mide (Seller)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex sm12 xs12>
                <v-card class="ma-3 animate__animated animate__fadeIn" flat>
                  <v-card-text class="font-weight-bold font-italic" style="font-size:12px;color:black">
                    "<span class="font-italic" style="color:#673AB7">FuoyeMarket</span> is an awesome platform, <span style="color:#673AB7">very easy to use, </span> a good platform to <span style="color:#673AB7">connect</span> with my choice <span style="color:#673AB7">sellers.</span>"
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:#673AB7;font-size:11px">Ayomide (Buyer)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout><br><br><br>
          </div><br><br><br>
          </div>
          <!-- END DISPLAY ON SMALL DEVICE  -->
        </v-container>
      </section>
      <!-- END CATEGORY SECTION  -->

      <!-- TEAM SECTION  -->
      <section id="team">
        <v-container>
          <div class="hidden-sm-and-down">
            <h2 id="h25" >Meet the <span style="color:#673AB7"> Team </span></h2><br><br><br><br>
            <div>
            <v-layout row wrap>
              <v-flex md3 lg3>
                <center>
                  <v-card flat class=" ma-2 animate__animated animate__fadeIn" >
                    <v-img
                        src="../assets/images/po.jpg"
                        lazy-src="../assets/images/po.jpg"
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
                  </v-card><br>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Victor Aremu David </h2>
                  <h2 id="h26" class="font-italic" style="font-size:11px;"> (Founder, Team Lead Engineering)  </h2>
                </center>
              </v-flex>
              <v-flex md3 lg3>
                <center>
                  <v-card flat class=" ma-2 animate__animated animate__fadeIn" >
                    <v-img
                        src="../assets/images/f2.jpeg"
                        lazy-src="../assets/images/f2.jpeg"
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
                  </v-card><br>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Olaoluwa David</h2>
                  <h2 id="h26" class="font-italic" style="font-size:11px;"> (Co-Founder, Chief Financial Officer)  </h2>
                </center>             
              </v-flex>
              <v-flex md3 lg3>
                <center>
                  <v-card flat class=" ma-2 animate__animated animate__fadeIn" >
                    <v-img
                        src="../assets/images/afolabisalawu.jpg"
                        lazy-src="../assets/images/afolabisalawu.jpg"
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
                  </v-card><br>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Salawu Afolabi </h2>
                  <h2 id="h26" class="font-italic" style="font-size:11px;"> (Team Lead Development & Engineering (Backend))  </h2>
                </center>
              </v-flex>
             
              <v-flex md3 lg3>
                <center>
                  <v-card flat class=" ma-2 animate__animated animate__fadeIn" >
                    <v-img
                        src="../assets/images/k23.jpg"
                        lazy-src="../assets/images/k23.jpg"
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
                  </v-card><br>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Afolabi Vivian</h2>
                  <h2 id="h26" class="font-italic" style="font-size:11px;"> (Team Lead Design)  </h2>
                </center>             
              </v-flex>
            </v-layout>
          </div><br><br><br><br><br>
          </div>
          <!-- END DISPLAY ON LARGE DEVICE -->

          <!-- DISPLAY ON SMALL DEVICE -->
          <div class="hidden-md-and-up" id="con4">
            <h2 id="h26">Meet the<span style="color:#673AB7"> Team.</span></h2><br><br>
            <div>
            
              <center>
            <v-layout row wrap>
              <v-flex sm6 xs6>
               
                  <v-card flat class=" ma-2 animate__animated animate__fadeIn" >
                    <v-img src="../assets/images/po.jpg" style="width:;height:100%;" 
                      lazy-src="../assets/images/po.jpg"
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
                  </v-card>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Victor Aremu David </h2>
                  <h2 class="font-italic" style="font-size:11px;"> (Founder, Team Lead Engineering)  </h2>
                <br>
              </v-flex>
              <v-flex sm6 xs6>
                <center>
                  <v-card flat class=" ma-2 animate__animated animate__fadeIn" >
                    <v-img  src="../assets/images/f2.jpeg" style="width:;height:100%;" 
                    lazy-src="../assets/images/f2.jpeg"
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
                  </v-card>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Olaoluwa David</h2>
                  <h2 class="font-italic" style="font-size:11px;"> (Co-Founder, Chief Financial Officer)  </h2>
                </center>
              </v-flex>
              <v-flex sm6 xs6>
                <v-card flat class=" ma-2 animate__animated animate__fadeIn" >
                    <v-img  src="../assets/images/afolabisalawu.jpg" style="width:;height:100%;" 
                        lazy-src="../assets/images/afolabisalawu.jpg"
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
                  </v-card>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Salawu Afolabi </h2>
                  <h2 class="font-italic" style="font-size:11px;"> (Team Lead Development & Engineering (Backend))  </h2>
                <br><br><br>              
              </v-flex>
              <v-flex sm6 xs6>
                <v-card flat class=" ma-2 animate__animated animate__fadeIn" >
                    <v-img src="../assets/images/k23.jpg" style="height:100%;" 
                      lazy-src="../assets/images/k23.jpg"
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
                  </v-card>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Afolabi Vivian</h2>
                  <h2 class="font-italic" style="font-size:11px;"> (Team Lead Design )  </h2>
                                
              </v-flex>  
            </v-layout>
              </center>
           
            </div><br>
        </div>
        <!-- END DISPLAY ON SMALL DEVICE -->
          
        </v-container>
      </section><br><br><br>
      <!-- END TEAM  SECTION  -->


      <!-- PARTNERS SECTION  -->
      <section>
        <v-container>
          <!-- DISPLAY ON LARGE DEVICE -->
          <div class="hidden-sm-and-down">
            <h2 id="h25" style="color:#673AB7">Our Partners</h2><br><br><br><br><br>
            <div>
            <v-layout row wrap>
              <v-flex md4 lg4>
                <center>
                <img class="img7 animate__animated animate__fadeIn" src="../assets/images/4.png" >
                </center> 
              </v-flex>
              <v-flex md4 lg4>
                <center>
                <img class="img7 animate__animated animate__fadeIn" src="../assets/images/7.png" >
                </center> 
              </v-flex>
              <v-flex md4 lg4>
                <center>
                <img class="img7 animate__animated animate__fadeIn" src="../assets/images/8.png">
                </center>
              </v-flex>
            </v-layout>
          </div><br><br><br><br><br>
          </div>
        <!-- END DISPLAY ON LARGE DEVICE  -->

        <!-- DISPLAY ON SMALL DEVICES  -->
        <div class="hidden-md-and-up" id="con4">
          <h2 id="h26"><span style="color:#673AB7">Our Partners.</span></h2><br><br><br>
            <div>
            <v-container>
              <center>
            <v-layout row wrap>
              <v-flex sm4 xs4>
                <img class="" src="../assets/images/4.png" style="height:35px; ">
              </v-flex>
              <v-flex sm4 xs4>
               <img class="" src="../assets/images/7.png" style="height:35px; ">
              </v-flex>
              <v-flex sm4 xs4>
                <img class="" src="../assets/images/8.png" style="height:35px;">
              </v-flex>
             </v-layout>
              </center>
            </v-container>
            </div>
        </div>
      <!-- END DISPLAY ON SMALL DEVICES -->
      </v-container>
    </section><br><br><br>
    <!-- END PARTNER SECTION  -->

<!-- CONTACT SECTION  -->
    <section>
      <v-container>
          <div class="hidden-sm-and-down">
            <v-layout row wrap>
              <v-flex md8 lg8 sm12 xs12>
                <div>
                  <img class="" src="../assets/images/logo1.png" style="height:80px; width:30%;">
                </div>
                <p style="font-size:12px">Follow us on our social platforms.</p>
                <div>
                  <a href="https://www.facebook.com/profile.php?id=100035539115115" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon" > mdi-facebook</v-icon>
                  </v-btn></a>
                  <a href="https://www.facebook.com/profile.php?id=100035539115115" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                  </v-btn></a>
                  <a href="https://twitter.com/fuoyemarket" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-twitter</v-icon>
                  </v-btn>
                  </a>
                </div>
              </v-flex>
              <v-flex md4 lg4 sm12 xs12>
                <h2 id="h27" >Contact Us</h2><br><br>
                <p style="font-size:12px">Get in touch with us...</p>
                <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-phone</v-icon>
                </v-btn> <span style="font-size:12px">Call : +234 9072045997</span> <br>
                <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-gmail</v-icon>
                </v-btn> <span style="font-size:12px">Email : fuoyemarket@gmail.com</span>
              </v-flex>
              
            </v-layout>
          </div>

          <div class="hidden-md-and-up">
            <v-layout row wrap>
              <v-flex md8 lg8 sm12 xs12>
                <div>
                  <img class="rounded-circle" src="../assets/images/logo1.png" style="height:75px; width:60%;">
                </div>
                <br>
                <h2 id="h27" >Contact Us</h2><br>
                <p style="font-size:12px">Follow us on our social platforms.</p>
                <div>
                  <a href="https://www.facebook.com/profile.php?id=100035539115115" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon" > mdi-facebook</v-icon>
                  </v-btn></a>
                  <a href="https://www.facebook.com/profile.php?id=100035539115115" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                  </v-btn></a>
                  <a href="https://twitter.com/fuoyemarket" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-twitter</v-icon>
                  </v-btn></a>
                </div>
              </v-flex>
              <v-flex md4 lg4 sm12 xs12>
                <p style="font-size:12px">Get in touch with us...</p>
                <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-phone</v-icon>
                </v-btn> <span style="font-size:12px">Call : +234 9072045997</span> <br>
                <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-gmail</v-icon>
                </v-btn> <span style="font-size:12px">Email : fuoyemarket@gmail.com</span>
              </v-flex>
              
            </v-layout>
          </div>
        </v-container>
    </section><br><br><br>
  <!-- END CONTACT SECTION  -->

   <!-- END CONTAINER  -->
    </v-container>

  <!-- FOOTER SECTION  -->
  <Footers />
  <!-- END FOOTER SECTION  -->

  </div>
</template>



 <!-- SCRIPT  -->
<script>
import HomeNavbar from '../components/HomeNavbar.vue'
import Footers from '../components/Footers.vue'
import 'animate.css'
export default {
  name: 'home',
  components: {HomeNavbar, Footers},
  data(){
    return{

    }
  }
}
</script>


 <!-- STYLES -->

<style scoped>
#h21{
  color:black;font-weight:bold;font-size:30px;line-height:1.2;
}
#h22{
  color:#673AB7;font-weight:bold;font-size:25px;line-height:1.2;
}
#h23{
  color:#673AB7;font-weight:bold;font-size:20px;line-height:0.7;text-align:center;
}
#h24{
  color:#673AB7;font-weight:bold;font-size:20px;line-height:1.5;text-align:center;
}
#h25{
 color:black;font-weight:bold;font-size:25px;line-height:1.2;text-align:center;
}
#h26{
  color:black;font-weight:bold;font-size:20px;line-height:1.5;text-align:center;
}
#h27{
  color:#673AB7;font-size:18px;
}
#btn1{
  background:#673AB7;color:white;
}
.img1{
  width:100%;height:400px;margin-top:-80px;
}
.img2{
  width:100%;
}
.img3{
width:100%;height:500px;margin-top:-150px;
}
.img5{
width:50%;height:400px;margin-top:-50px;
}
.img4{
width:100%;
}
.img6{
  width:100%;height:500px;margin-top:-200px;
}
.img7{
height:45px;
}
.txt1{
  color:#673AB7;font-weight:bold;font-size:27px;line-height:1.5;
}
.txt2{
  font-size:13px;font-weight:500;
}
#txt3{
  color:#673AB7; font-size:13px;font-weight:bold;
}
#txt4{
color:#673AB7; font-size:12px;font-weight:bold;
}
#txt5{
  font-size:13px;font-weight:normal;
}
#txt6{
  text-decoration:underline;font-size:13px;font-weight:bold;color:#673AB7;
}
#txt7{
  font-size:12px;font-weight:normal;
}
#txt8{
  text-decoration:underline;font-size:11px;font-weight:bold;color:#673AB7;text-align: center;
}
#txt9{
  text-decoration:underline;font-size:15px;font-weight:bold;color:#673AB7;text-align: center;
}
.head1{
  margin-top:200px;
}
.head2{
  margin-top:110px;
}
.items{
  font-size:12px; margin-top:-15px;
}
.item{
  font-size:12px; margin-top:-10px;
}
#icon{
  color:#673AB7;
}
#con{
  margin-top:-40px;
}
#con1{
  margin-top:-100px;
}
#con3{
  margin-top:-100px;
}
#con4{
  margin-top:-100px;
}
</style>
