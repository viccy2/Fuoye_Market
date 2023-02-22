<template>
    <div class="content-view" >
        <!-- SAVED SELLER SECTION -->
            <div class="new-sellers">
             <v-card flat class="rounded-lg " elevation=''>
             <v-container fluid>

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
                    label="Search sellers ..."
                    single-line
                  ></v-text-field>
                </v-col>
              </v-row><br>
              <v-card-title style="font-weight:bold;margin-top:-10px;font-size:12px;"> Saved Sellers For You : </v-card-title>
              <v-container fluid>
                <v-row class="">
                  <v-col 
                    v-for="item in categories"
                    :key="item.text"
                    class = "d-flex child-flex"
                    cols="12"
                
                  >

                  <template >                                   
                    <v-card flat class="ma-1 " height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  :src="`${item.image}`">
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:10px; margin-top:-15px">
                                                Continental - Contiecocontact 
                                            </div>
                                        </v-card-text>
                                    </v-list-item>
                                </v-flex>
    
                                <v-flex lg4 md4 sm4 xs4>
                                    <v-card-text>
                                        <v-btn small :to="{name : 'seller-page'}"  color='#673AB7' rounded  class="text-capitalize" style="width:100%; margin-top:-5px"><span style="color:white">View</span></v-btn>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card>
                </template><br>
              </v-col>
            </v-row>
            </v-container>

          </v-card>
          </v-col>
          </v-container>
        </template>


    </v-container>
    </v-card>
 </div>
            <!-- END NEW SELLER SECTION -->
    </div>
</template>
<script>
export default {
    name : 'product-content',
  
    data: () => ({
      items: [
        {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
        {
          text: 'Nightlife',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
        {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
         {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
        {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
        {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
        {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
         {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
         {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
        },
         {
          text: 'Palm Sandal',
          image: '../../assets/images/product-2-1.jpg',
          lazyimg:'../../assets/images/product-2-1.jpg',
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

  }
</script>
