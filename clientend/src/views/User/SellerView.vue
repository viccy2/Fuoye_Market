<template>
    <div class="product" style="margin-top:40px;">
        <SellerContentView />
    </div>
</template>
<script>
import SellerContentView from './SellerContentView.vue'
export default {
    name: 'seller',
    tab: null,
    components:{SellerContentView}
}
</script>