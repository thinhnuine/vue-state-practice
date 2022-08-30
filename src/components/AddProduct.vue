<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" @submit="handleSubmit">
    <a-form-item label="Title">
      <a-input v-model:value="formState.title" />
      <div v-for="error of v$.title.$errors" :key="error.$uid" class="input-errors">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
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
      <a-button html-type="submit" type="primary" :loading="loading">Add product</a-button>
      <a-button style="margin-left: 10px"><router-link to="/products">Cancel</router-link></a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFetcher } from '../compositions/useFetcher'
import { createProduct } from '../api'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const labelCol = ref({ style: { width: '150px' } })
const wrapperCol = ref({ style: { width: '350px' } })
const router = useRouter()
const formState = reactive({
  title: '',
  price: '',
  description: '',
  category: '',
})

const rules = {
  title: { required },
  price: { required },
  description: { required },
  category: { required },
}

const v$ = useVuelidate(rules, formState)

const { loading, error, getData } = useFetcher(createProduct)

const handleSubmit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
  await getData({ ...formState })
  if (!error.value) {
    router.push('/products')
  } else {
    console.error(error.value)
  }
}
</script>
