export default {
  namespaced: true,
  state: {
    loginRoute: "",
  },
  getters: {
    loginRoute: state => state.loginRoute,
  },
  mutations: {
    SET_LOGIN_ROUTE (state, loginRoute) {
      state.loginRoute = loginRoute
    },
  },
  actions: {
    setLoginRoute ({ commit }, loginRoute) {
      commit("SET_LOGIN_ROUTE", loginRoute)
    },
  }
}
