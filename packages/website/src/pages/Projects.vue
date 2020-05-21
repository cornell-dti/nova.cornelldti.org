<template>
  <projects-view :content="content" :projects="projects" />
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
import { Component } from 'vue-property-decorator';

import ProjectsView from '../views/Projects.vue';

import Page from '../page';

import { ProjectsContent } from '../content';
import { Member, Project } from '../shared';

import json from '../../data/pages/projects.json';

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
    ProjectsView
  }
})
class Projects extends Page<ProjectsContent>(json) {

  get members(): Member[] {
    const members = (this.$static as ProjectsPage).members.edges.map(e => e.node);
    return members;
  }

  get projects(): Project[] {
    const projects = (this.$static as ProjectsPage).projects.edges.map(e => e.node);
    return projects;
  }
}

export default Projects;
</script>
