import App from './App.vue'
import { createApp } from 'vue'
const app = createApp(App)
app.config.globalProperties.$filters = {
  upperCace(value) {
    return value.toUpperCase();
  },
  reverse (value) {
    return value.split("").reverse().join("");
  }
}