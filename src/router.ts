import { createRouter, createWebHistory } from 'vue-router'

import ListProduct from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'
import LoginComponent from './components/LoginComponent.vue'

const routes = [
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/products',
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const user = localStorage.getItem('user-token')
  if (authRequired && !user) {
    return '/login'
  }
})

export default router
