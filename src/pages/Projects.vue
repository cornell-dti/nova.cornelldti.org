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

import ProjectsPage from '@/views/Projects.vue';

import ProjectsJSON from '@/../data/generated/pages/projects.json';

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

  get projects() {
    const projects = this.$page.projects.edges.map((e: { node: any }) => e.node);
    return projects;
  }
}

export default Projects;
</script>
