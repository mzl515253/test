import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About/About.vue'
import store from '../store/index'

Vue.use(About)

Vue.use(VueRouter)

const routes = [

  {
    path: '',
    component: () => import('../views/About/About.vue'),
    children: [

      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: '商品首页',
         
        }
      },

      {

        path: '/postshop',
        name: 'postshop',
        component: () => import('../views/postshop/postshop.vue'),
        meta: {
          title: '新增商品',
         
        }
      },

      {

        path: '/tables',
        name: 'tables',
        component: () => import('../views/tables/tables.vue'),
        meta: {
          title: '商品列表',
        
        }

      },

      {

        path: '/shophome',
        name: 'shophome',
        component: () => import('../views/shophome/shophome.vue'),
        meta: {
          title: '商品首页',
          list:store.state.list
        }

      },

      {
        path: '/creat',
        name: 'creat',
        component: () => import('../views/create/create.vue'),
        meta: {
          title: '新增商品',
          list:store.state.list
        }
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('../views/product/product.vue'),
        meta: {
          title: '商品列表',
          list:store.state.list
        }
      },

    ]

  },

  {

    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: {
      title: '登陆注册页',
      path: '/login'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  document.title = to.meta.title
  next()

})

export default router
