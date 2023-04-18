<template>
    <div class="product" style="margin-top:-210px;">
        <div class="hidden-sm-and-down">
            <v-app>

            <SideNavbar />

            <v-main>
                <v-container fluid>
                <!-- Dashboard page Content -->
                <ProductContentView />

                </v-container>
                <!-- routes -->
                <router-view></router-view>
                <!-- FOOTER SECTION  -->
                <Footers />
                <!-- END FOOTER SECTION  -->
            </v-main>

            </v-app>
        </div>
        <div class="hidden-md-and-up">
            <v-app>

            <SideNavbar />

                <v-main>
                    <v-container fluid>
                    <!-- Dashboard page Content -->
                    <ProductContentView />

                    </v-container>
                    <!-- routes -->
                    <router-view></router-view>
                    <!-- FOOTER SECTION  -->
                    <Footers />
                    <!-- END FOOTER SECTION  -->
                </v-main>

            </v-app>
            
        </div>
        
    </div>
</template>
<script>
import ProductContentView from './ProductContentView.vue'
import SideNavbar from '../../components/SideNavbar.vue'
import Footers from '../../components/Footers.vue'
export default {
    name: 'product',
    tab: null,
    components:{ProductContentView, SideNavbar, Footers}
}
</script>