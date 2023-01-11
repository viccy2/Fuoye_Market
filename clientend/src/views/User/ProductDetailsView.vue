<template>
    <div class="product-details ">
        <AppPagesNavbar />

         <!-- DISPLAY ON LARGE DEVICE -->
        <div class="details1 hidden-sm-and-down">
           <v-col sm="10" class="pa- mx-auto"><br><br>
                <v-card class="pa-2" flat>
                        <v-img src="../../assets/images/n50.jpg" style="height:400px;"> </v-img>
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
                    
                     <v-card-subtitle class="headline font-italic font-weight-bold" style="margin-top:-30px;">
                      <h6 style="font-size:12px;">Seller : Adele Store </h6>
                      <h6 style="font-size:12px;">Location : Ikole </h6>
                      
                    </v-card-subtitle><br><br>
                </v-card>
            </v-col>
        </div>
         <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
        <div class="details1 hidden-md-and-up">
           <v-col sm="10" class="pa- mx-auto"><br><br>
                <v-card class="pa-2" flat>
                        <v-img src="../../assets/images/f.jpg" style="height:100%;"> </v-img>
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
                        <span class="text-color-black text-capitalize font-weight-bold " style="font-size:11px;color:black;" >
                          Product Details :
                        </span><br>
                        <p style="font-size:10px;">
                            This is one of the available Samsung S21 products. 
                            vThis is one of the available Samsung S21 products. 
                            This is one of the available Samsung S21 products. 
                            This is one of the available Samsung S21 products. 
                        </p>
                        <p class="font-weight-bold " style="font-size:11px;">
                            Quantity available : 200 pieces 
                        </p>
                    </v-card-text>
                    <v-card-subtitle class="headline font-italic font-weight-bold" style="margin-top:-30px;">
                      <h6 style="font-size:11px;">Seller : Adele Store </h6>
                      <h6 style="font-size:11px;">Location : Ikole </h6>
                      
                    </v-card-subtitle><br><br>
                </v-card>
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
    }
}
</script>