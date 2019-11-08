<template>
  <page-section
    v-if="
      enableAll ||
        (!Strings.exists(`website`) &&
          !Strings.exists(`playstore`) &&
          !Strings.exists(`appstore`) &&
          Strings.exists(`medium`)) ||
        ((Strings.exists(`playstore`) || Strings.exists(`appstore`) || Strings.exists(`website`)) &&
          (Strings.exists(`ios-github`) ||
            Strings.exists(`android-github`) ||
            Strings.exists(`github`)))
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
              (enableAll ||
                (Strings.exists(`website`) ||
                  Strings.exists(`playstore`) ||
                  Strings.exists(`appstore`))) &&
                Strings.exists(`ios-github`)
            "
          >
            <b-button class="align-content-center" :href="Strings.get(`ios-github`)">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">iOS</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="
              (enableAll ||
                (Strings.exists(`website`) ||
                  Strings.exists(`playstore`) ||
                  Strings.exists(`appstore`))) &&
                Strings.exists(`android-github`)
            "
          >
            <b-button class="align-content-center" :href="Strings.get(`android-github`)">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">Android</span>
            </b-button>
          </b-col>
          <b-col
            class="connect-icon-container"
            cols="auto"
            v-if="
              (enableAll ||
                (Strings.exists(`website`) ||
                  Strings.exists(`playstore`) ||
                  Strings.exists(`appstore`))) &&
                Strings.exists(`github`)
            "
          >
            <b-button class="align-content-center" :href="Strings.get(`github`)">
              <Github class="connect-icon connect-icon-blank" />
              <span class="connect-text">GitHub</span>
            </b-button>
          </b-col>
          <b-col class="connect-icon-container" cols="auto" v-if="Strings.exists(`medium`)">
            <b-button class="align-content-center" :href="Strings.get(`medium`)">
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

import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings';

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
  },
  data() {
    return {
      Strings: new StringsFrontend(`projects.${this.projectId}`, SingleBackend)
    };
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
