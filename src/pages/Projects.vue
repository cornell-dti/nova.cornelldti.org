<template>
  <ProjectsPage :strings="Strings" :projects="projects" />
</template>

<page-query>
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
</page-query>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { fromJSON } from '@/strings/json';

import ProjectsPage, { Project } from '@/views/Projects.vue';

import ProjectsJSON from '@/../data/generated/pages/projects.json';

interface ProjectsPage {
  projects: {
    edges: { node: Project }[];
  };
}

@Component({
  metaInfo: {
    title: 'Projects'
  },
  components: {
    ProjectsPage
  }
})
class Projects extends Vue {
  Strings = fromJSON('projects', ProjectsJSON);

  get projects(): Project[] {
    const projects = (this.$page as ProjectsPage).projects.edges.map(e => e.node);
    return projects;
  }
}

export default Projects;
</script>
