<template>
  <projects-view :projects="projects" />
</template>

<static-query>
query DTIProjects {
  projects: allDtiProject {
    edges {
      node {
           id
           active
           teamId
           card
      }
    }
  }
}
</static-query>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ProjectsView from '../views/Projects.vue';

import { Member, Project } from '../shared';

interface ProjectsPage {
  projects: {
    edges: { node: Project }[];
  };
  members: {
    edges: { node: Member }[];
  };
}

@Component({
  metaInfo: { title: 'Projects' },
  components: { ProjectsView }
})
export default class Projects extends Vue {
  get projects(): Project[] {
    const projects = (this.$static as ProjectsPage).projects.edges.map(e => e.node);
    return projects;
  }
}
</script>
