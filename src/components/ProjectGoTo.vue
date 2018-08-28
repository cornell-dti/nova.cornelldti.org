<template>
  <b-row>
    <b-col cols="auto">
      <b-row>
        <b-col cols="auto" v-if="Strings.exists(`website`, `projects.${projectId}`)">
          <b-button :href="Strings.get(`website`, `projects.${projectId}`)">
            {{`Go to ${(Strings.get(`website-title`, `projects.${projectId}`) || Strings.get(`website`,
            `projects.${projectId}`))}`}}
          </b-button>
        </b-col>

        <b-col cols="auto" v-if="Strings.exists(`playstore`, `projects.${projectId}`)">
          <store-badge store="playstore" :url="Strings.get(`playstore`, `projects.${projectId}`)"
          />
        </b-col>
        <b-col cols="auto" v-if="Strings.exists(`appstore`, `projects.${projectId}`)">
          <store-badge store="appstore" :url="Strings.get(`appstore`, `projects.${projectId}`)"
          />
        </b-col>
        <b-col class="connect-icon-container" cols="auto" v-if="Strings.exists(`ios-github`, `projects.${projectId}`) && !Strings.exists(`appstore`, `projects.${projectId}`) && !Strings.exists(`playstore`, `projects.${projectId}`) && !Strings.exists(`website`, `projects.${projectId}`)">

          <a :href="Strings.get(`ios-github`, `projects.${projectId}`)">
            <Github class="connect-icon connect-icon-blank" />
          </a>
          iOS

        </b-col>
        <b-col class="connect-icon-container" cols="auto" v-if="Strings.exists(`android-github`, `projects.${projectId}`) && !Strings.exists(`appstore`, `projects.${projectId}`) && !Strings.exists(`playstore`, `projects.${projectId}`) && !Strings.exists(`website`, `projects.${projectId}`)">
          <a :href="Strings.get(`android-github`, `projects.${projectId}`)">
            <Github class="connect-icon connect-icon-blank" />
          </a>
          Android
        </b-col>
        <b-col class="connect-icon-container" cols="auto" v-if="Strings.exists(`github`, `projects.${projectId}`) && !Strings.exists(`appstore`, `projects.${projectId}`) && !Strings.exists(`playstore`, `projects.${projectId}`) && !Strings.exists(`website`, `projects.${projectId}`)">
          <a :href="Strings.get(`github`, `projects.${projectId}`)">
            <Github class="connect-icon connect-icon-blank" />
          </a>
          GitHub
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style lang="scss" scoped>
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
</style>


<script>
import Github from '@/assets/social/github.svg';

export default {
  components: {
    Github
  },
  props: {
    projectId: {
      type: String,
      required: true
    }
  }
};
</script>
