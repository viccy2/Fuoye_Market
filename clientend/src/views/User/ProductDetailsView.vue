<template>
    <div class="product-details ">
        <AppPagesNavbar />

         <!-- DISPLAY ON LARGE DEVICE -->
        <div class="details1 hidden-sm-and-down">
           <v-col sm="10" class="pa- mx-auto"><br><br>
                <v-card class="pa-2" flat>
                    <center>
                        <img :src="`https://fuoyemarket.intellicsolutions.org/images/${vcard.image_link}`" style="height:50%;"> 
                    </center>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color ="#673AB7"> #{{ vcard.price }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn  :to="{name : 'seller-page', params: { id : vcard.seller_id}}"  style="background-color:#673AB7;color:white"  tile>Connect</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h3>{{ vcard.name }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        
                        <span class="text-color-black text-capitalize font-weight-bold text-decoration-underline" style="color:black" >
                            {{ vcard.type}}
                        </span>
                       
                    </v-card-text>
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="color:black" >
                          Product Details :
                        </span><br>
                        <p>
                            {{ vcard.describtion}}
                        </p>
                        <p class="font-weight-bold ">
                            Quantity available : {{ vcard.quantity}} 
                        </p>
                    </v-card-text>
                    
                     <v-card-subtitle class="headline font-italic font-weight-bold" style="width:100%;">
                      <h6 style="font-size:12px;">Seller : {{ vcard.seller.username }}</h6>
                      <h6 style="font-size:12px;">Location : {{ vcard.location }} </h6>
                      
                    </v-card-subtitle><br><br>
                </v-card>
            </v-col>
        </div>
         <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
        <div class="details1 hidden-md-and-up">
           <v-col sm="10" class="pa- mx-auto"><br>
                <v-card class="pa-2" flat>
                    <center>
                        <img :src="`https://fuoyemarket.intellicsolutions.org/images/${vcard.image_link}`"  style="width:100%;"> 
                    </center>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color ="#673AB7"> #{{ vcard.price }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn  :to="{name : 'seller-page', params: { id : vcard.seller_id}}" style="background-color:#673AB7;color:white"  tile>Connect</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h5>{{ vcard.name }}</h5>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        
                        <span class="text-color-black text-capitalize font-weight-bold text-decoration-underline" style="color:black" >
                            {{ vcard.type}}
                        </span>
                       
                    </v-card-text>
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="font-size:11px;color:black;" >
                          Product Details :
                        </span><br>
                        <p style="font-size:10px;">
                            {{ vcard.describtion}}
                        </p>
                        <p class="font-weight-bold " style="font-size:11px;">
                            Quantity available : {{ vcard.quantity}} 
                        </p>
                    </v-card-text>
                    <v-card-subtitle class="headline font-italic font-weight-bold" style="margin-top:-30px;">
                      <h6 style="font-size:11px;">Seller : {{ vcard.seller.username }}</h6>
                      <h6 style="font-size:11px;">Location : {{ vcard.location }} </h6>
                      
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
            vcard: {}
        }  
    },
    mounted(){
        const id = this.$route.params.id;
        // console.log(id)
        fetch(`https://fuoyemarket.intellicsolutions.org/api/general/product-details?product_id=${id}`)
        .then(response => response.json())
        .then(data => {
            this.vcard = data.data;
            // console.log(this.vcard )
        })
    }
}
</script>