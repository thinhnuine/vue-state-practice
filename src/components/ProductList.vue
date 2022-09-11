<template>
  <div class="mx-10 my-10">
    <div v-if="loadingGetProducts" class="text-center">
      <a-spin size="large" />
    </div>
    <div v-else class="text-center my-5">
      <a-space>
        <a-button><router-link to="/products/add">Add new product</router-link></a-button>
        <a-select class="w-[120px]" :options="optionsSort" placeholder="Sort" @change="handleChange" />
      </a-space>
    </div>
    <a-table v-if="!loadingGetProducts" :data-source="products" :columns="columns">
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
    <p v-if="error" class="text-[#FF0000]">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { useFetcher } from '../compositions/useFetcher'
import { deleteProduct, getProducts } from '../api'
const router = useRouter()

const { loading: loadingOnDelete, execute: deleteProductAction, error: errorOnDelete } = useFetcher(deleteProduct)
const { loading: loadingGetProducts, execute: getProductsAction, data: products } = useFetcher(getProducts)

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

const optionsSort = ref([
  {
    value: 'asc',
    label: 'ASC',
  },
  {
    value: 'desc',
    label: 'DESC',
  },
])

const getListProduct = async () => {
  await getProductsAction()
}

const handleEditProduct = (id) => {
  router.push(`/products/${id}`)
}

const handleDeleteProduct = async (id) => {
  await deleteProductAction(id)
  products.value = products.value.filter((item) => item.id !== id)
  if (!errorOnDelete) {
    message.error('Delete error')
  } else {
    message.success('Delete successful')
  }
}

onMounted(async () => {
  await getListProduct()
})
</script>
