<template>
  <v-app>
    <Login />
  </v-app>
</template>

<script>
import Login from "./layouts/Login.vue";
export default {
  name: "App",

  components: {
    Login,
  },

  data: () => ({
    //
  }),
};
</script>
