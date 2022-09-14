import axios from 'axios'

export const login = (formState) => {
  return axios.post(`https://fakestoreapi.com/auth/login`, formState)
}
export const getProduct = (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`)
}

export const getProducts = () => {
  return axios.get(`https://fakestoreapi.com/products`)
}

export const createProduct = (formState) => {
  return axios.post('https://fakestoreapi.com/products', formState)
}

export const editProduct = (formState, id) => {
  return axios.put(`https://fakestoreapi.com/products/${id}`, formState)
}

export const deleteProduct = (id) => {
  return axios.delete(`https://fakestoreapi.com/products/${id}`)
}

export const filterProduct = (sort, category) => {
  if (sort && category) {
    return axios.get(`https://fakestoreapi.com/products/category/${category}?sort=${sort}`)
  } else if (sort) {
    return axios.get(`https://fakestoreapi.com/products?sort=${sort}`)
  } else {
    return axios.get(`https://fakestoreapi.com/products/category/${category}`)
  }
}
