<template>
    <div class="product-content">
         <v-card height='40' tile>
            <div class="select-category">
                <v-select solo flat label="Select Product Category" color='#673AB7' :items="category" style="cursor:pointer"></v-select>
            </div>
        </v-card>
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
    
        <div class="service1 hidden-sm-and-down" style="margin-top:10px">
            <v-container fluid>
            <v-layout row wrap>
                <v-flex lg2 md2  class="pa-1"  >
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
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/j.jpg" style="height:20vh;" class="rounded-lg"></v-img>
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
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/h.png" style="height:20vh;" class="rounded-lg"></v-img>
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
                <v-flex lg2 md2  class="pa-1 ">
                   <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/j.jpg" style="height:20vh;"  class="rounded-lg"></v-img>
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
                <v-flex lg2 md2  class="pa-1 ">
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
                <v-flex lg2 md2  class="pa-1 ">
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
            </v-layout>
            </v-container>
        </div>

        <!-- DISPLAY ONLY ON SMALL AND SMALLER DEVICES -->

          <div class="service2 hidden-md-and-up" style="margin-top:10px">
            <v-container fluid>
            <v-layout row wrap>
                <v-flex sm4 xs4 class="pa-1 ">
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
                <v-flex sm4 xs4 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/f.jpg" style="height:20vh;" class="rounded-lg"></v-img>
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
                <v-flex sm4 xs4 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/h.png" style="height:20vh;" class="rounded-lg"></v-img>
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
                <v-flex sm4 xs4 class="pa-1 ">
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
                <v-flex sm4 xs4 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/f.jpg" style="height:20vh;" class="rounded-lg"></v-img>
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
                <v-flex sm4 xs4 class="pa-1 ">
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
                <v-flex sm4 xs4 class="pa-1 ">
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
                <v-flex sm4 xs4 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/f.jpg" style="height:20vh;" class="rounded-lg"></v-img>
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
                <v-flex sm4 xs4 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/h.png" style="height:20vh;" class="rounded-lg"></v-img>
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
    name : 'product-content',
    data(){
        return{
            category:[
               'Food/Beverages',
               'Phones/Gadgets/Smart Watches',
               'Jewelries/Accessories',
               'Cosmetics/Make-up',
               'Fashion Designing'

            ]
        }
    }
}
</script>