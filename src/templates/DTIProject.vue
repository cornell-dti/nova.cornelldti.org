<template>
  <page-background>
    <slot name="header">
      <project-header :projectId="project" />
    </slot>
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <slot name="text-header">
            <b-container fluid>
              <text-hero
                :header="Strings.get('hero.header')"
                :subheader="Strings.get('hero.subheader')"
              />
            </b-container>
          </slot>

          <slot name="features">
            <project-features-list :projectId="project" />
          </slot>

          <slot name="team-members">
            <team-members :projectData="projectData"></team-members>
          </slot>

          <slot name="learn-more">
            <project-learn-more :projectId="project" />
          </slot>
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project" />
  </page-background>
</template>

<script lang="ts">
import Vue from 'vue';

import EventBus from '@/eventbus';
import ProjectFeaturesList from '@/components/ProjectFeaturesList.vue';
import ProjectLearnMore from '@/components/ProjectLearnMore.vue';
import ProjectHeader from '@/components/ProjectHeader.vue';
import TeamMembers from '@/components/TeamMembers.vue';

import { makeStrings } from '../strings/context';
import Strings from '@/strings/strings';

export default Vue.extend({
  props: {
    project: {
      type: String,
      required: false
    }
  },
  components: {
    ProjectFeaturesList,
    ProjectLearnMore,
    ProjectHeader,
    TeamMembers
  },
  data() {
    return {
      currentFeatureDescription: '',
      currentScreenshot: ''
    };
  },
  mounted() {
    EventBus.$emit('set-navbar-light', {});
  },
  computed: {
    Strings(): Strings {
      return makeStrings(this.$context || this.$parent.$context);
    },
    projectData() {
      return {}; // JSON.parse(JSON.stringify(this.Strings.get('')));
    }
  },
  methods: {
    getTeam(team: string) {
      const teamA = this.getMembers()
        .filter(
          member =>
            (typeof member.subteam === 'string' && member.subteam === team) ||
            (Array.isArray(member.otherSubteams) && member.otherSubteams.includes(team))
        )
        .map(obj => ({ info: obj, id: obj.netid }));
      return teamA;
    }
  }
});
</script>

<style lang="scss" scoped>
.project-hero {
  .project-hero-logo {
    margin: 1vw;
  }

  .project-hero-description {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40vw;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .project-hero-text-header {
    font-size: 3rem;
    font-weight: 600;
  }

  .project-hero-header-left {
    padding-bottom: 10vh;
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

.feature-header {
  padding-bottom: 1.25rem;
  font-size: 2.25rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.product {
  max-width: 100%;
  object-fit: contain;
}

.feature-padding {
  margin: 3vh;
}

.visit-btn {
  box-shadow: 0 10px 20px 0 rgba(216, 216, 216, 0.5);
}
</style>
