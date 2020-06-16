import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'

createApp(App as any)
  .use(router)
  .use(store)
  .mount('#app')
