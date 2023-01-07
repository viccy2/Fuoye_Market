<template>
    <div class="product-content">
         <!-- <v-card height='40' tile>
            <div class="select-category">
                <v-select solo flat label="Select Product Category" color='#673AB7' :items="category" style="cursor:pointer"></v-select>
            </div>
        </v-card> -->
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
        
        <div class="service1 hidden-sm-and-down" style="margin-top:0px">
            <br>
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
                                <span style="font-size:10px">Food</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-1" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/j.jpg" style="height:20vh;" class="rounded-lg"></v-img>
                       <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #100,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Samsung</span>
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
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/product-140.jpg" style="height:150px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #90,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Game</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/n55.jpg" style="height:150px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Top</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/n7.jpg" style="height:150px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #80,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">PS</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/n50.jpg" style="height:150px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Headset</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/product-4.jpg" style="height:150px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #60,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Nike</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/product-10.jpg" style="height:150px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #100,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Tv</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/n32.jpg" style="height:150px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">earbud</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/h.png" style="height:150px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:10px;margin-top:-70px">Price : #300,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-70px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Iphone</span>
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
                'Drinks / Beverages',
                'Bakery Products / Snacks / Cereal & Flakes',
                'Food Items / Foods',
                'Frozen Food / Fish / Meat / Egg',

                'Male Clothing / Clothing Acessories',
                'Female Clothing / Clothing Acessories',
                'Jewelry',
                'Skincare / Bath & Body',
                'Make-up / Frangrances',
                'Hair / Hair Beauty',

                'Drugs / Health Products',

                'Mobile Phones / Tablets / Smart Watches',
                'Laptops / Computers',
                'Electronics / Acessories / Gadgets',

                'Furniture / Home appliances',

                'Vehichle / Automobile'

                


            ]
        }
    }
}
</script>