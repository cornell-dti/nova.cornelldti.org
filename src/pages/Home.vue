<template>
  <div>
    <div class="background" />
    <video class="home-background" src="/static/givingday.mp4" autoplay loop=true muted=true
      preload=auto>
      Your browser does not support video playback.
      <!--TODO-->
    </video>
    <div class="home-background overlay" />
    <b-row>
      <h1 class="home-hero-text">Cornell Design <br />&amp; Tech Initiative</h1>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
@import '../index.scss';

$hero-margin: 5%;

.background {
  color: #000;
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
  position: absolute;
  bottom: $hero-margin;
  left: $hero-margin;
  text-align: left;
  font-weight: bolder;
  font-size: 4.5em;
  color: #fff;
}
</style>
