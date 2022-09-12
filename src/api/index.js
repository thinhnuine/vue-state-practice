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

export const sortProduct = (type) => {
  return axios.get(`https://fakestoreapi.com/products?sort=${type}`)
}
