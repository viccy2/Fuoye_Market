const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

   devServer: {
        proxy:  'http://fuoyemarket.afolabisalawu.com/', // Backend API url here
        }
    
 
})
