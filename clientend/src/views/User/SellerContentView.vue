<template>
    <div class="content-view" >
        <!-- SAVED SELLER SECTION -->
            <div class="new-sellers">
                <v-card flat class="rounded-lg " elevation=''>
                    <v-container fluid>
                        <div class="select-category">
                            <v-text-field rounded grey append-icon="mdi-magnify" label="Search for sellers..." color='#673AB7;' elevation="12">
                                
                            </v-text-field>
                        </div><br><br>
                        <v-card-title style="font-weight:bold;margin-top:-50px;"> Saved Seller For You : </v-card-title>
                        <v-card flat class="ma-1 " height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  src="../../assets/images/Fm.png" >
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:12px; margin-top:-15px">
                                                Continental - Contiecocontact 5
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
                        </v-card><br>
                        <v-card flat class="ma-1" height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  src="../../assets/images/Fm.png" >
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:12px; margin-top:-15px">
                                                Continental - Contiecocontact 5
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
                        </v-card><br>
                        <v-card flat class="ma-1" height="50">
                            <v-layout row wrap>
                                <v-flex lg8 md8 sm8 xs8>
                                    <v-list-item three-line style="margin-top:-10px">
                                        <v-list-item-avatar class="rounded-lg"  height="" width="" color="grey">
                                            <img  src="../../assets/images/Fm.png" >
                                        </v-list-item-avatar>
                                        <v-card-text>
                                            <div class="items text-capitalize" style="font-size:12px; margin-top:-15px">
                                                Continental - Contiecocontact 5
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
                        </v-card><br>

                    </v-container>
                </v-card>
            </div>
            <!-- END NEW SELLER SECTION -->
    </div>
</template>
<script>
export default {
    name : 'product-content',
    data(){
        return{
        
        }
    }
}
</script>