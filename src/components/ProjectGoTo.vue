<template>
  <b-row>
    <b-col cols="auto">
      <strings-domain
        v-if="project"
        #key="{website, website_title: websiteTitle, playstore, appstore, ios_github, android_github, github }"
        :value="project"
      >
        <b-row>
          <b-col cols="auto" v-if="website">
            <b-button :href="website">
              {{ `Go to ${websiteTitle || website}` }}
            </b-button>
          </b-col>

          <b-col cols="auto" v-if="playstore">
            <store-badge store="playstore" :url="playstore" />
          </b-col>
          <b-col cols="auto" v-if="appstore">
            <store-badge store="appstore" :url="appstore" />
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="ios_github && !appstore && !playstore && !website"
          >
            <b-button class="align-content-center" :href="ios_github">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">iOS</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="android_github && !appstore && !playstore && !website"
          >
            <b-button class="align-content-center" :href="android_github">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">Android</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="github && !appstore && !playstore && !website"
          >
            <b-button class="align-content-center" :href="github">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">GitHub</span>
            </b-button>
          </b-col>
        </b-row>
      </strings-domain>
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

import { Project } from '@/shared';

import StoreBadge from '@/components/StoreBadge.vue';
import Github from '@/assets/social/github.svg';

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
