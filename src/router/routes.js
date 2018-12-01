import Main from '../core/components/Main/main'
import helloWorld from '../views/testPage/helloWorld'
import testRouter1 from '../views/testPage/testRouter1'
import login from '../views/Login/login'

let pageDefine = [
  {divider: true, header: 'subheading'},
  {
    icon: '',
    id: '',
    label: '', // 显示在tab，面包屑，导航栏的名字

    // 后置在label后的文本，为了特殊标识路由，字符串为属性名（如params.id）则定位到router中的变量
    // 判定: 以. 为分隔，若route[第一个属性名]为falsy，则使用整个字符串直接做为文本，否则取属性值转换为文本（falsy转换为空串）
    subText: '',
    persistent: false, // 持久tab，不可关闭，tab在最左侧
    showFooter: false, // 显示系统footer
    recoverable: false, // 刷新浏览器时是否重新加载此tab
    hideInMenu: false, // 在侧边导航中隐藏
    hideInBread: false, // 在侧边导航中隐藏
    noLoginRequired: false,
    access: [],
    router: {
      // 同router配置
    },
    drawer: {
      icon: '', // 特殊icon
      label: '',
      to: '',
      hidden: false,
    },
    bread: {
      icon: '', // 特殊icon
      label: '',
      hidden: false,
    },
    children: [],
  }
]
const routes = {
  // 正常设置
}
const navDrawerItems = [
  {
    id: '',
    name: '',
    icon: '',
    to: '',
    index: 3, // 排到指定位置
    insertBefore: '' // 指定id
  },
  {divider: true, header: 'subheading'},
]
export {pageDefine, routes, navDrawerItems}

// 直接导出为路由
export default [
  {
    path: '/',
    name: 'L',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: helloWorld,
        meta: {
          label: '首页',
          subText: '',
          persistent: true, // 持久tab，不可关闭，tab在最左侧
          // showFooter: true, // 显示系统footer
          recoverable: false, // 刷新浏览器时是否重新加载此tab
          hideInMenu: false, // 在侧边导航中隐藏
          hideInBread: false, // 在侧边导航中隐藏
          noLoginRequired: false, // 无需登录即可进入
          access: [], // 页面权限数组
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
    meta: {
      persistent: true, // 持久tab，不可关闭，tab在最左侧
      showFooter: false, // 显示系统footer
      hideInMenu: true, // 在侧边导航中隐藏
      hideInBread: true, // 在侧边导航中隐藏
      noLoginRequired: true, // 无需登录即可进入
      access: [], // 页面权限数组
    }
  },
  // {
  //   path: '/open',
  //   component: '',
  // },
  {
    path: '/test-router-parent',
    name: 'TestRouterParent',
    component: Main,
    children: [
      {
        path: 'test-router-1',
        name: 'TestRouter1',
        component: testRouter1
      },
      {
        path: 'test-router-2',
        name: 'TestRouter2',
        component: resolve => require(['../views/testPage/testRouter2'], resolve),
      },
      {
        path: 'test-router-3',
        name: 'TestRouter3',
        component: () => import('../views/testPage/testRouter3')
      },
      {
        path: 'details',
        name: 'TestDetails',
        component: () => import('../views/testPage/detailsPage'),
        meta: {
          showInTab: 'id'
        }
      },
      {
        path: 'details-:id',
        name: 'TestDetailsParams',
        component: () => import('../views/testPage/paramsPage'),
        meta: {
          // showInTab: 'id'
        }
      },
    ]
  }
]
