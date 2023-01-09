<template>
    <div class="seller-page">
         <AppPagesNavbar />
         <v-container fluid><br><br>
         <div class="hidden-sm-and-down" >
             <v-layout row wrap justify-space-between class="pa-3">
                <v-flex md12 lg12 sm12 xs12>
                <v-card class="mx-auto"  flat>
                  
                    <v-list-item three-line style="">
                        <v-list-item-avatar flat  height="50" width="50" color="grey">
                          <img class="" src="../../assets/images/j.jpg" >
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5">
                               <v-row><br>
                                <v-col  md="3"  lg="3">
                          
                                </v-col>
                                <v-col  md="3" lg="3">
                                  <div  style="text-decoration:none;font-size:12px;">Category <br><br><span>10k</span>
                                  </div>
                                </v-col>
                                <v-col  md="3" lg="3">
                                 <div style="text-decoration:none;font-size:12px;">Location <br><br> <span> 340</span>
                                 </div>
                                </v-col>
                                <v-col  md="3" lg="3">
                                  <div  style="text-decoration:none;font-size:12px;">Status <br><br><span><v-icon color="success">mdi-check-circle</v-icon></span>
                                  </div>
                                </v-col>
                               </v-row>
                            </v-list-item-title>
                            
                        </v-list-item-content>  
                    </v-list-item>
                </v-card>
            </v-flex>
             </v-layout>
         </div>

         <div class="hidden-md-and-up">
             <v-layout row wrap justify-space-between class="pa-3">
                <v-flex md12 lg12 sm12 xs12>
                <v-card class="mx-auto" outlined flat height='200'>
                  <v-banner tile color="#673AB7" single-line height="25" width="200" style="margin-top:-10px">
                      <p style="font:normal;font-size:14px;margin-top:-4px;font-weight:bold">Premium Bestseller</p>
                  </v-banner>
                    <v-list-item three-line style="margin-top:-10px">
                        <v-list-item-avatar tile  height="100" width="100" color="grey">
                          <img class="" src="../../assets/images/j.jpg" >
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="items text-capitalize">
                                Continental - Contiecocontact 5 <br><br>
                                <v-btn rounded style="background-color:#673AB7;color:white">Message</v-btn>
                            </div>
                        </v-list-item-content>    
                    </v-list-item>
                    <v-card-text>
                        <v-row>
                            <v-col  sm="4" >
                                <p class="font-italic" style="text-decoration:none;font-size:12px;font-weight:bold;margin-top:-4px;">Category<br><span>Mobile Devices</span>
                                </p>
                            </v-col>
                            <v-col  sm="4" >
                                <p class="font-italic" style="text-decoration:none;font-size:12px;font-weight:bold;margin-top:-4px;">Location<br><span>Ikole-Ekiti</span>
                                </p>
                            </v-col>
                            <v-col  sm="4" >
                                <p class="font-italic" style="text-decoration:none;font-size:12px;font-weight:bold;margin-top:-4px;">Status<br><span><v-icon color="success">mdi-check-circle</v-icon></span>
                                </p>
                            </v-col>
                        </v-row>             
                    </v-card-text>
                </v-card>
            </v-flex>
             </v-layout>
         </div>
         </v-container>
         <Footers />
    </div>
</template>
<script>
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
import Footers from '../../components/Footers.vue'
export default {
   name : 'seller-page',
   components:{AppPagesNavbar, Footers},
   data(){
    return {

    }
   }
}
</script>