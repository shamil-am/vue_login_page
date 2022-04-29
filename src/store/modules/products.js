export const productModule = {
  namespaced: true,
  state: {
    likedProducts: [],
    searchedProduct: "",
  },
  mutations: {
    likeProduct(state, product) {
      let alreadyLiked = state.likedProducts.find((item) => item.id === product.id);
      state.likedProducts = alreadyLiked ? state.likedProducts.filter((item) => item.id !== product.id) : [...state.likedProducts, product];
    },
    searchProduct(state, productName) {
      state.searchedProduct = productName;
    },
  },
};
