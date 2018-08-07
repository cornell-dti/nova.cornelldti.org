<template>
  <div>
    <div class="home">
      <visual :video="aws(Strings.get('pages.home.hero.video', 'assets'))" class="home-background home-preload-background home-background-video"
        autoplay :fill="true" background="cover" :loop="true" :muted="true" preload=auto
      />
      <div class="home-background home-background-overlay" />
      <b-row>
        <h1 class="home-overlay-text">Cornell Design <br />&amp; Tech Initiative</h1>
      </b-row>
    </div>
    <text-hero :header="Strings.get('text-hero.header', 'home')" :subheader="Strings.get('text-hero.subheader', 'home')"
    />
    <page-sublist :border-padding="true">
      <quicklink image="/static/pages/projects/hero/hero.png" header="Projects" subheader="What we do >"
      />
      <quicklink image="/static/pages/team/hero/hero.png" header="Team" subheader="Who we are >"
      />
      <quicklink image="/static/pages/initiatives/hero/hero-lazy.png" header="Initiatives" subheader="Why we do it >"
      />
    </page-sublist>

    <dti-footer />
  </div>
</template>

<style lang="scss" scoped>
$hero-margin: 3vw;

.home {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.home-background {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  &.home-preload-background {
    background-color: #000;
  }

  &.home-background-overlay {
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    width: 100vw;
  }

  &.home-background-video {
    object-fit: cover;
  }
}

.home-overlay-text {
  position: absolute;
  bottom: $hero-margin - 1vw;
  left: $hero-margin;
  right: $hero-margin;
  text-align: left;
  font-weight: bolder;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
}
</style>
