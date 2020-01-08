<template>
  <b-row>
    <b-col cols="auto">
      <strings
        :source="`projects.${this.projectId}`"
        :strings="[
          'website',
          'website-title',
          'playstore',
          'appstore',
          'ios-github',
          'android-github',
          'github'
        ]"
        #strings="[website, websiteTitle, playstore, appstore, iosGithub, androidGithub, github]"
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
            v-if="iosGithub && !appstore && !playstore && !website"
          >
            <b-button class="align-content-center" :href="iosGithub">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">iOS</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="androidGithub && !appstore && !playstore && !website"
          >
            <b-button class="align-content-center" :href="androidGithub">
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
      </strings>
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

<script>
import StoreBadge from '@/components/StoreBadge.vue';

import Github from '@/assets/social/github.svg';

export default {
  components: {
    Github,
    StoreBadge
  },
  props: {
    projectId: {
      type: String,
      required: true
    }
  }
};
</script>
