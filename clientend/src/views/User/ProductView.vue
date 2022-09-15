<template>
    <div class="product" style="margin-top:50px;">
        <ProductContentView />
    </div>
</template>
<script>
import ProductContentView from './ProductContentView.vue'
export default {
    name: 'product',
    tab: null,
    components:{ProductContentView}
}
</script>