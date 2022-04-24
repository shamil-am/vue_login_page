  <!-- <h1>Home {{ $store.state.user.name }}</h1> -->
<template>
  <div class="home">
    <v-card class="ml-auto" height="400" width="256">
      <h1>{{ $store.state.user && $store.state.user.name }}</h1>
      <v-navigation-drawer class="deep-purple accent-4" dark permanent>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logOut"> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" },
      ],
    };
  },
  methods: {
    logOut() {
      this.$store.commit("setUser", null);
      this.$router.push("/login");
    },
  },
};
</script>
