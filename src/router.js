import Vue from 'vue'
import Router from 'vue-router'
import frame from './views/main'
import helloWorld from './views/testPage/helloWorld'
// import home from
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'L',
      redirect: '/home',
      component: frame,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: helloWorld
        }
      ]
    },
    // {
    //   path: '/hello-world',
    //   name: 'HelloWorld',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/testPage/helloWorld')
    // }
  ]
})
