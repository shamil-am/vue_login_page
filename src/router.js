import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import store from "./store";

const router = new VueRouter({
  routes: [
    // { path: "/", redirect: { name: "LoginPage" } },
    { name: "LoginPage", path: "/login", component: () => import("./views/Login") },
    {
      name: "HomePage",
      path: "/",
      component: () => import("./views/Home"),
      children: [
        { name: "ProductsPage", path: "products", component: () => import("./views/Products") },
        { name: "ProductPage", path: "products/:id", component: () => import("./views/Product") },
      ],
    },
    { name: "NotFound", path: "*", component: () => import("./common/NotFound.vue") },

  ],
});
router.beforeEach((to, from, next) => {
  const authRequired = ["HomePage", "ProductsPage", "ProductPage"];
  if (authRequired.indexOf(to.name) > -1) {
    if (store.getters['userModule/_isAuthenticated']) next();
    else next({ name: "LoginPage" });
  } else if (to.name === "LoginPage" && store.getters['userModule/_isAuthenticated']) {
    next(false);
  } else {
    next();
  }
  // link pasted to another tab as rootpath
  if (to.name === "LoginPage" && from.name === null && store.getters['userModule/_isAuthenticated']) {
    next({ name: "HomePage" });
  }
});
export default router;
