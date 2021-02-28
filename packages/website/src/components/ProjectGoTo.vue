<template>
  <b-row>
    <b-col cols="auto">
      <b-row>
        <b-col cols="auto" v-if="project.website">
          <b-button :href="project.website">
            {{ `Go to ${project['website_title'] || project.website}` }}
          </b-button>
        </b-col>
        <b-col cols="auto" v-if="project.playstore">
          <store-badge store="playstore" :url="project.playstore" />
        </b-col>
        <b-col cols="auto" v-if="project.appstore">
          <store-badge store="appstore" :url="project.appstore" />
        </b-col>
        <b-col
          class="connect-icon-container"
          cols="auto"
          v-if="project.ios_github && !project.appstore && !project.playstore && !project.website"
        >
          <b-button class="align-content-center" :href="project.ios_github">
            <Github class="connect-icon connect-icon-blank" />
            <span class="connect-text">iOS</span>
          </b-button>
        </b-col>
        <b-col
          class="connect-icon-container"
          cols="auto"
          v-if="
            project.android_github && !project.appstore && !project.playstore && !project.website
          "
        >
          <b-button class="align-content-center" :href="project.android_github">
            <Github class="connect-icon connect-icon-blank" />
            <span class="connect-text">Android</span>
          </b-button>
        </b-col>
        <b-col
          class="connect-icon-container"
          cols="auto"
          v-if="project.github && !project.appstore && !project.playstore && !project.website"
        >
          <b-button class="align-content-center" :href="project.github">
            <Github class="connect-icon connect-icon-blank" />
            <span class="connect-text">GitHub</span>
          </b-button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style lang="scss" scoped>
.connect-text {
  vertical-align: middle;
}

.connect-icon {
  width: 2rem;
  height: 2rem;

  &.connect-icon-blank {
    fill: #fff !important;

    path {
      fill: #fff !important;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { PropValidator } from 'vue/types/options';

import { Project } from '../shared';

import StoreBadge from './StoreBadge.vue';
import Github from '../assets/social/github.svg';

export default Vue.extend({
  components: {
    Github,
    StoreBadge
  },
  props: {
    project: {
      required: true
    } as PropValidator<Project>
  }
});
</script>
