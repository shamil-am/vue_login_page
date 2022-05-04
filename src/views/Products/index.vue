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
import { mapGetters } from "vuex";

export default {
  components: {
    SingleProducts,
  },
  data() {
    return {
      allProducts: [],
      filteredProducts: [],
      page: 1,
      productToShow: 4,
    };
  },
  methods: {
    async getProducts() {
      let { data } = await ProductService.getProducts();
      this.allProducts = data;
      this.filterProducts();
    },
    filterProducts() {
      let searched = this.$store.state.productModule.searchedProduct;
      this.filteredProducts = searched ? this.allProducts.filter((product) => product.title.toUpperCase().includes(searched.toUpperCase())) : this.allProducts;
      this.page = 1;
    },
  },
  computed: {
    ...mapGetters({
      searchedProduct: "productModule/_searchedProduct",
    }),
    productsOnPage() {
      return this.filteredProducts.slice((this.page - 1) * this.productToShow, this.page * this.productToShow);
    },
    pageCount() {
      let count = Math.ceil(this.filteredProducts.length / this.productToShow);
      return count > 1 ? count : 1;
    },
  },
  watch: {
    searchedProduct() {
      this.filterProducts()
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>