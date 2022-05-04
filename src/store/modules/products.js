export const productModule = {
  namespaced: true,
  state: {
    likedProducts: [],
    searchedProduct: "",
  },
  getters: {
    _searchedProduct(state) {
      return state.searchedProduct;
    },
  },
  mutations: {
    likeProduct(state, product) {
      let alreadyLiked = state.likedProducts.find((item) => item.id === product.id);
      state.likedProducts = alreadyLiked ? state.likedProducts.filter((item) => item.id !== product.id) : [...state.likedProducts, product];
    },
    searchProduct(state, productName) {
      state.searchedProduct = productName;
    },
    removeProduct(state, productID) {
      state.likedProducts = state.likedProducts.filter((product) => product.id !== productID);
    },
  },
};
