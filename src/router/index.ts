import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/index.vue')
  },
  {
    path: '/app',
    component: () => import(/* webpackChunkName: "apps" */ '../views/app.vue'),
    children: [
      {
        path: 'child',
        name: 'HomeChild',
        component: () => import('../views/reactive.vue')
      }
    ]
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('../views/reactive.vue')
  },
  // {
  //   path: '/lifeCycle',
  //   name: 'lifeCycle',
  //   component: () => import('../views/lifeCycle.vue')
  // },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/computed.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/watch.vue')
  },
  // {
  //   path: '/provide',
  //   name: 'provide',
  //   component: () => import('../views/provide.vue')
  // },
  // {
  //   path: '/parent',
  //   name: 'parent',
  //   component: () => import('../views/parent.vue')
  // },
  // {
  //   path: '/v-for',
  //   name: 'v-for',
  //   component: () => import('../views/v-for.vue')
  // },
  // {
  //   path: '/vuex',
  //   name: 'vuex',
  //   component: () => import('../views/vuex.vue')
  // },
  // {
  //   path: '/router',
  //   name: 'router',
  //   component: () => import('../views/router.vue')
  // },
  {
    path: '/coord',
    name: 'coord',
    component: () => import('../views/coord.vue')
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import('../views/todoList.vue')
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('../views/render.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
