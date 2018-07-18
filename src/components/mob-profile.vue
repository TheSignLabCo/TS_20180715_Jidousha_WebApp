<template>
  <div class="wrapper">

    <div class="section login">
   <facebook-login class="button"
      appId="839473029579421"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>
    </div>
    <div class="section profile">


    </div>
    
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import facebookLogin from "facebook-login-vuejs";

export default {
  data() {
    return {};
  },
  components: {
    facebookLogin
  },
  computed: {
    auth: function() {
      return this.$store.getters.getAuth();
    }
  },
  mounted() {},
  methods: {
    login() {
      this.$store.dispatch("update_auth", { user, requestOptions });
    },
    getUserData(data) {
      console.log(data);
    },
    onLogout() {}
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../styles/main.less";
.wrapper {
  .displayColumnCenter();
  width: 100%;
  height: calc(@view-h + (@footer-h) / 2);
  display: block;
  overflow: scroll;

  background-color: @color-red;
}

.title {
  color: white;
}
</style>
