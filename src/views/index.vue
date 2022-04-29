<template>
  <div>
    <Navbar />
    <Loader v-if="$store.state.loader.loaded" />
    <router-view v-show="!$store.state.loader.loaded"></router-view>
  </div>
</template>

<script>
import Navbar from "../common/Navbar.vue";
import Loader from "../common/Loader.vue";
export default {
  components: {
    Navbar,
    Loader,
  },
};
</script>

