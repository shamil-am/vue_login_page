import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import store from "./app/store";

const router = new VueRouter({
  routes: [
    { path: "/", redirect: { name: "LoginPage" } },
    { name: "HomePage", path: "/home", component: () => import("./views/Home/index.vue") },
    { name: "LoginPage", path: "/login", component: () => import("./views/Login/index.vue") },
  ],
});
router.beforeEach((to, from, next) => {
  const authRequired = ["HomePage"];
  if (authRequired.indexOf(to.name) > -1) {
    if (store.getters._isAuthenticated) next();
    else next({ name: "LoginPage" });
  } else if (to.name === "LoginPage" && store.getters._isAuthenticated) {
    next(false);
  } else {
    next();
  }
  // link pasted to another tab as rootpath
  if (to.name === "LoginPage" && from.name === null && store.getters._isAuthenticated) {
    next({ name: "HomePage" });
  }
});
export default router;
