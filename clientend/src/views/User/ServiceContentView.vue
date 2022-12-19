<template>
    <div class="service-content">
         <v-card height='40' tile fixed-top>
            <div class="select-category">
                <v-select  solo flat label="Select Service Category" color='#673AB7' :items="category" style="cursor:pointer"></v-select>
            </div>
        </v-card>
        <div class="nav items">
            <hr>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex lg6 md6 sm6  class="pa-1"  >    
                        <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">View</span></v-btn>
                    </v-flex>
                    <v-flex lg6 md6 sm6  class="pa-1"  >  
                        <v-btn grey small :to="{name : 'seller-page'}"  color='' rounded  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">View</span></v-btn>
                    </v-flex>
                </v-layout><br>
                <div class="search">
                    <v-text-field rounded grey append-icon="mdi-magnify" label="Search for sellers..." color='#673AB7;' elevation="12">
                    </v-text-field>
                </div>
            </v-container>    
        </div>
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
    
        <div class="service1 hidden-sm-and-down" style="margin-top:10px">
            <v-container fluid>
            <v-layout row wrap>
                <v-flex lg2 md2  class="pa-1"  >
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/b.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:15px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/j.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                       <v-card-title>
                            <span style="font-size:15px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/12.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:15px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                   <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/j.jpg" style="height:20vh;"  class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:15px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/d.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:15px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/b.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:15px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
            </v-layout>
            </v-container>
        </div>

        <!-- DISPLAY ONLY ON SMALL AND SMALLER DEVICES -->

          <div class="service2 hidden-md-and-up" style="margin-top:10px">
            <v-container fluid>
            <v-layout row wrap>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/b.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/a.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/12.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/b.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/a.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/d.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/b.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/a.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">coil cake</span>
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