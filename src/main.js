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

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
  store: store
});
