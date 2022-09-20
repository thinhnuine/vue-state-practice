<template>
  <header-component />
  <!-- <div class="px-10 pt-40">

  </div> -->
  <div class="flex my-10">
    <div class="w-3/4 px-10">
      <div class="flex mt-10 mb-5">
        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
      </div>
      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 border-b">
        <div class="flex w-2/5">
          <!-- product -->
          <div class="w-20">
            <img class="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold text-sm">Iphone 6S</span>
            <span class="text-red-500 text-xs">Apple</span>
            <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>

          <input class="mx-2 border text-center w-8" type="text" value="1" />

          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
      </div>

      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 border-b">
        <div class="flex w-2/5">
          <!-- product -->
          <div class="w-20">
            <img class="h-24" src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw" alt="" />
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold text-sm">Xiaomi Mi 20000mAh</span>
            <span class="text-red-500 text-xs">Xiaomi</span>
            <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>

          <input class="mx-2 border text-center w-8" type="text" value="1" />

          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
        <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
      </div>

      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 border-b">
        <div class="flex w-2/5">
          <!-- product -->
          <div class="w-20">
            <img class="h-24" src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v" alt="" />
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold text-sm">Airpods</span>
            <span class="text-red-500 text-xs">Apple</span>
            <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
          <input class="mx-2 border text-center w-8" type="text" value="1" />

          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
        <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
      </div>
    </div>

    <div id="summary" class="w-1/4 px-8 py-10">
      <h1 class="font-semibold text-2xl pb-3">Order Summary</h1>
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>$600</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from './HeaderComponent.vue'
import { cartStore } from '../store'
</script>
