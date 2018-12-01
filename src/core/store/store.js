import {getField, updateField} from 'vuex-map-fields'
import F from '../utils/functional'

let routeToTab = function (route) {
  return {
    key: route.name,
    label: route.meta.label || route.name || route.path,
    to: route.fullPath,
    persistent: route.meta.persistent || false,
    subText: route.meta.subText || ''
  }
}

const state = {
  dark: false,
  mainNavDrawer: true,
  mainTabItems: [],
  floatingTabs: false,
  pageLoading: false,
}
const getters = {
  getField,
  routeToTab: () => (route) => {
    return routeToTab(route)
  }
}
const actions = {}
const mutations = {
  updateField,
  addTab (state, route) {
    let tab = routeToTab(route)
    if (route.meta.showInTab) {
      tab.subText = route.query[route.meta.showInTab]
    }
    state.mainTabItems.push(tab)
    F.saveToLocal('$mainTabItems', state.mainTabItems)
  },
  closeTab (state, i) {
    state.mainTabItems.splice(i, 1)
    F.saveToLocal('$mainTabItems', state.mainTabItems)
  },
  changeTab (state, tabs) {
    state.mainTabItems = tabs
  },
  recoverTab (state, routeNow) {
    // 暂时仅恢复主页
    let tabNow = routeToTab(routeNow)
    let tabs = F.getFromLocal('$mainTabItems') || []
    console.log('recover', tabNow, tabs)
    if (!tabs.find(t => t.key === 'Home') && tabNow && tabNow.key !== 'Home') {
      tabs.unshift({
        key: 'Home',
        label: '首页',
        to: '/home',
        persistent: true,
      })
    }
    if (tabNow && !tabs.find(t => t.key === tabNow.key)) {
      tabs.push(tabNow)
    }
    state.mainTabItems = tabs
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
