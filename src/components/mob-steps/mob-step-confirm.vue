<template>
  <div class="wrapper">

    <h2 class="title"> Confirmar Pago </h2>
    
    <div class="button-group">
        <button class="button" @click="setStep('payment')">Volver</button>
        <button class="button" @click="setStep('advisor')">Siguiente</button>
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
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../styles/main.less";
/*
.wrapper {
  .displayColumnCenter();
  width: 100%;
  height: @view-content-h;
  display: block;
  overflow: scroll;
}
*/
</style>
