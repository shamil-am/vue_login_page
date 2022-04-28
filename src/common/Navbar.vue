<template>
  <v-app-bar color="deep-purple accent-4" dense dark fixed height="60">
    <router-link to="/home" style="color: #fff">
      <v-toolbar-title>Vue Store</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn icon v-if="liked.length">
      <v-badge :content="liked.length" :value="6" color="purple">
        <v-icon>mdi-heart</v-icon>
      </v-badge>
    </v-btn>
    <v-btn icon v-else>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <div class="mx-2">
      <v-text-field type="text" v-model="product"></v-text-field>
    </div>
    <v-btn icon @click="searchHandler">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="logOut">
          <v-list-item-icon>
            <v-icon>{{ "mdi-logout-variant" }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ "Logout" }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" },
      ],
      product: "",
    };
  },
  methods: {
    ...mapMutations({
      setUser: "setUser",
      searchProduct: "searchProduct",
    }),
    logOut() {
      this.setUser(null);
      this.$router.push("/login");
    },
    searchHandler() {
      this.searchProduct(this.product);
    },
  },
  computed: {
    ...mapGetters({
      liked: "_likedProducts",
    }),
  },
};
</script>