<template>
  <div class="wrapper">
 <h2 class="title">
   Reparación de {{getType()}}
 </h2>
 <img src="../../assets/img/mob-service/service/camanance.png" class="thumb" alt="AutoStudio Reparación de Camanances" v-if="getType() == 'camanances'">
 <img src="../../assets/img/mob-service/service/parabrisas.png" class="thumb" alt="AutoStudio Reparación de Camanances" v-if="getType() == 'parabrisas'">
 <ul class="list">
   <li class="list-item" v-for="term in getTerms()" v-bind:key="term">
      <span v-html="term"></span>
   </li>
   <li class="list-item">
     <span class='footenote'>*con excepción de aluminio o hierro (parachoques de Pick up).</span>
   </li>
 </ul>
 <div class="button-group fix">
 <button class="button" @click="setStep('type')">Volver</button>
 <button class="button" @click="setStep('time')">Siguiente</button>
 </div>
 
 <span class="disclaimer">Al continuar se aceptan los terminos y condiciones del servicio de reparación de {{getType()}}</span>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "mob-service-step-terms",
  data() {
    return {
      terms: {
        camanaces: [
          "<div class='tick'></div><p>El golpe es menor a 10 cm de diámetro.</p>",
          "<div class='tick'></div><p>El golpe no afecto la pintura del vehículo",
          "<div class='tick'></div><p>EL golpe fue en cualquier parte metálica del carro*. <br> </p>"
        ],
        parabrisas: []
      }
    };
  },
  methods: {
    getTerms() {
      if (this.getType() == "camanances") {
        return this.terms.camanaces;
      } else {
        return this.terms.parabrisas;
      }
    },
    getType: function() {
      return this.$store.getters["getTypeOfService"];
    },
    setStep(step) {
      let self = this;
      self.$store.dispatch("update_serviceStep", step);
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../styles/main.less";
/*
.wrapper {
  width: 100%;
  height: @view-content-h;
  overflow: hidden;
  .containerHeaderContent();
  //height: calc(100% - 40vw);
  .displayColumnTop();
}
*/
</style>
