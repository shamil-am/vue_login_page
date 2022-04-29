<template>
  <div class="product">
    <v-container v-if="product" pt-16>
      <v-row>
        <v-col cols="12" md="2">
          <v-btn @click="goBack" color="blue lighten-4"> Go back </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <v-img height="250" :src="product.image" contain></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card max-width="100%">
            <template slot="progress">
              <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating :value="product.rating.rate" color="amber" dense half-increments readonly size="14"></v-rating>
                <div class="grey--text ms-4">{{ product.rating.rate }} / {{ product.rating.count }}</div>
              </v-row>
              <div class="my-4 text-subtitle-1">• {{ product.category }}</div>
              <div>{{ product.description }}</div>
            </v-card-text>
            <v-card-text> Price: {{ product.price }} $ </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductService from "../../api/products.service";

export default {
  components: {},
  data() {
    return {
      product: null,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async getProduct() {
      let { data } = await ProductService.getProduct(this.$route.params.id);
      this.product = data;
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>