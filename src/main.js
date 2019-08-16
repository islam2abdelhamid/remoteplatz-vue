// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './backend/vue-axios'
import VeeValidate from 'vee-validate';
import Multiselect from "vue-multiselect";
import VueLoadingButton from 'vue-loading-button'
Vue.component("multiselect", Multiselect);

Vue.use(VeeValidate);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    VueLoadingButton,
  },
  template: '<App/>'
})

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/owl.carousel/dist/owl.carousel.min.js';
