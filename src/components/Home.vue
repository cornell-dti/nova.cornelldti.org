<template>
  <div>
    <h1 class="hero-text">Cornell Design <br />&amp; Tech Initiative</h1>
  </div>
</template>

<style lang="scss" scoped>
@import "../index.scss";

$left-hero-margin: 30%;
$top-hero-margin: 60%;

.hero-text {
  text-align: left;
  font-weight: bolder;
  font-size: 4.5em;
  position: absolute;
  top: $top-hero-margin;
  left: $left-hero-margin;
  transform: translate(-$left-hero-margin, -$left-hero-margin);
  color: white;
}


</style>