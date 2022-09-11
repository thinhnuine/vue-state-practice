<template>
  <div class="mx-10 my-10">
    <div v-if="loading" class="text-center">
      <a-spin size="large" />
    </div>
    <div v-else class="text-center my-5">
      <a-button><router-link to="/products/add">Add new product</router-link></a-button>
    </div>
    <a-table v-if="!loading && data" :data-source="data" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span>
            <a-button type="primary" @click="handleEditProduct(record.id)">Edit</a-button>
            <a-divider type="vertical" />
            <a-button type="danger" :loading="loadingOnDelete" @click="handleDeleteProduct(record.id)">Delete</a-button>
          </span>
        </template>
      </template></a-table
    >
    <p v-else-if="!loading && !data">Don't have data</p>
    <p v-if="error" class="text-[#FF0000]">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
const data = ref(null)
const loading = ref(true)
const loadingOnDelete = ref(false)
const errorMessage = ref(null)
const router = useRouter()

const columns = ref([
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Action',
    key: 'action',
  },
])

const getListProduct = () => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => (data.value = res.data))
    .catch((error) => {
      console.error(error)
      errorMessage.value = error
    })
    .finally(() => {
      loading.value = false
    })
}

const handleEditProduct = (id) => {
  router.push(`/products/${id}`)
}

const handleDeleteProduct = async (id) => {
  loadingOnDelete.value = true
  try {
    await axios.delete(`https://fakestoreapi.com/products/${id}`)
    data.value = data.value.filter((item) => item.id !== id)
    message.success('Delete successful')
  } catch (error) {
    console.log(error)
    message.error('Error when delete')
  }
  loadingOnDelete.value = false
}

onMounted(() => {
  getListProduct()
})
</script>
