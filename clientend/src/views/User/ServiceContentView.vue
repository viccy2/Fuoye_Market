<template>
    <div class="service-content">

            <!-- <div class="select-category">
                <v-select  solo flat label="Select Service Category" color='#673AB7' :items="category" style="cursor:pointer"></v-select>
            </div> -->
       
        
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
            
        <div class="service1 hidden-sm-and-down" style="margin-top:0px">
            <br>
            <v-container fluid>
            <v-layout row wrap>
                <v-flex lg2 md2  class="pa-1"  >
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/b.jpg" style="height:100px;" class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Mitchelle</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/j.jpg" style="height:100px;" class=""></v-img>
                       
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Zed Catering</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/8.png" style="height:100px;" class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Lilly cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                   <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/4.png" style="height:100px;"  class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Zola</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/7.png" style="height:100px;" class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Ade Saloon</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/8.png" style="height:100px;" class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Bola Store</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
            </v-layout>
            </v-container>
        </div>

        <!-- DISPLAY ONLY ON SMALL AND SMALLER DEVICES -->

          <div class="service2 hidden-md-and-up" style="margin-top:0px">
            <v-container fluid>
            <v-layout row wrap>
                <v-flex sm6 xs6>
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/7.png" style="height:145px;width:100%;"></v-img>
                        
                        <v-toolbar  height='50' flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">David's Saloon</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6>
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/8.png" style="height:145px;width:100%;"></v-img>
                        
                        <v-toolbar  height='50' flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Adele Catering</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6>
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/4.png" style="height:145px;width:100%;"></v-img>
                        
                        <v-toolbar  height='50' flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Bola Store</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6>
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/8.png" style="height:145px;width:100%;"></v-img>
                        
                        <v-toolbar  height='50' flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Scent</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6>
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/7.png" style="height:145px;width:100%;"></v-img>
                        
                        <v-toolbar  height='50' flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">K studio</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6>
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/8.png" style="height:145px;width:100%;"></v-img>
                        
                        <v-toolbar  height='50' flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">MD</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6>
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/7.png" style="height:145px;width:100%;"></v-img>
                        
                        <v-toolbar  height='50' flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Lolly</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6>
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/4.png" style="height:145px;width:100%;"></v-img>
                        
                        <v-toolbar  height='50' flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Zidane</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
            </v-layout>
            </v-container>
        </div><br><br><br><br>
    </div>
</template>
<script>
export default {
    name : 'service-content',
    data(){
        return{
            category:[
               'Beauty Services',
               'Hair Styling / Barbing Services',
               'House Keeping / Cleaning Services',
               'Health Care / Nursing Services',
               'Fashion Designing Services',
               'Construction Services',
               'Furniture Services',
               'Farming & Veterinary Services',
               'Engenieering / Manufacturing Services',
               'Arts & Entertainment Services',
               'Computing & IT Services',
               'Vehicle / Automobile Services',
               'Cryptocurrency Trading / Services'


            ]
        }
    }
}
</script>