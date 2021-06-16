import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/components/common/SvgIcon.vue'

Vue.config.productionTip = false

Vue.use(VueMeta)

Vue.component('svg-icon', SvgIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
