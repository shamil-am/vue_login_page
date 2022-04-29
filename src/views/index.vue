<template>
  <div>
    <Navbar />
    <Loader v-if="$store.state.loader.loaded" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../common/Navbar.vue";
import Loader from "../common/Loader.vue";
// import { mapGetters } from "vuex";
export default {
  components: {
    Navbar,
    Loader,
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
};
</script>

