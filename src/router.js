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
    meta: { requiresAuth: true },
    children: [
      { name: "HomePage", path: "", component: () => import("./views/Home"), meta: { requiresAuth: true } },
      { name: "ProductsPage", path: "products", component: () => import("./views/Products"), meta: { requiresAuth: true } },
      { name: "ProductPage", path: "products/:id", component: () => import("./views/Product"), meta: { requiresAuth: true } },
    ],
  },
  { name: "LikedPage", path: "/liked", component: () => import("./views/Liked"), meta: { requiresAuth: true } },
  { name: "NotFound", path: "*", component: () => import("./common/NotFound.vue") },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = store.getters["userModule/_isAuthenticated"];

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: "LoginPage" });
  }
  if (to.name === "LoginPage" && isAuthenticated && from.name !== null) {
    return next(false);
  }
  // if link pasted to another tab
  if (to.name === "LoginPage" && isAuthenticated && from.name === null) {
    return next({ name: "HomePage" });
  }
  next();
});


export default router;
