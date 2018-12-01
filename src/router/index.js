import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store/index'

Vue.use(Router)

const LOGIN_PAGE_NAME = 'Login'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
})

router.beforeEach((to, from, next) => {
  console.log(store.getters['login/isLogin'])
  if (to.meta.noLoginRequired || store.getters['login/isLogin']) {
    next()
  }
  else {
    next({name: LOGIN_PAGE_NAME})
  }
})

export default router
