<template>
  <div>
    <div class="background" />
    <video autoplay loop=true muted=true preload=auto class="home-background" src="/static/givingday.mp4">
      No video support.
    </video>
    <div class="home-background overlay" />
    <b-row>
      <h1 class="home-hero-text">Cornell Design <br />&amp; Tech Initiative</h1>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
@import '../index.scss';

$left-hero-margin: 5%;
$top-hero-margin: 70%;

.background {
  color: black;
  width: 100vw;
  height: 100vh;
}

.home-background {
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  &.overlay {
    background-color: rgba(0, 0, 0, 0.3);
  }
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
