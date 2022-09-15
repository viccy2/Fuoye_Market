<template>
  <div class="home white">
    <HomeNavbar />
      <v-container>
        <!-- HEADER SECTION  -->
        <section class="header">
          <div class="head1 hidden-sm-and-down" style="margin-top:200px">
            <v-container>
              <v-layout row wrap>
                <v-flex md5 lg5 >
                  <h2 id="h21" >Connect with your choice Sellers & Buyers.</h2><br>
                  <p class="font-weight-bold text--disabled"> We're here to help you connect with your choice Sellers & Buyers around You. Welcome to FuoyMarket!</p>
                  <v-btn class="rounded-xl" id="btn1" large>Get Started</v-btn>
                </v-flex>
                <v-flex md7 lg7>
                  <center>
                      <img class="rounded-circle img1" transition="fade-transition" src="../assets/images/l.png">
                  </center>
                </v-flex>
              </v-layout>
            </v-container>
          </div>

          <div class="head2 hidden-md-and-up">
            <v-layout row wrap>
              <v-flex sm12 class="ma-3 text-center">
                <h2 class="text-center txt1">Connect with your choice Sellers & Buyers.</h2>
              </v-flex>
              <v-flex sm12>
                <p class="ma-3 text-center txt2">
                    We're here to help you connect with your choice Sellers & Buyers around You. Welcome to FuoyeMarket!
                </p><br>
                <center ><v-btn class="rounded-xl" id="btn1" large>Get Started</v-btn></center>
              </v-flex><br><br><br><br><br><br><br>
              <center>
                      <img class="rounded-circle img2" transition="fade-transition" src="../assets/images/l.png">
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
                <v-btn fab flat small color='grey lighten-2'>
                  <v-icon small class="pa-3" id="icon"> mdi-account</v-icon>
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
                <v-btn fab flat small color='grey lighten-2'>
                  <v-icon small class="pa-3" id="icon"> mdi-account</v-icon>
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
                <v-btn fab flat small color='grey lighten-2'>
                  <v-icon small class="pa-3" id="icon"> mdi-account</v-icon>
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
              <v-card tile flat height='100' class="ma-5" >
                <v-layout>
                  <v-flex sm3>
                     <v-btn fab flat small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-account</v-icon>
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
                     <v-btn fab flat small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-account</v-icon>
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
                     <v-btn fab flat small color='grey lighten-2'>
                      <v-icon small class="pa-3" id="icon"> mdi-account</v-icon>
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
              <h2 id="h22">Grow, Connect, Sell...</h2><br>
                <p id="txt5">
                  We designed a platform for the main pupose of connecting campus students to the sellers around them and sellers with their potential buyers.<br>
                  We give the opportunity for sellers based on variety of services, products and goods to render or sell to create sellers account and upload their products to potential buyers. 
                  Also, for users to create account and have medium to add their products and connect with the sellers.
                </p>
                <p id="txt6">Create Account with Us ></p>
            </v-flex>
            <v-flex md8 lg8>
              <center>
                <img class="rounded-circle img3" transition="fade-transition" src="../assets/images/33.png">
              </center>
            </v-flex>
          </v-layout>
        </div>
        <div class="hidden-md-and-up">
          <v-flex sm12 xs12 id="con1">
              <h2 id="h23">Grow = <br><br> connect + <br><br> sell.</h2><br>
                <p id="txt7">
                  We designed a platform for the main pupose of connecting campus students to the sellers around them and sellers with their potential buyers.<br><br>
                  We give the opportunity for sellers based on variety of services, products and goods to render or sell to create sellers account and upload their products to potential buyers. 
                  Also, for users to create account and have medium to add their products and connect with the sellers.
                </p>
                <p id="txt8">Create Account with Us ></p>
            </v-flex>
            <v-flex sm12 xs12>
              <center>
                  <img class="rounded-circle img4" src="../assets/images/33.png">
              </center>
            </v-flex>
            
        </div>
      </v-container>
    </section><br><br><br><br><br><br><br>


    <section>
      <v-container>
        <div class="hidden-sm-and-down">
          <v-layout row wrap>
            <v-flex md7 lg7>
              <centers>
                <img class="rounded-circle img6" transition="fade-transition" src="../assets/images/31.png">
              </centers>
            </v-flex>
            <v-flex md5 lg5 >
              <h2 id="h22">Get access to the Best sellers in the business.</h2><br>
                <p id="txt5">
                  Search for the best sellers on FuoyeMarket, get the access to sellers around you for your needed products...
                </p>
            </v-flex>
            
          </v-layout>
        </div>
        <div class="hidden-md-and-up">
          <v-flex sm12 xs12 id="con3">
              <h2 id="h24">Get access to the Best sellers in the business.</h2><br>
                <p id="txt7">
                  Search for the best sellers on FuoyeMarket, get the access to sellers around you for your needed products...
                </p>
                
            </v-flex>
            <v-flex sm12 xs12>
              <center>
                  <img class="rounded-circle img4" src="../assets/images/31.png">
              </center>
            </v-flex>
            
        </div>
      </v-container>
    </section><br><br><br><br><br><br><br>

    <section>
      <v-container>
          <div class="hidden-sm-and-down">
            <h2 id="h25">Don’t just take our word for it.</h2><br><br><br><br><br>
            <div>
              <v-layout row wrap>
              <v-flex md4 lg4>
                <v-card class="ma-3" color="#673AB7" dark >
              <v-card-text class="text-h6 font-weight-bold">
              "FuoyeMarket is an awesome platform, I love using it because all sellers on the platform are trusted sellers, a good platform to connect with my choice sellers."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Ayomide (Buyer)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               <v-flex md4 lg4>
                <v-card class="ma-3" color="#673AB7" dark >
              <v-card-text class="text-h6 font-weight-bold">
              "FuoyeMarket is a great platform, easy to use and very awesome. It allows me to have audience for my goods. Indeed a great platform."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Mide (Seller)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               <v-flex md4 lg4>
                <v-card class="ma-3" color="#673AB7" dark >
              <v-card-text class="text-h6 font-weight-bold">
              "FuoyeMarket is an awesome platform, I love using it because all sellers on the platform are trusted sellers, a good platform to connect with my choice sellers."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Ayomide (Buyer)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               
              </v-layout>
            </div>
          </div>   
        <div class="hidden-md-and-up" id="con4">
            <h2 id="h26">Don’t just take our word for it.</h2><br><br>
            <div>
              <v-layout row wrap>
              <v-flex sm12 xs12>
                <v-card class="ma-3" color="#673AB7" dark >
              <v-card-text class="text-h6 font-weight-bold">
              "FuoyeMarket is an awesome platform, I love using it because all sellers on the platform are trusted sellers, a good platform to connect with my choice sellers."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Ayomide (Buyer)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               <v-flex sm12 xs12>
                <v-card class="ma-3" color="#673AB7" dark >
              <v-card-text class="text-h6 font-weight-bold">
              "FuoyeMarket is a great platform, easy to use and very awesome. It allows me to have audience for my goods. Indeed a great platform."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Mide (Seller)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               <v-flex sm12 xs12>
                <v-card class="ma-3" color="#673AB7" dark >
              <v-card-text class="text-h6 font-weight-bold">
              "FuoyeMarket is an awesome platform, I love using it because all sellers on the platform are trusted sellers, a good platform to connect with my choice sellers."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                <v-img  class="elevation-6" alt=""  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Ayomide (Buyer)</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
              </v-card-actions>
             </v-card>
              </v-flex>
               
              </v-layout>
            </div>
          </div><br>
      </v-container>
    </section><br><br><br><br><br><br><br>

    <section>
      <v-container>
          <div class="hidden-sm-and-down">
            <h2 id="h25">Our Partners</h2><br><br><br><br><br>
            <div>
            <v-layout row wrap>
              <v-flex md3 lg3>
                <img class="img7" src="../assets/images/pel.jpg">
              </v-flex>
              <v-flex md3 lg3>
                <img class="img7 grey" src="../assets/images/vad1.png">
              </v-flex>
              <v-flex md3 lg3>
                <img class="rounded-circle img7" src="https://doteightplus.com/images/dot.svg">
              </v-flex>
              <v-flex md3 lg3>
                <img class="rounded-circle img7" src="https://dotpedia.com.ng/images/cover.png">
              </v-flex>
            </v-layout>
          </div>
          </div>
          
        <div class="hidden-md-and-up" id="con4">
          <h2 id="h26">Our Partners.</h2><br><br><br><br><br>
            <div>
            <v-container>
            <v-layout row wrap>
              <v-flex sm6 xs6>
                <img class="rounded-lg img5" src="../assets/images/pel.jpg">
              </v-flex>
              <v-flex sm6 xs6>
                <img class=" rounded-lg img5 grey " src="../assets/images/vad1.png" style="float:right">
              </v-flex><br><br><br><br><br>
              <v-flex sm6 xs6>
                <img class="rounded-lg img5" src="https://doteightplus.com/images/dot.svg">
              </v-flex>
              <v-flex sm6 xs6>
                <img class="rounded-lg img5" src="https://dotpedia.com.ng/images/cover.png" style="float:right">
              </v-flex>
            </v-layout>
            </v-container>
            </div>
        </div>
          
      </v-container>
    </section><br><br><br><br><br><br><br>





    </v-container>
    
    


  </div>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar.vue'
export default {
  name: 'home',
  components: {HomeNavbar},
  data(){
     
 
  }
}
</script>
<style scoped>
#h21{
  color:#673AB7;font-weight:bold;font-size:40px;line-height:1.2;
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
 color:#673AB7;font-weight:bold;font-size:33px;line-height:1.2;text-align:center;
}
#h26{
  color:#673AB7;font-weight:bold;font-size:26px;line-height:1.5;text-align:center;
}
#btn1{
  background:#673AB7;color:white;
}
.img1{
  width:550px;height:400px;margin-top:-50px;
}
.img2{
  width:100%;height:300px;
}
.img3{
width:800px;height:400px;margin-top:-50px;
}
.img5{
width:600px;height:400px;margin-top:-50px;
}
.img4{
width:100%;height:250px;
}
.img5{
width:80%;height:80px;
}
.img6{
width:600px;height:400px;margin-top:-50px;
}
.img7{
width:50%;height:80px;
}
.txt1{
  color:#673AB7;font-weight:bold;font-size:27px;line-height:1.5;
}
.txt2{
  font-size:17px;font-weight:500;
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
  margin-top:120px;
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
