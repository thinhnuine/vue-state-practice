<template>
  <header-component />
  <div class="mx-10 my-10">
    <div v-if="loadingGetProducts" class="text-center">
      <a-spin size="large" />
    </div>
    <div v-else class="text-center my-5">
      <a-space>
        <a-button><router-link to="/products/add">Add new product</router-link></a-button>
        <a-select v-model:value="valueCategory" class="w-[120px]" :options="optionsCategory" placeholder="Category" />
        <a-select v-model:value="valueSort" class="w-[120px]" :options="optionsSort" placeholder="Sort" />
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { useFetcher } from '../compositions/useFetcher'
import { deleteProduct, getProducts, filterProduct } from '../api'
import HeaderComponent from './HeaderComponent.vue'

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

const optionsCategory = ref([
  {
    value: 'jewelery',
    label: 'Jewelery',
  },
  {
    value: 'electronic',
    label: 'Electronic',
  },
  {
    value: "women's clothing",
    label: "Women's clothing",
  },
  {
    value: "men's clothing",
    label: "Men's clothing",
  },
])
const router = useRouter()
const valueSort = ref(undefined)
const valueCategory = ref(undefined)

const getListProduct = async () => {
  await getProductsAction()
}

const handleEditProduct = (id) => {
  router.push(`/products/${id}`)
}

watchEffect(async () => {
  const response = await filterProduct(valueSort.value || '', valueCategory.value ?? '')
  products.value = response.data
})

const handleDeleteProduct = async (id) => {
  await deleteProductAction(id)
  products.value = products?.value?.filter((item) => item.id !== id)
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
