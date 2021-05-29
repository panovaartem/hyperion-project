import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/components/common/SvgIcon.vue'

Vue.config.productionTip = false

Vue.component('svg-icon', SvgIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
