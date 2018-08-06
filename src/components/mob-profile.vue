<template>
  <div class="wrapper">

    <div class="section login" v-if="!isLogged">

      <img class="profile-default-icon" src="/static/img/mob-profile/login-profile-icon.png">

      <div class="login-button fb">
        <fb-signin-button
        :params="fbSignInParams"
        @success="onFSignInSuccess"
        @error="onFSignInError">
        Login con Facebook
        </fb-signin-button>
      </div>
      <span style="font-family:'font-light'">
        - or - 
      </span>
      <div class="login-button g">
        <g-signin-button
        :params="googleSignInParams"
        @success="onGSignInSuccess"
        @error="onGSignInError">
        Login con Google
        </g-signin-button>
      </div>

    </div>
    <div class="section profile" v-if="isLogged">

      <div class="top">
      <img :src="photo" class="profile">
      <h3 class="">Nombre : {{name}}</h3>
      <h3 class="">Email : {{email}}</h3>
      <h3 class="">Photo : {{photo}}</h3>
      </div>

      <div class="bottom">
        <ul class="services">
          <li class="service">
            <div class="service-header">
              <span class="service-header-title"></span>
              <img class="service-header-icon">
            </div>
            <div class="service-content">

            </div>
          </li>
        </ul>
      </div>
      
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
      name: "",
      photo: "",
      email: "",
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
  mounted() {
    var appProfileToken = localStorage.getItem("autostudio-app-profile");
    if (appProfileToken) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  },
  methods: {
    login() {
      this.$store.dispatch("update_auth", { user, requestOptions });
    },
    onFSignInSuccess(response) {
      var self = this;
      localStorage.setItem("autostudio-app-profile", "profile");
      self.isLogged = true;
      FB.api("/me", dude => {
        self.name = dude.name;
      });
      FB.api("/me", { fields: "email" }, function(response) {
        self.email = response.email;
        self.photo =
          "http://graph.facebook.com/" + response.id + "/picture?type=normal";
      });
    },
    onFSignInError(error) {
      console.log("OH NOES an errro", error);
    },
    onGSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile(); // etc etc
      var self = this;
      console.log(profile);
      localStorage.setItem("autostudio-app-profile", "profile");
      self.isLogged = true;
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
  height: calc(100vh - @view-frame-header - @view-frame-header);
  color: @color-white;
  background-color: @color-blue;
  background-image: url("/static/img/mob-profile/login-bg.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.title {
  color: white;
}
.profile-default-icon {
  width: 20vw;
  display: block;
  margin: 0 auto;
}
.fb-signin-button {
  width: 50vw;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  color: #fff;
  margin: 1em auto;
  text-align: center;
}
.g-signin-button {
  width: 50vw;
  display: inline-block;
  padding: 4px 8px;
  margin: 1em auto;
  border-radius: 3px;
  color: #fff;
  text-align: center;
}

.section {
  .flex-display(flex);
  .flex-direction(column);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);
}

.login-button {
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0.5em 1.5em;
  font-family: "font-light";
  &.fb {
    background-image: url("/static/img/mob-profile/login-fb-bg.png");
  }
  &.g {
    background-image: url("/static/img/mob-profile/login-g-bg.png");
  }
}

.top {
  width: 100vw;
  .flex-display(flex);
  .flex-direction(column);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);
  .profile {
    border-radius: 100%;
  }
}
</style>
