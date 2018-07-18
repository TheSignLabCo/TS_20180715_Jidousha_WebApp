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

import FBSignInButton from "vue-facebook-signin-button";

Vue.config.productionTip = false;

Vue.use(FBSignInButton);
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

window.fbAsyncInit = function() {
  FB.init({
    appId: "839473029579421",
    cookie: true, // enable cookies to allow the server to access the session
    xfbml: true, // parse social plugins on this page
    version: "v2.8" // use graph api version 2.8
  });
};
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

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
