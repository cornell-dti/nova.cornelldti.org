<template>
  <div class="nova-hero">
    <div class="nova-hero-visual-container">
      <lazy-video className="nova-hero-visual" :lazy="lazy" :image="image" :video="video" />
      <div class="nova-hero-overlay" />
    </div>
    <b-container v-if="header || subheader" fluid>
      <text-hero :header="header" :subheader="subheader" />
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
  object-fit: cover;
}

.nova-hero {
  position: relative;
  overflow: hidden;
}
</style>

<script lang="ts">
import Vue from 'vue';
import LazyVideo from './LazyVideo';

export default Vue.extend({
  components: { LazyVideo },
  props: {
    page: {
      type: String
    },
    header: {
      type: String
    },
    video: {
      default: {}
    },
    lazy: {
      type: String
    },
    image: {
      type: String
    },
    subheader: {
      type: String
    }
  }
});
</script>
