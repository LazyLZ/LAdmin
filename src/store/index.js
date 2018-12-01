import Vue from 'vue'
import Vuex from 'vuex'
import $L from '../core/store/store'
import login from './modules/login'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    $L,
    login
  },
  strict: debug,
})
