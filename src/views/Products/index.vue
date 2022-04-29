<template>
  <v-container pt-16>
    <h1>Products</h1>
    <v-row>
      <SingleProducts v-for="product in products" :key="product.id" :product="product" />
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <!-- <v-pagination v-model="page" :length="pageCount" circle></v-pagination> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import './index.scss'
import ProductService from "../../api/products.service";
import SingleProducts from "./components/SingleProduct.vue";

export default {
  components: {
    SingleProducts,
  },
  data() {
    return {
      // allProducts: [],
      products: [],
      // page: 1,
      // productCount: 10,
    };
  },
  methods: {
    async getProducts() {
      let { data } = await ProductService.getProducts();
      this.products = data;
    },
  },
  // computed: {
  //   pageCount() {
  //     let count = Math.ceil(this.products.length / this.productCount);
  //     return count > 1 ? count : 1;
  //   },
  //   productsOnPage() {
  //     return this.products.slice((this.page - 1) * this.productCount, this.page * this.productCount);
  //   },
  // },
  mounted() {
    this.getProducts();
  },
};
</script>
