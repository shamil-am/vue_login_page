<template>
  <div class="home">
    <Navbar />
    <h1 class="mt-16">Home page</h1>
    <router-view></router-view>
    <!-- <Loader v-if="!productsLoaded" /> -->
  </div>
</template>

<script>
import Navbar from "../../common/Navbar.vue";
// import Products from "../Products";
// import Loader from "../../common/Loader.vue";
// import ProductService from "../../api/products.service";
// import Products from "./components/Products.vue";
// import { mapGetters } from "vuex";
export default {
  components: {
    Navbar,
    // Products,
    // Loader,
    // Products,
  },
  data() {
    return {
      // allProducts: [],
      // products: [],
      // productsLoaded: false,
    };
  },
  methods: {},
  computed: {
    // ...mapGetters({
    //   _searchedProduct: "_searchedProduct",
    // }),
  },
  watch: {
    // _searchedProduct(newV) {
    //   this.products = this.allProducts.filter((product) => {
    //     return product.title.toUpperCase().includes(newV.toUpperCase());
    //   });
    // },
  },
  async mounted() {
    // let { data } = await ProductService.getProducts();
    // this.products = data;
    // set to all for future filtering process
    // this.allProducts = data;
    // this.productsLoaded = true;
  },
};
</script>

