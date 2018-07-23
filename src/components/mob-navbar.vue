<template>
<div class="wrapper">
  <div class="profile-icon" v-bind:class="{ active: $store.state.navigation.navbar.currentTab =='profile'}" @click="updateTab('profile')">
     <img class="icon" src="../assets/img/navbar/profile-icon.png" alt=""  v-bind:class="{ active: $store.state.navigation.navbar.currentTab =='profile'}">
  </div>
  <div class="tabs">
    <div class="tab info" @click="updateTab('info')"  v-bind:class="{ active: $store.state.navigation.navbar.currentTab=='info' }">
      <img src="../assets/img/navbar/tab-info-icon-active.png" v-if="$store.state.navigation.navbar.currentTab =='info'">
      <img src="../assets/img/navbar/tab-info-icon-default.png" v-if="$store.state.navigation.navbar.currentTab!='info'">
    </div>
    <div class="tab service" @click="updateTab('service')" v-bind:class="{ active: $store.state.navigation.navbar.currentTab=='service' }">
       <img src="../assets/img/navbar/tab-service-icon-active.png" v-if="$store.state.navigation.navbar.currentTab=='service'">
      <img src="../assets/img/navbar/tab-service-icon-default.png" v-if="$store.state.navigation.navbar.currentTab!='service'">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "mob-navbar",
  data() {
    return {
      mobActiveTab: " "
    };
  },
  mounted() {
    this.updateTab("info");
  },
  methods: {
    updateTab(tabName) {
      this.$store.dispatch("update_navTab", tabName);
    }
  }
};
</script>

<style scoped lang="less">
@import (reference) "../styles/main.less";
.wrapper {
  height: 100%;

  .footer();
}
.profile-icon,
.tabs {
  position: absolute;
  bottom: 0px;
  height: calc((@footer-h) / 2);
}
.profile-icon {
  height: calc((@footer-h) / 1);
  width: 12vw;
  left: calc(50% - 6vw);
  z-index: 10;

  .flex-display(flex);
  .flex-direction(row);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);
  img {
    width: 100%;
    border: 1px solid @color-gray;
    border-radius: 100%;
    &.active {
      border: 1px solid @color-red;
    }
  }
}
.tabs {
  display: block;

  .flex-display(flex);
  .flex-direction(row);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);

  .tab {
    z-index: 5;
    display: inline-block;
    width: 50vw;
    height: calc(@footer-h / 2);
    box-sizing: border-box;
    background-color: @color-white;
    border: 1px solid @color-gray;
    text-align: center;
    &.active {
      border-bottom: 1px solid @color-red;
      .icon {
        border: 1px solid @color-red;
      }
    }
    .flex-display(flex);
    .flex-direction(column);
    .flex-wrap(wrap);
    .justify-content(center);
    .align-content(center);
    .align-items(center);
    img {
      display: block;
      margin: 0 auto;
      height: 65%;
    }
  }
}
</style>
