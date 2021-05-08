const state = {
  code: ''
}

const getters = {
  code: state => state.code
}

const mutations = {
  SET_CODE (state, code) {
    state.code = code
  }
}

const actions = {
  setCode ({ commit }, code) {
    commit('SET_CODE', code)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}