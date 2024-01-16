<template>
    <div class="product-details ">
        <AppPagesNavbar />

         <!-- DISPLAY ON LARGE DEVICE -->
        <div class="details1 hidden-sm-and-down">
           <v-col sm="10" class="pa- mx-auto"><br><br>
                <v-card class="pa-2" flat>
                    <center>
                        <img :src="`https://fuoyemarket.intellicsolutions.org/images/${post.image_link}`" style="height:300px;"> 
                    </center>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color ="#673AB7"> #{{ post.price }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn @click="sendWhatsAppMessage(`${contact}`, 'Hello, I want to purchase a product.')"  style="background-color:#673AB7;color:white"  tile>Connect</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h3>{{ post.name }}</h3>
                    </v-card-subtitle>
                
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="color:black" >
                          Product Details :
                        </span><br>
                        <p>
                            {{ post.describtion}}
                        </p>
                        <p class="font-weight-bold ">
                            Quantity available : {{ post.quantity}} 
                        </p>
                        <p class="font-weight-bold ">
                            Location : {{ post.location }} 
                        </p>
                    </v-card-text><br>
                    
                    <center> <v-btn :to="{name : 'seller-page', params: { id : post.seller_id }}" small outlined color ="#673AB7" style="width:100%;">View seller</v-btn></center>

                </v-card><br><br>
            </v-col>
        </div>
         <!-- END DISPLAY ON LARGE DEVICE -->

        <!-- DISPLAY ON SMALL DEVICE -->
        <div class="details1 hidden-md-and-up">
           <v-col sm="10" class="pa- mx-auto"><br>
                <v-card class="pa-2" flat>
                    <center>
                        <img :src="`https://fuoyemarket.intellicsolutions.org/images/${post.image_link}`"  style="width:100%;"> 
                    </center>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color ="#673AB7"> #{{ post.price }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn  @click="sendWhatsAppMessage(`${contact}`, 'Hello, I want to purchase a product.')" style="background-color:#673AB7;color:white"  tile>Connect</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h5>{{ post.name }}</h5>
                    </v-card-subtitle>
                    
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="font-size:11px;color:black;" >
                          Product Details :
                        </span><br>
                        <p style="font-size:10px;">
                            {{ post.describtion}}
                        </p>
                        <p class="font-weight-bold " style="font-size:11px;">
                            Quantity available : {{ post.quantity}} 
                        </p>
                        <p class="font-weight-bold ">
                            Location : {{ post.location }} 
                        </p><br>
                       <center> <v-btn :to="{name : 'seller-page', params : { id : post.seller_id }}" small outlined color ="#673AB7" style="width:100%;">View seller</v-btn></center>
                    </v-card-text>
            
                </v-card><br><br>
            </v-col>
        </div>
         <!-- END DISPLAY ON SMALL DEVICE -->
       <Footers />
    </div>
</template>

<script>
import API from '../../api'
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
import Footers from '../../components/Footers.vue'
export default {
    name : 'product-details',
    components:{AppPagesNavbar, Footers},
    data(){
        return {
            post : {},
            contact : '',
            seller : '',
            sellid : '',
        }  
    },
    async created(){
        try {
            const response = await API.productDetails(this.$route.params.id);
            // console.log(response)
            this.post = response.data;
            this.contact = response.data.seller_details.whatsapp;
            this.seller = response.data.seller.username;
            // this.sellid = response.data.seller_details;
            
        }
        catch(err){
            console.log(err)
        }
        
    },
    methods: {
       sendWhatsAppMessage(phoneNumber, message) {
            // alert(phoneNumber);
            // alert(message);
            // Replace 'YOUR_MESSAGE' with the content you want to send
            var messages = encodeURIComponent(message);
            //alert(messages);
            // Construct the WhatsApp URL with the phone number and message
            var url = 'https://wa.me/' + phoneNumber + '?text=' + messages;

            // Open the WhatsApp URL in a new tab
            window.open(url, '_blank');
        }
  
    }

    // mounted(){
    //     const id = this.$route.params.id;
    //     // console.log(id)
    //     fetch(`https://fuoyemarket.intellicsolutions.org/api/general/product-details?product_id=${id}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         this.post = data.data;
    //         // console.log(this.post )
    //     })
    // }
}
</script>