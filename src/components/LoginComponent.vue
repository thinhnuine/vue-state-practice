<template>
  <section class="h-full gradient-form w-full md:h-screen">
    <div class="py-12 px-6">
      <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div class="block shadow-2xl rounded-lg">
          <div class="px-4 md:px-0">
            <div class="md:p-12 md:mx-6">
              <div class="text-center">
                <img
                  class="mx-auto w-48"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
                <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">VUEJS STATE PRACTICE</h4>
              </div>
              <form>
                <p class="mb-4">Please login to your account</p>
                <div class="mb-4">
                  <a-input v-model:value="userName" placeholder="Username" />
                </div>
                <div class="mb-4">
                  <a-input-password v-model:value="password" placeholder="input password" />
                </div>
                <div class="text-center pt-1 mb-12 pb-1">
                  <a-button type="primary" >Log in</a-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const userName = ref('')
    const password = ref('')

    return {
      userName,
      password,
    }
  },
})
</script>
