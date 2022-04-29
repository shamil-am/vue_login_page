<template>
  <v-container pt-16>
    <v-row>
      <SingleProducts v-for="product in productsOnPage" :key="product.id" :product="product" />
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-pagination v-model="page" :length="pageCount" circle></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "./index.scss";
import ProductService from "../../api/products.service";
import SingleProducts from "./components/SingleProduct.vue";

export default {
  components: {
    SingleProducts,
  },
  data() {
    return {
      allProducts: [],
      page: 1,
      productToShow: 10,
    };
  },
  methods: {
    async getProducts() {
      let { data } = await ProductService.getProducts();
      this.allProducts = data;
    },
  },
  computed: {
    filteredProducts() {
      let searched = this.$store.state.productModule.searchedProduct;
      return searched 
      ? this.allProducts.filter((product) => product.title.toUpperCase().includes(searched.toUpperCase())) 
      : this.allProducts;
    },
    productsOnPage() {
      return this.filteredProducts.slice((this.page - 1) * this.productToShow, this.page * this.productToShow);
    },
    pageCount() {
      let count = Math.ceil(this.filteredProducts.length / this.productToShow);
      return count > 1 ? count : 1;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>