<template>
    <div class="footers">
        <v-footer fixed>
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} - <strong style="color:#673AB7;font-size:13px">FuoyeMarket</strong>
            </v-col>
        </v-footer>
    </div>
</template>
<script>
export default {
    name : 'footers',
    data(){
        return{

        }
    }
}
</script>