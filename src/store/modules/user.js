export const userModule = {
  namespaced: true,
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
};
