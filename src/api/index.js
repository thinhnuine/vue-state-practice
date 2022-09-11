import axios from 'axios'

export const createProduct = (formState) => {
  return axios.post('https://fakestoreapi.com/products', formState)
}

export const getProduct = (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`)
}

export const editProduct = (id) => {
  return axios.put(`https://fakestoreapi.com/products/${id}`)
}
