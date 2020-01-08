<template>
  <strings
    :source="`projects.${this.projectId}`"
    :strings="{
      website: 'website',
      websiteTitle: 'website-title',
      playstore: 'playstore',
      medium: 'medium',
      appstore: 'appstore',
      iosGithub: 'ios-github',
      androidGithub: 'android-github',
      github: 'github'
    }"
    #strings="strings"
  >
    <page-section
      v-if="
        enableAll ||
          (!strings.website && !strings.playstore && !strings.appstore && strings.medium) ||
          ((strings.playstore || strings.appstore || strings.website) &&
            (strings.iosGithub || strings.androidGithub || strings.github))
      "
    >
      <div class="project-header">Learn More</div>
      <b-row>
        <b-col cols="auto">
          <b-row>
            <b-col
              class="connect-icon-container"
              cols="auto"
              v-if="
                (enableAll || strings.website || strings.playstore || strings.appstore) &&
                  strings.iosGithub
              "
            >
              <b-button class="align-content-center" :href="strings.iosGithub">
                <Github class="connect-icon connect-icon-blank" />
                <span class="connect-text">iOS</span>
              </b-button>
            </b-col>
            <b-col
              class="connect-icon-container"
              cols="auto"
              v-if="
                (enableAll || strings.website || strings.playstore || strings.appstore) &&
                  strings.androidGithub
              "
            >
              <b-button class="align-content-center" :href="strings.androidGithub">
                <Github class="connect-icon connect-icon-blank" />
                <span class="connect-text">Android</span>
              </b-button>
            </b-col>
            <b-col
              class="connect-icon-container"
              cols="auto"
              v-if="
                (enableAll || strings.website || strings.playstore || strings.appstore) &&
                  strings.github
              "
            >
              <b-button class="align-content-center" :href="strings.github">
                <Github class="connect-icon connect-icon-blank" />
                <span class="connect-text">GitHub</span>
              </b-button>
            </b-col>
            <b-col class="connect-icon-container" cols="auto" v-if="strings.medium">
              <b-button class="align-content-center" :href="strings.medium">
                <Medium class="connect-icon connect-icon-blank" />
                <span class="connect-text">Medium</span>
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </page-section>
  </strings>
</template>

<script>
import Github from '@/assets/social/github.svg';
import Medium from '@/assets/social/medium.svg';

export default {
  components: {
    Github,
    Medium
  },
  props: {
    projectId: {
      type: String,
      required: true
    },
    enableAll: {
      type: Boolean,
      default: false
    }
  }
};
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
