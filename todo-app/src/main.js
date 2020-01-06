import Vue from 'vue'
// import 'es6-promise/auto'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// When used with a module system, you must explicitly install Vuex via Vue.use():
Vue.use(Vuex)