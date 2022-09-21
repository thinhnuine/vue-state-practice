<template>
  <header-component />
  <div class="m-10 w-2/3 ml-auto mr-auto">
    <div v-if="loadingGetProduct" class="text-center">
      <a-spin size="large" />
    </div>
    <a-form v-else :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" @submit="handleSubmit">
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
      <a-form-item class="text-center">
        <a-button html-type="submit" type="primary" :loading="loadingOnUpsert">{{
          id ? 'Edit product' : 'Add product'
        }}</a-button>
        <a-button style="margin-left: 10px"><router-link to="/">Cancel</router-link></a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFetcher } from '../compositions/useFetcher'
import { createProduct, getProduct, editProduct } from '../api'
import useVuelidate from '@vuelidate/core'
import { required, minValue } from '@vuelidate/validators'
import { message } from 'ant-design-vue'
import HeaderComponent from './HeaderComponent.vue'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const labelCol = ref({ style: { width: '150px' } })
const wrapperCol = ref({ style: { width: '350px' } })

const formState = ref({
  title: '',
  price: '',
  description: '',
  category: '',
})

const rules = {
  title: { required },
  price: { required, minValue: minValue(0) },
  description: { required },
  category: { required },
}

const v$ = useVuelidate(rules, formState)

const {
  loading: loadingOnUpsert,
  execute: upsertProduct,
  error: errorOnUpsert,
} = useFetcher(id ? editProduct : createProduct)
const { loading: loadingGetProduct, execute: getDataProduct, data } = useFetcher(getProduct)

const handleSubmit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
  await upsertProduct(formState.value, id)
  if (errorOnUpsert.value) {
    message.error('Error')
  } else {
    router.push('/')
    console.error(errorOnUpsert.value)
    message.success('Successful')
  }
}

onMounted(async () => {
  if (id) {
    try {
      await getDataProduct(id)
      formState.value = { ...data.value }
    } catch (error) {
      console.log(error)
    }
  }
})
</script>
