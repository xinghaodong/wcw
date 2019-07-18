import Vue from 'vue'
import Router from 'vue-router'
import home from './views/index.vue'
import classify from './views/classify.vue'
import cart from './views/cart.vue'
import mine from './views/mine.vue'
import wc from './views/tabber.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{
        name:'home'
      }
    },
    {
      path:'/',
      name:'wc',
      component:wc,
      children:[
        {
          path: '/wc/home',
          name: 'home',
          component: home
        },
        {
          path: '/wc/classify',
          name: 'classify',
          component: classify
        },
        {
          path: '/wc/cart',
          name: 'cart',
          component: cart
        },
        {
          path: '/wc/mine',
          name: 'mine',
          component: mine
        },
      ]
    },
  ]
})
