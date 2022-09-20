<template>
  <a-page-header title="Vue State Practice" class="flex items-center justify-between border">
    <div class="flex items-center gap-10">
      <a-badge :count="cartStore?.[0]?.products.length" color="gold" show-zero="false">
        <router-link to="/cart">
          <img class="w-6 h-6" src="../assets/shopping-cart.png" alt="" />
        </router-link>
      </a-badge>
      <a-button type="danger" @click="handleLogout">Log out</a-button>
    </div>
  </a-page-header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getCart } from '../api/index'
import { cartStore } from '../store'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('access-token')
  router.push('/login')
}

onMounted(async () => {
  const data = await getCart()
  cartStore.value = data.data
})
</script>
