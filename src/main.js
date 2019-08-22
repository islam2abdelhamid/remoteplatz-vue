// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './backend/vue-axios'


import jQuery from 'jquery'
window.$ = window.jQuery = require('jquery')


import VeeValidate from 'vee-validate';
import Multiselect from "vue-multiselect";
import VueLoadingButton from 'vue-loading-button'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
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

import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/owl.carousel/dist/owl.carousel.min.js';
