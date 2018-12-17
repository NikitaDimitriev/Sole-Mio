import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB8tBd9ZPhS9UOWhG3Y9aS-1Y0DY_e7TGc",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
