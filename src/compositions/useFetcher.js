import { ref } from 'vue'
export function useFetcher(fetcher) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const execute = async (...rest) => {
    loading.value = true
    data.value = null
    error.value = null
    try {
      const res = await fetcher(...rest)
      data.value = res.data
    } catch (err) {
      error.value = err
    }
    loading.value = false
  }
  return {
    data,
    loading,
    error,
    execute,
  }
}
