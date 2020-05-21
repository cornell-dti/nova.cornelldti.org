<template>
  <div v-if="content">
    <div class="home">
      <lazy-video
        className="home-background home-preload-background home-background-video"
        :lazy="content.hero.lazy"
        :video="content.hero.video"
      />
      <div class="home-background home-background-overlay" />
      <b-row>
        <h1 class="home-overlay-text">
          Cornell Design
          <br />&amp; Tech Initiative
        </h1>
      </b-row>
    </div>
    <text-hero :header="content.textHero.header" :subheader="content.textHero.subheader" />

    <page-sublist :border-padding="true">
      <quicklink
        :link="content.quicklinks.projects.link"
        :image="content.quicklinks.projects.image"
        :header="content.quicklinks.projects.header"
        :subheader="content.quicklinks.projects.subheader"
      />
      <quicklink
        :link="content.quicklinks.team.link"
        :image="content.quicklinks.team.image"
        :header="content.quicklinks.team.header"
        :subheader="content.quicklinks.team.subheader"
      />
      <quicklink
        :link="content.quicklinks.initiatives.link"
        :image="content.quicklinks.initiatives.image"
        :header="content.quicklinks.initiatives.header"
        :subheader="content.quicklinks.initiatives.subheader"
      />
    </page-sublist>

    <div style="padding-bottom:2vw" />

    <dti-footer page="home" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Quicklink from '../components/Quicklink.vue';
import LazyVideo from '../components/LazyVideo.tsx';

import { HomeContent } from '../content';

@Component({
  components: {
    Quicklink,
    LazyVideo
  }
})
export default class HomeView extends Vue {
  @Prop({ required: true })
  content!: HomeContent;
}
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
    height: 100vh;
    width: 100vw;
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
