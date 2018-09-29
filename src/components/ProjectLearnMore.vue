<template>
  <page-section
    v-if="enableAll
      || (
        (
          !Strings.exists(`website`, `projects.${projectId}`)
          && !Strings.exists(`playstore`, `projects.${projectId}`)
          && !Strings.exists(`appstore`, `projects.${projectId}`)
        ) && (
          Strings.exists(`medium`, `projects.${projectId}`)
        )
      ) || (
        (
          (
            Strings.exists(`playstore`, `projects.${projectId}`)
            || Strings.exists(`appstore`, `projects.${projectId}`)
            || Strings.exists(`website`, `projects.${projectId}`)
          ) && (
            Strings.exists(`ios-github`, `projects.${projectId}`)
            || Strings.exists(`android-github`, `projects.${projectId}`)
            || Strings.exists(`github`, `projects.${projectId}`)
          )
        )
      )">
    <div class="project-header">Learn More</div>
    <b-row>
      <b-col cols="auto">
        <b-row>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="(enableAll
              || (
                Strings.exists(`website`, `projects.${projectId}`)
                || Strings.exists(`playstore`, `projects.${projectId}`)
                || Strings.exists(`appstore`, `projects.${projectId}`)
              )
            ) && Strings.exists(`ios-github`, `projects.${projectId}`)">
            <b-button
              class="align-content-center"
              :href="Strings.get(`ios-github`, `projects.${projectId}`)">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">iOS</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="(enableAll
              || (
                Strings.exists(`website`, `projects.${projectId}`)
                || Strings.exists(`playstore`, `projects.${projectId}`)
                || Strings.exists(`appstore`, `projects.${projectId}`)
              )
            ) && Strings.exists(`android-github`, `projects.${projectId}`)">
            <b-button class="align-content-center" :href="Strings.get(`android-github`, `projects.${projectId}`)">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">Android</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="(enableAll ||
              (Strings.exists(`website`, `projects.${projectId}`)
              || Strings.exists(`playstore`, `projects.${projectId}`)
              || Strings.exists(`appstore`, `projects.${projectId}`))
            ) && Strings.exists(`github`, `projects.${projectId}`)">
            <b-button class="align-content-center" :href="Strings.get(`github`, `projects.${projectId}`)">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">GitHub</span>
            </b-button>
          </b-col>
          <b-col class="connect-icon-container" cols="auto" v-if="Strings.exists(`medium`, `projects.${projectId}`)">
            <b-button class="align-content-center" :href="Strings.get(`medium`, `projects.${projectId}`)">
              <Medium class="connect-icon connect-icon-blank" />
              <span class="connect-text">Medium</span>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </page-section>
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
