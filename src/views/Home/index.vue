<template>
  <div class="home">
    <Navbar />
      <Loader v-if="!productsLoaded" />
      <Products v-else :products="products" />
  </div>
</template>

<script>
import Navbar from "../../common/Navbar.vue";
import Loader from "../../common/Loader.vue";
import ProductService from "../../api/products.service";
import Products from "./components/Products.vue";
export default {
  components: {
    Navbar,
    Loader,
    Products,
  },
  data() {
    return {
      products: [],
      productsLoaded: false,
    };
  },
  methods: {},
  async mounted() {
    let { data } = await ProductService.getProducts();
    this.products = data;
    this.productsLoaded = true;
  },
};
</script>

