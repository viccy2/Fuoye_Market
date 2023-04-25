<template>
  <!-- Landing Page Start  -->
  <div class="home white" style="width:100%">

    <!-- NAVBAR SECTION  -->
    <HomeNavbar />
    <!-- END NAVBAR SECTION  -->

      <v-container>

        <!-- HEADER SECTION  -->
        <section class="header" >

          <!-- DISPLAY ON LARGER DEVICES  -->
          <div class="head1 hidden-sm-and-down">
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
                 
                <v-responsive aspect-ratio="1">
                  <v-img
                    src="../assets/images/ad1.jpg" 
                    lazy-src="../assets/images/ad1.jpg"
                    class="rounded-circle-images5"
                
                    style="margin-top:-30px;"

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
                </v-responsive>
            
                </v-flex>
              </v-layout>
            </v-container>
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
                  </p><br>
                <center >
                  <router-link to="/new-account" style="text-decoration:none">
                  <v-btn class="mt-1 text-capitalize" outlined color ="#673AB7">
                    <span style="font-size:12px;">Get Started </span>
                    <v-icon small class="pa-1" id="icon" right style="color:#673AB7">mdi-arrow-right-thick</v-icon>
                  </v-btn>
                  </router-link>
                </center>
              </v-flex><br><br>
 
            </center>

            <v-flex sm12 xs12>
              <center>
                <v-responsive aspect-ratio="1">
                  <v-img
                    src="../assets/images/ad1.jpg" 
                    lazy-src="../assets/images/ad1.jpg"
                    class="rounded-circle-images1"

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
                </v-responsive>
               
              </center> 
            </v-flex>
            </v-layout><br><br>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES -->

        </section><br><br>
      <!-- END HEADER SECTION  -->

    <!--  BODY -->

 
      <!-- GROW SECTION  -->
      <section >
        <v-container>

        <!-- DISPLAY ON LARGE DEVICES  -->
          <div class="hidden-sm-and-down" style="margin-top:-60px;">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex md4 lg4 >
                  <h2 id="h22"><span style="color:black">Grow </span>= Connect + <span style="color:black">Sell</span>.</h2><br>
                  <p id="txt5">
                    We provide a digital marketplace where students can buy and sell goods and services within their campus community.
                    We offer a user-friendly interface, secure transactions, and a wide range of products and services, including textbooks, electronics, clothing, and tutoring services. Our platform facilitates a seamless buying and selling experience for students, enabling them to save time and money while also supporting the local campus economy.
                    We designed a platform for the main pupose of connecting campus students to the sellers around them and sellers with their potential buyers.<br><br>
                    We give the opportunity for sellers based on variety of services, products and goods to render or sell to create sellers account and upload their products to potential buyers. 
                    Also, for users to create account and have medium to add their products and connect with the sellers.
                  </p>
                  <router-link to="new-account" style="text-decoration:none"><p id="txt6">Create account with us ></p></router-link>
                </v-flex>
                <v-flex md2 lg2>

                </v-flex>
                <v-flex md6 lg6>
                  <center>
                  <v-responsive aspect-ratio="1">
                    <v-img
                      src="../assets/images/ad3.jpg" 
                      lazy-src="../assets/images/ad3.jpg"
                      class="rounded-circle-images3"
                      contain
                      rounded-circle
                      style="margin-top:-0px;"
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
                  </v-responsive>
               
              </center> 
                </v-flex>

              </v-layout>
            </v-container><br><br>
          </div>
          <!-- END DISPLAY ON LARGE DEVICES  -->

          <!-- DISPLAY ON SMALL DEVICES -->
          <div class="hidden-md-and-up" style="margin-top:-50px;">
            <v-flex sm12 xs12 id="">
              <h2 id="h23" class="animate__animated animate__fadeIn"><span style="color:black">Grow = </span><br><br> Connect + <br><br> <span style="color:black">Sell.</span></h2><br>
              <center>
              <p id="txt7" class="animate__animated animate__fadeIn">
                We provide a digital marketplace where students can buy and sell goods and services within their campus community.
                We offer a user-friendly interface, secure transactions, and a wide range of products and services, including textbooks, electronics, clothing, and tutoring services. Our platform facilitates a seamless buying and selling experience for students, enabling them to save time and money while also supporting the local campus economy.
                We designed a platform for the main pupose of connecting campus students to the sellers around them and sellers with their potential buyers.              </p>
              <p id="txt7" class="animate__animated animate__fadeIn">
                We give the opportunity for sellers based on variety of services, products and goods to render or sell to create sellers account and upload their products to potential buyers. 
                Also, for users to create account and have medium to add their products and connect with the sellers.              </p>
              </center>
              <router-link to="/dashboard" style="text-decoration:none"><p id="txt8">Create account with us ></p></router-link>
            </v-flex><br><br>

            <v-flex sm12 xs12>
              <center>
                <v-responsive aspect-ratio="1">
                  <v-img
                    src="../assets/images/ad3.jpg" 
                    lazy-src="../assets/images/ad3.jpg"
                    class="rounded-circle-images2"
                    contain
                    rounded-circle
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
                </v-responsive>
               
              </center> 
            </v-flex>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES -->

        </v-container>
      </section>
    <!-- END GROWTH SECTION  -->


    <!-- ACCESS SECTION  -->
      <section>
        <v-container >

          <!-- DISPLAY ON LARGE DEVICES -->
          <div class="hidden-sm-and-down" >
            <v-layout row wrap>
              <v-flex md5 lg5>
                <center>
                <v-responsive aspect-ratio="1">
                  <v-img
                    src="../assets/images/ad2.jpg" 
                    lazy-src="../assets/images/ad2.jpg"
                    class="rounded-circle-images"
                    contain
                    rounded-circle
                    style="margin-top:-100px;"
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
                </v-responsive>
               
              </center> 
              </v-flex>
              <v-flex md2 lg2>

              </v-flex>
              <v-flex md5 lg5 >
                  <h2 id="h22"><span style="color:black">Get access to the</span> Best Sellers <span style="color:black">in the business</span>.</h2><br>
                  <p id="txt5">
                    We offer access to the best sellers in the local community. Our platform provides a reliable and secure marketplace where buyers can easily find and purchase high-quality products and services from trusted sellers within the campus.
                    We curate our seller list to ensure that only the best vendors are featured on our platform, allowing students to shop with confidence and get access to the best deals and offerings available.
                    Search for the best sellers on FuoyeMarket, get the access to sellers around you for your needed products...
                  </p>
                  <router-link to="/dashboard" style="text-decoration:none"><p id="txt6">Create account with us ></p></router-link>
              </v-flex>
      
              </v-layout>
          </div>
          <!-- END DISPLAY ON LARGE DEVICES -->

          <!-- DISPLAY ON SMALL DEVICES  -->
          <div class="hidden-md-and-up">
            <v-flex sm12 xs12 >
              <h2 id="h24"><span style="color:black">Get access to the</span> Best Sellers <span style="color:black">in the business.</span></h2><br>
              <p id="txt7">
                We offer access to the best sellers in the local community. Our platform provides a reliable and secure marketplace where buyers can easily find and purchase high-quality products and services from trusted sellers within the campus.
                We curate our seller list to ensure that only the best vendors are featured on our platform, allowing students to shop with confidence and get access to the best deals and offerings available.
                <br><br>Search for the best sellers on FuoyeMarket, get the access to sellers around you for your needed products...
              </p>
            </v-flex>

            <v-flex sm12 xs12>
              <center>
                <v-responsive aspect-ratio="1">
                  <v-img
                    src="../assets/images/ad2.jpg" 
                    lazy-src="../assets/images/ad2.jpg"
                    class="rounded-circle-images"
                    contain
                    
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
                </v-responsive>
               
              </center> 
            </v-flex>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES  -->

        </v-container>
      </section>

      <!-- END ACCESS SECTION  -->


      <!-- CATEGORIES SECTION  -->
      <section>
        <v-container>

          <!-- DISPLAY ON LARGE DEVICE -->
          <div class="hidden-sm-and-down" >
            <h2 id="h25" >Explore <span style="color:#673AB7">Popular Categories</span></h2><br><br><br>

          <div>
            <v-layout row wrap>
              <v-flex md3 lg3 class="pa-1">
                <center>
                  <v-card
                      class="mx-auto grey lighten-5"
                      max-width="">
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/product-3b.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/n212.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;"> Computing. </h2><br><br>
              </v-card>
                </center> <br><br><br><br>
              
              </v-flex>

              <v-flex md3 lg3 class="pa-1">
                <center>
                  <v-card
                      class="mx-auto grey lighten-5"
                      max-width="">
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/img8.jpg" style="height:70%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img10.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;"> Electronics. </h2><br><br>
                </v-card>
                </center><br><br><br><br>
              </v-flex>

              <v-flex md3 lg3 class="pa-1">
                <center>
                  <v-card
                      class="mx-auto grey lighten-5"
                      max-width="">
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/product-41.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-161.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Fashion.</h2><br><br>
                </v-card>
                </center> <br><br><br><br>
              </v-flex>

              <v-flex md3 lg3 class="pa-1">
                <center>
                  <v-card
                      class="mx-auto grey lighten-5"
                      max-width="">
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/img1.jpg" style="height:70%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img2.jpg" style="height:70%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Gaming.</h2><br><br>
                </v-card>
                </center> <br><br><br><br>
              </v-flex>

              <v-flex md3 lg3 class="pa-1">
                <center>
                  <v-card
                      class="mx-auto grey lighten-5"
                      max-width="">
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/product-3.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-14-1.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Home & Offices.</h2><br><br>
                </v-card>
                </center> 
              </v-flex>

              <v-flex md3 lg3 class="pa-1">
                <center>
                  <v-card
                      class="mx-auto grey lighten-5"
                      max-width="">
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/n33.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img6.jpg" style="height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Phones / Smart watches.  </h2><br><br>
                </v-card>
                </center>  
              </v-flex>

              <v-flex md3 lg3 class="pa-1">
                <center>
                  <v-card
                      class="mx-auto grey lighten-5"
                      max-width="">
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/img3.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img9.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Appliances.  </h2><br><br>
                </v-card>
                </center>  
              </v-flex>

              <v-flex md3 lg3 class="pa-1">
                <center>
                  <v-card
                      class="mx-auto grey lighten-5"
                      max-width="">
                <v-carousel  height="150" cycle hide-delimiters :show-arrows="false">
                  <v-carousel-item >
                    <img src="../assets/images/img4.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/img5.jpg" style="height:80%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Grocery.  </h2><br><br>
                </v-card>
                </center>  
              </v-flex>

            </v-layout>
          </div>
          </div>
          <!-- END DISPLAY ON LARGE DEVICE -->

          <!-- DISPLAY ON SMALL DEVICE -->
          <div class="hidden-md-and-up"><br>
            <h2 id="h26">Explore <span style="color:#673AB7">Popular Categories.</span></h2><br>
            <div>

              <v-container class="animate__animated animate__zoomIn animate__slower">

                  <v-layout row wrap>
                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-3b.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/n212.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                          Computing.
                        </v-card-title>
                    </v-card>

                    </center> <br><br>
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-10.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/img10.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                          Electronics.
                        </v-card-title>
                    </v-card>

                    </center> <br><br>
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/img1.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/img2.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                          Gaming.
                        </v-card-title>
                    </v-card>

                    </center> <br><br>
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-11-1.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/n35.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                          Fashion - Men & Women.
                        </v-card-title>
                    </v-card>

                    </center> <br><br>
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-3.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/n52.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                          Home & Office.
                        </v-card-title>
                    </v-card>

                    </center> <br><br>
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-4.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-51.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                          Sporting.
                        </v-card-title>
                    </v-card>

                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/phone.png"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-90.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                          Smart device.
                        </v-card-title>
                    </v-card>

                    </center> <br><br>
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/img3.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/img9.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                           Appliance - Home.
                        </v-card-title>
                    </v-card>

                    </center> <br><br>
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/img4.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/img5.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                         Grocery.
                        </v-card-title>
                    </v-card>

                    </center> 
                    </v-flex>

                    <v-flex sm6 xs6 class="pa-1">
                    <center>
                    <v-card
                      class="mx-auto grey lighten-5"
                      max-width="344">

                      <v-carousel  height="" cycle hide-delimiters :show-arrows="false">
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-2-1.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                        <v-carousel-item >
                            <v-img
                              src="../assets/images/product-9.jpg"
                              height="110px">
                            </v-img>
                        </v-carousel-item>
                      </v-carousel>
                      <v-card-title style="font-size:10px;color:#673AB7;">
                         Shoe - Men / Women.
                        </v-card-title>
                    </v-card>

                    </center> 
                    </v-flex>

                  </v-layout>
                

              </v-container>

            </div>
          </div>
          <!-- END DISPLAY ON SMALL DEVICES -->
        </v-container>
      </section><br><br><br>
     

      <!-- TESTIMOLIAL  SECTION  -->
      <section>
        <v-container>

          <!-- DISPLAY ON LARGE DEVICES  -->
          <div class="hidden-sm-and-down"><br><br>
            <h2 id="h25">Don’t just take <span style="color:#673AB7"> Our Words</span> for it! </h2><br><br>
            <div>
              <v-layout row wrap>
              <v-flex md4 lg4>
                <v-card class="ma-3 animate__animated animate__fadeIn" color="" height="310" flat>
                  <v-card-text class="font-weight-bold font-italic" style="font-size:13px;color:black">
                     "I love using <span class="font-italic" style="color:#673AB7">FuoyeMarket</span> to sell items to campus students. The platform is user-friendly and makes it easy to list items and communicate with potential buyers. Plus, I love that it's focused on the campus community, so I know that my items are being sold to other students who need them.
                     I've had great success selling on this site and plan to continue using it in the future."
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:#673AB7;font-size:11px">Ayomide (Seller)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex md4 lg4>
                <v-card class="ma-3 animate__animated animate__fadeIn" flat height="310">
                  <v-card-text class="font-weight-bold font-italic" style="font-size:13px;color:black">
                    <span class="font-italic" style="color:#673AB7">"FuoyeMarket</span>is a game-changer for me as a campus student. I used to struggle to find affordable and convenient ways to sell items with my peers, but now I can easily connect with other students on this platform. 
                    It's great to have a place where I can sell everything from textbooks to furniture, and I've saved so much money by using this platform!".
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="../assets/images/as.jpg"></v-img>
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
                    " As a campus student, I was hesitant to buy items from other students online, but <span class="font-italic" style="color:#673AB7">FuoyeMarket</span> changed my mind. The platform is secure and reliable, and I feel confident buying items from other students on the site. I appreciate that the platform is focused on the campus community, so I know that I'm supporting my peers when I make purchases.
                     Overall, I highly recommend this site to other campus students who are looking for a convenient and affordable way to buy and sell items."
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="../assets/images/product-11-2.jpg"> </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:#673AB7;font-size:11px">Ella(Buyer)</v-list-item-title>
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
        <div class="hidden-md-and-up">
          <h2 id="h26">Don’t just take <span style="color:#673AB7"> Our Words</span> for it! </h2><br>
            <div>
              <v-layout row wrap>
              <v-flex sm12 xs12>
                <v-card class="ma-3 animate__animated animate__fadeIn card-with-gradients"  flat >
                  <v-card-text class="font-weight-bold font-italic" style="font-size:12px;color:white">
                    "<span class="font-italic" style="color:#2E3192">"FuoyeMarket</span>is a game-changer for me as a campus student. I used to struggle to find affordable and convenient ways to sell items with my peers, but now I can easily connect with other students on this platform. 
                    It's great to have a place where I can sell everything from textbooks to furniture, and I've saved so much money by using this platform!".
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:white;font-size:11px;">Dan (Seller)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex sm12 xs12>
                <v-card class="ma-3 animate__animated animate__fadeIn card-with-gradients" flat >
                  <v-card-text class="font-weight-bold font-italic" style="font-size:12px;color:white">
                    "I love using <span class="font-italic" style="color:#2E3192">FuoyeMarket</span> to sell items to campus students. The platform is user-friendly and makes it easy to list items and communicate with potential buyers. Plus, I love that it's focused on the campus community, so I know that my items are being sold to other students who need them.
                     I've had great success selling on this site and plan to continue using it in the future."
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="../assets/images/as.jpg">
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:white;font-size:11px">Ciara (Seller)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex sm12 xs12>
                <v-card class="ma-3 animate__animated animate__fadeIn card-with-gradients" flat>
                  <v-card-text class="font-weight-bold font-italic" style="font-size:12px;color:white">
                    " As a campus student, I was hesitant to buy items from other students online, but <span class="font-italic" style="color:#2E3192">FuoyeMarket</span> changed my mind. The platform is secure and reliable, and I feel confident buying items from other students on the site. I appreciate that the platform is focused on the campus community, so I know that I'm supporting my peers when I make purchases.
                     Overall, I highly recommend this site to other campus students who are looking for a convenient and affordable way to buy and sell items."
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img  class="elevation-6" alt=""  src="../assets/images/product-11-2.jpg"> </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-italic" style="color:white;font-size:11px">Ayomide (Buyer)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
          </div>
          <!-- END DISPLAY ON SMALL DEVICE  -->
        </v-container>
      </section><br><br><br>
      <!-- END CATEGORY SECTION  -->

      <!-- TEAM SECTION  -->
      <section id="team">
        <v-container>
          <div class="hidden-sm-and-down">
            <h2 id="h25" >Meet the <span style="color:#673AB7"> Team </span></h2><br><br><br>
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
                  <h2 id="h26" class="font-italic" style="font-size:11px;"> (Co-Founder, CFO)  </h2>
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
          </div><br><br><br><br><br><br>
          </div>
          <!-- END DISPLAY ON LARGE DEVICE -->

          <!-- DISPLAY ON SMALL DEVICE -->
          <div class="hidden-md-and-up">
            <h2 id="h26">Meet the<span style="color:#673AB7"> Team.</span></h2><br><br>
            <div>
            
              <center>
            <v-layout row wrap>
              <v-flex sm6 xs6>
               
                  <v-card class="grey lighten-4 ma-2 animate__animated animate__fadeIn" elevation="2">
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
                  </v-card><br>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Victor Aremu David </h2>
                  <h2 class="font-italic" style="font-size:11px;"> (Founder, Team Lead Engineering)  </h2>
                <br>
              </v-flex>
              <v-flex sm6 xs6>
                <center>
                  <v-card  class="grey lighten-4 ma-2 animate__animated animate__fadeIn" elevation="2">
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
                  </v-card><br>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Olaoluwa David</h2>
                  <h2 class="font-italic" style="font-size:11px;"> (Co-Founder, CFO)  </h2>
                </center>
              </v-flex>
              <v-flex sm6 xs6>
                <v-card class="grey lighten-4 ma-2 animate__animated animate__fadeIn" elevation="2">
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
                  </v-card><br>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Salawu Afolabi </h2>
                  <h2 class="font-italic" style="font-size:11px;"> (Team Lead Development & Engineering (Backend))  </h2>
                <br><br><br>              
              </v-flex>
              <v-flex sm6 xs6>
                <v-card class="grey lighten-4 ma-2 animate__animated animate__fadeIn" elevation="2">
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
                  </v-card><br>
                  <h2 id="h26" style="font-size:14px;color:#673AB7">Afolabi Vivian</h2>
                  <h2 class="font-italic" style="font-size:11px;"> (Team Lead Design )  </h2>
                                
              </v-flex>  
            </v-layout>
              </center>
           
            </div>
        </div>
        <!-- END DISPLAY ON SMALL DEVICE -->
          
        </v-container>
      </section>
      <!-- END TEAM  SECTION  -->


      <!-- PARTNERS SECTION  -->
      <section>
        <v-container>
          <!-- DISPLAY ON LARGE DEVICE -->
          <div class="hidden-sm-and-down">
            <h2 id="h25" style="color:#673AB7">Our Partners</h2><br><br><br>
            <div>
            <v-layout row wrap>
              <v-flex md4 lg4>
                <center>
                <img class="img7 animate__animated animate__fadeIn" src="../assets/images/pel.jpg" style="height:100px;width:30%;">
                </center> 
              </v-flex>
              
              <v-flex md4 lg4>
                <center>
                <img class="img7 animate__animated animate__fadeIn" src="../assets/images/oriamo.png" style="height:100px;width:30%;">
                </center> 
              </v-flex>
              
              <v-flex md4 lg4>
                <center>
                <img class="img7 animate__animated animate__fadeIn" src="../assets/images/ins.jpeg" style="height:100px;width:30%;">
                </center>
              </v-flex>
            </v-layout>
          </div><br><br><br><br><br>
          </div>
        <!-- END DISPLAY ON LARGE DEVICE  -->

        <!-- DISPLAY ON SMALL DEVICES  -->
        <div class="hidden-md-and-up" >
          <h2 id="h26"><span style="color:#673AB7">Our Partners.</span></h2><br><br>
            <div>
            <v-container>
              <center>
            <v-layout row wrap>
              <v-flex sm4 xs4>
               <img class="" src="../assets/images/pel.jpg" style="height:80px;width:80%;">
              </v-flex>
              <v-flex sm4 xs4>
                <img class="" src="../assets/images/oriamo.png" style="height:80px;width:80%;">
              </v-flex>
              <v-flex sm4 xs4>
                <img class="" src="../assets/images/ins.jpeg" style="height:80px;width:80%;">
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
                  <a href="https://www.facebook.com/profile.php?id=100088557773505" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon" > mdi-facebook</v-icon>
                  </v-btn></a>
                  <a href="https://www.instagram.com/fuoye_market/" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                  </v-btn></a>
                  <a href="https://twitter.com/fuoyemarket" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-twitter</v-icon>
                  </v-btn>
                  </a>
                </div>
              </v-flex>
              <v-flex md4 lg4 sm12 xs12>
                <h2 id="h27" >Contact Us</h2><br><br>
                <p style="font-size:12px">Get in touch with us...</p>
                <a href="tel: +234-907-204-5997" style="text-decoration:none">
                <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-phone</v-icon>
                </v-btn></a> <span style="font-size:12px">Call : +234 9072045997</span> <br>
                <a href="mailto: fuoyemarket@gmail.com" style="text-decoration:none">
                <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-gmail</v-icon>
                </v-btn>  </a> <span style="font-size:12px">Email : fuoyemarket@gmail.com</span>
              
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
                  <a href="https://www.facebook.com/profile.php?id=100088557773505" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon" > mdi-facebook</v-icon>
                  </v-btn></a>
                  <a href="https://www.instagram.com/fuoye_market/" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                  </v-btn></a>
                  <a href="https://twitter.com/fuoyemarket" style="text-decoration:none">
                  <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-twitter</v-icon>
                  </v-btn></a>
                </div>
              </v-flex>
              <v-flex md4 lg4 sm12 xs12><br>
                <p style="font-size:12px">Get in touch with us...</p>
                <a href="tel: +234-907-204-5997" style="text-decoration:none">
                <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-phone</v-icon>
                </v-btn></a> <span style="font-size:12px">Call : +234 9072045997</span> <br>
                <a href="mailto: fuoyemarket@gmail.com" style="text-decoration:none">
                <v-btn fab  small color='grey lighten-5 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-gmail</v-icon>
                </v-btn></a> <span style="font-size:12px">Email : fuoyemarket@gmail.com</span>
                
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
.rounded-circle-images1 {
  border-radius: 50%;
  height: 90%;
  width: 90%;
 
}
.rounded-circle-images2 {
  border-radius: 50%;
  height: 90%;
  width: 90%;
  object-fit: cover;
}
.rounded-circle-images3 {
  border-radius: 50%;
  height: 80%;
  width: 80%;
  object-fit: cover;
}
.rounded-circle-images {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.rounded-circle-images5 {
  border-radius: 50%;
  height: 80%;
  width: 100%;
 
}
#h21{
  color:black;font-weight:bold;font-size:32px;line-height:1.2;
}
#h22{
  color:#673AB7;font-weight:bold;font-size:25px;line-height:1.2;
}
#h23{
  color:#673AB7;font-weight:bold;font-size:25px;line-height:0.7;text-align:center;
}
#h24{
  color:#673AB7;font-weight:bold;font-size:25px;line-height:1.5;text-align:center;
}
#h25{
 color:black;font-weight:bold;font-size:25px;line-height:1.5;text-align:center;
}
#h26{
  color:black;font-weight:bold;font-size:25px;line-height:1.5;text-align:center;
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
width:100%;margin-top:-180px;
}
.img5{
width:50%;height:400px;margin-top:-50px;
}
.img4{
width:100%;
height:100%;
}
.img6{
  width:100%;margin-top:-30px;
}
.img7{
height:45px;
}
.txt1{
  color:#673AB7;font-weight:bold;font-size:30px;line-height:1.5;
}
.txt2{
  font-size:13px;font-weight:500;
}
#txt3{
  color:#673AB7; font-size:13px;font-weight:bold;
}
#txt4{
color:white; font-size:10px;font-weight:bold;
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
.card-with-gradients {
  background-image: linear-gradient(135deg, #673AB7 0%, #673AB7 20%);
}
</style>
