import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  getToken
} from "../util/author"

import Main from '@/views/main/index.vue'
import Server from '@/views/server/index.vue'
import MapServer from '@/views/server/mapServer/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
      title: 'DataServer-main'
    },
    redirect: '/main/server',
    children: [{
      path: 'server',
      name: 'server',
      component: Server,
      meta: {},
      redirect: '/main/server/mapServer',
      children: [{
        path: 'mapServer',
        name: 'mapServer',
        component: MapServer
      }]
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  // if (to.meta && to.meta.requiresAuth) {
  //   if (getToken()) {
  //     next()
  //   } else {
  //     next({
  //       path: '/login'
  //     })
  //   }
  // } else {
    next()
  // }
})

export default router