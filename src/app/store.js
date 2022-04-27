import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    likedProducts: [],
  },
  getters: {
    _isAuthenticated(state) {
      return state.user ? true : false;
    },
    _likedProducts(state) {
      return state.likedProducts;
    },
  },
  mutations: {
    setUser(state, logedUser) {
      state.user = logedUser;
    },
    likeProduct(state, product) {
      let alreadyLiked = state.likedProducts.find((item) => item.id === product.id);
      state.likedProducts = alreadyLiked ? state.likedProducts.filter((item) => item.id !== product.id) : [...state.likedProducts, product];
    },
  },
  plugins: [createPersistedState()],
});
