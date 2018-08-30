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

          <b-button class="align-content-center" :href="Strings.get(`ios-github`, `projects.${projectId}`)">
            <Github class="connect-icon connect-icon-blank" />
            <span class="connect-text">iOS</span>
          </b-button>
        </b-col>
        <b-col class="connect-icon-container" cols="auto" v-if="Strings.exists(`android-github`, `projects.${projectId}`) && !Strings.exists(`appstore`, `projects.${projectId}`) && !Strings.exists(`playstore`, `projects.${projectId}`) && !Strings.exists(`website`, `projects.${projectId}`)">
          <b-button class="align-content-center" :href="Strings.get(`android-github`, `projects.${projectId}`)">
            <Github class="connect-icon connect-icon-blank" />
            <span class="connect-text">Android</span>
          </b-button>
        </b-col>
        <b-col class="connect-icon-container" cols="auto" v-if="Strings.exists(`github`, `projects.${projectId}`) && !Strings.exists(`appstore`, `projects.${projectId}`) && !Strings.exists(`playstore`, `projects.${projectId}`) && !Strings.exists(`website`, `projects.${projectId}`)">
          <b-button class="align-content-center" :href="Strings.get(`github`, `projects.${projectId}`)">
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
