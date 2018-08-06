<template>
  <div class="step">
    <h2 class="title">Selecciona un servicio</h2>
    <ul class="card-list">
      <li class="card">
        <img src="../../assets/img/mob-service/service/camanance.png">
        <button class="button" @click="setType('camanances')">Reparación de<br> Camanances</button>
      </li>
      <li class="card">
        <img src="../../assets/img/mob-service/service/parabrisas.png">
        <button class="button" @click="setType('parabrisas')">Reparación de<br> Parabrisas</button>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "viewType",
  data() {
    return {};
  },
  methods: {
    setType(type) {
      var self = this;
      self.$store.dispatch("update_serviceStep", "terms");
      self.$store.dispatch("update_serviceType", type);
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
  display: block;
  overflow: hidden;
  .containerHeaderContent();
  height: calc(100% + (@footer-h / 2));
  height: 100%;
}
.title {
  margin: 0 auto;
}
*/
</style>

