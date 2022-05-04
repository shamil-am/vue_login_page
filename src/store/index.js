import Vue from "vue";
import Vuex from "vuex";
import { productModule } from "./modules/products";
import { userModule } from "./modules/user";
import { loader } from "./modules/loader";

import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productModule,
    userModule,
    loader,
  },
  plugins: [
    createPersistedState({
      key: "store",
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
