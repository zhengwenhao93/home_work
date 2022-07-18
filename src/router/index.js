import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index'),
        meta: {
          title: '主控台',
          icon: 'el-icon-s-home'
        }
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
