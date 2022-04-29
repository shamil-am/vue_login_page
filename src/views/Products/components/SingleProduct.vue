<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card class="mx-auto my-4 pa-4" max-width="100%">
      <v-img height="200" :src="product.image" contain></v-img>

      <v-card-title>{{ titleWrapper(product.title) }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating :value="product.rating.rate" color="amber" dense half-increments readonly size="14"></v-rating>
          <div class="grey--text ms-4">{{ product.rating.rate }} / {{ product.rating.count }}</div>
        </v-row>
      </v-card-text>

      <v-card-text>
        <div class="my-4 text-subtitle-1">{{ product.category }}</div>
        <div class="product-description">{{ product.description }}</div>
      </v-card-text>
      <v-card-actions>
        <router-link :to="`/products/${product.id}`">
          <v-btn outlined rounded color="deep-purple"> More </v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn icon @click="likeProduct(product)">
          <v-icon :color="alreadyLiked">mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["product"],
  data: () => ({
    selection: 1,
  }),
  methods: {
    ...mapMutations({
      likeProduct: "productModule/likeProduct",
    }),
    titleWrapper(title) {
      return title.split("").slice(0, 15).concat("...").join("");
    },
  },
  computed: {
    alreadyLiked() {
      return this.$store.state.productModule.likedProducts.find((el) => el.id === this.product.id) ? "red" : "gray";
    },
  },
};
</script>
