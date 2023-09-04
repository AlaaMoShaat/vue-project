import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import 'normalize.css'

const app = createApp(App)

app.config.globalProperties.$filters = {
  reverse (value) {
    return value.split("").reverse().join("");
  },
  shortenText (value, textLength) {
    return value.substring(0,textLength) + ' ...';
  }
}

app.use(createPinia())
app.use(router)

app.mount('#app')
