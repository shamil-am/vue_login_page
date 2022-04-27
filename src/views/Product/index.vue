<template>
  <div class="product">
    <Navbar />
    <Loader v-if="!productLoaded" />
    <v-container v-else pt-15>
      <h1>{{ $route.params.id }}</h1>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../../common/Navbar.vue";
import Loader from "../../common/Loader.vue";
import ProductService from "../../api/products.service";

export default {
  components: {
    Navbar,
    Loader,
  },
  data() {
    return {
      productLoaded: false,
    };
  },
  async mounted() {
    let { data } = await ProductService.getProduct(this.$route.params.id);
    this.productLoaded = true;
    console.log(data);
  },
};
</script>