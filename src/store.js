import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  user: {
    name: "Shamil",
    surname: "Mammadov",
  },
};
export default new Vuex.Store({
  state,
  getters: {
    getUser() {
      return state.user;
    },
  },
  mutations: {
    handleUser(state, userData) {
      state.user = userData;
    },
  },
});
