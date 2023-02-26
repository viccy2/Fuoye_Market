<template>
    <div>
        <AppNavbar /><br><br><br><br>
        <v-row align="center" justify="center">
    <v-col cols="12" md="6">
      <v-text-field
        label="Search"
        outlined
        append-icon="mdi-magnify"
        v-model="searchQuery"
        @input="search"
      ></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
      <v-select
        label="Filter"
        outlined
        v-model="selected"
        :items="options"
        @change="search"
      ></v-select>
    </v-col>
  </v-row>
    </div>
</template>

<script>
import 'animate.css'
import AppNavbar from '../../components/AppNavbar.vue'
export default {
    name : 'market',
    components : {AppNavbar},
    data() {
      return {
      searchQuery: "",
      selected: null,
      options: ["Option 1", "Option 2", "Option 3"]
    };
  },
  methods: {
    search() {
      // perform search logic
    }
  
  }
}
</script>

