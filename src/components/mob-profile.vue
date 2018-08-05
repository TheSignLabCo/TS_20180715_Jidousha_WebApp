<template>
  <div class="wrapper">

    <div class="section login" v-if="!isLogged">

        <fb-signin-button
        :params="fbSignInParams"
        @success="onFSignInSuccess"
        @error="onFSignInError">
        Continua con Facebook
        </fb-signin-button>

        <g-signin-button
        :params="googleSignInParams"
        @success="onGSignInSuccess"
        @error="onGSignInError">
        Continua con Google
        </g-signin-button>


    </div>
    <div class="section profile" v-if="isLogged">


    </div>
    
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import facebookLogin from "facebook-login-vuejs";

export default {
  data() {
    return {
      isLogged: false,
      fbSignInParams: {
        scope: "email",
        return_scopes: true
      },
      googleSignInParams: {
        client_id:
          "92300082371-ranqtopes13nqbolp0inrrqp4tdb4a5d.apps.googleusercontent.com"
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
    onFSignInSuccess(response) {
      FB.api("/me", dude => {
        console.log(`Good to see you, ${dude.name}.`);
      });
    },
    onFSignInError(error) {
      console.log("OH NOES an errro", error);
    },
    onGSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile(); // etc etc
      console.log(profile);
    },
    onGSignInError(error) {
      // `error` contains any error occurred.
      console.log("OH NOES", error);
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../styles/main.less";
.wrapper {
  .flex-display(flex);
  .flex-direction(column);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);
  height: 100%;
  height: calc(
    100vh - @view-frame-header - @view-frame-header - (@view-frame-footer) / 2
  );
}

.title {
  color: white;
}

.fb-signin-button {
  width: 50vw;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
  margin: 1em auto;
}
.g-signin-button {
  width: 50vw;
  display: inline-block;
  padding: 4px 8px;
  margin: 1em auto;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}

.section {
  .flex-display(flex);
  .flex-direction(column);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);
}
</style>
