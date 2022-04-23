import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

export const router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/login", component: Login },
  ],
});
