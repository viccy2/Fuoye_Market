<template>
    <div class="product" style="margin-top:20px;">
        <div class="hidden-sm-and-down">
            <AppPagesNavbar />
            <ProductContentView />
        </div>
        <div class="hidden-md-and-up">
            <ProductContentView />
        </div>
        
    </div>
</template>
<script>
import ProductContentView from './ProductContentView.vue'
import AppPagesNavbar from '../../components/AppPagesNavbar.vue'
export default {
    name: 'product',
    tab: null,
    components:{ProductContentView, AppPagesNavbar}
}
</script>