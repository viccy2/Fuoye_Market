<template>
    <div class="product-details">
        <AppPagesNavbar />
        <div class="details1" style="margin-top:50px">
           <v-col sm="10" class="pa- mx-auto">
                <v-card class="pa-2">
                        <v-img src="../../assets/images/f.jpg" style="height:52vh;"> </v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color ="#673AB7"> #250,000</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn  :to="{name : 'seller-page'}" style="background-color:#673AB7;color:white"  tile @click="Buy">Connect</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h3>S21 Ultra</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        
                        <span class="text-color-black text-capitalize font-weight-bold text-decoration-underline" style="color:black" >
                            Samsung
                        </span>
                       
                    </v-card-text>
                    <v-card-text class="grey--text">
                        <p>This is one of the available Samsung S21 products.
                        <span class="text-color-black text-capitalize font-weight-bold text-decoration-underline" style="color:black" >
                        </span>
                        </p>
                    </v-card-text>
                     <v-card-subtitle class="headline">
                      <h6>Seller : VAD </h6>
                      
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </div>
       <Footers />
    </div>
</template>

<script>
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
import Footers from '../../components/Footers.vue'
export default {
    name : 'product-details',
    components:{AppPagesNavbar, Footers},
    data(){
        return {

        }
    }
}
</script>