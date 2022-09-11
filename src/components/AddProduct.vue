<template>
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
        <a-button html-type="submit" type="primary" :loading="loadingOnCreate || loadingOnUpdate">{{
          id ? 'Edit product' : 'Add product'
        }}</a-button>
        <a-button style="margin-left: 10px"><router-link to="/products">Cancel</router-link></a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFetcher } from '../compositions/useFetcher'
import { createProduct, getProduct, editProduct } from '../api'
import useVuelidate from '@vuelidate/core'
import { required, minValue } from '@vuelidate/validators'
import { message } from 'ant-design-vue'

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

const { loading: loadingOnCreate, getData: addDataProduct, error: errorOnCreate } = useFetcher(createProduct)
const { loading: loadingOnUpdate, getData: editDataProduct, error: errorOnUpdate } = useFetcher(editProduct)
const { loading: loadingGetProduct, getData: getDataProduct, data } = useFetcher(getProduct)

const handleSubmit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
  if (id) {
    await editDataProduct(formState.value)
  } else {
    await addDataProduct(formState.value)
  }
  if (!errorOnCreate.value || !errorOnUpdate.value) {
    message.success('Successful')
    router.push('/products')
  } else {
    console.error(errorOnCreate.value || errorOnUpdate.value)
    message.error('Error')
  }
}

onMounted(async () => {
  if (id && id !== 'add') {
    try {
      await getDataProduct(id)
      formState.value = { ...data.value.data }
    } catch (error) {
      console.log(error)
    }
  }
})
</script>
