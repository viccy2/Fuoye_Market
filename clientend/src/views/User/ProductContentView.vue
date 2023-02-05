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
              <div>
                <v-layout row wrap>
                  <v-flex sm12 xs12>

                  <v-combobox
                    v-model="select"
                    :items="items"
                    label=""
                    multiple
                    chips
                    rounded
                    class="ma-2"
                    style="width:100%"
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        :key="JSON.stringify(data.item)"
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        :disabled="data.disabled"
                        @click:close="data.parent.selectItem(data.item)"
                        style="font-size:10px;width:100%;"
                      >
                        <v-avatar
                          class="accent white--text"
                          left
                          v-text="data.item.slice(0, 1).toUpperCase()"
                          style="font-size:10px;"
                        ></v-avatar>
                        {{ data.item }}
                      </v-chip>
                    </template>
                  </v-combobox>
                </v-flex>

                </v-layout>
              </div>
            <v-layout row wrap>
              <v-flex sm6 xs6 class="pa-2">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto grey lighten-4"
                                    max-width="344"
                                    :to="{name : 'product-details'}"
                                >
                                    <v-img
                                    src="../../assets/images/img8.jpg"
                                    height="200px"
                                    lazy-src="../../assets/images/img8.jpg"
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
                                       LG Smart Curve Tv
                                    </v-card-title>

                                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                                    # 300, 000
                                    </v-card-subtitle>
                                    <v-card-text style="font-size:10px;">
                                      <v-icon small class="pa-3" id="icon"> mdi-location-on</v-icon> Location : Oye-Ekiti.
                                    </v-card-text>

                                </v-card>

                        </center>
                        
                    </v-flex><br>
                    <v-flex sm6 xs6 class="pa-2">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto grey lighten-4"
                                    max-width="344"
                                    :to="{name : 'product-details'}"
                                >
                                    <v-img
                                    src="../../assets/images/product-3b.jpg"
                                    height="200px"
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

                                    <v-card-title style="font-size:12px;">
                                        Dell Laptop
                                    </v-card-title>

                                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                                    # 505, 000
                                    </v-card-subtitle>
                                    <v-card-text style="font-size:10px;">
                                      <v-icon small class="pa-3" id="icon"> mdi-location-on</v-icon> Location : Oye-Ekiti.
                                    </v-card-text>

                                </v-card>

                        </center>
                        
              </v-flex><br>
              <v-flex sm6 xs6 class="pa-2">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto grey lighten-4"
                                    max-width="344"
                                    :to="{name : 'product-details'}"
                                >
                                    <v-img
                                    src="../../assets/images/product-51.jpg"
                                    height="200px"
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
                                  </v-img>

                                    <v-card-title style="font-size:12px;">
                                        Helmet
                                    </v-card-title>

                                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                                    # 15, 000
                                    </v-card-subtitle>
                                    <v-card-text style="font-size:10px;">
                                      <v-icon small class="pa-3" id="icon"> mdi-location-on</v-icon> Location : Ikole-Ekiti.
                                    </v-card-text>

                                </v-card>

                        </center>
                        
                    </v-flex><br>
                
                    <v-flex sm6 xs6 class="pa-2">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto grey lighten-4"
                                    max-width="344"
                                    :to="{name : 'product-details'}"
                                >
                                    <v-img
                                    src="../../assets/images/product-6-2.jpg"
                                    height="200px"
                                    lazy-src="../../assets/images/product-6-2.jpg"
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
                                       Arm Chair
                                    </v-card-title>

                                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                                    # 30, 000
                                    </v-card-subtitle>
                                    <v-card-text style="font-size:10px;">
                                      <v-icon small class="pa-3" id="icon"> mdi-location-on</v-icon> Location : Ikole-Ekiti.
                                    </v-card-text>

                                </v-card>

                        </center>
                        
                    </v-flex><br>
                
                    <v-flex sm6 xs6 class="pa-2">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto grey lighten-4"
                                    max-width="344"
                                    :to="{name : 'product-details'}"
                                >
                                    <v-img
                                    src="../../assets/images/product-8-2.jpg"
                                    height="200px"
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

                                    <v-card-title style="font-size:12px;">
                                       Straw Bag
                                    </v-card-title>

                                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                                    # 20, 000
                                    </v-card-subtitle>
                                    <v-card-text style="font-size:10px;">
                                      <v-icon small class="pa-3" id="icon"> mdi-location-on</v-icon> Location : Ikole-Ekiti.
                                    </v-card-text>

                                </v-card>

                        </center>
                        
                    </v-flex><br>
                    <v-flex sm6 xs6 class="pa-2">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto grey lighten-4"
                                    max-width="344"
                                    :to="{name : 'product-details'}"
                                >
                                    <v-img
                                    src="../../assets/images/n1.jpg"
                                    height="200px"
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

                                    <v-card-title style="font-size:12px;">
                                       Bag Pack
                                    </v-card-title>

                                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                                    # 10, 000
                                    </v-card-subtitle>
                                    <v-card-text style="font-size:10px;">
                                      <v-icon small class="pa-3" id="icon"> mdi-location-on</v-icon> Location : Ikole-Ekiti.
                                    </v-card-text>

                                </v-card>

                        </center>
                        
                    </v-flex><br>
                    <v-flex sm6 xs6 class="pa-2">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto grey lighten-4"
                                    max-width="344"
                                    :to="{name : 'product-details'}"
                                >
                                    <v-img
                                    src="../../assets/images/product-2-1.jpg"
                                    height="200px"
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

                                    <v-card-title style="font-size:12px;">
                                       Palm Sandal
                                    </v-card-title>

                                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                                    # 15, 000
                                    </v-card-subtitle>
                                    <v-card-text style="font-size:10px;">
                                      <v-icon small class="pa-3" id="icon"> mdi-location-on</v-icon> Location : Ikole-Ekiti.
                                    </v-card-text>

                                </v-card>

                        </center>
                        
                    </v-flex><br>
                    
                    <v-flex sm6 xs6 class="pa-2">
                         <center>
                                                        
                                <v-card
                                    class="mx-auto grey lighten-4"
                                    max-width="344"
                                    :to="{name : 'product-details'}"
                                >
                                    <v-img
                                    src="../../assets/images/product-13-1.jpg"
                                    height="200px"
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

                                    <v-card-title style="font-size:12px;">
                                       Sofa Chair
                                    </v-card-title>

                                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                                    # 130, 000
                                    </v-card-subtitle>
                                    <v-card-text style="font-size:10px;">
                                      <v-icon small class="pa-3" id="icon"> mdi-location-on</v-icon> Location : Ikole-Ekiti.
                                    </v-card-text>

                                </v-card>

                        </center>
                        
                    </v-flex><br>
                    
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
          select: [ 'Bakery Products / Snacks / Cereal & Flakes'],
          items:[
                'Grocery',
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

                


            ],
            select2: ['Ikole'],
            items2 : [
                'Ikole',
                'Oye',
            ],
        }
    }
}
</script>
