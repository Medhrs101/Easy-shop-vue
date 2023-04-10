import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CartView from '../views/CartView.vue'
import Checkout from '../views/Checkout.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import { getAuth } from 'firebase/auth'
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
    meta: {
      requiresAuth: true,
    },
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
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  const authenticatedUser = getAuth().currentUser
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !authenticatedUser) next('/SignIn')
  else next()
})
export default router
