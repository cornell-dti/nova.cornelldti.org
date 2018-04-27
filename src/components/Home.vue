<template>
  <div id="home-hero">
    <dti-main-menu />
    <h1>Cornell Design <br />&amp; Tech Initiative</h1>
  </div>
</template>

<style lang="scss" scoped>
@import "../main.scss";

$left-hero-margin: 30%;
$top-hero-margin: 60%;

#home-hero {
  height: 100vh;
  width: 100%;
  background: url("/static/new-header-bg.jpg") no-repeat center center/cover;

  h1 {
    text-align: left;
    font-weight: bolder;
    font-size: 4.5em;
    position: absolute;
    top: $top-hero-margin;
    left: $left-hero-margin;
    transform: translate(-$left-hero-margin, -$left-hero-margin);
    color: white;
  }
}
</style>
