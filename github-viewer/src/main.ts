import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
// import router from './router'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 1, // 1분 캐싱
    },
  },
})
app.use(VueQueryPlugin, { queryClient })

// app.use(router)

app.mount('#app')
