<template>
    <div class="dashboard" style="margin-top:50px;">
       
            
            <!-- DISPLAY ON LARGE AND MEDIUM DEVICES -->

            <div class="sliders hidden-sm-and-down" style="margin-top:20px;">
                 <v-carousel  height="380" cycle hide-delimiters show-arrows-on-hover>
                        <v-carousel-item >
                            <v-layout row wrap>
                                <img src="../../assets/images/d.jpg" style="width:100%;height:100%" >
                            </v-layout>
                        </v-carousel-item>
                        <v-carousel-item >
                              <v-layout row wrap>
                                <v-flex md6 lg6 class="pa-1">
                                    <img src="../../assets/images/h.png" style="width:100%;height:100%" >
                                </v-flex>
                                <v-flex md6 lg6 class="">
                                    <img src="../../assets/images/f.jpg" style="width:100%;height:80%" >
                                </v-flex>
                            </v-layout>
                        </v-carousel-item>
                        <v-carousel-item >
                              <v-layout row wrap>
                                <v-flex md6 lg6 class="pa-1">
                                    <img src="../../assets/images/j.jpg" style="width:100%;height:100%" >
                                </v-flex>
                                <v-flex md6 lg6 class="">
                                    <img src="../../assets/images/z.jpg" style="width:100%;height:100%" >
                                </v-flex>
                            </v-layout>
                        </v-carousel-item>
                         
                </v-carousel>
            </div>

            <!-- DISPLAY ON MEDIUM AND SMALL DEVICES -->

            <div class="sliders hidden-md-and-up">
                  <v-slide-group class="" active-class="success" show-arrow>
                    <v-slide-item >
                       <div  class="ma-2" height="150" width="" >
                            <img src="../../assets/images/d.jpg" style="width:300px;height:200px;margin-top:10px" class="rounded-lg">
                        </div>
                    </v-slide-item>
                    <v-slide-item >
                       <div  class="ma-2" height="150" width="" >
                            <img src="../../assets/images/h.png" style="width:300px;height:210px;margin-top:10px" class="rounded-lg">
                        </div>
                    </v-slide-item>
                    <v-slide-item >
                       <div  class="ma-2" height="150" width="" >
                            <img src="../../assets/images/f.jpg" style="width:300px;height:200px;margin-top:10px" class="rounded-lg">
                        </div>
                    </v-slide-item>
                    <v-slide-item >
                        <div  class="ma-2" height="150" width="" >
                            <img src="../../assets/images/j.jpg" style="width:300px;height:200px;margin-top:10px" class="rounded-lg">
                        </div>
                    </v-slide-item>
                     <v-slide-item >
                        <div  class="ma-2" height="150" width="300" >
                            <img src="../../assets/images/z.jpg" style="width:300px;height:200px;margin-top:10px" class="rounded-lg">
                        </div>
                    </v-slide-item>
                   
                </v-slide-group>
             
            </div>

            <!-- TOP SELLER SECTION -->

            <div class="top-seller">
                <v-card class="rounded-lg" elevation=''>
                    <v-container fluid>
                    <v-card-title style="font-weight:bold;"> Top Sellers : </v-card-title>
                <v-layout row wrap class="pa-3" style="margin-top:-20px">
                    <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class=" ma-1">
                            <v-img src="../../assets/images/b.jpg" style="height:80px;"></v-img>
                            <v-card-title style="font-size:13px;font-weight:bold;margin-top:-10px;">Zeus.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}" color='#673AB7' rounded outlined class="text-capitalize" style="width:100%">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                    <v-flex lg3 md3 sm6 xs6 >

                       <v-card flat class="ma-1">
                            <v-img src="../../assets/images/a.jpg" style="height:80px;"></v-img>
                            <v-card-title style="font-size:13px;font-weight:bold;margin-top:-10px;">Zeus.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                      <v-flex lg3 md3 sm6 xs6 >

                       <v-card flat class=" ma-1">
                            <v-img src="../../assets/images/29.jpg" style="height:80px;"></v-img>
                            <v-card-title style="font-size:13px;font-weight:bold;margin-top:-10px;">Zeus.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>

                      <v-flex lg3 md3 sm6 xs6 >

                        <v-card flat class="ma-1">
                            <v-img src="../../assets/images/m.jpg" style="height:80px;"></v-img>
                            <v-card-title style="font-size:13px;font-weight:bold;margin-top:-10px;">Zeus.</v-card-title>
                            <v-card-actions style="margin-top:-20px">
                                <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded outlined class="text-capitalize" style="width:100%">Connect</v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-flex>
                    
                </v-layout>
                </v-container>
                </v-card>
            </div><br>
            <!-- END TOP SELLER SECTION -->

            <!-- NEW SELLER SECTION -->
            <div class="new-sellers">
                <v-card flat class="rounded-lg" elevation=''>
                    <v-container fluid>
                        <v-card-title style="font-weight:bold"> New Sellers For You : </v-card-title>
                        <v-card flat class="ma-1 grey lighten-3" height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  src="../../assets/images/Fm.png" >
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:12px; margin-top:-15px">
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
                                            <div class="items text-capitalize" style="font-size:12px; margin-top:-15px">
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
                                            <div class="items text-capitalize" style="font-size:12px; margin-top:-15px">
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
            </div><br>
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