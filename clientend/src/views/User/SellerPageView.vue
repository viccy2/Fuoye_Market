<template>
    <div class="seller-page">
         <AppPagesNavbar />
         <v-container fluid>
         <div class="hidden-sm-and-down" style="margin-top:50px">
             <v-layout row wrap justify-space-between class="pa-3">
                <v-flex md12 lg12 sm12 xs12>
                <v-card class="mx-auto" outlined flat>
                  <v-banner tile color="#673AB7" single-line height="25" width="200" style="margin-top:-10px">
                      <p style="font:normal;font-size:14px;margin-top:-4px;font-weight:bold">Premium Bestseller</p>
                  </v-banner>
                    <v-list-item three-line style="margin-top:-10px">
                        <v-list-item-avatar tile  height="150" width="200" color="grey">
                          <img class="" src="../../assets/images/j.jpg" >
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="items text-capitalize">
                                Continental - Contiecocontact 5
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                               <v-row>
                                <v-col  md="3"  lg="3">
                                 
                                </v-col>
                                <v-col  md="3" lg="3">
                                  <div class="font-italic" style="text-decoration:none;font-size:12px;font-weight:bold;margin-top:10px;">Category <br><br><span>10k</span>
                                  </div>
                                </v-col>
                                <v-col  md="3" lg="3">
                                 <div class="font-italic mt-2" style="text-decoration:none;font-size:12px;font-weight:bold">Location <br><br> <span> 340</span>
                                 </div>
                                </v-col>
                                <v-col  md="3" lg="3">
                                  <div class="font-italic mt-2" style="text-decoration:none;font-size:12px;font-weight:bold">Status <br><br><span><v-icon color="success">mdi-check-circle</v-icon></span>
                                  </div>
                                </v-col>
                               </v-row>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                              <v-row>
                                <v-col  md="6">

                                </v-col>
                                <v-col  md="6">
                                  <v-btn rounded class="text-capitalize mt-3" style="font-size:;font-weight:bold;float:right"  color="#673AB7">
                                     <span style="color:white ">Message</span>
                                  </v-btn>
                                </v-col>
                              </v-row>
                              
                            </v-list-item-subtitle>
                        </v-list-item-content>  
                    </v-list-item>
                </v-card>
            </v-flex>
             </v-layout>
         </div>
         <div class="hidden-md-and-up" style="margin-top:40px">
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
                                <p class="font-italic" style="text-decoration:none;font-size:12px;font-weight:bold;margin-top:-4px;">Category<br><span>SUV</span>
                                </p>
                            </v-col>
                            <v-col  sm="4" >
                                <p class="font-italic" style="text-decoration:none;font-size:12px;font-weight:bold;margin-top:-4px;">Location<br><span>SUV</span>
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
    </div>
</template>
<script>
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
export default {
   name : 'seller-page',
   components:{AppPagesNavbar},
   data(){
    return {

    }
   }
}
</script>