<template>
    <div class="dashboard">
       
        <!-- PROFILE SECTION -->
      <section>     
        <!-- DISPLAY ON LARGE DEVICE --> 
        <div class="hidden-sm-and-down" >
           
         </div>
         <!-- END DISPLAY ON LARGE DEVICE -->

         <!-- DISPLAY ON SMALL DEVICE -->
        <div class="hidden-md-and-up">
        
            <v-card class="mx-auto"  flat  height="145" color="#673AB7" style="margin-top:-210px;">
                
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
     
        </div>
         <!-- END DISPLAY ON SMALL DEVICE -->

        </section>
        <!-- END PROFILE SECTION  -->

            
        <!-- TOP SELLER SECTION -->
        <div class="top-seller">
        <!-- DISPLAY ON LARGEDEVICE -->
            <div class="hidden-sm-and-down">
                <v-card flat elevation=''>
            
                        <v-card-title style="font-weight:bold;font-size:13px;"> Our top sellers : </v-card-title>  
                        
                        <v-row class="pa-5">
                            <v-col 
                                v-for="(item, i) in items" :key="i" :to="item.to" router
                                
                                cols="6"
                            
                            >
                            <center>
                            <v-card
                             
                                :loading="loading"
                                class=""
                            >
                                <template slot="progress">
                                <v-progress-linear
                                    color="deep-purple"
                                    height="10"
                                    indeterminate>
                                </v-progress-linear>
                                </template>
                                <v-img
                                height="300"
                                :src="require(`@/assets/images/${item.img}`)"
                                :lazy-src="require(`@/assets/images/${item.img}`)"
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
                                <!-- <v-card-title style="font-size:13px;">{{item.title}}
                                <v-rating
                                :value="5.0"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>
                                </v-card-title> -->
                                <!-- <v-divider class="mx-4"></v-divider> -->
                            </v-card>
                            </center>
                            </v-col>
                        </v-row>  
                       
                </v-card>
            </div>
            <!-- END DISPLAY ON LARGE DEVICE -->

            <!-- DISPLAY ON SMALL DEVICE -->
            <div class="hidden-md-and-up">
                <v-card flat elevation=''>

                <v-card-title style="font-weight:bold;font-size:13px;margin-top:0px;"> Our top sellers : </v-card-title> <br>
                    <v-row class="" style="margin-top:-30px;">
                    <v-col 
                        v-for="(item, index) in items" :key="index"
                        class = "d-flex child-flex"
                        cols="4"
                    
                    >

                    <template >                                    
                        <v-card
                        :disabled="loading"
                        class="mx-auto grey lighten-4"
                        :to="{ name: 'product-details', params: { id: item.id }}"
                        style="width:100%"
                        >
                        <v-img
                            :src="require(`@/assets/images/${item.img}`)"
                            :lazy-src="require(`@/assets/images/${item.img}`)"
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

                            <v-card-subtitle style="font-size:7px;color:#673AB7;">
                               <span style="color:#673AB7" > {{item.title}}.</span>                         
                            </v-card-subtitle>
            
                        </v-card>
                    </template>

                </v-col>
                </v-row>

            </v-card>
            </div>
        <!-- END DISPLAY ON SMALL DEVICE -->
                
        </div>
        <!-- END TOP SELLER SECTION -->

 <!-- POPULAR CATEGORY SECTION -->

 <div class="featured-products">
                <v-card flat elevation=''>
                    <v-container fluid>
                    <v-card-title style="font-weight:bold;font-size:13px;margin-top:0px;"> Popular Category : </v-card-title>
                

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
                <v-row class="pa-2">
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
                </v-row>
             
            </div>
        <!-- END DISPLAY ON SMALL DEVICE -->
               
            </v-container>
            </v-card>
        </div>
        <!-- END POPULAR CATEGORY SECTION -->


        <!-- FEATURED PRODUCTS SECTION -->

            <div class="featured-products">
                <v-card flat elevation=''>
                    <v-container fluid>
                    <v-card-title style="font-weight:bold;font-size:13px;margin-top:0px;"> Popular Brand : </v-card-title>
                

        <!-- DISPLAY ON LARGE DEVICE -->
            <div class="hidden-sm-and-down">
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
             
            </div>
        <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
            <div class="hidden-md-and-up">
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
                </v-row><br>
             
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
                    <v-card-title style="font-weight:bold;font-size:13px;margin-top:-20px;"> New sellers for you : </v-card-title>
                    <v-row class="pa-2">
                        <v-col 
                            v-for="(item, i) in newseller" :key="i" :to="item.to" router
                            class = "d-flex child-flex"
                            cols="12"
                        >
                            <v-card flat class="ma-1 " height="50">
                                    <v-layout row wrap>
                                        <v-flex lg2 md2 sm2 xs2>
                                            <v-list-item three-line style="margin-top:-10px">
                                                <v-list-item-avatar    color="grey">
                                                    <img  :src="`https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`" >
                                                    </v-list-item-avatar>
                                                    
                                            </v-list-item>
                                        </v-flex>
                                        <v-flex lg6 md6 sm4 xs6>
                                            <v-card-text>
                                                        <center>
                                                        <div class="items text-capitalize" style="font-size:10px;line-height: 1.0;">
                                                            {{item.username}}{{item.username}}{{item.username}}{{item.username}}{{item.username}}
                                                        </div></center>
                                                    </v-card-text>
                                        </v-flex>
                                        <v-flex lg4 md4 sm4 xs4>
                                            <v-card-text>
                                                <v-btn small :to="{name : 'seller-page', params : { id : item.id }}"  color='#673AB7' tile  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">Connect</span></v-btn>
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                            </v-card>
                        </v-col>
                    </v-row>
                            </v-container>
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
            items: [
               
                {
                    title: 'Dan Photos',
                    img: 'about-img-1.jpg',
                    to: '/seller-page'
                },
                {
                    title: 'Dan Photos',
                    img: 'about-img-1.jpg',
                    to: '/seller-page'
                },
                {
                    title: 'Dan Photos',
                    img: 'about-img-1.jpg',
                    to: '/seller-page'
                },
                {
                    title: 'Dan Photos',
                    img: 'about-img-1.jpg',
                    to: '/seller-page'
                },
                {
                    title: 'Dan Photos',
                    img: 'about-img-1.jpg',
                    to: '/seller-page'
                },
                {
                    title: 'Dan Photos',
                    img: 'about-img-1.jpg',
                    to: '/seller-page'
                },
                
               
            ],
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
                    title: 'Fashion',
                    img: 'product-11-1.jpg',
                },
                {
                    title: 'Home & Office.',
                    img: 'product-3.jpg',
                },
               
                 {
                    title: ' Grocery.',
                    img: 'img4.jpg',
                },
                
            ],
            newseller: [],
        }
       
    },
    
    async mounted() {
    const response = await API.getUser();
    const response2 = await API.newSellers();
    this.Activeuser = response.msg.username;
    this.newseller = response2.data;
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