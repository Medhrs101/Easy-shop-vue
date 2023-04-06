import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CartView from '../views/CartView.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/ProductDetails/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/CartView',
    name: 'CartView',
    component: CartView,
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout,
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
