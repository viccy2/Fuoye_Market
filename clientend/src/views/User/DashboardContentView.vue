<template>
    <div class="dashboard grey lighten-2">
       
        <!-- PROFILE SECTION -->
      <section>     
        <!-- DISPLAY ON LARGE DEVICE --> 
        
         <!-- END DISPLAY ON LARGE DEVICE -->

         <!-- DISPLAY ON SMALL DEVICE -->
        <div class="hidden-md-and-up">
            <v-card flat class="grey lighten-4" style="margin-top:-240px;">
                <v-container><br>
            <v-card class="mx-auto"  flat  height="145" color="#673AB7" >
                
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
                                Welcome back, <br><span class="font-weight-bold" style="color:white;font-size:13px;"> {{ Activeuser }} </span>
                            </div>
                            <br>
                            <v-btn @click="goProfile" class="text-capitalize animate__animated animate__bounceIn animate__slower" small  outlined style="color:whitesmoke;font-size:11px;">My Profile</v-btn>
                            </v-col>
                        </v-row>
                    </v-list-item-content>    
                </v-list-item>
           
            </v-card>
            </v-container>
            </v-card>
     
        </div><br>
         <!-- END DISPLAY ON SMALL DEVICE -->

        </section>
        <!-- END PROFILE SECTION  -->

            
        <!-- TOP SELLER SECTION -->
        <div class="top-seller">
        <!-- DISPLAY ON LARGEDEVICE -->
            <div class="hidden-sm-and-down">
                <v-container  style="margin-top:-220px;"><p style="font-weight:bold;font-size:13px;margin-top:-20px;"> Top Sellers : </p></v-container> 
                <v-card flat elevation='' >
                    <v-container fluid>
                         
                        <v-row class="" style="margin-top:0px;">
                    <v-col 
                        v-for="(item, index) in topseller" :key="index"
                        class = "d-flex child-flex"
                        cols="3"
                    
                    >
                    <center>
                        <v-container fluid>
                    <template >                                    
                        <v-card
                      
                        class="mx-auto grey lighten-4"
                        :to="{name : 'seller-page', params : { id : item.id }}"
                      
                        >
                        <v-img
                            height="200"
                            :src="`https://fuoyemarket.intellicsolutions.org/company_images/${item.company_logo}`"                                  
                            :lazy-src="`https://fuoyemarket.intellicsolutions.org/company_images/${item.company_logo}`"              
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
                        <v-card-title style="font-size:12px;color:#673AB7;" >
                                {{item.username}}{{item.username}}
                            </v-card-title>
            
                        </v-card>
                    </template></v-container>
                    </center>
                </v-col>
                </v-row>
                </v-container>  
                </v-card>
            </div>
            <!-- END DISPLAY ON LARGE DEVICE -->

            <!-- DISPLAY ON SMALL DEVICE -->
            <div class="hidden-md-and-up">
                <v-container><p style="font-weight:bold;font-size:14px;margin-top:-20px;"> Top Sellers : </p></v-container> 
                <v-card flat >
        
                    <v-row class="" style="margin-top:-15px;">
                    <v-col 
                        v-for="(item, index) in topseller" :key="index"
                        class = ""
                        cols="3"
                    
                    >
                    <center>
                                           
                        <v-card flat
                        :disabled="loading"
                        class="grey lighten-4"
                        :to="{name : 'seller-page', params : { id : item.id }}"
                        style="width:100%;"
                        >
                        
                        <v-img
                            :src="`https://fuoyemarket.intellicsolutions.org/company_images/${item.company_logo}`"                                  
                            :lazy-src="`https://fuoyemarket.intellicsolutions.org/company_images/${item.company_logo}`"  
                            
                            class="pa-1 grey lighten-2"
                            style="height:50px;width:100%;"
                            
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
                      
                        <div class="items text-capitalize" style="font-size:11px;line-height: 1.2;margin-top:10px;">
                            {{item.company_name}}
                         </div>
                       
                       
                   
                    </center>

                </v-col>
                </v-row>
            
            </v-card>
            </div><br>
        <!-- END DISPLAY ON SMALL DEVICE -->
                
        </div>
        <!-- END TOP SELLER SECTION -->


 <!-- POPULAR CATEGORY SECTION -->

 <div class="featured-products">
    <v-container><p style="font-weight:bold;font-size:14px;margin-top:-0px;"> Popular Category : </p></v-container>
        <v-card flat elevation=''>
   
        <!-- DISPLAY ON LARGE DEVICE -->
            <div class="hidden-sm-and-down">
                <v-row class="pa-2">
                    <v-col 
                        v-for="(item, i) in category" :key="i" :to="item.to" router
                        class = "d-flex child-flex"
                        cols="4"
                    >
                        <center>
                                                            
                            <v-card
                                class="mx-auto "
                                max-width="300"
                            >
                                <v-img
                                :src="require(`@/assets/images/${item.img}`)"
                                height="200px"
                                ></v-img>

                                <v-card-title style="font-size:14px;">
                                    {{item.title}}
                                </v-card-title>

                            </v-card>
                            
                        </center>
                    </v-col>
                </v-row><br><br>
             
            </div>
        <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
            <div class="hidden-md-and-up">
                <v-row class="pa-2" style="margin-top:-13px;">
                    <v-col 
                        v-for="(item, i) in category" :key="i" :to="item.to" router
                        class = "d-flex child-flex"
                        cols="4"
                    >
                        <center>
                                                                
                            <v-card
                                class="mx-auto grey lighten-5"
                                max-width="300"
                            >
                                <v-img
                                :src="require(`@/assets/images/${item.img}`)"
                                height="90px"
                                style="width:100%"
                                
                                ></v-img>

                            </v-card>
                            <span style="font-size:10px;">{{item.title}}</span>
                                
                        </center>
                    </v-col>
                </v-row><br>
             
            </div>
        <!-- END DISPLAY ON SMALL DEVICE -->
               
            
            </v-card>
        </div>
        <!-- END POPULAR CATEGORY SECTION -->


        <!-- FEATURED PRODUCTS SECTION -->

            <!-- <div class="featured-products">
                <v-card flat elevation=''>
                    <v-container fluid>
                    <v-card-title style="font-weight:bold;font-size:13px;margin-top:0px;"> Popular Brand : </v-card-title> -->
                

        <!-- DISPLAY ON LARGE DEVICE -->
            <!-- <div class="hidden-sm-and-down">
                <v-row class="pa-2">
                    <v-col 
                        v-for="(item, i) in brand" :key="i" :to="item.to" router
                        class = "d-flex child-flex"
                        cols="4"
                    >
                        <center>
                                                            
                            <v-card
                                class="mx-auto "
                                max-width="300"
                            >
                                <v-img
                                :src="require(`@/assets/images/${item.img}`)"
                                height="200px"
                                ></v-img>

                                <v-card-title style="font-size:14px;">
                                    {{item.title}}
                                </v-card-title>

                            </v-card>
                            
                        </center>
                    </v-col>
                </v-row><br><br>
             
            </div> -->
        <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
            <!-- <div class="hidden-md-and-up">
                <v-row class="pa-2">
                    <v-col 
                        v-for="(item, i) in brand" :key="i" :to="item.to" router
                        class = "d-flex child-flex"
                        cols="4"
                    >
                        <center>
                                                                
                            <v-card
                                class="mx-auto grey lighten-5"
                                max-width="300"
                            >
                                <v-img
                                :src="require(`@/assets/images/${item.img}`)"
                                height="90px"
                                style="width:100%"
                                
                                ></v-img>

                            </v-card>
                            <span style="font-size:10px;">{{item.title}}</span>
                        </center>
                    </v-col>
                </v-row>
             
            </div> -->
        <!-- END DISPLAY ON SMALL DEVICE -->
               
            <!-- </v-container>
            </v-card>
        </div> -->
        <!-- END TOP FEATURED PRODUCTS SECTION -->

 <!-- NEW PRODUCTS SECTION -->

 <div class="featured-products">
    <v-container><p style="font-weight:bold;font-size:14px;margin-top:-0px;"> New Products : </p></v-container>
    <v-card flat elevation=''>

        <!-- DISPLAY ON LARGE DEVICE -->
            <div class="hidden-sm-and-down">
                <v-row class="pa-2">
                    <v-col 
                        v-for="(product, i) in newProducts" :key="i" :to="product.to" router
                        class = "d-flex child-flex"
                        cols="3"
                    >
                       
                  <template >                                    
                    <v-card
                      class="mx-auto grey lighten-4"
                      :to="{ name: 'product-details', params: { id: product.id }}"
                      
                    >
                      <v-img
                        :src="`https://fuoyemarket.intellicsolutions.org/images/${product.image_link}`"
                       
                        :lazy-src="`https://fuoyemarket.intellicsolutions.org/images/${product.image_link}`"
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

                    <v-card-title style="font-size:12px;">
                    </v-card-title>

                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                      {{ product.name }}
                    </v-card-subtitle>

                    <v-card-text style="font-size:10px;">
                      <v-row>
                        <v-col cols="6">
                          <v-icon small class="" id="icon">mdi-currency-ngn</v-icon>&nbsp;<span style="color:#673AB7">{{product.price}}</span>
                        </v-col>
                        
                        <v-col cols="6">
                          <v-icon small class="" id="icon">mdi-map-marker</v-icon>&nbsp; {{product.location}}.
                        </v-col>
                      </v-row>
                    </v-card-text>

                  </v-card>
                </template>
                    </v-col>
                </v-row><br><br>
             
            </div>
        <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
            <div class="hidden-md-and-up">
                <v-row class="pa-2" style="margin-top:-13px;">
                    <v-col 
                        v-for="(product, i) in newProducts" :key="i" :to="product.to" router
                        class = "d-flex child-flex"
                        cols="6"
                    >
                       
                           
                  <template >                                    
                    <v-card
                      :disabled="loading"
                      class="mx-auto grey lighten-4"
                      :to="{ name: 'product-details', params: { id: product.id }}"
                      style="width:100%"
                    >
                      <v-img
                        :src="`https://fuoyemarket.intellicsolutions.org/images/${product.image_link}`"
                        
                        :lazy-src="`https://fuoyemarket.intellicsolutions.org/images/${product.image_link}`"
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

                        <v-card-title style="font-size:12px;" >
                        </v-card-title>

                        <v-card-subtitle style="font-size:11px;color:#673AB7;">
                         {{product.name}}
                        </v-card-subtitle>
                      
                        <v-card-text style="font-size:10px;">
                          <v-icon small class="" id="icon">mdi-currency-ngn</v-icon>&nbsp;<span style="color:#673AB7" > {{product.price}}.</span><br>
                          
                          <v-icon small class="" id="icon">mdi-map-marker</v-icon>&nbsp; {{product.location}}.
                        </v-card-text>

                    </v-card>
                </template>
                                
                       
                    </v-col>
                </v-row>
             
            </div><br>
        <!-- END DISPLAY ON SMALL DEVICE -->
               
           
            </v-card>
        </div>
