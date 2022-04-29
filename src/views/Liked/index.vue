<template>
  <v-card max-width="450" class="mx-auto mt-4">
    <v-toolbar color="deep-purple">
      <v-toolbar-title>Liked Products</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/products"> <v-btn color="white"> Back </v-btn></router-link>
    </v-toolbar>

    <v-list three-line>
      <template v-for="product in likedProducts">
        <v-list-item :key="product.id">
          <v-list-item-avatar>
            <v-img :src="product.image" contain></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="product.title"></v-list-item-title>
            <v-list-item-subtitle v-html="product.description"></v-list-item-subtitle>
          </v-list-item-content>
          <div class="d-flex flex-column justify-between">
            <router-link :to="`products/${product.id}`" style="color: #fff" class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--x-small teal lighten-3 mb-2"> Go </router-link>
            <v-btn x-small color="purple lighten-5" @click="handleRemove(product.id)">Remove</v-btn>
          </div>
        </v-list-item>
      </template>
    </v-list>
    <v-toolbar color="white">
      <v-toolbar-title>Total price: {{ totalPrice }} $ </v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      removeProduct: "productModule/removeProduct",
    }),
    handleRemove(id) {
      this.removeProduct(id);
    },
  },
  computed: {
    likedProducts() {
      return this.$store.state.productModule.likedProducts;
    },
    totalPrice() {
      return this.$store.state.productModule.likedProducts.reduce((acc, cur) => acc + cur.price, 0).toFixed(2);
    },
  },
};
</script>