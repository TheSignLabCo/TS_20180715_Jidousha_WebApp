// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import VueTouch from "vue-touch";

import VuePreload from "vue-preload";
import App from "./App";

import router from "./router";
import store from "./store/index";

import "vue-googlemaps/dist/vue-googlemaps.css";
import VueGoogleMaps from "vue-googlemaps";

import VueAxios from "vue-axios";
import { VueAuthenticate } from "vue-authenticate";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(VueTouch);
Vue.use(VuePreload);
Vue.use(Vuex);

Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    apiKey: "AIzaSyD9GYBR1X36wkFZp8oziec9vkTm2vy3Ifw",
    // Enable more Google Maps libraries here
    libraries: ["places"],
    // Use new renderer
    useBetaRenderer: false
  }
});

Vue.use(VueAxios, axios);
const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: "http://localhost:8080"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
  store: store,
  methods: {
    authenticate: function(provider) {
      this.$auth.authenticate(provider).then(function() {
        // Execute application logic after successful social authentication
      });
    }
  }
});
