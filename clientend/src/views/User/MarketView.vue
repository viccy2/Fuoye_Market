<template>
    <div>
        <AppNavbar /><br><br><br><br>
        <template>
            <div>
                <v-btn @click="showDropdown = !showDropdown">{{ selectedOption ? selectedOption : 'Select an option' }}</v-btn>
                <v-card v-if="showDropdown">
                <v-list>
                    <v-list-item v-for="(option, index) in options" :key="index" @click="selectOption(option)">
                    <v-list-item-title>{{ option }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-card>
            </div>
</template>
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
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectedOption: null,
      showDropdown: false
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.showDropdown = false;
    }
  }
}
</script>

