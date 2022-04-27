import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    _isAuthenticated(state) {
      return state.user ? true : false;
    },
  },
  mutations: {
    setUser(state, logedUser) {
      state.user = logedUser;
    },
  },
  plugins: [createPersistedState()],
});
