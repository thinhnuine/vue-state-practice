import { createRouter, createWebHistory } from 'vue-router'

import ListProduct from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'
import LoginComponent from './components/LoginComponent.vue'
import CartComponent from './components/CartComponent.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes = [
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/',
    component: ListProduct,
  },
  {
    path: '/products/:id',
    component: AddProduct,
  },
  {
    path: '/products/add',
    component: AddProduct,
  },
  {
    path: '/cart',
    component: CartComponent,
  },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const token = localStorage.getItem('access-token')
  if (authRequired && !token) {
    return '/login'
  }
  if (!authRequired && token) {
    return '/products'
  }
})

export default router
