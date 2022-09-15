<template>
    <div class="service" style="margin-top:50px;">
        <ServiceContentView />
    </div>
</template>
<script>
import ServiceContentView from './ServiceContentView.vue'
export default {
    name: 'service',
    tab: null,
    components:{ServiceContentView}
}
</script>