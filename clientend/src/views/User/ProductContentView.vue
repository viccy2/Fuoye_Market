<template>
  <div class="product-content">
    
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
        
    <div class="service1 hidden-sm-and-down" style="margin-top:0px">
      <br>
      <v-container fluid>
          <template>

            <v-container>
              <v-row
                align="center"
                justify="start"
              >
                <v-col
                  v-if="!allSelected"
                  lg="12"
                >
                  <v-text-field
                    ref="search"
                    v-model="search"
                    hide-details
                    label="Search"
                    single-line
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            
            <v-layout row wrap>
              <v-flex lg2 md2  class="pa-2"  >
                <template v-for="item in categories">                                    
                  <v-card
                    v-if="!selected.includes(item)"
                    :key="item.text"
                    :disabled="loading"
                    class="mx-auto grey lighten-4"
                    max-width="344"
                    :to="{name : 'product-details'}"
                  >
                    <v-img
                        :src="item.src"
                        height="200px"
                        :lazy-src="item.lazy"
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

                    <v-card-title style="font-size:12px;" v-text="item.text">
                    </v-card-title>

                    <v-card-subtitle style="font-size:11px;color:#673AB7;">
                      # 15, 000
                    </v-card-subtitle>
                    <v-card-text style="font-size:10px;">
                        <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
                    </v-card-text>

                  </v-card>
                </template>
              </v-flex>
            </v-layout>
          </template>
        </v-container>
    </div>

        <!-- DISPLAY ONLY ON SMALL AND SMALLER DEVICES -->

          <div class="service2 hidden-md-and-up" style="margin-top:10px;">
            <v-container fluid>
        
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
                                      <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Oye-Ekiti.
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
                                      <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Oye-Ekiti.
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
                                      <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
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
                                      <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
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
                                      <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
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
                                      <v-icon small class="" id="icon">mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
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
                                      <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
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
                                      <v-icon small class="" id="icon"> mdi-location-on-rounded</v-icon> Location : Ikole-Ekiti.
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

    data: () => ({
      items: [
        {
          text: 'Palm Sandal',
          src: '../../assets/images/product-2-1.jpg',
          lazy:'../../assets/images/product-2-1.jpg',
        },
        {
          text: 'Nightlife',
          src: '../../assets/images/product-2-1.jpg',
          lazy:'../../assets/images/product-2-1.jpg',
        }
       
      ],
      loading: false,
      search: '',
      selected: [],
    }),

    computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
    },

    methods: {
      next () {
        this.loading = true

        setTimeout(() => {
          this.search = ''
          this.selected = []
          this.loading = false
        }, 2000)
      },
    },
  }
</script>