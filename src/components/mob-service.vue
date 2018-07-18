<template>
  <div class="wrapper">

    <!-- Header : Menu de iconos de servicios -->
    <div class="header">
      <div class="icon" v-for="icon in icons"
                        v-bind:key="icon.title">

        <img v-bind:src="path + icon.img + icon.status + ext" v-bind:alt="icon.title">
        <h2>{{icon.title}}</h2>

      </div>
    </div>

    <!-- /Header : Menu de iconos de servicios -->
    <div class="content">

    <div class="step-view" v-if="getStep() == 'type'">
       <as-step-type></as-step-type>
    </div>

    <div class="step-view" v-if="getStep() == 'terms'">
       <as-step-terms></as-step-terms>
    </div>

    <div class="step-view" v-if="getStep() == 'time'">
       <as-step-time></as-step-time>
    </div>

    <div class="step-view" v-if="getStep() == 'place'">
       <as-step-place></as-step-place>
    </div>

    <div class="step-view" v-if="getStep() == 'payment'">
       <as-step-payment></as-step-payment>
    </div>

    <div class="step-view" v-if="getStep() == 'confirm'">
       <as-step-confirm></as-step-confirm>
    </div>

    </div>

  </div>
</template>
<script>
// import for VUEX
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

// import vue components
import viewType from "./mob-steps/mob-step-type";
import viewTerms from "./mob-steps/mob-step-terms";
import viewTime from "./mob-steps/mob-step-time";
import viewPlace from "./mob-steps/mob-step-place";
import viewPayment from "./mob-steps/mob-step-payment";
import viewConfirm from "./mob-steps/mob-step-confirm";

// main vue component
export default {
  name: "mob-service",
  components: {
    "as-step-type": viewType,
    "as-step-terms": viewTerms,
    "as-step-time": viewTime,
    "as-step-place": viewPlace,
    "as-step-payment": viewPayment,
    "as-step-confirm": viewConfirm
  },
  data() {
    return {
      path: "static/img/mob-service/icons/",
      ext: ".png",
      icons: [
        {
          k: 0,
          title: "Servicio",
          img: "icon-type-",
          status: "active"
        },
        {
          k: 1,
          title: "Tiempo",
          img: "icon-time-",
          status: "default"
        },
        {
          k: 2,
          title: "Pago",
          img: "icon-payment-",
          status: "default"
        },
        {
          k: 3,
          title: "Asesor",
          img: "icon-advisor-",
          status: "default"
        }
      ]
    };
  },
  methods: {
    setTab(x) {
      for (let k = 0; k < this.icons.length; k++) {
        this.icons[k].status = "default";
      }
      this.icons[x].status = "active";
    },
    getStep: function() {
      return this.$store.getters["getStep"];
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "../styles/main.less";
.wrapper {
  height: calc(@view-h + (@footer-h / 2));
}
.header {
  .displayRowExpand();
  height: @view-header-h;
  box-sizing: border-box;
  .icon {
    width: fit-content;
    height: fit-content;
    box-sizing: border-box;
    display: block;
    text-align: center;
    font-family: "font-light";
    font-size: 0.85em;
    color: @color-dark-gray;
    h2 {
      padding: 0.15em 0em;
    }
    img {
      display: block;
      margin: 0.1em auto;
      width: 2em;
    }
    &.active {
      color: @color-red;
    }
  }
}
@cfooter : calc(@footer-h/2);
.content {
  display: block;

  width: 100%;
  height: calc(@view-h + (@footer-h / 2) - @view-header-h);

  background-color: @color-white;
  padding: 0%;

  overflow: hidden;
}

.step-view {
  height: 100%;
}
</style>

