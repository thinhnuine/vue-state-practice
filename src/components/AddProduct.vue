<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" @submit="handleSubmit">
    <a-form-item label="Title">
      <a-input v-model:value="formState.title" />
      <div v-for="error of v$.title.$errors" :key="error.$uid">
        <p class="error-msg text-[#FF0000] my-1">{{ error.$message }}</p>
      </div>
    </a-form-item>
    <a-form-item label="Price">
      <a-input v-model:value="formState.price" />
      <div v-for="error of v$.price.$errors" :key="error.$uid">
        <p class="error-msg text-[#FF0000] my-1">{{ error.$message }}</p>
      </div>
    </a-form-item>
    <a-form-item label="Description">
      <a-textarea v-model:value="formState.description" :rows="8" />
      <div v-for="error of v$.description.$errors" :key="error.$uid">
        <p class="error-msg text-[#FF0000] my-1">{{ error.$message }}</p>
      </div>
    </a-form-item>
    <a-form-item label="Category">
      <a-input v-model:value="formState.category" type="textarea" />
      <div v-for="error of v$.category.$errors" :key="error.$uid">
        <p class="error-msg text-[#FF0000] my-1">{{ error.$message }}</p>
      </div>
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
import { required, integer, minValue, maxLength } from '@vuelidate/validators'

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
  title: { required, maxLength: maxLength(25) },
  price: { required, integer, minValue: minValue(0) },
  description: { required },
  category: { required, maxLength: maxLength(25) },
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
