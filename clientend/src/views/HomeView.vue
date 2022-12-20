<template>
  <div class="home white" style="width:100%">
    <HomeNavbar />
      <v-container>
        <!-- HEADER SECTION  -->
        <section class="header">
          <div class="head1 hidden-sm-and-down" style="margin-top:200px">
            <v-container>
              <v-layout row wrap>
                <v-flex md5 lg5 >
                  <h2 id="h21" class="animate_animated animate_fadeInLeft"><span style="color:#673AB7">Connect</span> with your choice <span style="color:#673AB7">Sellers & Buyers.</span></h2><br>
                  <p class="font-weight-bold text--black"> We're here to help you <span style="color:#673AB7">connect</span> with your choice <span style="color:#673AB7">Sellers & Buyers</span> around You. Welcome to FuoyeMarket!</p>
                  <v-btn class="rounded-xl" id="btn1" large>Get Started</v-btn>
                </v-flex>
                <v-flex md7 lg7>
                  <center>
                      <img class="rounded-circle img1 animated bounce" transition="fade-transition" src="../assets/images/17.jpg">
                  </center>
                </v-flex>
              </v-layout>
            </v-container>
          </div>

          <div class="head2 hidden-md-and-up">
            <v-layout row wrap>
              <center>
              <v-flex sm12 class="ma-3 text-center">
                <h2 class="text-center txt1">Connect <span style="color:black">with your choice</span> Sellers & Buyers.</h2>
              </v-flex>
              <v-flex sm12>
                <p class="ma-3 text-center txt2 text--black">
                    We're here to help you <span style="color:#673AB7">connect</span> with your choice <span style="color:#673AB7">Sellers & Buyers</span> around You. Welcome to FuoyeMarket!
                </p><br>
                <center ><v-btn class="rounded-xl" id="btn1" large>Get Started</v-btn></center>
              </v-flex><br>
              <center>
                      <img class="rounded-circle img2" transition="fade-transition" src="../assets/images/17.jpg">
              </center>
            </center>
            </v-layout>
          </div>
        </section><br><br>
      <!-- HEADER ENDS -->

    <!-- SECTION BODY -->
      <section class="body">
        <v-container>
        <!-- DISPLAY ON LARGE DEVICES -->

        <div class="body1 hidden-sm-and-down">
         <v-layout row wrap>
            <v-flex md4 lg4 sm12 xs12>
              <v-card tile flat height='100' class="ma-5" >
                <v-btn fab small color='grey lighten-2'>
                  <v-icon small class="pa-3" id="icon"> mdi-account-group-outline</v-icon>
                </v-btn>
                <br><br>
                <v-card-text class="py-0">
                  <div class="items " id="txt3">
                     Connect with top Sellers around you.
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md4 lg4 sm12 xs12>
              <v-card tile flat height='100' class="ma-5" >
                <v-btn fab  small color='grey lighten-2'>
                  <v-icon small class="pa-3" id="icon"> mdi-account-key-outline</v-icon>
                </v-btn>
                <br><br>
                <v-card-text class="py-0">
                  <div class="items " id="txt3">
                     Get access to unlimited choice products.
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md4 lg4 sm12 xs12>
              <v-card tile flat height='100' class="ma-5" >
                <v-btn fab  small color='grey lighten-2'>
                  <v-icon small class="pa-3" id="icon"> mdi-cart-check</v-icon>
                </v-btn>
                <br><br>
                <v-card-text class="py-0">
                  <div class="items " id="txt3">
                     Create seller's account, get access to showcase your products.
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
        </v-layout>
      </div>

        <!-- ON SMALL MOBILE DEVICES -->

        <div class="body2 hidden-md-and-up">
          <v-layout row wrap>
            <v-flex sm12 xs12>
              <v-card tile flat height='100' class="ma-5">
                <v-layout>
                  <v-flex sm3>
                     <v-btn fab  small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-account-group-outline</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex sm9>
                    <v-card-text class="py-0">
                      <div class="item pa-3" id="txt4">
                        Connect with top Sellers around you.
                      </div>
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
           <v-flex sm12 xs12 id="con">
              <v-card tile flat height='100' class="ma-5" >
                <v-layout>
                  <v-flex sm3>
                     <v-btn fab small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-account-key-outline</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex sm9>
                    <v-card-text class="py-0">
                      <div class="item pa-3" id="txt4">
                        Get access to unlimited choice products.
                      </div>
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex sm12 xs12 id="con">
              <v-card tile flat height='100' class="ma-5" >
                <v-layout>
                  <v-flex sm3>
                     <v-btn fab  small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-cart-check</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex sm9>
                    <v-card-text class="py-0">
                      <div class="item pa-3" id="txt4">
                        Create seller's account, get access to showcase your products.
                      </div>
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </section><br><br><br><br><br><br><br>

    <section>
      <v-container>
        <div class="hidden-sm-and-down">
          <v-layout row wrap>
            <v-flex md4 lg4 >
              <h2 id="h22"><span style="color:black">Grow </span>= Connect + <span style="color:black">Sell</span>.</h2><br>
                <p id="txt5">
                  We designed a platform for the main pupose of connecting campus students to the sellers around them and sellers with their potential buyers.<br>
                  We give the opportunity for sellers based on variety of services, products and goods to render or sell to create sellers account and upload their products to potential buyers. 
                  Also, for users to create account and have medium to add their products and connect with the sellers.
                </p>
                <p id="txt6">Create Account with Us ></p>
            </v-flex>
            <v-flex md8 lg8>
              <center>
                <img class="rounded-circle img3" transition="fade-transition" src="../assets/images/12.jpg">
              </center>
            </v-flex>
          </v-layout>
        </div>
        <div class="hidden-md-and-up">
          <v-flex sm12 xs12 id="con1">
              <h2 id="h23"><span style="color:black">Grow = </span><br><br> connect + <br><br> <span style="color:black">sell.</span></h2><br>
                <p id="txt7">
                  We designed a platform for the main pupose of connecting campus students to the sellers around them and sellers with their potential buyers.<br><br>
                  We give the opportunity for sellers based on variety of services, products and goods to render or sell to create sellers account and upload their products to potential buyers. 
                  Also, for users to create account and have medium to add their products and connect with the sellers.
                </p>
                <p id="txt8">Create Account with Us ></p>
            </v-flex>
            <v-flex sm12 xs12>
              <center>
                  <img class="rounded-circle img4" src="../assets/images/12.jpg">
              </center>
            </v-flex>
            
        </div>
      </v-container>
    </section><br><br><br><br><br><br><br><br>


    <section>
      <v-container>
        <div class="hidden-sm-and-down">
          <v-layout row wrap>
            <v-flex md7 lg7>
              <div>
                <img class="rounded-circle img6" transition="fade-transition" src="../assets/images/13.jpg">
              </div>
            </v-flex>
            <v-flex md5 lg5 >
              <h2 id="h22"><span style="color:black">Get access to the</span> Best sellers <span style="color:black">in the business</span>.</h2><br>
                <p id="txt5">
                  Search for the best sellers on FuoyeMarket, get the access to sellers around you for your needed products...
                </p>
            </v-flex>
            
          </v-layout>
        </div>
        <div class="hidden-md-and-up">
          <v-flex sm12 xs12 id="con3">
              <h2 id="h24"><span style="color:black">Get access to the</span> Best sellers <span style="color:black">in the business.</span></h2><br>
                <p id="txt7">
                  Search for the best sellers on FuoyeMarket, get the access to sellers around you for your needed products...
                </p>
                
            </v-flex>
            <v-flex sm12 xs12>
              <center>
                  <img class="rounded-circle img4" src="../assets/images/13.jpg" style="margin-top:-20px;">
              </center>
            </v-flex>
            
        </div>
      </v-container>
    </section><br><br><br><br><br><br><br>

    <section>
      <v-container>
          <div class="hidden-sm-and-down">
            <h2 id="h25" >Explore <span style="color:#673AB7">Popular Categories</span></h2><br><br><br><br><br>
            <div>
            <v-layout row wrap>
              <v-flex md2 lg2>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-5.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-7.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;"> Electronics </h2>
                </center> 
              </v-flex><br>
              <v-flex md2 lg2>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-2-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-2-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Male clothing / Accessories </h2>
                </center>  
              </v-flex>
              <v-flex md2 lg2>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-8-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-8-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;"> Female Clothing / Accessories </h2>
                </center>  
              </v-flex>
              <v-flex md2 lg2>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-6.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-8.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Devices / Gadgets</h2>
                </center> 
              </v-flex>
              <v-flex md2 lg2>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/3.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/7.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;"> Computing Devices / Accessories</h2>
                </center> 
              </v-flex>
               <v-flex md2 lg2>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-3.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-2-22.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel><br>
                <h2 id="h26" style="font-size:11px;">Furnitures / Home appliances </h2>
                </center>  
              </v-flex>
            </v-layout>
          </div><br><br><br><br><br>
          </div>
          
        <div class="hidden-md-and-up" id="con4">
          <h2 id="h26">Explore <span style="color:#673AB7">Popular Categories.</span></h2><br><br><br>
            <div>
            <v-container>
              <center>
            <v-layout row wrap>
              <v-flex sm6 xs6>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-5.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-7.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel>
                <h2 id="h26" style="font-size:11px;"> Electronics </h2>
                </center> 
              </v-flex><br>
              <v-flex sm6 xs6>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-6.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-8.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel>
                <h2 id="h26" style="font-size:11px;">Devices / Gadgets</h2>
                </center> 
              </v-flex>
              <v-flex sm6 xs6>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-2-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-2-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel>
                <h2 id="h26" style="font-size:11px;">Male clothing / Accessories </h2>
                </center>
              </v-flex><br>
              <v-flex sm6 xs6>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-8-1.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-8-2.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel>
                <h2 id="h26" style="font-size:11px;"> Female Clothing / Accessories </h2>
                </center>
              </v-flex><br>
              <v-flex sm6 xs6>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/3.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/7.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel>
                <h2 id="h26" style="font-size:11px;"> Computing Devices / Accessories</h2>
                </center> 
              </v-flex><br>
              <v-flex sm6 xs6>
                <center>
                <v-carousel  height="150" cycle hide-delimiters show-arrows-on-hover>
                  <v-carousel-item >
                    <img src="../assets/images/product-3.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                  <v-carousel-item >
                    <img src="../assets/images/product-2-22.jpg" style="width:80%;height:100%;margin-top:px;" >
                  </v-carousel-item>
                </v-carousel>
                <h2 id="h26" style="font-size:11px;">Furnitures / Home appliances </h2>
                </center> 
              </v-flex><br><br><br><br>
              
            </v-layout><br><br><br>
              </center>
            </v-container><br><br><br><br>
            </div>
        </div>
          
      </v-container>
    </section>

     <section id="team">
      <v-container>
          <div class="hidden-sm-and-down">
            <h2 id="h25" >Meet the <span style="color:#673AB7"> Team </span></h2><br><br><br><br><br>
            <div>
            <v-layout row wrap>
              <v-flex md6 lg6>
                <center>
                  <v-card flat class=" ma-1" >
                    <v-img src="../assets/images/po.jpg" style="width:200px;height:200px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">Victor Aremu David </h2>
                  <h2 id="h26" style="font-size:14px;"> (Founder, Team Lead Engineering)  </h2>
                </center>
              </v-flex>
              <v-flex md6 lg6>
                <center>
                  <v-card flat class=" ma-1" >
                    <v-img src="../assets/images/23.jpeg" style="width:200px;height:200px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">David</h2>
                  <h2 id="h26" style="font-size:14px;"> (Co-Founder, Chief Finacial Officer)  </h2>
                </center>             
              </v-flex>
            </v-layout><br><br><br>
            <v-layout row wrap>
              <v-flex md4 lg4>
                <center>
                  <v-card flat class=" ma-1" >
                    <v-img src="../assets/images/afolabisalawu.jpg" style="width:200px;height:200px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">Salawu Afolabi </h2>
                  <h2 id="h26" style="font-size:14px;"> (Team Lead Development & Engineering (Backend))  </h2>
                </center>
              </v-flex>
              <v-flex md4 lg4>
                <center>
                  <v-card flat class=" ma-1" >
                    <v-img src="../assets/images/pel.jpg" style="width:200px;height:200px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">Salawu Afolabi </h2>
                  <h2 id="h26" style="font-size:14px;"> (Team Lead Strategy, Planning & People)  </h2>
                </center>             
              </v-flex>
              <v-flex md4 lg4>
                <center>
                  <v-card flat class=" ma-1" >
                    <v-img src="../assets/images/pel.jpg" style="width:200px;height:200px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">Salawu Afolabi </h2>
                  <h2 id="h26" style="font-size:14px;"> (Team Lead Marketing)  </h2>
                </center>             
              </v-flex>
            </v-layout><br><br><br>
          </div><br><br><br><br><br>
          </div>
          
        <div class="hidden-md-and-up" id="con4">
          <h2 id="h26">Meet the<span style="color:#673AB7"> Team.</span></h2><br><br><br>
            <div>
            <v-container>
              <center>
            <v-layout row wrap>
              <v-flex sm6 xs6>
               
                  <v-card flat class=" ma-1" >
                    <v-img class="rounded-lg" src="../assets/images/po.jpg" style="width:200px;height:150px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">Victor Aremu David </h2>
                  <h2 id="h26" style="font-size:14px;"> (Founder, Team Lead Engineering)  </h2>
                
                <br><br><br>
              </v-flex>
              <v-flex sm6 xs6>
                <center>
                  <v-card flat class=" ma-1" >
                    <v-img class="rounded-lg" src="../assets/images/23.jpeg" style="width:200px;height:150px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">David</h2>
                  <h2 id="h26" style="font-size:14px;"> (Co-Founder, Chief Finacial Officer)  </h2>
                </center>
                <br><br><br>
              </v-flex>
              <v-flex sm6 xs6>
                <v-card flat class=" ma-1" >
                    <v-img class="rounded-lg" src="../assets/images/afolabisalawu.jpg" style="width:200px;height:150px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">Salawu Afolabi </h2>
                  <h2 id="h26" style="font-size:14px;"> (Team Lead Development & Engineering (Backend))  </h2>
                <br><br><br>              
              </v-flex>
              <v-flex sm6 xs6>
                <v-card flat class=" ma-1" >
                    <v-img class="rounded-lg" src="../assets/images/23.jpeg" style="width:200px;height:150px;"></v-img>
                  </v-card>
                  <h2 id="h26" style="font-size:15px;color:#673AB7">Victor Aremu David </h2>
                  <h2 id="h26" style="font-size:14px;"> (Team Lead Strategy, Planning & People)  </h2>
                <br><br><br>                 
              </v-flex>  
            </v-layout><br><br><br>
              </center>
            </v-container>
            </div>
        </div>
          
      </v-container>
    </section>

    <section>
      <v-container>
          <div class="hidden-sm-and-down">
              <h2 id="h25">Don’t just take <span style="color:#673AB7"> our word</span> for it! </h2><br><br><br><br><br>
            <div>
              <v-layout row wrap>
              <v-flex md4 lg4>
              <v-card class="ma-3" color="" height="310" flat>
              <v-card-text class="font-weight-bold" style="font-size:15px;color:black">
              "<span style="color:#673AB7">FuoyeMarket</span> is an awesome platform, I love using it because all <span style="color:#673AB7">sellers</span> on the platform are trusted <span style="color:#673AB7">sellers,</span> a good platform to <span style="color:#673AB7">connect</span> with my choice <span style="color:#673AB7">sellers.</span>"
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title style="color:#673AB7">Ayomide (Buyer)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               <v-flex md4 lg4>
                <v-card class="ma-3" flat height="310">
               <v-card-text class="font-weight-bold" style="font-size:15px;color:black">
              <span style="color:#673AB7">"FuoyeMarket</span> is a great platform, easy to use and very awesome. It allows me to have audience for my goods. Indeed a great platform."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title style="color:#673AB7">Mide (Seller)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               <v-flex md4 lg4>
                <v-card class="ma-3" flat height="310">
              <v-card-text class="font-weight-bold" style="font-size:15px;color:black">
              "<span style="color:#673AB7">FuoyeMarket</span> is an awesome platform, <span style="color:#673AB7">very easy to use, </span> a good platform to <span style="color:#673AB7">connect</span> with my choice <span style="color:#673AB7">sellers.</span>"
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title style="color:#673AB7">Ayomide (Buyer)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               
              </v-layout>
            </div>
          </div>   
        <div class="hidden-md-and-up" id="con4">
            <h2 id="h26">Don’t just take <span style="color:#673AB7"> our word</span> for it! </h2><br><br>
            <div>
              <v-layout row wrap>
              <v-flex sm12 xs12>
                <v-card class="ma-3" flat >
              <v-card-text class="font-weight-bold" style="font-size:15px;color:black">
              "<span style="color:#673AB7">FuoyeMarket</span> is an awesome platform, I love using it because all <span style="color:#673AB7">sellers</span> on the platform are trusted <span style="color:#673AB7">sellers,</span> a good platform to <span style="color:#673AB7">connect</span> with my choice <span style="color:#673AB7">sellers.</span>"
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title style="color:#673AB7;">Ayomide (Buyer)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               <v-flex sm12 xs12>
                <v-card class="ma-3" flat >
              <v-card-text class="font-weight-bold" style="font-size:15px;color:black">
              <span style="color:#673AB7">"FuoyeMarket</span> is a great platform, easy to use and very awesome. It allows me to have audience for my goods. Indeed a great platform."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title style="color:#673AB7">Mide (Seller)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               <v-flex sm12 xs12>
                <v-card class="ma-3" flat>
              <v-card-text class="font-weight-bold" style="font-size:15px;color:black">
              "<span style="color:#673AB7">FuoyeMarket</span> is an awesome platform, <span style="color:#673AB7">very easy to use, </span> a good platform to <span style="color:#673AB7">connect</span> with my choice <span style="color:#673AB7">sellers.</span>"
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title style="color:#673AB7">Ayomide (Buyer)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               
              </v-layout>
            </div><br><br><br><br><br><br>
          </div>
      </v-container>
    </section>

    <section>
      <v-container>
          <div class="hidden-sm-and-down">
            <h2 id="h25" style="color:#673AB7">Our Partners</h2><br><br><br><br><br>
            <div>
            <v-layout row wrap>
              <v-flex md4 lg4>
                <center>
                <img class="img7 " src="../assets/images/pel.jpg" >
                </center> 
              </v-flex>
              <v-flex md4 lg4>
                <center>
                <img class="img7  grey" src="../assets/images/vad1.png" >
                </center> 
              </v-flex>
              <v-flex md4 lg4>
                <center>
                <img class="img7 grey" src="https://dothost.com.ng/img/white.svg">
                </center>
              </v-flex>
            </v-layout>
          </div><br><br><br><br><br>
          </div>
          
        <div class="hidden-md-and-up" id="con4">
          <h2 id="h26"><span style="color:#673AB7">Our Partners.</span></h2><br><br><br>
            <div>
            <v-container>
              <center>
            <v-layout row wrap>
              <v-flex sm4 xs4>
                <img class="" src="../assets/images/pel.jpg" style="height:70px; width:70%;">
              </v-flex>
              <v-flex sm4 xs4>
               <img class="" src="../assets/images/pel.jpg" style="height:70px; width:70%;">
              </v-flex>
              <v-flex sm4 xs4>
                <img class="" src="../assets/images/pel.jpg" style="height:70px; width:70%;">
              </v-flex>
             </v-layout><br><br><br>
              </center>
            </v-container>
            </div>
        </div>
          
      </v-container>
    </section>

    


    <section>
      <v-container>
          <div class="">
            <v-layout row wrap>
              <v-flex md8 lg8 sm12 xs12>
                <div>
                  <img class="hidden-sm-and-down" src="../assets/images/logo1.png" style="height:80px; width:30%;">
                </div>
                <div>
                  <img class="hidden-md-and-up" src="../assets/images/logo1.png" style="height:90px; width:80%;">
                </div>
                <!-- <h2 id="h27">FuoyeMarket</h2><br> -->
                <p>Follow us on our social platforms.</p>
                <div>
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-instagram</v-icon>
                  </v-btn>
                  <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-whatsapp</v-icon>
                  </v-btn>
                </div>
              </v-flex>
              <v-flex md4 lg4 sm12 xs12>
                <h2 id="h27">Contact Us</h2><br>
                <p>Get in touch with us...</p>
                <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-phone</v-icon>
                </v-btn> Call : +234 9072045997 <br>
                <v-btn fab  small color='grey lighten-2 ma-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-gmail</v-icon>
                </v-btn> Email : fuoyemarket@gmail.com
              </v-flex>
              
            </v-layout>
          </div>
        </v-container>
    </section><br><br><br>


    </v-container>
    
    

  <Footers />
  </div>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar.vue'
