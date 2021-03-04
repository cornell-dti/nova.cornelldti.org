<template>
  <page-background>
    <slot name="header">
      <project-header :project="project" />
    </slot>
    <b-container fluid>
      <b-row align-h="center">
        <b-col md="10" sm="12">
          <slot name="text-header">
            <b-container fluid>
              <text-hero
                v-if="project"
                :header="project.hero.header"
                :subheader="project.hero.subheader"
              />
            </b-container>
          </slot>

          <slot name="features">
            <project-features-list :project="project" />
          </slot>

          <slot name="team-members">
            <team-members
              :past="pastMembers"
              :current="currentMembers"
              :project="project"
            ></team-members>
          </slot>

          <slot name="learn-more">
            <project-learn-more :project="project" />
          </slot>
        </b-col>
      </b-row>
    </b-container>

    <dti-footer page="project" />
  </page-background>
</template>

<script lang="ts">
import Vue from 'vue';

import EventBus from '../eventbus';
import ProjectFeaturesList from './ProjectFeaturesList.vue';
import ProjectLearnMore from './ProjectLearnMore.vue';
import ProjectHeader from './ProjectHeader.vue';
import TeamMembers from './TeamMembers.vue';
import allProjects from '../../data/projects/all-projects.json';
import allMembers from '../../data/members/all-members.json';
import { Member, Project } from '../shared';

export default Vue.extend({
  components: {
    ProjectFeaturesList,
    ProjectLearnMore,
    ProjectHeader,
    TeamMembers
  },
  props: {
    teamId: { type: String, required: true }
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
    project(): Project {
      const project = allProjects.find(it => it.teamId === this.teamId);
      if (project == null) throw new Error();
      return project;
    },
    pastMembers(): Member[] {
      return allMembers.filter(member =>
        (member.otherSubteams || []).includes(this.project.teamId)
      );
    },
    currentMembers(): Member[] {
      return allMembers.filter(member => member.subteam === this.project.teamId);
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
