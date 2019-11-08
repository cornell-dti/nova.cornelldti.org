<template>
  <b-row>
    <b-col cols="auto">
      <b-row>
        <b-col cols="auto" v-if="Strings.exists(`website`)">
          <b-button :href="Strings.get(`website`)">
            {{`Go to ${(Strings.get(`website-title`) || Strings.get(`website`))}`}}
          </b-button>
        </b-col>

        <b-col cols="auto" v-if="Strings.exists(`playstore`)">
          <store-badge store="playstore" :url="Strings.get(`playstore`)"/>
        </b-col>
        <b-col cols="auto" v-if="Strings.exists(`appstore`)">
          <store-badge store="appstore" :url="Strings.get(`appstore`)"/>
        </b-col>
        <b-col
          class="connect-icon-container"
          cols="auto"
          v-if="
        Strings.exists(`ios-github`)
        && !Strings.exists(`appstore`)
        && !Strings.exists(`playstore`)
        && !Strings.exists(`website`)
        "
        >
          <b-button
            class="align-content-center"
            :href="Strings.get(`ios-github`)"
          >
            <Github class="connect-icon connect-icon-blank" />
            <span class="connect-text">iOS</span>
          </b-button>
        </b-col>
        <b-col
          class="connect-icon-container"
          cols="auto"
          v-if="
        Strings.exists(`android-github`)
        && !Strings.exists(`appstore`)
        && !Strings.exists(`playstore`)
        && !Strings.exists(`website`)
        "
        >
          <b-button
            class="align-content-center"
            :href="Strings.get(`android-github`)"
          >
            <Github class="connect-icon connect-icon-blank" />
            <span class="connect-text">Android</span>
          </b-button>
        </b-col>
        <b-col
          class="connect-icon-container"
          cols="auto"
          v-if="
        Strings.exists(`github`)
        && !Strings.exists(`appstore`)
        && !Strings.exists(`playstore`)
        && !Strings.exists(`website`)
        "
        >
          <b-button
            class="align-content-center"
            :href="Strings.get(`github`)"
          >
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

import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings';

export default {
  components: {
    Github
  },
  props: {
    projectId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      Strings: new StringsFrontend(`projects.${this.projectId}`, SingleBackend)
    };
  }
};
</script>
