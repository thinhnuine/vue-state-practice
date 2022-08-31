<script lang="ts" setup>
import { ref, onMounted, h } from 'vue'
import axios from 'axios'

type ProductItem = {
  id: number
  title: string
  price: number
  category: string
  image: string
}

const data = ref<ProductItem>()
const loading = ref(true)
const errorMessage = ref(null)

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
  // {
  //   title: 'Event',
  //   customRender({ record, index }) {
  //     return h(
  //       'button',
  //       {
  //         onClick: () => onRowButtonClick(record),
  //       },
  //       'click'
  //     )
  //   },
  // },
])

// const onRowButtonClick = (record) => {
//   alert(`${record.name} clicked`)
// }

function getListProduct() {
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

onMounted(() => {
  getListProduct()
})
</script>

<template>
  <a-spin v-if="loading" size="large" />
  <a-button v-else class="mb-5"><router-link to="/products/add">Add new product</router-link></a-button>
  <a-table v-if="!loading && data" :dataSource="data" :columns="columns" />
  <p v-else-if="!loading && !data">Don't have data</p>
  <p class="text-[#FF0000]" v-if="error">{{ error }}</p>
</template>
