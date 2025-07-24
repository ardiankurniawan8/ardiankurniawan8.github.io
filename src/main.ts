import './assets/main.css'

import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'
import { VueFire, VueFireAuth } from 'vuefire'
import { createPinia } from 'pinia'
import { firebaseApp } from './firebase'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})
app.use(createPinia())
app.use(createBootstrap())
app.use(router)

app.mount('#app')
