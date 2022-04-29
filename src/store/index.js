import Vue from "vue";
import Vuex from "vuex";
import { productModule } from "./modules/products";
import { userModule } from "./modules/user";
import { loader } from "./modules/loader";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productModule,
    userModule,
    loader
  },
  plugins: [createPersistedState()],
});
