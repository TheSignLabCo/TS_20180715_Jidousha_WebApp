<template>
  <div class="wrapper">
    <img src="../assets/img/header-text-logo.png" class="logo">
    <img src="../assets/img/header-question-logo.png" class="question">
  </div>
</template>

<script>
export default {
  name: "mob-header",
  data() {
    return {
      componentState: "s"
    };
  }
};
</script>

<style lang="less" scoped>
@import "../styles/main.less";
.wrapper {
  padding: 2vh;
  background-color: @color-white;
  border-bottom: 0.1vw solid @color-dark-gray;
}
.logo {
  width: 30%;
  margin: 0 auto;
  .align-self(center);
}
.question {
  width: 4%;
}
</style>
