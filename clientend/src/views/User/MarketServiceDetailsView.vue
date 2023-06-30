<template>
    <div class="market-service-details ">
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
                                
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn :to="{ name: 'edit-service', params: { id : post.id }}" style="background-color:#673AB7;color:white"  tile>Edit</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h3>{{ post.name }}</h3>
                    </v-card-subtitle>
                
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="color:black" >
                            What we do :
                        </span><br>
                        <p>
                            {{ post.describtion}}
                        </p>
                        <p class="font-weight-bold ">
                            Happy Clients : {{ post.no_of_clients }} +  
                        </p>
                        <p class="font-weight-bold ">
                            Location : {{ post.location }} 
                        </p>
                    </v-card-text><br>
                    
                    <center> <v-btn small outlined color ="red" style="width:100%;" @click="Delete()">Delete</v-btn></center>

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
                    <v-card-actions class="pb-0" style="margin-top:px;">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                          
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn :to="{ name: 'edit-service', params: { id : post.id }}" style="background-color:#673AB7;color:white"  tile>Edit</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                      <h5>{{ post.name }}</h5>
                    </v-card-subtitle>
                    
                    <v-card-text class="grey--text">
                        <span class="text-color-black text-capitalize font-weight-bold " style="font-size:11px;color:black;" >
                            What we do :
                        </span><br>
                        <p style="font-size:10px;">
                            {{ post.describtion}}
                        </p>
                        <p class="font-weight-bold " style="font-size:11px;">
                            Happy Clients : {{ post.no_of_clients }} +  
                        </p>
                        <p class="font-weight-bold ">
                            Location : {{ post.location }} 
                        </p><br>
                       <center> <v-btn small outlined color ="red" style="width:100%;" @click="Delete()">Delete</v-btn></center>
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
    name : 'market-service-details',
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
            
        }
        catch(err){
            console.log(err)
        }
        
    },
    methods:{
       async Delete(){
            try {
                const formData = new FormData();
                formData.append("product_id",     this.$route.params.id);
                formData.append("token",          this.seller.token);
                const response = await API.deleteProduct(formData);
                // console.log(response)
                this.successMessage = response.msg;
            
            
        }
        catch(err){
            console.log(err)
        }
        }
    }
    
    
}
</script>