<template>
    <div class="service" style="margin-top:-210px;">
        <div class="hidden-sm-and-down">
            <v-app>

            <SideNavbar />

            <v-main>
                <v-container fluid>
                <!-- Dashboard page Content -->
                <ServiceContentView />

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
                <ServiceContentView />

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
import ServiceContentView from './ServiceContentView.vue'
import SideNavbar from '../../components/SideNavbar.vue'
import Footers from '../../components/Footers.vue'
export default {
    name: 'service',
    tab: null,
    components:{ServiceContentView, SideNavbar, Footers}
}
</script>