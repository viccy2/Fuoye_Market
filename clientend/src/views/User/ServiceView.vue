<template>
    <div class="service" style="margin-top:20px;">
        <div class="hidden-sm-and-down">
            <AppPagesNavbar />
            <ServiceContentView />
        </div>
        <div class="hidden-md-and-up">
            <ServiceContentView />
        </div>
    </div>
</template>
<script>
import ServiceContentView from './ServiceContentView.vue'
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
export default {
    name: 'service',
    tab: null,
    components:{ServiceContentView, AppPagesNavbar}
}
</script>