<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <router-link to="/products/2">
      <v-card :loading="loading" class="mx-auto my-4 pa-4" max-width="100%" v-ripple pointer>
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
          <div class="productDescription">{{ product.description }}</div>
        </v-card-text>
      </v-card>
    </router-link>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    cardImage: {
      color: "red",
    },
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    titleWrapper(title) {
      return title.split("").slice(0, 18).concat("...").join("");
    },
  },
  props: ["product"],
};
</script>

<style scoped>
.productDescription {
  height: 5rem;
  overflow-y: scroll;
}
.productDescription::-webkit-scrollbar {
  display: none;
}
</style>
