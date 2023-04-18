<template>
    <div class="product-details2 ">
        <AppPagesNavbar />

         <!-- DISPLAY ON LARGE DEVICE -->
        <div class="details1 hidden-sm-and-down">
           <v-col sm="10" class="pa- mx-auto"><br><br>
                <v-card class="pa-2" flat>
                    <center>
                        <img src="../../assets/images/product-15.jpg" style="height:100%;"> 
                    </center>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color ="#673AB7"> #250,000</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn style="background-color:#673AB7;color:white"  tile @click="Buy">Message</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h3>Smart Tv</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        
                        <span class="text-color-black text-capitalize font-weight-bold text-decoration-underline" style="color:black" >
                            Samsung
                        </span>
                       
                    </v-card-text>
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="color:black" >
                          Product Details :
                        </span><br>
                        <p>
                            This is one of the available Samsung S21 products. 
                            vThis is one of the available Samsung S21 products. 
                            This is one of the available Samsung S21 products. 
                            This is one of the available Samsung S21 products. 
                        </p>
                        <p class="font-weight-bold ">
                            Quantity available : 200 pieces 
                        </p>
                    </v-card-text>
                    
                     
                </v-card>
            </v-col>
        </div>
         <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
        <div class="details1 hidden-md-and-up">
           <v-col sm="10" class="pa- mx-auto"><br>
                <v-card class="pa-2" flat>
                    <center>
                        <img src="../../assets/images/product-15.jpg" style="height:100%;"> 
                    </center>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color ="#673AB7"> #350,000</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn style="background-color:#673AB7;color:white"  tile @click="Buy">Message</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h5>Smart TV</h5>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        
                        <span class="text-color-black text-capitalize font-weight-bold text-decoration-underline" style="color:black" >
                            Sony
                        </span>
                       
                    </v-card-text>
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="font-size:11px;color:black;" >
                          Product Details :
                        </span><br>
                        <p style="font-size:10px;">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p class="font-weight-bold " style="font-size:11px;">
                            Quantity available : 200 pieces 
                        </p>
                    </v-card-text>
                    
                </v-card><br>
            </v-col>
        </div>
         <!-- END DISPLAY ON SMALL DEVICE -->
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
    },
    methods:{
        Buy(){

        }
    }
}
</script>