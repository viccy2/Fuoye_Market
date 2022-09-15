<template>
    <div class="product" style="margin-top:33px;"><br>
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