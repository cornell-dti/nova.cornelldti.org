<template>
  <page-section v-if="enableAll || ((!Strings.exists(`website`, `projects.${projectId}`) && !Strings.exists(`playstore`, `projects.${projectId}`) && !Strings.exists(`appstore`, `projects.${projectId}`)) && (Strings.exists(`medium`, `projects.${projectId}`))) || (((Strings.exists(`playstore`, `projects.${projectId}`) || Strings.exists(`appstore`, `projects.${projectId}`) || Strings.exists(`website`, `projects.${projectId}`)) && (Strings.exists(`ios-github`, `projects.${projectId}`) || Strings.exists(`android-github`, `projects.${projectId}`) || Strings.exists(`github`, `projects.${projectId}`))))">
    <div class="project-header">Learn More</div>
    <b-row>
      <b-col cols="auto">
        <b-row>
          <b-col class="connect-icon-container" cols="auto" v-if="enableAll || (Strings.exists(`website`, `projects.${projectId}`) || Strings.exists(`playstore`, `projects.${projectId}`) || Strings.exists(`appstore`, `projects.${projectId}`)) && Strings.exists(`ios-github`, `projects.${projectId}`)">

            <a :href="Strings.get(`ios-github`, `projects.${projectId}`)">
              <Github class="connect-icon connect-icon-blank" />
            </a>
            iOS

          </b-col>
          <b-col class="connect-icon-container" cols="auto" v-if="enableAll || (Strings.exists(`website`, `projects.${projectId}`) || Strings.exists(`playstore`, `projects.${projectId}`) || Strings.exists(`appstore`, `projects.${projectId}`)) && Strings.exists(`android-github`, `projects.${projectId}`)">

            <a :href="Strings.get(`android-github`, `projects.${projectId}`)">
              <Github class="connect-icon connect-icon-blank" />
            </a>
            Android
          </b-col>
          <b-col class="connect-icon-container" cols="auto" v-if="enableAll || (Strings.exists(`website`, `projects.${projectId}`) || Strings.exists(`playstore`, `projects.${projectId}`) || Strings.exists(`appstore`, `projects.${projectId}`)) && Strings.exists(`github`, `projects.${projectId}`)">

            <a :href="Strings.get(`github`, `projects.${projectId}`)">
              <Github class="connect-icon connect-icon-blank" />
            </a>
            GitHub
          </b-col>
          <b-col class="connect-icon-container" cols="auto" v-if="Strings.exists(`medium`, `projects.${projectId}`)">

            <a :href="Strings.get(`medium`, `projects.${projectId}`)">
              <Medium class="connect-icon connect-icon-blank" />
            </a>

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

.connect-icon {
  width: 2rem;
  height: 2rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;

  @media (max-width: 767px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  &.connect-icon-blank {
    fill: #4a4a4a !important;

    path {
      fill: #4a4a4a !important;
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
