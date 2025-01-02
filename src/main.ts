import './assets/main.css'

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'
// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(router)


app.use(Quasar, {
  plugins: {},
})


app.mount('#app')
