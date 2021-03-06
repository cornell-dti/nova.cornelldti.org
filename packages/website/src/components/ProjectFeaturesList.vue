<template>
  <page-section v-if="project">
    <div class="project-header">Features</div>
    <b-row v-if="project.features[0]" align-v="center" class="mobile-space">
      <b-col md="7">
        <div class="feature-header" id="mobile">{{ project.features[0].title }}</div>
        <b-img class="product" :src="project.features[0].image" />
      </b-col>
      <b-col md="5">
        <div class="feature-header" id="hide">{{ project.features[0].title }}</div>
        <div class="project-description">{{ project.features[0].description }}</div>
      </b-col>
    </b-row>
    <b-row class="feature-padding" />
    <b-row v-if="project.features[1]" align-v="center" class="mobile-space">
      <b-col md="5" class="switch1">
        <div class="feature-header" id="hide">{{ project.features[1].title }}</div>
        <div class="project-description">{{ project.features[1].description }}</div>
      </b-col>
      <b-col md="7" class="switch2">
        <div class="feature-header" id="mobile">{{ project.features[1].title }}</div>
        <b-img class="product" :src="project.features[1].image" />
      </b-col>
    </b-row>
    <b-row class="feature-padding" />
    <b-row v-if="project.features[2]" align-v="center" class="mobile-space">
      <b-col md="7">
        <div class="feature-header" id="mobile">{{ project.features[2].title }}</div>
        <b-img class="product" :src="project.features[2].image" />
      </b-col>
      <b-col md="5">
        <div class="feature-header" id="hide">{{ project.features[2].title }}</div>
        <div class="project-description">{{ project.features[2].description }}</div>
      </b-col>
    </b-row>
  </page-section>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropValidator } from 'vue/types/options';

import { Project } from '../shared';

export default Vue.extend({
  props: {
    project: {
      required: true
    } as PropValidator<Project>
  }
});
</script>

<style lang="scss" scoped>
.project-hero {
  .project-hero-logo {
    margin: 1vw;
  }

  .project-hero-description {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40vw;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .project-hero-text-header {
    font-size: 3rem;
    font-weight: 600;
  }

  .project-hero-header-left {
    padding-bottom: 10vh;
  }
}

.project-header {
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.project-description {
  order: 3;
  font-size: 1.5rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.feature-header {
  order: 2;
  padding-bottom: 1.25rem;
  font-size: 2.25rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.product {
  order: 1;
  max-width: 100%;
  object-fit: contain;
}

.feature-padding {
  margin: 3vh;
}

#mobile {
  display: none;
}

@media (max-width: 767px) {
  .product {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  #hide {
    display: none;
  }

  #mobile {
    display: unset;
  }

  .mobile-space {
    margin-top: 20%;
  }

  .switch1 {
    order: 2;
  }

  .switch2 {
    order: 1;
  }
}
</style>
