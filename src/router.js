import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import store from "./store";

const router = new VueRouter({
  routes: [
    { name: "HomePage", path: "/home", component: () => import("./views/Home.vue") },
    { name: "LoginPage", path: "/login", component: () => import("./views/Login.vue") },
  ],
});
router.beforeEach((to, _, next) => {
  const authRequired = ["HomePage"];
  if (authRequired.indexOf(to.name) > -1) {
    if (store.getters._isAuthenticated) next();
    else next({ name: "LoginPage" });
  } else if (to.name === "LoginPage" && store.getters._isAuthenticated) {
    next(false);
  } else {
    next();
  }
  // next()
});
export default router;
