import { defineNuxtPlugin } from '#app'
import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BootstrapVueNext)
})
