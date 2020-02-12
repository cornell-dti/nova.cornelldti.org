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

import { Member, Project } from '@/shared';

interface ProjectsPage {
  projects: {
    edges: { node: Project }[];
  };
  members: {
    edges: { node: Member }[];
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

  get members(): Member[] {
    const members = (this.$page as ProjectsPage).members.edges.map(e => e.node);
    return members;
  }

  get projects(): Project[] {
    const projects = (this.$page as ProjectsPage).projects.edges.map(e => e.node);
    return projects;
  }
}

export default Projects;
</script>
