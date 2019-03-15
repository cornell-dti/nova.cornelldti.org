<template>
  <div class="nova-hero">
    <div class="nova-hero-visual-container">
      <visual
        :video="aws(AssetStrings.get(`pages.${page}.hero.video`))"
        :poster="AssetStrings.get(`pages.${page}.hero.lazy`)"
        background="cover"
        :fallback="aws(AssetStrings.get(`pages.${page}.hero.image`))"
        class="nova-hero-visual"
        align="top left"
        autoplay
        :loop="true"
        :muted="true"
        preload="auto"
        :fill="true"
        load-video="visible"
        :load-poster="true"
      />

      <div class="nova-hero-overlay"/>
    </div>
    <b-container v-if="header || subheader" fluid>
      <text-hero :header="header" :subheader="subheader"/>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.nova-hero-header {
  font-size: 5rem;
  font-weight: bold;
}

.nova-hero-subheader {
  font-size: 2rem;
}

.nova-hero-visual-container {
  position: relative;
}

$height: 65vh;

.nova-hero-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: $height;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
}

.nova-hero-visual {
  height: $height;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.nova-hero {
  position: relative;
  overflow: hidden;
}
</style>


<script>

import JSONStringsBackend from '@/data/strings/jsonStringsBackend';
import StringsFrontend from '@/data/strings/strings';

const AssetStrings = new StringsFrontend(new JSONStringsBackend('assets'));

export default {
  props: {
    page: {
      type: String
    },
    header: {
      type: String
    },
    subheader: {
      type: String
    }
  },
  data() {
    return {
      AssetStrings: AssetStrings
    }
  }
};
</script>

