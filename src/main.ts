import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import './index.css'
import 'ant-design-vue/dist/antd.css'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(Antd)
app.mount('#app')
