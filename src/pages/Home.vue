<template>
  <div>
    <div class="home">
      <visual
        :video="aws(AssetStrings.get('pages.home.hero.video'))"
        :poster="AssetStrings.get(`pages.home.hero.lazy`)"
        class="home-background home-preload-background home-background-video"
        autoplay
        :fill="true"
        background="cover"
        :loop="true"
        :muted="true"
        preload="auto"
        load-video="visible"
        :load-poster="true"
      />
      <div class="home-background home-background-overlay"/>
      <b-row>
        <h1 class="home-overlay-text">Cornell Design
          <br>&amp; Tech Initiative
        </h1>
      </b-row>
    </div>
    <text-hero
      :header="Strings.get('text-hero.header')"
      :subheader="Strings.get('text-hero.subheader')"
    />

    <page-sublist :border-padding="true">
      <quicklink
        :link="Strings.get('quicklinks.projects.link')"
        :image="AssetStrings.get(`pages.home.quicklinks.projects`)"
        :header="Strings.get('quicklinks.projects.header')"
        :subheader="Strings.get('quicklinks.projects.subheader')"
      />
      <quicklink
        :link="Strings.get('quicklinks.team.link')"
        :image="AssetStrings.get(`pages.home.quicklinks.team`)"
        :header="Strings.get('quicklinks.team.header')"
        :subheader="Strings.get('quicklinks.team.subheader')"
      />
      <quicklink
        :link="Strings.get('quicklinks.initiatives.link')"
        :image="AssetStrings.get(`pages.home.quicklinks.initiatives`)"
        :header="Strings.get('quicklinks.initiatives.header')"
        :subheader="Strings.get('quicklinks.initiatives.subheader')"
      />
    </page-sublist>

    <div style="padding-bottom:2vw"/>

    <dti-footer page="home"/>
  </div>
</template>

<script>
import Quicklink from '@/components/Quicklink';

import JSONStringsBackend from '@/data/strings/jsonStringsBackend';
import StringsFrontend from '@/data/strings/strings';

const Strings = new StringsFrontend(new JSONStringsBackend('home'));
const AssetStrings = new StringsFrontend(new JSONStringsBackend('assets'));

export default {
  components: {
    Quicklink
  },
  data() {
    return {
      Strings: Strings,
      AssetStrings: AssetStrings
    }
  }
};
</script>


<style lang="scss" scoped>
$hero-margin: 3vw;

.home {
  position: relative;
  height: 100vh;
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
