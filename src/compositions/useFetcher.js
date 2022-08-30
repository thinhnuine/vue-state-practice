import { ref } from 'vue'
export function useFetcher(fetcher) {
  const data = ref({})
  const loading = ref(false)
  const error = ref(null)
  const getData = async (...rest) => {
    loading.value = true
    data.value = {}
    error.value = null
    try {
      data.value = await fetcher(...rest)
    } catch (err) {
      error.value = err
    }
    loading.value = false
  }
  return {
    data,
    loading,
    error,
    getData,
  }
}
