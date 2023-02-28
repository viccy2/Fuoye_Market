<template>
  <div>
    <AppNavbar  /><br><br>
  <v-container>
    <v-row>
      <v-col>
        <h4>Products</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="newProduct.name" label="Product Name"></v-text-field>
        <v-text-field v-model="newProduct.description" label="Product Description"></v-text-field>
        <v-text-field v-model="newProduct.price" label="Product Price"></v-text-field>
        <v-btn @click="createProduct"  class="text-capitalize"  variant="tonal"
              rounded outlined style="width:100%;color:#673AB7;font-size:13px;">
                                Add Product
        </v-btn>
      </v-col>
      <v-col v-if="selectedProduct">
        <v-text-field v-model="selectedProduct.name" label="Product Name"></v-text-field>
        <v-text-field v-model="selectedProduct.description" label="Product Description"></v-text-field>
        <v-text-field v-model="selectedProduct.price" label="Product Price"></v-text-field>
        <v-btn @click="updateProduct" color="primary">Update Product</v-btn>
        <v-btn @click="deleteProduct" color="error">Delete Product</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(product, index) in products" :key="index" class="mb-3">
        <v-card>
          <v-card-title>
            {{ product.name }}
          </v-card-title>
          <v-card-text>
            {{ product.description }} - ${{ product.price }}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="selectProduct(index)" color="primary">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import 'animate.css'
import AppNavbar from '../../components/AppNavbar.vue'
export default {
  name: 'market',
  components: {AppNavbar},
  data() {
    return {
      products: [],
      newProduct: {
        name: '',
        description: '',
        price: 0
      },
      selectedProduct: null
    }
  },
  methods: {
    async getProducts() {
      const response = await axios.get('/api/products')
      this.products = response.data
    },
    async createProduct() {
      const response = await axios.post('https://fuoyemarket.intellicsolutions.org/api/upload-product/', this.newProduct)
      this.products.push(response.data)
      this.newProduct = {
        name: '',
        description: '',
        price: 0
      }
    },
    selectProduct(index) {
      this.selectedProduct = Object.assign({}, this.products[index])
    },
    async updateProduct() {
      const index = this.products.indexOf(this.selectedProduct)
      const response = await axios.put(`/api/products/${this.selectedProduct.id}`, this.selectedProduct)
      this.products.splice(index, 1, response.data)
      this.selectedProduct = null
    },
    async deleteProduct() {
      const index = this.products.indexOf(this.selectedProduct)
      await axios.delete(`/api/products/${this.selectedProduct.id}`)
      this.products.splice(index, 1)
      this.selectedProduct = null
    }
  },
  created() {
    this.getProducts()
  }
}
</script>
