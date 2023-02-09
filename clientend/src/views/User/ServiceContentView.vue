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
                <v-flex lg2 md2  class="pa-2"  >
                  <v-card
                          :to="{name : 'service-content-details'}"
                          :loading="loading"
                          class="mx-auto my12"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="150"
                          src="../../assets/images/about-img-1.jpg"
                          lazy-src="../../assets/images/about-img-1.jpg"
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
                      <v-card-title style="font-size:13px;">Dan Photos.</v-card-title>

                      <v-card-text>
                    

                      <div class="my-4 " style="font-size:10px;">
                          <v-icon small class="pa-3" id="icon">map-marker-radius-outline</v-icon>  Oye-Ekiti.
                      </div>
                  
                      </v-card-text>

                  </v-card>
                </v-flex>
                
            </v-layout>
            </v-container>
        </div>

        <!-- DISPLAY ONLY ON SMALL AND SMALLER DEVICES -->

          <div class="service2 hidden-md-and-up" style="margin-top:0px">
            <v-container fluid>
           
            <v-layout row wrap>
                <v-flex sm6 xs6 class="pa-2">
                      
                      <v-card
                          :to="{name : 'service-content-details'}"
                          :loading="loading"
                          class="mx-auto my-1"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="150"
                          src="../../assets/images/pel.jpg"
                          lazy-src="../../assets/images/pel.jpg"
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
                      <v-card-title style="font-size:13px;">Pelvix.</v-card-title>

                      <v-card-text>
                    

                      <div class="my-4 " style="font-size:10px;">
                          <v-icon small class="pa-3" id="icon">map-marker-radius-outline</v-icon>  Ikole-Ekiti.
                      </div>
                  
                      </v-card-text>

                  </v-card>

              </v-flex>
                
              <v-flex sm6 xs6 class="pa-2">
                      
                      <v-card
                          :to="{name : 'service-content-details'}"
                          :loading="loading"
                          class="mx-auto my-1"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="150"
                          src="../../assets/images/17-people.jpg"
                          lazy-src="../../assets/images/17-people.jpg"
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
                      <v-card-title style="font-size:13px;">Adele beauty.</v-card-title>

                      <v-card-text>
                    

                      <div class="my-4 " style="font-size:10px;">
                          <v-icon small class="pa-3" id="icon">map-marker-radius-outline</v-icon>  Oye-Ekiti.
                      </div>
                  
                      </v-card-text>

                  </v-card>

              </v-flex>
              <v-flex sm6 xs6 class="pa-2">
                      
                      <v-card
                          :to="{name : 'service-content-details'}"
                          :loading="loading"
                          class="mx-auto my12"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="150"
                          src="../../assets/images/8.png"
                          lazy-src="../../assets/images/8.png"
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
                      <v-card-title style="font-size:13px;">Bola Store.</v-card-title>

                      <v-card-text>
                    

                      <div class="my-4 " style="font-size:10px;">
                          <v-icon small class="pa-3" id="icon">map-marker-radius-outline</v-icon>  Ikole-Ekiti.
                      </div>
                  
                      </v-card-text>

                  </v-card>

              </v-flex>
              <v-flex sm6 xs6 class="pa-2">
                      
                      <v-card
                          :to="{name : 'service-content-details'}"
                          :loading="loading"
                          class="mx-auto my12"
                          max-width="374" >
                      <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate>
                          </v-progress-linear>
                      </template>
                      <v-img
                          height="150"
                          src="../../assets/images/about-img-1.jpg"
                          lazy-src="../../assets/images/about-img-1.jpg"
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
                      <v-card-title style="font-size:13px;">Dan Photos.</v-card-title>

                      <v-card-text>
                    

                      <div class="my-4 " style="font-size:10px;">
                          <v-icon small class="pa-3" id="icon">map-marker-radius-outline</v-icon>  Oye-Ekiti.
                      </div>
                  
                      </v-card-text>

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
            select: [ 'Engenieering / Manufacturing Services'],
            items:[
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