<template>
  <div class="wrapper">
    <h2 class="title"> ¿Cuando necesitaía el servicio?</h2>
    <div class="button-group">
      <button class="button big-square " v-bind:class="{ active: selected == 'now' }" @click="setSelectTime('now')">
        <img class="" alt="" src="../../assets/img/mob-service/time/now-w.png" v-if="selected == 'now'">
        <img class="" alt="" src="../../assets/img/mob-service/time/now-g.png" v-if="selected != 'now'">
        <h3>Pedir <br> Ahora</h3>
      </button>
      <button class="button big-square" v-bind:class="{ active: selected == 'later' }" @click="setSelectTime('later')">
        <img class="" alt="" src="../../assets/img/mob-service/time/later-w.png" v-if="selected == 'later'">
        <img class="" alt="" src="../../assets/img/mob-service/time/later-g.png" v-if="selected != 'later'">
        <h3>Programar <br> Servicio</h3>
      </button>
    </div>
    <v-touch @swipeleft="prevMonth()" @swiperight="nextMonth()">
    <div class="month-picker" >
      <span class="prev" @click="prevMonth()"><img src="../../assets/img/mob-service/time/next.png"></span>
      <span class="month">{{getMonthName()}}</span>
      <span class="next" @click="nextMonth()"><img src="../../assets/img/mob-service/time/prev.png"></span>
    </div>
    </v-touch>
    <div class="dayAndHour-picker">
      <div class="day-picker">
        <span class="title">DIA</span>
          <select v-model="hour">
          <option disabled value="">{{'15'}}</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          </select>
      </div>
      <div class="hour-picker">
        <span class="title">HORA</span>
          <select v-model="hour">
          <option disabled value="">{{'7:00 am'}}</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "mob-service-step-time",
  data() {
    return {
      selected: "now",
      time: {
        month: 0
      },
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ]
    };
  },
  mounted() {
    var d = new Date();
    var n = d.getMonth();
    this.time.month = n;
  },
  methods: {
    setSelectTime(opt) {
      this.selected = opt;
    },
    prevMonth() {
      let tempTime = this.time.month - 1;
      if (tempTime == -1) {
        tempTime = 11;
      }
      this.time.month = tempTime;
    },
    nextMonth() {
      let tempTime = this.time.month + 1;
      if (tempTime == 12) {
        tempTime = 0;
      }
      this.time.month = tempTime;
    },
    getMonthName() {
      return this.months[this.time.month];
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../styles/main.less";
.wrapper {
  .displayColumnCenter();
  width: 100%;
  height: @view-height;
  display: block;
  overflow: scroll;
}
.month-picker {
  background-color: @color-dark-gray;
  color: white;
  padding: 2.5vw;
  margin: 2.5vw 0vw;
  width: 100%;
  box-sizing: border-box;
  text-transform: uppercase;
  font-family: "font-light";
  .displayRowEspace();
  .prev,
  .next {
    padding: 5%;

    img {
      height: 5vw;
    }
  }
}
</style>
