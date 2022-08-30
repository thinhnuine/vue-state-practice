import axios from 'axios'

export const createProduct = (formState) => {
  return axios.post('https://fakestoreapi.com/products', formState)
}
