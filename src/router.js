import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import store from "./store";

const routes = [
  { name: "LoginPage", path: "/login", component: () => import("./views/Login") },
  {
    name: "MainPage",
    path: "/",
    redirect: { name: "HomePage" },
    component: () => import("./views"),
    children: [
      { name: "HomePage", path: "", component: () => import("./views/Home") },
      { name: "ProductsPage", path: "products", component: () => import("./views/Products") },
      { name: "ProductPage", path: "products/:id", component: () => import("./views/Product") },
    ],
  },
  { name: "LikedPage", path: "/liked", component: () => import("./views/Liked") },
  { name: "NotFound", path: "*", component: () => import("./common/NotFound.vue") },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const authRequired = ["MainPage", "HomePage", "ProductsPage", "ProductPage", "LikedPage"];
  if (authRequired.indexOf(to.name) > -1) {
    if (store.getters["userModule/_isAuthenticated"]) next();
    else next({ name: "LoginPage" });
  } else if (to.name === "LoginPage" && store.getters["userModule/_isAuthenticated"]) {
    next(false);
  } else {
    next();
  }
  // link pasted to another tab as rootpath
  if (to.name === "LoginPage" && from.name === null && store.getters["userModule/_isAuthenticated"]) {
    next({ name: "HomePage" });
  }
});

export default router;
