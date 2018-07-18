<template>
  <div class="wrapper">
    
    <h2 class="title"> Seleccione un metodo de pago</h2>

    <div class="card-list">

        <div class="card" v-bind:class="{ active: getPaymentType() == 'cash' }" @click="setPaymentType('cash')">
            <img src="../../assets/img/mob-service/payment/card.png" class="" alt=""   v-if="getPaymentType() == 'cash'">
            <img src="../../assets/img/mob-service/payment/card_b.png" class="" alt="" v-if="getPaymentType() != 'cash'">
            <h2>Efectivo</h2>
        </div>
        <div class="card" v-bind:class="{ active: getPaymentType() == 'card' }" @click="setPaymentType('card')">
            <img src="../../assets/img/mob-service/payment/cash.png" class="" alt=""   v-if="getPaymentType() == 'card'">
            <img src="../../assets/img/mob-service/payment/cash_b.png" class="" alt="" v-if="getPaymentType() != 'card'">
            <h2>Tarjeta</h2>
        </div>

        <div class="button-group">
            <button class="button" @click="setStep('place')">Volver</button>
            <button class="button" @click="setStep('confirm')">Siguiente</button>
        </div>

    </div>
    
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    setStep(step) {
      let self = this;
      self.$store.dispatch("update_serviceStep", step);
    },
    getPaymentType() {
      return this.$store.getters["getTypeOfPayment"];
    },
    setPaymentType(type) {
      let self = this;
      self.$store.dispatch("update_servicePayment", type);
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../styles/main.less";
.wrapper {
  .displayColumnCenter();
  width: 100%;
  height: @view-content-h;
  display: block;
  overflow: scroll;
}
.card {
  width: 25vw;
  height: 25vw;
  display: block;
  border: 5px solid @color-gray;
  border-radius: 0.3em;
  text-align: center;
  font-family: "font-light";
  color: @color-dark-gray;
  background-color: @color-white;
  padding: 0px;
  .flex-centerAll();
  &.active {
    background-color: @color-red;
    border: 5px solid @color-red;
    border-radius: 0.3em;
    color: white;
  }
  img {
    width: 50%;
  }
}
</style>
