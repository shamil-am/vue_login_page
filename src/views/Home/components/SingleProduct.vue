<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card :loading="loading" class="mx-auto my-4 pa-4" max-width="100%">
      <v-img height="200" :src="product.image" contain></v-img>

      <v-card-title>{{ titleWrapper(product.title) }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>
      </v-card-text>

      <v-card-text>
        <div class="my-4 text-subtitle-1">{{ product.category }}</div>
        <div class="product-description">{{ product.description }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn outlined rounded text> More </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="likeProduct(product)">
          <v-icon :color="alreadyLiked">mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: ["product"],
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    ...mapMutations({
      likeProduct: "likeProduct",
    }),
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    titleWrapper(title) {
      return title.split("").slice(0, 18).concat("...").join("");
    },
  },
  computed: {
    ...mapGetters({
      liked: "_likedProducts",
    }),
    alreadyLiked() {
      return this.liked.find((el) => el.id === this.product.id) ? "red" : "black";
    },
  },
};
</script>

<style scoped>
.product-description {
  height: 5rem;
  overflow-y: scroll;
}
.product-description::-webkit-scrollbar {
  display: none;
}
</style>
