import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import CategoryPage from '@/components/CategoryPage'
import ProductPage from '@/components/ProductPage'
import CartSummary from '@/components/CartSummary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/welcome',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/category/1',
      name: 'CategoryPage',
      component: CategoryPage
    },
    {
      path: '/product/slug',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/cart/summary',
      name: 'CartSummary',
      component: CartSummary
    }
  ],
  mode: 'history'
})
