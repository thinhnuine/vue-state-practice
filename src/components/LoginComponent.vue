<template>
  <div class="px-10 pt-40">
    <a-form
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 8 }"
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 14, span: 8 }">
        <a-button type="primary" html-type="submit" :loading="loading">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFetcher } from '../compositions/useFetcher'
import { login } from '../api'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formState = ref({
  username: 'johnd',
  password: 'm38rmF$',
})

const { loading, execute, data, error } = useFetcher(login)

const onFinish = async (values) => {
  await execute(values)
  if (error.value) {
    message.error('Username or password is incorrect')
    return
  }
  localStorage.setItem('user-token', data.token)
  router.push('/products')
}
</script>
