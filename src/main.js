import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css"
 
Vue.use(VueCarousel);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  render: h => h(App),
}).$mount('#app')
