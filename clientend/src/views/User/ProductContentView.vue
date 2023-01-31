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
                    <v-card flat class="grey lighten-2  ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/product-5-2.jpg" flat style="height:250px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:12px;margin-top:-30px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-50px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Light bulb</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/n1.jpg" flat style="height:250px;" class=""></v-img>
                       <v-card-title>
                            <span style="font-size:12px;margin-top:-30px">Price : #100,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-50px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Bag pack</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/product-8-2.jpg" flat style="height:250px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:12px;margin-top:-30px">Price : #10,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-50px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Straw bag</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                   <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/product-6-2.jpg" flat style="height:250px;"  class=""></v-img>
                        <v-card-title>
                            <span style="font-size:12px;margin-top:-30px">Price : #100,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-50px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Arm chair</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/product-9.jpg" flat style="height:250px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:12px;margin-top:-30px">Price : #50,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-50px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Sneakers</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'product-details'}">
                        <v-img src="../../assets/images/product-51.jpg" flat style="height:250px;" class=""></v-img>
                        <v-card-title>
                            <span style="font-size:12px;margin-top:-30px">Price : #30,000</span><br><br>
                        </v-card-title>
                        <v-toolbar  height='50' style="margin-top:-50px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Helment</span>
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
                <v-flex sm6 xs6 >
                    <v-card flat class="ma-2 grey lighten-2" :to="{name : 'product-details'}" height="300">
                        <v-img src="../../assets/images/product-51.jpg" style="height:200px;" 
                        lazy-src="../../assets/images/product-51.jpg"
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
                      </v-img><br>
                        <span class="font-weight-bold ma-3" style="font-size:12px;">Price : #50,000</span><br><br>  
                            <v-btn small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Helment</span>
                            </v-btn>
                        
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 >
                    <v-card flat class="ma-2 grey lighten-2" :to="{name : 'product-details'}" height="300">
                        <v-img src="../../assets/images/product-6-1.jpg" style="height:200px;" 
                        lazy-src="../../assets/images/product-6-1.jpg"
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
                        <br>
                        <span class="font-weight-bold ma-3" style="font-size:12px;">Price : #70,000</span><br><br>  
                            <v-btn small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Arm chair</span>
                            </v-btn>
                        
                    </v-card>
                </v-flex><br><br>
                
                <v-flex sm6 xs6 >
                    <v-card flat class="ma-2 grey lighten-2" :to="{name : 'product-details'}" height="300">
                        <v-img src="../../assets/images/product-8-2.jpg" style="height:200px;" 
                        lazy-src="../../assets/images/product-8-2.jpg"
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
                        <br>
                        <span class="font-weight-bold ma-3" style="font-size:12px;">Price : #30,000</span><br><br>  
                            <v-btn small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Straw bag</span>
                            </v-btn>
                        
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 >
                    <v-card flat class="ma-2 grey lighten-2" :to="{name : 'product-details'}" height="300">
                        <v-img src="../../assets/images/n1.jpg" style="height:200px;" 
                        lazy-src="../../assets/images/n1.jpg"
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
                        <br>
                        <span class="font-weight-bold ma-3" style="font-size:12px;">Price : #10,000</span><br><br>  
                            <v-btn small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Bag pack</span>
                            </v-btn>
                        
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 >
                    <v-card flat class="ma-2 grey lighten-2" :to="{name : 'product-details'}" height="300">
                        <v-img src="../../assets/images/product-2-1.jpg" style="height:200px;" 
                        lazy-src="../../assets/images/product-2-1.jpg"
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
                        <br>
                        <span class="font-weight-bold ma-3" style="font-size:12px;">Price : #10,000</span><br><br>  
                            <v-btn small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Palm sandals</span>
                            </v-btn>
                        
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 >
                    <v-card flat class="ma-2 grey lighten-2" :to="{name : 'product-details'}" height="300">
                        <v-img src="../../assets/images/product-10.jpg" style="height:200px;" 
                        lazy-src="../../assets/images/product-10.jpg"
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
                        <br>
                        <span class="font-weight-bold ma-3" style="font-size:12px;">Price : #100,000</span><br><br>  
                            <v-btn small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px"> Smart Tv</span>
                            </v-btn>
                        
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 >
                    <v-card flat class="ma-2 grey lighten-2" :to="{name : 'product-details'}" height="300">
                        <v-img src="../../assets/images/product-13-1.jpg" style="height:200px;" 
                        lazy-src="../../assets/images/product-13-1.jpg"
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
                        <br>
                        <span class="font-weight-bold ma-3" style="font-size:12px;">Price : #150,000</span><br><br>  
                            <v-btn small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Sofa chair</span>
                            </v-btn>
                        
                    </v-card>
                </v-flex>
                <v-flex sm6 xs6 >
                    <v-card flat class="ma-2 grey lighten-2" :to="{name : 'product-details'}" height="300">
                        <v-img src="../../assets/images/product-3b.jpg" style="height:200px;"
                        lazy-src="../../assets/images/product-3b.jpg"
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
                        <br>
                        <span class="font-weight-bold ma-3" style="font-size:12px;">Price : #450,000</span><br><br>  
                            <v-btn small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">{{"Dell laptop ".substring(0,100)+"..."}}</span>
                            </v-btn>
                        
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