<template>
  <div class="home">
    <Navbar />
    <v-container class="pt-15">
      <v-row>
        <Loader v-if="!productsLoaded" />
        <SingleProducts v-else v-for="product in products" :key="product.id" :product="product" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SingleProducts from "../components/SingleProduct.vue";
import Navbar from "../components/common/Navbar.vue";
import Loader from "../components/common/Loader.vue";
import Products from "../api/products.service";
export default {
  components: {
    SingleProducts,
    Navbar,
    Loader,
  },
  data() {
    return {
      products: [],
      productsLoaded: false,
    };
  },
  methods: {},
  async mounted() {
    let { data } = await Products.getProducts();
    this.products = data;
    this.productsLoaded = true;
  },
};
</script>