<!-- END NEW PRODUCTS SECTION -->
    
        <!-- NEW SELLER SECTION -->
        <div class="new-sellers">
            <v-container><p style="font-weight:bold;font-size:15px;margin-top:-0px;"> New Sellers : </p></v-container>
            <v-card flat elevation='' style=" border-radius: 0; border: none; box-shadow: none;">

                    <v-row class="pa-2" style="margin-top:-13px;">
                        <v-col 
                            v-for="(item, i) in newseller" :key="i" :to="item.to" router
                            class = ""
                            cols="12"
                        >
                        <template>
                            <v-card flat  >
                                    <v-layout row wrap>
                                        <v-flex lg2 md2 sm2 xs2>
                                            <v-list-item three-line style="margin-top:-10px">
                                                <v-list-item-avatar    color="grey">
                                                    <img :src="`https://fuoyemarket.intellicsolutions.org/company_images/${item.company_logo}`"  >
                                                    </v-list-item-avatar>
                                                    
                                            </v-list-item>
                                        </v-flex>
                                        <v-flex lg6 md6 sm6 xs6>
                                            <v-card-text>
                                                        
                                                        <div class="items text-capitalize" style="font-size:10px;line-height: 1.2;">
                                                            {{item.company_name}}
                                                        </div>
                                                    </v-card-text>
                                        </v-flex>
                                        <v-flex lg4 md4 sm4 xs4>
                                            <v-card-text>
                                                <v-btn small :to="{name : 'seller-page', params : { id : item.id }}"  color='#673AB7' tile  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">Connect</span></v-btn>
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                            </v-card>
                        </template>
                        </v-col>
                    </v-row>
                            
                        </v-card>
                
        </div><br><br>
        <!-- END NEW SELLER SECTION -->
    
    </div>
