import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'
import common from "./modules/common"

Vue.use(Vuex)

 // NOTE 下面基本用不到 基本都放入module中
const state = {

}

const mutations = {

}

const actions = {

}

const getters = {

}

export default new Vuex.Store({
  modules: {
    demo,
    common
  },
  state,
  mutations,
  actions,
  getters
})
