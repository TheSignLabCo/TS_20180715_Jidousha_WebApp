<template>
  <div class="wrapper">

    <div class="section login">
              <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
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
    return {
      fbSignInParams: {
        scope: "email",
        return_scopes: true
      }
    };
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
    onLogout() {},
    onSignInSuccess(response) {
      FB.api("/me", dude => {
        console.log(`Good to see you, ${dude.name}.`);
      });
    },
    onSignInError(error) {
      console.log("OH NOES an errro", error);
    }
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

.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
