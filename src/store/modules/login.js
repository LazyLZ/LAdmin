import {getField, updateField} from 'vuex-map-fields'
import F from '@/core/utils/functional'

const state = {
  token: '',
  name: '',
  id: '',
  role: '',
}
const getters = {
  getField,
  isLogin (state) {
    return !!state.token
  }
}
const actions = {}
const mutations = {
  updateField,
  saveLoginInfo (state, info) {
    let loginInfo = {
      token: info.token || '',
      name: info.name || '',
      id: info.id || '',
      role: info.role || '',
    }
    for (let key of Object.keys(loginInfo)) {
      state[key] = loginInfo[key]
    }
    F.saveToLocal('loginInfo', loginInfo)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
