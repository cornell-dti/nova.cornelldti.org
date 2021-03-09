<template>
  <page-section
    v-if="
      enableAll ||
        (!website && !playstore && !appstore) ||
        ((playstore || appstore || website) && (ios_github || android_github || github))
    "
  >
    <div class="project-header">Learn More</div>
    <b-row>
      <b-col cols="auto">
        <b-row>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="(enableAll || website || playstore || appstore) && ios_github"
          >
            <b-button class="align-content-center" :href="ios_github">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">iOS</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="(enableAll || website || playstore || appstore) && android_github"
          >
            <b-button class="align-content-center" :href="android_github">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">Android</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="(enableAll || website || playstore || appstore) && github"
          >
            <b-button class="align-content-center" :href="github">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">GitHub</span>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </page-section>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropValidator } from 'vue/types/options';

import { Project } from '../shared';

import Github from '../assets/social/github.svg';

export default Vue.extend({
  components: { Github },
  props: {
    project: {
      required: true
    } as PropValidator<Project>,
    enableAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    website(): string | undefined {
      return this.project.website;
    },
    playstore(): string | undefined {
      return this.project.playstore;
    },
    appstore(): string | undefined {
      return this.project.appstore;
    },
    github(): string | undefined {
      return this.project.github;
    },
    ios_github(): string | undefined {
      return this.project.ios_github;
    },
    android_github(): string | undefined {
      return this.project.android_github;
    }
  }
});
</script>

<style lang="scss" scoped>
.connect-icon-container {
  margin: auto 0.1rem;
}

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
  font-size: 1.5rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}
</style>
