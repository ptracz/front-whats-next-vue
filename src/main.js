import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false;
export default window.vm = new Vue({
  name: 'main',
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app');