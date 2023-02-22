<template>
  <div class="product-content">
    
        <!-- DISPLAY ONLY ON LARGER AND MEDIUM DEVICES -->
        
    <div class="service1 hidden-sm-and-down" style="margin-top:0px">
    
      <v-container fluid>
        <template>
          <v-container>
          
              <v-card height="500px" style=" overflow-y : auto; width:100%;" flat>
              <v-row
                align="center"
                justify="start"
              >
                <v-col
                  v-if="!allSelected"
                  lg="12"
                >
                  <v-text-field
                    solo
                    color="#673AB7"
                    ref="search"
                    v-model="search"
                    hide-details
                    label="Search all products..."
                    single-line
                  ></v-text-field>
                </v-col>
              </v-row><br>

              <v-container>
                <v-row class="pa-2">
                  <v-col 
                    v-for="item in categories"
                    :key="item.text"
                    class = "d-flex child-flex"
                    cols="3"
                
                  >

                  <template >                                    
                    <v-card
                      v-if="!selected.includes(item)"
                      :disabled="loading"
                      class="mx-auto grey lighten-4"
                      max-width="344"
                      :to="{name : 'product-details'}"
                    >
                      <v-img
                        :src="`../../${item.image}`"
                        height="200px"
                        :lazy-src="item.lazyimg"
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
                </template><br><br><br>
              </v-col>
            </v-row>
            </v-container>

          </v-card>
         
          </v-container>
        </template>
      </v-container>
    </div>

        <!-- DISPLAY ONLY ON SMALL AND SMALLER DEVICES -->

    <div class="service2 hidden-md-and-up" style="margin-top:-10px;">
      <v-container>
        <template>
          <v-container fluid>
            <v-col sm="12" xs="12">
              <v-card height="1000px" style=" overflow-y : auto; width:100%;" flat>
              <v-row
                align="center"
                justify="start"
              >
                <v-col
                  v-if="!allSelected"
                  sm="12"
                >
                  <v-text-field
                    solo
                    color="#673AB7"
                    ref="search"
                    v-model="search"
                    hide-details
                    label="Search all products..."
                    single-line
                  ></v-text-field>
                </v-col>
              </v-row><br>

              <v-container fluid>
                <v-row class="">
                  <v-col 
                    v-for="item in categories"
                    :key="item.text"
                    class = "d-flex child-flex"
                    cols="6"
                
                  >

                  <template >                                    
                    <v-card
                      v-if="!selected.includes(item)"
                      :disabled="loading"
                      class="mx-auto grey lighten-4"
                      max-width="344"
                      :to="{name : 'product-details'}"
                    >
                      <v-img
                        :src="`../../${item.image}`"
                        height="200px"
                        :lazy-src="item.lazyimg"
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
                </template><br><br><br>
              </v-col>
            </v-row>
            </v-container>

          </v-card>
          </v-col>
          </v-container><br><br>
        </template>
      </v-container>
    </div>

</div>
</template>






<script>
export default {
    name : 'product-content',

    data: () => ({
      items: [
        {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
        {
          text: 'Nightlife',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
        {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
         {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
        {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
        {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
        {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
         {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
         {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
         {
          text: 'Palm Sandal',
          image: 'assets/images/product-2-1.jpg',
          lazyimg:'assets/images/product-2-1.jpg',
        },
        
       
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


<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: white;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>