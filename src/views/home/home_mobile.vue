<template>
  <div class="device mobile" id="mobile-home">

    <div class="header">
      <mob-header></mob-header>
    </div>

    <div class="container">

        <div class="section" v-if="this.$store.getters['getNavTab'] == 'info'">
          <mob-info ></mob-info>
        </div>

        <div class="section" v-if="this.$store.getters['getNavTab'] == 'service'">
          <mob-service></mob-service>
        </div>
        
        <div class="section" v-if="this.$store.getters['getNavTab'] == 'profile'">
          <mob-profile></mob-profile>
        </div>

    </div>

    <div class="navigator">
      <mob-navbar></mob-navbar>
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
//console.log(this.$store.getters["getNavTab"]);
export default {
  name: "vw-home-mobile",
  components: {
    "mob-header": HeaderComponent,
    "mob-navbar": NavbarComponent,
    "mob-info": InfoComponent,
    "mob-service": ServiceComponent,
    "mob-profile": ProfileComponent
  },
  computed: {
    ...mapState(["navigation"]),
    ...mapGetters(["getNavTab"])
  },
  methods: {}
};
</script>

<style lang="less">
@import (reference) "../../styles/main.less";

#mobile-home {
  width: 100vw;
  height: 100vh;
  display: block;
}

.header {
  .header();
}
.container {
  .containerContent();
  padding: 0%;
  .section {
    .containerContent();
    padding: 0%;
  }
}
.navigator {
  .footer();
}
</style>
