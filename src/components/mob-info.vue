/* eslint-disable */
<template>
  <div class="wrapper">

    <div class="tabs">
      <div class="tab" @click="setTab('about')"   v-bind:class="{ 'active': this.tabName == 'about' }"> <span>¿Quiénes Somos?</span></div>
      <div class="tab" @click="setTab('contact')" v-bind:class="{ 'active': this.tabName == 'contact' }"> <span>Contacto</span></div>
    </div>

    <div class="contents" v-bind:style="{ transform: 'translateX(' + tabPosX + ')' }">

      <v-touch @swipeleft="setTab('contact')">
      <div class="content about">
        <div class="cover">
         <img class="img-car" src="../assets/img/mob-info/car-obj.png">
        </div>
        <div class="description">
          <h1>
            <span class="f-light">SU AUTO</span>
            <span class="f-bold">EN LAS MEJORES MANOS</span>
          </h1>
          <p>
            <span class="f-bold">Autostudio</span> le trae el sistema más avanzado
            de reparación exprés de su auto. 
            </p><p>
            Contacte uno de nuestros vehículos y
            descubra como está de regreso a la calle en tiempo récord.
          </p>
        </div>
      </div>
      </v-touch>

      <v-touch @swiperight="setTab('about')">
            <div class="content contact">

              <div class="img-contact-cover">
               <img class="contact-cover" src="../assets/img/mob-info/contact-img.png"  alt="AutoStudio! Con Nosotros">
              </div>

              <ul class="contact-info">
                <li> <a href="tel:50672053596"><img src="../assets/img/mob-info/contact-call.png">506 72053596</a> </li>
                <li> <a href="mailto:info@autostudio-cr.com"><img src="../assets/img/mob-info/contact-email.png">info@autostudio-cr.com</a> </li>
                <li> <a href="https://www.facebook.com/pages/biz/automotive_repair/AutoStudio-1790467927713072/"  target="_blank"><img src="../assets/img/mob-info/contact-facebook.png">Autostudio</a> </li>
              </ul>

            </div>
      </v-touch>

    </div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "mob-info",
  data() {
    return {
      tabPosX: "0vw",
      tabName: "about"
    };
  },
  computed: {
    ...mapState(["navigation"]),
    ...mapGetters(["getNavTab"])
  },
  methods: {
    setTab(currentTab) {
      if (currentTab == "about") {
        this.tabPosX = "0vw";
      } else {
        this.tabPosX = "-100vw";
      }
      this.tabName = currentTab;
    },
    setTabBySwipe(str, e) {
      console.log(str);
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../styles/main.less";
.contents {
  width: 200vw;
  height: calc(
    100vh - @view-frame-header - @view-frame-header - (@view-frame-footer) / 2
  );
  .flex-display(flex);
  .flex-direction(row);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);
}
.content {
  width: 100vw;
  height: calc(
    100vh - @view-frame-header - @view-frame-header - (@view-frame-footer) / 2
  );
}
.tab {
  background-color: #f2f2f2;
}
.cover {
  background-image: url("/static/img/info-bg-color.png");
  background-size: cover;
  height: calc(
    (100vh - @view-frame-header - @view-frame-header - @view-frame-footer) / 2
  );
  .flex-display(flex);
  .flex-direction(row);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(flex-end);
  img {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
}
.description {
  height: calc(
    (100vh - @view-frame-header - @view-frame-header - @view-frame-footer) / 2
  );
  box-sizing: border-box;
  padding: 10%;
  padding-bottom: 0px;
  .flex-display(flex);
  .flex-direction(column);
  .flex-wrap(wrap);
  .justify-content(space-around);
  .align-content(flex-start);
  .align-items(flex-start);
}
.description {
  h1 {
    color: @color-red;
    font-size: 7.5vw;
  }
  p {
    font-family: "font-light";
    color: @color-black;
    font-size: 4.25vw;
    padding-top: 1em;
  }
}
.img-contact-cover,
.contact-info {
  height: calc(
    (100vh - @view-frame-header - @view-frame-header - @view-frame-footer) / 2 +
      (@view-frame-footer / 4)
  );
  width: 100%;
  overflow: hidden;
}
.img-contact-cover {
  width: 100%;
}
.contact {
  background-color: @color-gray;
}
.img-contact-cover {
  width: 100%;
}
</style>
