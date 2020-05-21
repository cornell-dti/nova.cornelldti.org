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

<page-query>
query DTIProjects ($path: String!, $teamId: String!) {
  dtiProject: dtiProject(path: $path) {
      id
      active
      teamId
      card
      name
      features { title image description }
      subheader
      header
      hero {
          header
          subheader
          image
      }
      appstore
      playstore
      ios_github
      android_github
      heroStartingColor
      heroEndingColor
      heroUseDarkText
      website
      website_title
  }

  currentMembers: allMember(filter: { subteam: { in: [$teamId] }}) {
    edges {
      node {
        netid
        image       
        firstName
        lastName
        name
        graduation
        major
        linkedin
        github
        hometown
        about
        subteam
        otherSubteams
        website
        roleId
        roleDescription
      }
    }
  }

  pastMembers: allMember(filter: { otherSubteams: { contains: [$teamId] }}) {
    edges {
      node {
        netid
        image       
        firstName
        lastName
        name
        graduation
        major
        linkedin
        github
        hometown
        about
        subteam
        otherSubteams
        website
        roleId
        roleDescription
      }
    }
  }
}
</page-query>

<script lang="ts">
import Vue from 'vue';

import EventBus from '../eventbus';
import ProjectFeaturesList from '../components/ProjectFeaturesList.vue';
import ProjectLearnMore from '../components/ProjectLearnMore.vue';
import ProjectHeader from '../components/ProjectHeader.vue';
import TeamMembers from '../components/TeamMembers.vue';

import { Member, Project } from '../shared';

type EdgeNode<T> = { edges: { node: T }[] };

interface DTIProjectPage {
  pastMembers: EdgeNode<Member>;
  currentMembers: EdgeNode<Member>;
  dtiProject: Project;
}

export default Vue.extend({
  components: {
    ProjectFeaturesList,
    ProjectLearnMore,
    ProjectHeader,
    TeamMembers
  },
  metaInfo: {
    title: 'Projects'
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
      const project = (this.$page as DTIProjectPage).dtiProject;

      return project;
    },
    pastMembers(): Member[] {
      return (this.$page as DTIProjectPage).pastMembers.edges.map(e => e.node);
    },
    currentMembers(): Member[] {
      return (this.$page as DTIProjectPage).currentMembers.edges.map(e => e.node);
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
