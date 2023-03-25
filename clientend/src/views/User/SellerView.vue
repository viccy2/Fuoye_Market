<template>
    <div class="product" style="margin-top:20px;">
        <div class="hidden-sm-and-down">
            <AppPagesNavbar />
            <SellerContentView />
        </div>
        <div class="hidden-md-and-up">
            <SellerContentView />
        </div>
    </div>
</template>
<script>
import SellerContentView from './SellerContentView.vue'
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
export default {
    name: 'seller',
    tab: null,
    components:{SellerContentView, AppPagesNavbar}
}
</script>