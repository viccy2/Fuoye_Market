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
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'service-content-details'}">
                        <v-img src="../../assets/images/b.jpg" style="height:150px;" class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Mitchelle</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'service-content-details'}">
                        <v-img src="../../assets/images/j.jpg" style="height:150px;" class=""></v-img>
                       
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Zed Catering</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'service-content-details'}">
                        <v-img src="../../assets/images/8.png" style="height:150px;" class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Lilly cake</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                   <v-card flat class="grey lighten-2 ma-2" :to="{name : 'service-content-details'}">
                        <v-img src="../../assets/images/4.png" style="height:150px;"  class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Zola</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'service-content-details'}">
                        <v-img src="../../assets/images/7.png" style="height:150px;" class=""></v-img>
                        
                        <v-toolbar  height='50' style="margin-top:0px;" flat>
                            <v-btn class="mt-1" small outlined color ="#673AB7" width="100%">
                                <span style="font-size:10px">Ade Saloon</span>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-flex>
                <v-flex lg2 md2  class="pa-1 ">
                    <v-card flat class="grey lighten-2 ma-2" :to="{name : 'service-content-details'}">
                        <v-img src="../../assets/images/8.png" style="height:150px;" class=""></v-img>
                        
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
                           • Location : Ikole-Ekiti.
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
                          src="../../assets/images/b.jpg"
                          lazy-src="../../assets/images/b.jpg"
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
                      <v-card-title style="font-size:13px;">Adele Catering.</v-card-title>

                      <v-card-text>
                    

                      <div class="my-4 " style="font-size:10px;">
                           • Location : Oye-Ekiti.
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
                           • Location : Ikole-Ekiti.
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
                           • Location : Oye-Ekiti.
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