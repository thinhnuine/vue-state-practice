import { createRouter, createWebHistory } from 'vue-router'

import ListProduct from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'

const routes = [
  {
    path: '/products',
    component: ListProduct,
  },
  // {
  //   path: '/products/:id',
  //   component: ListProduct,
  // },
  {
    path: '/products/add',
    component: AddProduct,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