import Footers from '../components/Footers.vue'
export default {
  name: 'home',
  components: {HomeNavbar, Footers},
  data(){
    return{

    }
  }
}
</script>
<style scoped>
#h21{
  color:black;font-weight:bold;font-size:40px;line-height:1.2;
}
#h22{
  color:#673AB7;font-weight:bold;font-size:33px;line-height:1.2;
}
#h23{
  color:#673AB7;font-weight:bold;font-size:26px;line-height:0.7;text-align:center;
}
#h24{
  color:#673AB7;font-weight:bold;font-size:26px;line-height:1.5;text-align:center;
}
#h25{
 color:black;font-weight:bold;font-size:33px;line-height:1.2;text-align:center;
}
#h26{
  color:black;font-weight:bold;font-size:26px;line-height:1.5;text-align:center;
}
#h27{
  color:#673AB7;
}
#btn1{
  background:#673AB7;color:white;
}
.img1{
  width:100%;height:400px;margin-top:-50px;
}
.img2{
  width:100%;height:250px;
}
.img3{
width:100%;height:500px;margin-top:-150px;
}
.img5{
width:50%;height:400px;margin-top:-50px;
}
.img4{
width:100%;height:300px;
}
.img5{
width:80%;height:80px;
}
.img6{
width:100%;height:600px;margin-top:-250px;
}
.img7{
width:30%;height:75px;
}
.txt1{
  color:#673AB7;font-weight:bold;font-size:27px;line-height:1.5;
}
.txt2{
  font-size:15px;font-weight:500;
}
#txt3{
  color:#673AB7; font-size:13px;font-weight:bold;
}
#txt4{
color:#673AB7; font-size:15px;font-weight:bold;
}
#txt5{
  font-size:15px;font-weight:normal;
}
#txt6{
  text-decoration:underline;font-size:15px;font-weight:bold;color:#673AB7;
}
#txt7{
  font-size:14px;font-weight:normal;
}
#txt8{
  text-decoration:underline;font-size:15px;font-weight:bold;color:#673AB7;text-align: center;
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
