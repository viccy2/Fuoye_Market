<template>
    <div class="team">
        <HomeNavbar /><br>><br><br><br><br>
        <section>
        <v-container>
            <div class="">
            <h2 id="h25">Meet The Team</h2><br><br><br><br><br>
            <div>
            <v-layout row wrap>
              <v-flex md4 lg4>
                <img class="img7 rounded-circle" src="../assets/images/pel.jpg">
              </v-flex>
              <v-flex md4 lg4>
                <img class="img7 grey rounded-circle" src="../assets/images/vad1.png">
              </v-flex>
              <v-flex md4 lg4>
                <img class="rounded-circle img7" src="https://doteightplus.com/images/dot.svg">
              </v-flex>
            </v-layout>
          </div>
          </div>
        </v-container>
        </section>
    </div>
</template>


<script>
import HomeNavbar from '../components/HomeNavbar.vue'
export default {
    name : 'team',
    components:{HomeNavbar}
}
</script>

<style scoped>
#h25{
 color:#673AB7;font-weight:bold;font-size:33px;line-height:1.2;text-align:center;
}
.img7{
width:30%;height:100px;
}
</style>
