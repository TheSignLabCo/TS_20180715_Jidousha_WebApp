<template>
    <div class="wrapper">
      <h1>BIENVENIDO</h1>
    </div>
</template>

<script>
export default {
  name: "App-Preloader"
};
</script>

<style lang="less" scoped>
@import "../styles/main.less";
// ---------------------------------------------------- //
// -- PRELOADER STYLES : MOBILE FIRST                -- //
// ---------------------------------------------------- //

.wrapper {
  display: block;
  position: absolute;
  z-index: 500;
  top: 0vh;
  left: 0px;
  width: 100vw;
  height: 100vh;
  color: @color-white;
  background-color: @color-blue;
  background-image: url(/static/img/app-intro-bg.png);
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  .flex-display(flex);
  .flex-direction(column);
  .flex-wrap(nowrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);
  h1 {
    font-family: "font-futura-bold-italic";
    position: absolute;
    bottom: 1em;
    right: 1em;
    z-index: 500;
  }
}

.logo {
  display: block;

  width: 50vw;
  height: auto;
}

.spinner {
  display: block;

  margin: 5vw;

  width: 25vw;
  height: auto;
}

.block {
  width: 50vw;
  height: 100%;
  display: block;

  position: relative;
  top: -100%;
  background: rgba(0, 0, 0, 0);
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0) 50%,
    @color-blue 50%
  );
}
// ---------------------------------------------------- //
</style>