</template>

<script>
import 'animate.css'
import API from '../../api'
export default {
    name : 'dashboard',
    data(){
        return{
            Activeuser : '',
            show : false,
            name : true,
            show: false,
            loading: false,
            
            brand: [
                {
                    title: 'Samsung',
                    img: 'samsungs.jpg',
                },
                {
                    title: 'Apple',
                    img: 'apple.png',
                },
                {
                    title: 'Hewlet Packard',
                    img: 'hp.jpg',
                },
               
               
                {
                    title: 'Nike',
                    img: 'nike.png',
                },
                {
                    title: 'Louis Vuitton',
                    img: 'lv.jpg',
                },
                {
                    title: 'LG',
                    img: 'lgs.png',
                },
                
            ],
            category: [
                {
                    title: 'Computing.',
                    img: 'product-3b.jpg',
                },
                {
                    title: 'Electronics.',
                    img: 'product-10.jpg',
                },
                {
                    title: ' Gaming.',
                    img: 'img1.jpg',
                },
                {
                    title: 'Smart Device.',
                    img: 'product-90.jpg',
                },
                {
                    title: 'Fashion Wear',
                    img: 'product-11-1.jpg',
                },
               
                {
                    title: 'Foot Wear.',
                    img: 'product-4.jpg',
                },
                {
                    title: 'Home & Office.',
                    img: 'product-3.jpg',
                },
                {
                    title: 'Appliance.',
                    img: 'img9.jpg',
                },
                {
                    title: ' Grocery Items.',
                    img: 'img4.jpg',
                },
                
                 
                
            ],
            newseller: [],
            topseller: [],
            newProducts:[],
        }
       
    },
    
    async mounted() {
    const response = await API.getUser();
    const response2 = await API.newSellers();
    const response3 = await API.newProducts();
    const response4 = await API.topSellers();
    this.Activeuser = response.msg.username;
    this.newseller = response2.data;
    this.topseller = response4.data;
    this.newProducts = response3.data;
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
.v-card {
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
</style>