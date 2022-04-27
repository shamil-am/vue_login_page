<template>
  <div class="home">
    <Navbar />
    <v-container class="pt-15">
      <v-row>
        <Loader v-if="!productsLoaded"/>
        <SingleProducts v-else v-for="product in products" :key="product.id" :product="product" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SingleProducts from "../components/SingleProduct.vue";
import Navbar from "../components/common/Navbar.vue";
import api from "../api/_axios";
import Loader from '../components/common/Loader.vue'
export default {
  components: {
    SingleProducts,
    Navbar,
    Loader
  },
  data() {
    return {
      products: [],
      productsLoaded: false,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      let response = await api.get();
      this.products = response.data;
      this.productsLoaded = true;
    },
  },
};
</script>

