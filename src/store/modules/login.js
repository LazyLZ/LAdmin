import {getField, updateField} from 'vuex-map-fields'
import F from '@/core/utils/functional'
import cfg from '@/config'

let LOGIN_INFO_KEY = 'loginInfo'

function LoginInfo ({token, name, id, role, access}) {
  this.token = token || ''
  this.name = name || ''
  this.id = id || ''
  this.role = role || ''
  this.access = access || {}
}

function _buildAccess (tree, access, prefix) {
  if (!F.isObj(tree)) {
    access.push(prefix)
    return
  }
  for (let key of Object.keys(tree)) {
    _buildAccess(tree[key], access, prefix + cfg.permissionSeq + 'key')
  }
  return access
}

function buildAccess (tree) {
  return _buildAccess(tree, [], '')
}

const state = {
  token: '',
  name: '',
  id: '',
  role: '',
  access: {}
}
const getters = {
  getField,
  isLogin (state) {
    return !!state.token
  },
  getInfo (state) {
    return new LoginInfo({
      token: state.token,
      name: state.name,
      id: state.id,
      role: state.role,
      permission: state.permission
    })
  },
  getPermission (state) {
    return state.permission
  },
  getAccess (state) {
    return buildAccess(state.permission)
  }
}
const actions = {}
const mutations = {
  updateField,
  saveLoginInfo (state, info) {
    let loginInfo = new LoginInfo(info)
    for (let key of Object.keys(loginInfo)) {
      state[key] = loginInfo[key]
    }
    F.saveToLocal(LOGIN_INFO_KEY, loginInfo)
  },
  recoveryLogin () {
    let info = F.getFromLocal(LOGIN_INFO_KEY)
    let loginInfo = new LoginInfo(info)
    for (let key of Object.keys(loginInfo)) {
      state[key] = loginInfo[key]
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
