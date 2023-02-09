const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

   devServer: {
        proxy: {
            '/api': {
                target: 'http://fuoyemarket.afolabisalawu.com/api', // paste the copied API url here
                ws: true,
          
            }
        }
    }
 
})
