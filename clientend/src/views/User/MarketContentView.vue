<template>
    <div class="market-content">
      
        <div class="hidden-sm-and-down">
          <div class="product" style="margin-top:-130px;">
            <MarketProductView /><br>
          </div>
          <div class="service" style="margin-top:-130px;">
            <MarketServiceView />
          </div>
        </div> 

        <div class="hidden-md-and-up">
          <div class="product" style="margin-top:-130px;">
            <MarketProductView /><br>
          </div>
          <div class="service" style="margin-top:-130px;">
            <MarketServiceView />
          </div>
        </div>  

    </div>
    
</template>

<script>
import MarketProductView from './MarketProductView.vue'
import MarketServiceView from './MarketServiceView.vue'
export default {
  name : 'market-content',
  components : { MarketServiceView, MarketProductView},
    
}
</script>