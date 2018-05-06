<template :slot="$route.path + '/body'">
  <div class="home-background">
    <b-row>
      <h1 class="home-hero-text">Cornell Design <br />&amp; Tech Initiative</h1>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
@import "../index.scss";

$left-hero-margin: 30%;
$top-hero-margin: 60%;

.home-background {
  height: 100vh;
  background-image: url("/static/test4.jpg");
  background-size: cover;
}

.home-hero-text {
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
