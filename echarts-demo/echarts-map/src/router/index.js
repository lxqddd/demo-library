import Vue from 'vue'
import VueRouter from 'vue-router'
import customRoutes from './module/custom'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/line',
    name: 'line',
    meta: {
      title: 'line'
    },
    component: () => import('@/views/line.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    meta: {
      title: 'bar'
    },
    component: () => import('@/views/bar.vue')
  },
  {
    path: '/pie',
    name: 'pie',
    meta: {
      title: 'pie'
    },
    component: () => import('@/views/pie.vue')
  },
  {
    path: '/map',
    name: 'map',
    meta: {
      title: 'map'
    },
    component: () => import('@/views/map.vue')
  },
  ...customRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if (to.meta.keywords) {
    document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.keywords)
  }
  if (to.meta.description) {
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description)
  }
  if (to.meta.title) {
    document.title = `${to.meta.title}`
  }

  // 判断是否需要登录
  if (to.meta.auth) {
    next()
  } else {
    next()
  }
})

export default router
