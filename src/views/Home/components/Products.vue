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
import SingleProducts from "./SingleProduct.vue";

export default {
  props: ["products"],
  components: {
    SingleProducts,
  },
  data() {
    return {
      page: 1,
      productCount: 10,
    };
  },
  computed: {
    pageCount() {
      return this.products.length / this.productCount;
    },
    productsOnPage() {
      return this.products.slice((this.page - 1) * this.productCount, this.page * this.productCount);
    },
  },
};
</script>
