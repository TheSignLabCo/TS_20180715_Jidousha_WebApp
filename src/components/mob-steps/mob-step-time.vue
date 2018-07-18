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
        <span class="picker-title">DIA</span>
          <select v-model="time.day">
          <option v-for="option in options.days[time.month]" v-bind:value="option">
            {{ option + 1}}
          </option>
          </select>
      </div>
      <div class="hour-picker">
        <span class="picker-title">HORA</span>
          <select v-model="time.hour">
          <option v-for="option in options.hours" v-bind:value="option">
            {{ option + 1}}
          </option>
          </select>
      </div>
    </div>
    <div class="button-group">
      <button class="button" @click="setStep('terms')">Volver</button>
      <button class="button" @click="setStep('place')">Siguiente</button>
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
      options: {
        days: [
          Array.from(new Array(31), (val, index) => index),
          Array.from(new Array(28), (val, index) => index),
          Array.from(new Array(31), (val, index) => index),
          Array.from(new Array(30), (val, index) => index),
          Array.from(new Array(31), (val, index) => index),
          Array.from(new Array(30), (val, index) => index),
          Array.from(new Array(31), (val, index) => index),
          Array.from(new Array(31), (val, index) => index),
          Array.from(new Array(30), (val, index) => index),
          Array.from(new Array(31), (val, index) => index),
          Array.from(new Array(30), (val, index) => index),
          Array.from(new Array(31), (val, index) => index)
        ],
        hours: Array.from(new Array(23), (val, index) => index)
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
    setStep(step) {
      let self = this;
      self.$store.dispatch("update_serviceStep", step);
    },
    setSelectTime(opt) {
      this.selected = opt;
      if (opt == "now") {
        var d = new Date();
        var n = d.getMonth();
        var dd = (d.getDate() < 10 ? "0" : "") + d.getDate();
        var dh = d.getHours();
        window.console.log(d);
        window.console.log(n);
        window.console.log(dd);
        window.console.log(dh);
        this.time.month = n;
        this.time.hour = dh - 1;
        this.time.day = dd - 1;
      }
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
  height: @view-content-h;
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
.dayAndHour-picker {
  .displayRowExpand();
  select {
    background-color: white;
    border: none;
  }
}
.day-picker {
  display: inline-block;
  width: 50%;
  .displayColumnCenter();
  .picker-title {
    font-family: "font-light";
  }
}
.hour-picker {
  display: inline-block;
  width: 50%;
  .displayColumnCenter();
  .picker-title {
    font-family: "font-light";
  }
}
</style>
