<template>
  <div class="home">
    <video class="home-background home-preload-background home-background-video" src="/static/givingday.m4v"
      autoplay loop=true muted=true preload=auto>
      Your browser does not support video playback.
      <!--TODO-->
    </video>
    <div class="home-background home-background-overlay" />
    <b-row>
      <h1 class="home-hero-text">Cornell Design <br />&amp; Tech Initiative</h1>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
@import '../index.scss';

$hero-margin: 5%;

.home {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.home-background {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  &.home-preload-background {
    background-color: #000;
  }

  &.home-background-overlay {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &.home-background-video {
    object-fit: cover;
  }
}

.home-hero-text {
  font-family: 'Space Mono';
  position: absolute;
  bottom: $hero-margin;
  left: $hero-margin;
  right: $hero-margin;
  text-align: left;
  font-weight: bolder;

  @media (max-width: 767px) {
    font-size: 3.0rem;
  }

  @media (min-width: 768px) {
    font-size: 4.4rem;
  }

  color: #fff;
}
</style>
