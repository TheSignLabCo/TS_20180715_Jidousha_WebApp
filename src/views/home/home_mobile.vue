<template>

<div class="view">

  <div class="view-loader" v-if="!this.isReady">
    <transition name="slide-fade">
    <mob-preloader v-if="!this.isReady"></mob-preloader>
    </transition>
  </div>

  <div class="view-content" v-if="this.isReady">

      <div class="vw-header">
        <mob-header></mob-header>
      </div>

      <div class="vw-container bg-test">

<!--
          <div class="section" v-if="this.$store.getters['getNavTab'] == 'info'">
            <mob-info ></mob-info>
          </div>

          <div class="section" v-if="this.$store.getters['getNavTab'] == 'service'">
            <mob-service></mob-service>
          </div>
          
          <div class="section" v-if="this.$store.getters['getNavTab'] == 'profile'">
            <mob-profile></mob-profile>
          </div>
-->
      </div>

      <div class="vw-footer">
        <mob-navbar></mob-navbar>
      </div>

  </div>

</div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import HeaderComponent from "../../components/mob-header.vue";
import NavbarComponent from "../../components/mob-navbar.vue";
import InfoComponent from "../../components/mob-info.vue";
import ServiceComponent from "../../components/mob-service.vue";
import ProfileComponent from "../../components/mob-profile.vue";

import PreloaderComponent from "../../components/mob-preloader.vue";

//console.log(this.$store.getters["getNavTab"]);
export default {
  name: "vw-home-mobile",
  components: {
    "mob-header": HeaderComponent,
    "mob-navbar": NavbarComponent,
    "mob-info": InfoComponent,
    "mob-service": ServiceComponent,
    "mob-profile": ProfileComponent,
    "mob-preloader": PreloaderComponent
  },
  computed: {
    ...mapState(["navigation"]),
    ...mapGetters(["getNavTab"])
  },
  mounted() {
    var self = this;
    setTimeout(function() {
      self.isReady = true;
    }, 500);
  },
  data() {
    return {
      isReady: false
    };
  },
  methods: {}
};
</script>

<style lang="less">
@import (reference) "../../styles/main.less";

.vw-header {
  height: @view-header-height;
}
.vw-container {
  height: @view-container-height;
}
.vw-footer {
  height: @view-footer-height;
  position: fixed;
  bottom: 0px;
  top: auto;
  width: 100%;
}
</style>
