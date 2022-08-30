<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Title">
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item label="Price">
      <a-input v-model:value="formState.price" />
    </a-form-item>
    <a-form-item label="Description">
      <a-input v-model:value="formState.description" />
    </a-form-item>
    <a-form-item label="Category">
      <a-textarea v-model:value="formState.category" type="textarea" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="createProduct" :loading="loading">Add product</a-button>
      <a-button style="margin-left: 10px"><router-link to="/products">Cancel</router-link></a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { message } from 'ant-design-vue'
import router from '../router'

type FormState = {
  title: string
  price: string
  description: string
  category: string
}

const labelCol = ref({ style: { width: '150px' } })
const wrapperCol = ref({ style: { width: '350px' } })
const loading = ref(false)
const formState: FormState = reactive({
  title: '',
  price: '',
  description: '',
  category: '',
})

const createProduct = async () => {
  try {
    loading.value = true
    await axios.post('https://fakestoreapi.com/products', formState)
    message.success('Successful create product')
    loading.value = false
    router.push({ path: '/products' })
  } catch (error) {
    message.error('Error when create product')
    loading.value = false
    console.log(error)
  }
}
</script>
