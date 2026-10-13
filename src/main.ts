import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource-variable/newsreader'
import '@fontsource-variable/source-sans-3'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
