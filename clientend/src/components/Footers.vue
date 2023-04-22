<template>
    <div class="footers">
        <v-footer fixed class="white">
            <v-col class="text-center" cols="12">
                <span style="font-size:11px;">{{ new Date().getFullYear() }}</span> - <strong style="color:#673AB7;font-size:12px">FuoyeMarket</strong>
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